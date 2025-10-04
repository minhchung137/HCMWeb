"use client"

import Navbar from "@/components/navbar"
import { Play, ExternalLink } from "lucide-react"
import { useState } from "react"

const videos = [
  {
    id: 1,
    title: "Tư tưởng Hồ Chí Minh về văn hoá",
    description: "Tìm hiểu quan điểm của Bác về xây dựng nền văn hóa mới dân tộc, khoa học, đại chúng",
    duration: "15:30",
    thumbnail: "https://img.youtube.com/vi/8E940gAAxpo/maxresdefault.jpg",
    youtubeId: "8E940gAAxpo",
    channel: "Học viện Chính trị Quốc gia Hồ Chí Minh",
    views: "125K",
    publishedAt: "2023-01-15"
  },
  {
    id: 2,
    title: "Học Bác mỗi ngày. \"Cần, kiệm, liêm, chính\" - Cốt lõi đạo đức cách mạng - VNEWS",
    description: "Tìm hiểu về bốn đức tính cơ bản của người cách mạng theo tư tưởng Hồ Chí Minh",
    duration: "12:45",
    thumbnail: "https://img.youtube.com/vi/VqIy_YGMw6Q/maxresdefault.jpg",
    youtubeId: "VqIy_YGMw6Q",
    channel: "VNEWS",
    views: "89K",
    publishedAt: "2023-02-20"
  },
  {
    id: 3,
    title: "Bản chất tốt đẹp của dân chủ xã hội chủ nghĩa | Bảo vệ nền tảng tư tưởng của Đảng",
    description: "Tìm hiểu về bản chất dân chủ xã hội chủ nghĩa và nền tảng tư tưởng của Đảng",
    duration: "14:15",
    thumbnail: "https://img.youtube.com/vi/sc1J6d9ERfc/maxresdefault.jpg",
    youtubeId: "sc1J6d9ERfc",
    channel: "Đảng Cộng sản Việt Nam",
    views: "78K",
    publishedAt: "2023-04-05"
  },
  {
    id: 4,
    title: "Tổng bí thư: Văn hóa còn thì dân tộc còn | VTV24",
    description: "Phát biểu của Tổng bí thư về vai trò quan trọng của văn hóa trong sự phát triển dân tộc",
    duration: "18:20",
    thumbnail: "https://img.youtube.com/vi/DJC3Fk7yAz0/maxresdefault.jpg",
    youtubeId: "DJC3Fk7yAz0",
    channel: "VTV24",
    views: "156K",
    publishedAt: "2023-03-10"
  },
  {
    id: 5,
    title: "Học Bác mỗi ngày. Đạo đức cách mạng theo tư tưởng Hồ Chí Minh - VNEWS",
    description: "Chương trình học tập tư tưởng đạo đức cách mạng của Chủ tịch Hồ Chí Minh",
    duration: "16:50",
    thumbnail: "https://img.youtube.com/vi/GtghaD3pwaw/maxresdefault.jpg",
    youtubeId: "GtghaD3pwaw",
    channel: "VNEWS",
    views: "203K",
    publishedAt: "2023-05-12"
  },
  {
    id: 6,
    title: "Chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh nền tảng vững bền của Đảng ta | Đảng với Dân",
    description: "Tìm hiểu về nền tảng tư tưởng vững chắc của Đảng Cộng sản Việt Nam",
    duration: "20:10",
    thumbnail: "https://img.youtube.com/vi/k60QAeDT56M/maxresdefault.jpg",
    youtubeId: "k60QAeDT56M",
    channel: "Đảng với Dân",
    views: "312K",
    publishedAt: "2023-06-18"
  }
]

export default function VideoPage() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)

  const openVideo = (video: typeof videos[0]) => {
    setSelectedVideo(video)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  const openInYouTube = (youtubeId: string) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank')
  }

  return (
    <main className="min-h-screen relative z-10">
      <Navbar />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 max-w-4xl mx-auto mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
            Video học tập
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Bộ sưu tập video giúp bạn hiểu sâu hơn về tư tưởng Hồ Chí Minh về văn hóa, đạo đức và con người
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer"
              onClick={() => openVideo(video)}
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
                <div className="absolute top-2 left-2 px-2 py-1 bg-red-600 text-white text-xs rounded flex items-center gap-1">
                  <Play className="w-3 h-3" />
                  YouTube
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-semibold text-foreground line-clamp-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span>👁️</span>
                    {video.views}
                  </span>
                  <span>{video.publishedAt}</span>
                </div>
                
                <div className="text-xs text-muted-foreground">
                  📺 {video.channel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-foreground">{selectedVideo.title}</h2>
              <button
                onClick={closeVideo}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="aspect-video bg-secondary rounded-xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">{selectedVideo.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span>👁️</span>
                    {selectedVideo.views} lượt xem
                  </span>
                  <span>⏱️ {selectedVideo.duration}</span>
                  <span>📅 {selectedVideo.publishedAt}</span>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  📺 Kênh: {selectedVideo.channel}
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => openInYouTube(selectedVideo.youtubeId)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Xem trên YouTube
                  </button>
                  <button
                    onClick={closeVideo}
                    className="px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
