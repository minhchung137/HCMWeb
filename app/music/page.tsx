"use client"

import Navbar from "@/components/navbar"

const lyrics = `
[Lời 1]
Văn hóa soi đường cho dân tộc tiến lên
Giữ gìn bản sắc cội nguồn thiêng liêng
Trên mặt trận này, lời Người vang vọng
Dân tộc, khoa học, vì đại chúng mênh mông.

[Điệp khúc]
Lời Người dạy khắc sâu trong tim ta
Đạo đức làm gốc cho cây đời nở hoa
Trung với nước, hiếu với dân, một lòng không phai
Vì dân phục vụ, chẳng ngại chông gai.
Cần, Kiệm, Liêm, Chính, Chí công vô tư
Là kim chỉ nam sáng soi muôn đời!

[Lời 2]
Người công bộc của dân luôn ghi nhớ
Nói đi đôi với làm, là tấm gương sáng tỏ
Quét sạch tư riêng, lòng trong như ngọc
Vì lợi ích chung, khó khăn không nhọc.

[Điệp khúc]
Lời Người dạy khắc sâu trong tim ta
Đạo đức làm gốc cho cây đời nở hoa
Trung với nước, hiếu với dân, một lòng không phai
Vì dân phục vụ, chẳng ngại chông gai.
Cần, Kiệm, Liêm, Chính, Chí công vô tư
Là kim chỉ nam sáng soi muôn đời!

[Đoạn chuyển tiếp]
Vì sự nghiệp trăm năm "trồng người"
Gieo mầm xanh cho đất nước rạng ngời
Xây con người mới, trí tuệ, yêu thương
Để Việt Nam ta sánh vai bốn phương!

[Điệp khúc]
(Điệp khúc cuối cùng, nhạc dồn dập và mạnh mẽ hơn)
Lời Người dạy khắc sâu trong tim ta
Đạo đức làm gốc cho cây đời nở hoa
Trung với nước, hiếu với dân, một lòng không phai
Vì dân phục vụ, chẳng ngại chông gai.
Cần, Kiệm, Liêm, Chính, Chí công vô tư
Là kim chỉ nam sáng soi muôn đời!

[Outro]
Tư tưởng của Người... mãi soi đường... Việt Nam!`

export default function MusicPage() {
  return (
    <main className="min-h-screen relative z-10">
      <Navbar />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm">Bài hát</div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">Giai điệu về Bác</h1>
              <p className="text-muted-foreground">Nghe nhạc và đọc lời ca ngợi tư tưởng, đạo đức, phong cách Hồ Chí Minh.</p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
              <audio controls className="w-full">
                <source src="/hcm_song.mp3" type="audio/mpeg" />
                Trình duyệt của bạn không hỗ trợ phát audio.
              </audio>
              
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Lời bài hát</h2>
              <pre className="whitespace-pre-wrap text-muted-foreground leading-relaxed">{lyrics}</pre>
            </div>
          </div>

          <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-border bg-secondary">
              <img
                src="/anhbac.webp"
                alt="Chủ tịch Hồ Chí Minh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


