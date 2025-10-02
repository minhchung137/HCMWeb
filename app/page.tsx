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
            Học Viện Bác Hồ
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            Nền tảng học Tư tưởng Hồ Chí Minh với AI assistant và nội dung đa ngôn ngữ
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
            <div className="font-serif text-3xl font-bold text-foreground">20+</div>
            <div className="text-sm text-muted-foreground">BÀI VIẾT TRÍCH HỌC</div>
          </div>

          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto">
              <Video className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="font-serif text-3xl font-bold text-foreground">2</div>
            <div className="text-sm text-muted-foreground">NGÔN NGỮ HỖ TRỢ</div>
          </div>

          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="font-serif text-3xl font-bold text-foreground">1</div>
            <div className="text-sm text-muted-foreground">ASSISTANT</div>
          </div>
        </div>
      </section>

      {/* About Ho Chi Minh Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
            Về Chủ tịch Hồ Chí Minh
          </h2>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Hồ Chí Minh (1890-1969) là lãnh tụ vĩ đại của dân tộc Việt Nam, người sáng lập và rèn luyện Đảng Cộng sản
              Việt Nam, người sáng lập nước Việt Nam Dân chủ Cộng hòa.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Tư tưởng Hồ Chí Minh là một hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng
              Việt Nam, là kết quả của sự vận dụng sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của Việt Nam.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Độc lập dân tộc</h3>
                <p className="text-sm text-muted-foreground">Gắn liền độc lập dân tộc với chủ nghĩa xã hội</p>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Văn hóa - Đạo đức</h3>
                <p className="text-sm text-muted-foreground">Xây dựng con người mới và nền văn hóa tiên tiến</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          Khám phá các chương Tư tưởng Hồ Chí Minh
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
