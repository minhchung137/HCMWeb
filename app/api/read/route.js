import { NextResponse } from "next/server";
import mammoth from "mammoth";
import fs from "fs";

export async function GET() {
  const filePath = "public/giao-trinh-hcm.docx"; // read file trong public/
  const buffer = fs.readFileSync(filePath);

  const result = await mammoth.extractRawText({ buffer });
  const text = result.value;

  return NextResponse.json({ text });
}
