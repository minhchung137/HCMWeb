// app/api/ask/route.js
import fs from "fs";
import path from "path";
import mammoth from "mammoth";

// ---- helper text functions ----
function normalizeText(s){
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]+/gu, ' ')
    .replace(/\s+/g,' ')
    .trim();
}
function tokenize(s){ return normalizeText(s).split(' ').filter(Boolean); }
function tfMap(tokens){
  const m = new Map();
  for(const t of tokens) m.set(t, (m.get(t)||0)+1);
  return m;
}
function dotProduct(m1,m2){
  let sum=0;
  for(const [k,v] of m1) if(m2.has(k)) sum += v * m2.get(k);
  return sum;
}
function magnitude(m){
  let s=0; for(const v of m.values()) s+=v*v; return Math.sqrt(s);
}
function cosineSim(m1,m2){
  const denom = magnitude(m1)*magnitude(m2);
  if(denom===0) return 0;
  return dotProduct(m1,m2)/denom;
}

// chunking: by characters with overlap
function chunkText(text, chunkSize=1200, overlap=200){
  const paras = text.split(/\n{1,}/).map(p=>p.trim()).filter(Boolean);
  const chunks = [];
  for(const p of paras){
    if(p.length <= chunkSize){ chunks.push(p); continue; }
    let i=0;
    while(i < p.length){
      const end = Math.min(p.length, i+chunkSize);
      const piece = p.slice(i,end).trim();
      if(piece) chunks.push(piece);
      i += (chunkSize - overlap);
    }
  }
  return chunks;
}

// load and prepare chunks (cached in memory)
let CHUNKS = null;
async function loadAndIndex() {
  if (CHUNKS) return CHUNKS;
  const docPath = path.join(process.cwd(), "public", "giao-trinh-hcm.docx");
  if(!fs.existsSync(docPath)){
    throw new Error("File giao-trinh-hcm.docx không tồn tại trong public/. Vui lòng đặt file vào public/giao-trinh-hcm.docx");
  }
  const buffer = fs.readFileSync(docPath);
  const { value } = await mammoth.extractRawText({ buffer });
  const text = value || "";
  const rawChunks = chunkText(text, 1200, 200);
  CHUNKS = rawChunks.map(c => {
    const tokens = tokenize(c);
    return { text: c, tf: tfMap(tokens) };
  });
  return CHUNKS;
}

// POST handler
export async function POST(req) {
  try {
    const body = await req.json();
    const question = body?.question || "";
    if (!question) {
      return new Response(JSON.stringify({ error: "Thiếu question trong body." }), { status: 400 });
    }

    const chunks = await loadAndIndex();

    // compute similarity
    const qtf = tfMap(tokenize(question));
    const scored = chunks.map(c => ({ text: c.text, score: cosineSim(qtf, c.tf) }));
    scored.sort((a,b)=>b.score - a.score);

    const topK = scored.slice(0,5).filter(s=>s.score>0);
    // if no matches, return mild message
    if(topK.length === 0){
      return new Response(JSON.stringify({ answer: null, reason: "no_match", message: "Không tìm thấy đoạn có liên quan trong tài liệu.", evidence: [] }), { status: 200 });
    }

    // If you have an OpenAI API key (set as env OPENAI_API_KEY), call responses API to synthesize final answer
    const OPENAI_KEY = process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    if (OPENAI_KEY) {
      // build prompt: include top chunks as context
      const joined = topK.map((t,i)=>`--- đoạn ${i+1} ---\n${t.text}`).join("\n\n");
      const prompt = `
Bạn là trợ lý giúp trả lời câu hỏi dựa vào các đoạn dữ liệu được cung cấp dưới đây.
Không bịa đặt thông tin. Nếu câu hỏi không có trong dữ liệu, hãy trả lời: "Câu hỏi không có trong tài liệu được cung cấp. Lấy thông tin từ internet." rồi sau đó bạn trả lời những thông tin mà bạn thu thập được từ internet
Đoạn dữ liệu:
${joined}

Câu hỏi: ${question}

Hãy trả lời đầy đủ, chi tiết, có trích dẫn nếu có.
      `;

      // call OpenAI Responses API
      const resp = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          input: prompt,
          // optionally: max tokens, temperature
          temperature: 0.2,
          max_output_tokens: 800
        })
      });

      const json = await resp.json();
      // try to extract text
      const answerText = json?.output?.[0]?.content?.[0]?.text ?? null;
      return new Response(JSON.stringify({ answer: answerText, raw: json, evidence: topK.map(t=>t.text) }), { status: 200 });
    } else {
      // No OPENAI_KEY: return the top chunks as evidence (retrieval-only)
      return new Response(JSON.stringify({ answer: null, reason: "no_api_key", message: "Không có API key. Đây là các đoạn tìm được:", evidence: topK.map(t=>t.text) }), { status: 200 });
    }

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message || String(err) }), { status: 500 });
  }
}
