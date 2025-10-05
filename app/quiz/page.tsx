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
  {
    id: 4,
    question: "Hồ Chí Minh khẳng định đạo đức là gì của người cách mạng?",
    options: [
      "Một phẩm chất quan trọng bổ sung cho tài năng", 
      "Công cụ lãnh đạo lâu dài để điều hành xã hội", 
      "Tiêu chí đánh giá cuối cùng mà quần chúng dùng để nhìn nhận cán bộ",
      "Gốc rễ, nền tảng hình thành nhân cách"
    ],
    correctAnswer: 3,
  },
  {
    id: 5,
    question: "Câu nói: “Cũng như sông thì có nguồn, cây thì có gốc…” dùng để nhấn mạnh điều gì?",
    options: [
      "Đạo đức là một phẩm chất tự nhiên bẩm sinh của con người", 
      "Đạo đức chỉ là điều kiện cần, chưa đủ cho lãnh đạo", 
      "Đạo đức là cội nguồn, nền tảng của cách mạng", 
      "Đạo đức và tài năng là hai yếu tố độc lập, không liên hệ"
    ],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: "“Có tài mà không có đức là người vô dụng” nhấn mạnh mối quan hệ nào?",
    options: [
      "Tài năng quan trọng hơn đạo đức", 
      "Đức và tài có thể tách rời nhau trong thực tế", 
      "Tài năng có thể thay thế vai trò của đạo đức",
      "Đức giữ vai trò định hướng, tài là phương tiện"
    ],
    correctAnswer: 3,
  },
  {
    id: 7,
    question: "Nội dung “cần, kiệm, liêm, chính, chí công vô tư” phản ánh điều gì?",
    options: [
      "Quy tắc ứng xử chủ yếu trong gia đình truyền thống", 
      "Giáo lý hành chính/quan liêu trong hoạt động nhà nước", 
      "Cốt lõi của đạo đức cách mạng",
      "Chuẩn mực sống cá nhân tách rời nhiệm vụ chính trị"
    ],
    correctAnswer: 2,
  },
  {
    id: 8,
    question: "Nguyên tắc quan trọng nhất trong xây dựng đạo đức cách mạng là gì?",
    options: [
      "Học tập lý luận chính trị nghiêm túc", 
      "Chấp hành mệnh lệnh cấp trên tuyệt đối", 
      "Kết hợp giữa học và hành (học rồi mới làm)",
      "Nói đi đôi với làm, nêu gương"
    ],
    correctAnswer: 3,
  },
  {
    id: 9,
    question: "Vì sao Hồ Chí Minh coi tu dưỡng đạo đức phải diễn ra suốt đời?",
    options: [
      "Vì đạo đức chỉ cần thiết trong tuổi trẻ và khi bắt đầu công tác", 
      "Vì rèn luyện đạo đức chỉ cần một giai đoạn cơ bản là đủ", 
      "Vì đạo đức là vốn có, không cần học tập nhiều",
      "Vì con người dễ bị cám dỗ, đạo đức không ổn định nếu không rèn luyện"
    ],
    correctAnswer: 3,
  },
  {
    id: 10,
    question: "Tại sao Hồ Chí Minh coi “cần, kiệm, liêm, chính” là nền tảng của nhân cách cán bộ?",
    options: [
      "Vì nó giúp cán bộ tích lũy tài sản cá nhân ổn định", 
      "Vì nó có thể thay thế mọi phẩm chất đạo đức khác", 
      "Vì nó định hình tác phong làm việc trong sạch, hiệu quả, đúng đắn",
      "Vì nó chỉ cần áp dụng ở cấp lãnh đạo cao là đủ"
    ],
    correctAnswer: 2,
  },
  {
    id: 11,
    question: "Nguyên tắc “nói đi đôi với làm” có tác dụng gì?",
    options: [
      "Giúp cán bộ nói ít, làm nhiều hơn mà không cần giải thích", 
      "Giúp cán bộ né tránh trách nhiệm khi sai sót", 
      "Chỉ là công cụ tuyên truyền để tập hợp nhân dân",
      "Tạo sự tin tưởng, làm gương cho quần chúng", 
    ],
    correctAnswer: 3,
  },
  {
    id: 12,
    question: "Mối quan hệ giữa “đức” và “tài” theo Hồ Chí Minh là gì?",
    options: [
      "Đức định hướng cho tài, tài phát huy trên nền tảng đức", 
      "Tài có thể thay thế đức trong một số tình huống cần thiết", 
      "Đức chỉ cần khi không có tài, còn nếu có tài thì không cần đức", 
      "Tài và đức là hai yếu tố hoàn toàn độc lập với nhau"
    ],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "Đạo đức cách mạng giúp cán bộ phát huy tài năng thế nào?",
    options: [
      "Định hướng sử dụng tài năng vì lợi ích chung", 
      "Giúp cán bộ che giấu tài năng để giữ bình an", 
      "Giúp cán bộ dùng tài năng để thu lợi cá nhân hiệu quả hơn", 
      "Khi có đạo đức, cán bộ sẽ tự kiêu và không cần trau dồi thêm"
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: "Nếu cán bộ có tài nhưng thiếu đạo đức, hậu quả dễ dẫn đến là gì?",
    options: [
      "Lạm quyền, tham nhũng, làm mất niềm tin của nhân dân", 
      "Được quần chúng tin tưởng hơn vì kết quả công việc", 
      "Hoàn thành nhiệm vụ tốt hơn do tận dụng mọi phương tiện", 
      "Trở thành hình mẫu cán bộ ưu tú được nể phục rộng rãi"
    ],
    correctAnswer: 0,
  },
  {
    id: 15,
    question: "Vì sao đạo đức cách mạng được coi là động lực phát huy tài năng?",
    options: [
      "Vì đạo đức có thể thay thế hoàn toàn năng lực chuyên môn", 
      "Vì giúp tài năng phục vụ đúng mục tiêu, tránh lệch lạc", 
      "Vì tài năng không cần rèn luyện nếu có đạo đức", 
      "Vì chỉ người có đạo đức mới có năng lực thực sự"
    ],
    correctAnswer: 1,
  },
  {
    id: 16,
    question: "Để giữ uy tín trước nhân dân, cán bộ cần làm gì?",
    options: [
      "Sống trong sạch, nêu gương, gắn bó với nhân dân", 
      "Chỉ chú tâm hoàn thành nhiệm vụ chuyên môn, không cần quan hệ dân", 
      "Tập trung vun vén lợi ích cá nhân trước nhiệm vụ công", 
      "Tận dụng quyền lực để mở rộng tầm ảnh hưởng riêng"
    ],
    correctAnswer: 0,
  }
]

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [userAnswers, setUserAnswers] = useState<{ questionId: number; selected: number | null; correctIndex: number; isCorrect: boolean }[]>([])

  const handleAnswer = (answerIndex: number) => {
    if (showAnswer) return
    setSelectedAnswer(answerIndex)
  }

  const handleNext = () => {
    const correctIndex = questions[currentQuestion].correctAnswer
    const isCorrect = selectedAnswer !== null && selectedAnswer === correctIndex

    setUserAnswers(prev => [
      ...prev,
      {
        questionId: questions[currentQuestion].id,
        selected: selectedAnswer,
        correctIndex,
        isCorrect,
      },
    ])

    if (isCorrect) setScore(score + 1)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowAnswer(false)
    } else {
      setShowResult(true)
    }
  }

  const handleShowAnswer = () => {
    setShowAnswer(true)
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setShowAnswer(false)
    setUserAnswers([])
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
          <div className="max-w-4xl mx-auto text-center space-y-8">
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
                style={{display: "none"}}
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Brain className="w-5 h-5" />
                {isGenerating ? "Đang tạo..." : "Tạo câu hỏi mới (AI)"}
              </button>
            </div>

            {/* Review all questions */}
            <div className="text-left bg-card rounded-2xl p-8 border border-border space-y-6">
              <h2 className="font-serif text-2xl font-semibold text-foreground">Xem lại toàn bộ câu hỏi</h2>
              <div className="space-y-6">
                {questions.map((q, idx) => {
                  const ua = userAnswers[idx]
                  const selected = ua?.selected
                  return (
                    <div key={q.id} className="p-4 rounded-xl border border-border">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-foreground">Câu {idx + 1}. {q.question}</h3>
                        <span className={`text-sm px-2 py-1 rounded ${ua?.isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                          {ua?.isCorrect ? 'Đúng' : 'Sai'}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {q.options.map((opt, i) => {
                          const isCorrect = i === q.correctAnswer
                          const isSelected = selected === i
                          const base = 'w-full text-left p-3 rounded-lg border'
                          const cls = isCorrect
                            ? 'border-emerald-300 bg-emerald-50'
                            : isSelected
                              ? 'border-rose-300 bg-rose-50'
                              : 'border-border'
                          return (
                            <div key={i} className={`${base} ${cls}`}>
                              <span className="text-sm text-foreground">{opt}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
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
                style={{display:"none"}}
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
                  disabled={showAnswer}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    showAnswer
                      ? index === question.correctAnswer
                        ? 'border-emerald-400 bg-emerald-50'
                        : selectedAnswer === index
                          ? 'border-rose-400 bg-rose-50'
                          : 'border-border opacity-80'
                      : selectedAnswer === index
                        ? 'border-accent bg-accent/10'
                        : 'border-border hover:border-accent/50 hover:bg-secondary'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        showAnswer
                          ? index === question.correctAnswer
                            ? 'border-emerald-500 bg-emerald-500'
                            : selectedAnswer === index
                              ? 'border-rose-500 bg-rose-500'
                              : 'border-border'
                          : selectedAnswer === index
                            ? 'border-accent bg-accent'
                            : 'border-border'
                      }`}
                    >
                      {(selectedAnswer === index || (showAnswer && index === question.correctAnswer)) && (
                        <div className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-foreground">{option}</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <button
                onClick={handleShowAnswer}
                disabled={selectedAnswer === null || showAnswer}
                className="w-full px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Hiển thị đáp án
              </button>
              <button
                onClick={handleNext}
                disabled={selectedAnswer === null}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentQuestion < questions.length - 1 ? "Câu tiếp theo" : "Hoàn thành"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
