import Navbar from "@/components/navbar"
import { Play } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Tư tưởng Hồ Chí Minh về văn hóa",
    description: "Tìm hiểu quan điểm của Bác về xây dựng nền văn hóa mới",
    duration: "15:30",
    thumbnail: "/ho-chi-minh-culture.jpg",
  },
  {
    id: 2,
    title: "Đạo đức cách mạng theo tư tưởng Hồ Chí Minh",
    description: "Cần, Kiệm, Liêm, Chính - Bốn đức tính của người cách mạng",
    duration: "12:45",
    thumbnail: "/ho-chi-minh-ethics.jpg",
  },
  {
    id: 3,
    title: "Con người mới trong tư tưởng Hồ Chí Minh",
    description: "Xây dựng con người toàn diện về đạo đức, tri thức và năng lực",
    duration: "18:20",
    thumbnail: "/ho-chi-minh-humanity.jpg",
  },
  {
    id: 4,
    title: "Văn hóa dân tộc và văn hóa thời đại",
    description: "Kết hợp truyền thống dân tộc với tinh hoa văn hóa thế giới",
    duration: "14:15",
    thumbnail: "/vietnamese-culture.jpg",
  },
  {
    id: 5,
    title: "Giáo dục đạo đức trong tư tưởng Hồ Chí Minh",
    description: "Phương pháp giáo dục và rèn luyện đạo đức cách mạng",
    duration: "16:50",
    thumbnail: "/education-ethics.jpg",
  },
  {
    id: 6,
    title: "Ý nghĩa thời đại của tư tưởng Hồ Chí Minh",
    description: "Vận dụng tư tưởng Hồ Chí Minh trong thời kỳ đổi mới",
    duration: "20:10",
    thumbnail: "/modern-vietnam.jpg",
  },
]

export default function VideoPage() {
  return (
    <main className="min-h-screen relative z-10">
      <Navbar />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 max-w-4xl mx-auto mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
            Video học tập
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Bộ sưu tập video giúp bạn hiểu sâu hơn về tư tưởng Hồ Chí Minh
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="relative aspect-video bg-secondary">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-accent-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                  {video.duration}
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl font-semibold text-foreground line-clamp-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
