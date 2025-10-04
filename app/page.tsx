import Navbar from "@/components/navbar"
import { BookOpen, Video, Brain, Star } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="flex justify-center">
            <Star className="w-16 h-16 text-accent" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Tư Tưởng Sáng của Bác
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            Nền tảng học tập tư tưởng Hồ Chí Minh với AI assistant, video và nội dung đa dạng về văn hóa, đạo đức và con người
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/chapter"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Nội Dung
            </Link>
            <Link
              href="/video"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium"
            >
              Xem Video
            </Link>
            <Link
              href="/quiz"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium"
            >
              Ôn bài luyện
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="font-serif text-3xl font-bold text-foreground">6</div>
            <div className="text-sm text-muted-foreground">CHƯƠNG HỌC</div>
          </div>

          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto">
              <Video className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="font-serif text-3xl font-bold text-foreground">6</div>
            <div className="text-sm text-muted-foreground">VIDEO HỌC TẬP</div>
          </div>

          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="font-serif text-3xl font-bold text-foreground">AI</div>
            <div className="text-sm text-muted-foreground">ASSISTANT</div>
          </div>
        </div>
      </section>

      {/* About Ho Chi Minh Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
            Tư Tưởng Sáng của Bác Hồ
          </h2>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Chủ tịch Hồ Chí Minh (1890-1969) là lãnh tụ vĩ đại của dân tộc Việt Nam, người sáng lập và rèn luyện Đảng Cộng sản
              Việt Nam. Tư tưởng của Người là ngọn đuốc soi đường cho cách mạng Việt Nam.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              "Tư Tưởng Sáng của Bác" là nền tảng học tập tư tưởng Hồ Chí Minh, giúp bạn hiểu sâu sắc về quan điểm của Người về văn hóa, 
              đạo đức và con người - những giá trị cốt lõi làm nên sức mạnh dân tộc.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Văn hóa dân tộc</h3>
                <p className="text-sm text-muted-foreground">Xây dựng nền văn hóa mới dân tộc, khoa học, đại chúng</p>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Đạo đức cách mạng</h3>
                <p className="text-sm text-muted-foreground">Cần, kiệm, liêm, chính, chí công vô tư</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          Khám phá Tư Tưởng Sáng của Bác
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Link
            href="/chapter"
            className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Chương 6</h3>
            <p className="text-sm text-muted-foreground">Văn hóa, Đạo đức, Con người</p>
          </Link>

          <div className="bg-card rounded-2xl p-6 shadow-lg border border-border opacity-50">
            <div className="w-12 h-12 bg-muted/10 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-muted" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Chương khác</h3>
            <p className="text-sm text-muted-foreground">Đang cập nhật...</p>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-lg border border-border opacity-50">
            <div className="w-12 h-12 bg-muted/10 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-muted" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Chương khác</h3>
            <p className="text-sm text-muted-foreground">Đang cập nhật...</p>
          </div>
        </div>
      </section>
    </main>
  )
}
