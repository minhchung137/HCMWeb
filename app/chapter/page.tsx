import Navbar from "@/components/navbar"
import { BookOpen, Users, Lightbulb, Shield, Heart, Scale, Sparkles } from "lucide-react"

const culturePoints = [
  {
    icon: BookOpen,
    title: "Nền tảng tinh thần",
    description: "Văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu, vừa là động lực phát triển.",
  },
  {
    icon: Users,
    title: "Văn hóa mới",
    description: "Xây dựng nền văn hóa mới mang tính dân tộc, khoa học và đại chúng.",
  },
  {
    icon: Lightbulb,
    title: "Gắn với độc lập",
    description: "Văn hóa gắn liền với độc lập dân tộc và chủ nghĩa xã hội.",
  },
  {
    icon: Shield,
    title: "Vũ khí tinh thần",
    description: 'Văn hóa là vũ khí tinh thần chống "giặc dốt, giặc đói, giặc ngoại xâm".',
  },
]

const ethicsPoints = [
  {
    icon: Heart,
    title: "Cần, Kiệm, Liêm, Chính",
    description: "Bốn đức tính cơ bản của người cách mạng.",
  },
  {
    icon: Users,
    title: "Trung với nước, hiếu với dân",
    description: "Đạo đức gắn liền với trách nhiệm với Tổ quốc và nhân dân.",
  },
  {
    icon: Scale,
    title: "Công bằng xã hội",
    description: "Xây dựng xã hội công bằng, dân chủ, văn minh.",
  },
  {
    icon: Lightbulb,
    title: "Gương mẫu đi đầu",
    description: "Người cán bộ, đảng viên phải nêu gương trước quần chúng.",
  },
]

const humanityPoints = [
  {
    icon: Sparkles,
    title: "Con người mới",
    description: "Xây dựng con người mới xã hội chủ nghĩa có đạo đức, tri thức và năng lực.",
  },
  {
    icon: Heart,
    title: "Yêu thương con người",
    description: "Tôn trọng và phát huy giá trị con người trong xã hội.",
  },
  {
    icon: Users,
    title: "Đoàn kết tập thể",
    description: "Phát huy sức mạnh đoàn kết, tập thể trong xây dựng đất nước.",
  },
  {
    icon: Lightbulb,
    title: "Học tập suốt đời",
    description: "Không ngừng học tập, rèn luyện để hoàn thiện bản thân.",
  },
]

export default function ChapterPage() {
  return (
    <main className="min-h-screen relative z-10">
      <Navbar />

      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm">
            Chương 6
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Tư tưởng Hồ Chí Minh về văn hóa, đạo đức, con người
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Khám phá những tư tưởng sâu sắc của Chủ tịch Hồ Chí Minh về văn hóa dân tộc, đạo đức cách mạng và con người
            mới
          </p>
        </div>
      </section>

      {/* 6.1 Culture */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
              Phần 6.1
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Tư tưởng Hồ Chí Minh về Văn hóa
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {culturePoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-semibold text-foreground">{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6.2 Ethics */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
              Phần 6.2
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Tư tưởng Hồ Chí Minh về Đạo đức
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {ethicsPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-semibold text-foreground">{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6.3 Humanity */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
              Phần 6.3
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Tư tưởng Hồ Chí Minh về Con người
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {humanityPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-semibold text-foreground">{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
