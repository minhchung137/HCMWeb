"use client"
import { useState } from "react";
import Navbar from "@/components/navbar"

export default function QnAPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAsk = async () => {
    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      if (data.answer) setAnswer(data.answer);
      else if (data.message) setAnswer(data.message);
      else setError("Không nhận được phản hồi hợp lệ.");
    } catch (err) {
      setError("Lỗi khi gửi yêu cầu tới server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative z-10">
            <Navbar />
    <div className="max-w-2xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-3xl font-bold">🧠 Hỏi đáp từ tài liệu</h1>

      <textarea
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
        rows={4}
        placeholder="Nhập câu hỏi của bạn..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={handleAsk}
        disabled={loading || !question.trim()}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Đang tìm câu trả lời..." : "Gửi câu hỏi"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {answer && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold mb-2">💬 Trả lời:</p>
          {/* <p>{answer}</p> */}
          <p style={{ whiteSpace: "pre-line" }}>{answer}</p>
        </div>
      )}
    </div>
    </main>
  );
}
