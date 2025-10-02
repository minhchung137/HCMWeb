"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { Brain, RefreshCw, CheckCircle } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

const initialQuestions: Question[] = [
  {
    id: 1,
    question: "Theo Hồ Chí Minh, văn hóa là gì?",
    options: [
      "Chỉ là nghệ thuật và văn học",
      "Nền tảng tinh thần của xã hội",
      "Chỉ là giáo dục",
      "Chỉ là truyền thống dân tộc",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Bốn đức tính cơ bản của người cách mạng theo Hồ Chí Minh là gì?",
    options: ["Cần, Kiệm, Liêm, Chính", "Nhân, Nghĩa, Lễ, Trí", "Trung, Hiếu, Tín, Nghĩa", "Dũng, Cảm, Quyết, Liệt"],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: "Con người mới trong tư tưởng Hồ Chí Minh cần có những yếu tố nào?",
    options: ["Chỉ cần có đạo đức tốt", "Chỉ cần có tri thức cao", "Đạo đức, tri thức và năng lực", "Chỉ cần yêu nước"],
    correctAnswer: 2,
  },
]

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
  }

  const handleGenerateQuestions = async () => {
    setIsGenerating(true)

    // Mock AI API call to generate questions
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const newQuestions: Question[] = [
      {
        id: 4,
        question: "Văn hóa mới theo Hồ Chí Minh có những đặc điểm gì?",
        options: [
          "Chỉ mang tính dân tộc",
          "Dân tộc, khoa học và đại chúng",
          "Chỉ học tập phương Tây",
          "Chỉ giữ gìn truyền thống",
        ],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: "Theo Hồ Chí Minh, đạo đức cách mạng gắn liền với điều gì?",
        options: [
          "Chỉ với lợi ích cá nhân",
          "Với trách nhiệm với Tổ quốc và nhân dân",
          "Chỉ với quyền lợi của Đảng",
          "Với lợi ích gia đình",
        ],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Mục tiêu xây dựng con người mới là gì?",
        options: [
          "Chỉ phục vụ kinh tế",
          "Xây dựng xã hội công bằng, dân chủ, văn minh",
          "Chỉ để tăng dân số",
          "Chỉ để có người lao động",
        ],
        correctAnswer: 1,
      },
    ]

    setQuestions(newQuestions)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setIsGenerating(false)
  }

  if (showResult) {
    return (
      <main className="min-h-screen relative z-10">
        <Navbar />

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-accent" />
            </div>

            <h1 className="font-serif text-4xl font-bold text-foreground">Hoàn thành!</h1>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="text-6xl font-bold text-accent mb-4">
                {score}/{questions.length}
              </div>
              <p className="text-lg text-muted-foreground">
                Bạn đã trả lời đúng {score} trên {questions.length} câu hỏi
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Làm lại
              </button>
              <button
                onClick={handleGenerateQuestions}
                disabled={isGenerating}
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Brain className="w-5 h-5" />
                {isGenerating ? "Đang tạo..." : "Tạo câu hỏi mới (AI)"}
              </button>
            </div>
          </div>
        </section>
      </main>
    )
  }

  const question = questions[currentQuestion]

  return (
    <main className="min-h-screen relative z-10">
      <Navbar />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
              Kiểm tra kiến thức
            </h1>
            <p className="text-lg text-muted-foreground">Chương 6: Văn hóa, Đạo đức, Con người</p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="text-sm text-muted-foreground">
                Câu {currentQuestion + 1} / {questions.length}
              </div>
              <button
                onClick={handleGenerateQuestions}
                disabled={isGenerating}
                className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium flex items-center gap-2 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isGenerating ? "animate-spin" : ""}`} />
                {isGenerating ? "Đang tạo..." : "Tạo câu hỏi mới"}
              </button>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border space-y-8">
            <h2 className="font-serif text-2xl font-semibold text-foreground leading-relaxed">{question.question}</h2>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selectedAnswer === index
                      ? "border-accent bg-accent/10"
                      : "border-border hover:border-accent/50 hover:bg-secondary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === index ? "border-accent bg-accent" : "border-border"
                      }`}
                    >
                      {selectedAnswer === index && <div className="w-3 h-3 bg-white rounded-full" />}
                    </div>
                    <span className="text-foreground">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion < questions.length - 1 ? "Câu tiếp theo" : "Hoàn thành"}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
