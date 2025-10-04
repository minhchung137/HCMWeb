"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import { Send, CheckCircle } from "lucide-react"
import { db } from "@/lib/firebase"
import { collection, addDoc, onSnapshot, serverTimestamp } from "firebase/firestore"
import emailjs from "emailjs-com"

interface FeedbackData {
  name: string
  email: string
  subject: string
  message: string
  [key: string]: string
}

export default function FeedbackPage() {
  const [formData, setFormData] = useState<FeedbackData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [questions, setQuestions] = useState<FeedbackData[]>([])

  useEffect(() => {
  const unsub = onSnapshot(collection(db, "questions"), (snapshot) => {
    const data = snapshot.docs.map((doc) => doc.data() as FeedbackData)
    setQuestions(data)
  })
  return () => unsub()
}, [])


  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault()

    // 1. Lưu vào Firestore
   await addDoc(collection(db, "questions"), {
      ...formData,
      createdAt: serverTimestamp(),
    })

    // 2. Gửi Email qua EmailJS
    try {
     await emailjs.send(
        "service_emboi81", // service ID
        "template_7vk57hg", // template ID
        formData,
        "LN0JIkWeBEfFqoSZY" // public key
      )
      console.log("✅ Email sent")
    } catch (err) {
      console.error("❌ Email error:", err)
    }

    // Mock form submission
    console.log("[v0] Feedback submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen relative z-10">
      <Navbar />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
              Phản hồi
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Câu hỏi của bạn giúp chúng tôi cải thiện nền tảng học tập
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-card rounded-2xl p-12 border border-border text-center space-y-6">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">Cảm ơn bạn!</h2>
              <p className="text-muted-foreground">Phản hồi của bạn đã được gửi thành công.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Tên nhóm
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Nhóm A"
                />
              </div>

              <div className="space-y-2" style={{ display: "none" }}>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="email@example.com"
                />
              </div>

              <div className="space-y-2" style={{ display: "none" }}>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                  Chủ đề
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Chọn chủ đề</option>
                  <option value="content">Nội dung học tập</option>
                  <option value="technical">Vấn đề kỹ thuật</option>
                  <option value="suggestion">Đề xuất cải tiến</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Câu hỏi
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Câu hỏi cho đề tài của bạn..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Gửi câu hỏi
              </button>
            </form>
          )}

          {/* Hiển thị realtime câu hỏi */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold">Câu hỏi đã gửi:</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              {questions.map((q, i) => (
                <li key={i}>
                  <strong>{q.name}</strong>: {q.message}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </main>
  )
}
