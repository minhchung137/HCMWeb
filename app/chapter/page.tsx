"use client"

import Navbar from "@/components/navbar"
import { BookOpen, Users, Lightbulb, Shield, Heart, Scale, Sparkles, HelpCircle } from "lucide-react"
import { useState } from "react"

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
  const [activeTab, setActiveTab] = useState('culture')

  const tabs = [
    { id: 'culture', label: 'Văn hóa', icon: BookOpen },
    { id: 'ethics', label: 'Đạo đức', icon: Heart },
    { id: 'humanity', label: 'Con người', icon: Users },
    { id: 'cq', label: 'Câu hỏi CQ', icon: HelpCircle }
  ]

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
            Khám phá những tư tưởng sâu sắc của Chủ tịch Hồ Chí Minh về văn hóa dân tộc, đạo đức cách mạng và con người mới
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 bg-secondary/30 p-2 rounded-2xl">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'culture' && (
            <div className="space-y-12">
              <div className="text-center mb-12 space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  Phần 6.1
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                  Tư tưởng Hồ Chí Minh về Văn hóa
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  Phần này tập trung vào các quan niệm của Hồ Chí Minh về văn hóa, vai trò của văn hóa và mối quan hệ của nó với các lĩnh vực khác trong đời sống xã hội.
                </p>
              </div>

              {/* 6.1.a Quan niệm về văn hóa */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-accent" />
                  a. Quan niệm của Hồ Chí Minh về văn hóa
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Hồ Chí Minh đã tiếp cận văn hóa theo bốn cách khác nhau:</p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-foreground">Theo nghĩa rộng nhất:</span>
                      <span>Văn hóa là tổng hợp mọi phương thức sinh hoạt cùng với các biểu hiện của nó mà con người đã sản sinh ra nhằm thích ứng với nhu cầu đời sống và đòi hỏi của sự sinh tồn.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-foreground">Theo nghĩa hẹp:</span>
                      <span>Văn hóa là đời sống tinh thần của xã hội, thuộc kiến trúc thượng tầng.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-foreground">Theo nghĩa hẹp hơn nữa:</span>
                      <span>Văn hóa được hiểu là các trường học, số người đi học, khả năng biết đọc, biết viết của người dân.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-semibold text-foreground">Theo phương thức sử dụng công cụ sinh hoạt:</span>
                      <span>Văn hóa được xem như một công cụ phục vụ cuộc sống.</span>
                    </li>
                  </ul>
                  <div className="bg-accent/5 p-6 rounded-xl border-l-4 border-accent">
                    <p className="font-medium text-foreground mb-2">Định nghĩa toàn diện về văn hóa (1943):</p>
                    <p className="italic">"Vì lẽ sinh tồn cũng như mục đích của cuộc sống, loài người mới sáng tạo và phát minh ra ngôn ngữ, chữ viết, đạo đức, pháp luật, khoa học, tôn giáo, văn học, nghệ thuật, những công cụ cho sinh hoạt hằng ngày về mặc, ăn, ở và các phương thức sử dụng. Toàn bộ những sáng tạo và phát minh đó tức là văn hóa".</p>
                  </div>
                </div>
              </div>

              {/* 6.1.b Mối quan hệ với các lĩnh vực khác */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-accent" />
                  b. Quan điểm về mối quan hệ giữa văn hóa với các lĩnh vực khác
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Quan hệ với chính trị và xã hội:</h4>
                    <p>Hồ Chí Minh cho rằng văn hóa không thể đứng ngoài chính trị mà phải ở trong chính trị và kinh tế. Giải phóng chính trị và xã hội là điều kiện tiên quyết để giải phóng văn hóa, và khi xã hội được giải phóng, văn hóa sẽ có điều kiện để phát triển.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Quan hệ với kinh tế:</h4>
                    <p>Kinh tế là cơ sở của kiến trúc thượng tầng, do đó, phải xây dựng một nền kinh tế mới để có đủ điều kiện phát triển văn hóa.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Giữ gìn bản sắc văn hóa dân tộc và tiếp thu tinh hoa văn hóa nhân loại:</h4>
                    <p>Hồ Chí Minh nhấn mạnh tầm quan trọng của việc giữ gìn bản sắc dân tộc, đồng thời phải biết tiếp thu tinh hoa văn hóa của cả phương Đông và phương Tây để làm giàu thêm cho nền văn hóa Việt Nam.</p>
                  </div>
                </div>
              </div>

              {/* 6.1.c Vai trò của văn hóa */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-accent" />
                  c. Quan điểm về vai trò của văn hóa
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Văn hóa là mục tiêu và động lực của sự nghiệp cách mạng:</h4>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start gap-3">
                        <span className="font-semibold text-foreground">Là mục tiêu:</span>
                        <span>Mục tiêu của cách mạng Việt Nam là độc lập dân tộc gắn liền với chủ nghĩa xã hội, trong đó văn hóa là một mục tiêu tổng quát, bao gồm quyền sống, quyền tự do, mưu cầu hạnh phúc và các giá trị chân - thiện - mỹ.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-semibold text-foreground">Là động lực:</span>
                        <span>Di sản văn hóa Hồ Chí Minh là một động lực cho sự phát triển bền vững. Các lĩnh vực như văn hóa chính trị, văn hóa giáo dục, văn hóa văn nghệ, và văn hóa đạo đức đều là những động lực quan trọng thúc đẩy cách mạng.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Văn hóa là một mặt trận:</h4>
                    <p>Hồ Chí Minh xác định văn hóa là một trong bốn mặt trận quan trọng ngang hàng với chính trị, kinh tế và xã hội. Người chủ trương xây dựng một nền văn hóa mới với ba tính chất: dân tộc, khoa học và đại chúng.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ethics' && (
            <div className="space-y-12">
              <div className="text-center mb-12 space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  Phần 6.2
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                  Tư tưởng Hồ Chí Minh về Đạo đức
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  Phần này trình bày quan điểm của Hồ Chí Minh về vai trò của đạo đức, các chuẩn mực và nguyên tắc xây dựng đạo đức cách mạng.
                </p>
              </div>

              {/* 6.2.a Vai trò của đạo đức cách mạng */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-accent" />
                  a. Quan điểm về vai trò của đạo đức cách mạng
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Đạo đức là gốc, là nền tảng của người cách mạng:</h4>
                    <p>Hồ Chí Minh khẳng định đạo đức là nguồn nuôi dưỡng và phát triển con người, giống như gốc của cây hay nguồn của sông suối. Người cách mạng phải có đạo đức làm nền tảng thì mới hoàn thành được nhiệm vụ, nếu không dù tài giỏi đến mấy cũng không thể lãnh đạo nhân dân.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Đạo đức là thước đo lòng cao thượng của con người:</h4>
                    <p>Đạo đức giúp người cách mạng giữ vững lập trường, vượt qua mọi thử thách.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Mối quan hệ giữa "đức" và "tài":</h4>
                    <p>Hồ Chí Minh yêu cầu tài và đức phải thống nhất, trong đó đức là gốc.</p>
                  </div>
                </div>
              </div>

              {/* 6.2.b Các chuẩn mực đạo đức cách mạng cơ bản */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Scale className="w-6 h-6 text-accent" />
                  b. Các chuẩn mực đạo đức cách mạng cơ bản
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Trung với nước, hiếu với dân:</h4>
                    <p>Đây là phẩm chất bao trùm và quan trọng nhất, là sự kế thừa và phát triển của đạo đức truyền thống "trung với vua, hiếu với cha mẹ" trong điều kiện mới. "Trung với nước" là trung thành với sự nghiệp dựng nước và giữ nước, còn "hiếu với dân" là tin dân, yêu dân, hết lòng phục vụ nhân dân.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Cần, kiệm, liêm, chính, chí công vô tư:</h4>
                    <p>Đây là nội dung cốt lõi của đạo đức cách mạng, thể hiện mối quan hệ "với mình".</p>
                    <ul className="space-y-2 ml-6 mt-3">
                      <li><span className="font-semibold text-foreground">Cần:</span> Siêng năng, chăm chỉ, sáng tạo trong lao động.</li>
                      <li><span className="font-semibold text-foreground">Kiệm:</span> Tiết kiệm sức lao động, thời gian, tiền của; không xa hoa, lãng phí.</li>
                      <li><span className="font-semibold text-foreground">Liêm:</span> Trong sạch, không tham ô, không tham lam địa vị, quyền lực.</li>
                      <li><span className="font-semibold text-foreground">Chính:</span> Thẳng thắn, đúng đắn, không tà tâm.</li>
                      <li><span className="font-semibold text-foreground">Chí công vô tư:</span> Đặt lợi ích chung lên trên lợi ích cá nhân, làm việc không vì tư lợi.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Thương yêu con người, sống có tình có nghĩa:</h4>
                    <p>Đây là một phẩm chất đạo đức cao đẹp, thể hiện lòng nhân ái sâu sắc, rộng lớn, trước hết dành cho những người nghèo khổ, bị áp bức.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Tinh thần quốc tế trong sáng:</h4>
                    <p>Phẩm chất này xuất phát từ bản chất của giai cấp công nhân, thể hiện qua sự đoàn kết với nhân dân lao động và các dân tộc bị áp bức trên toàn thế giới.</p>
                  </div>
                </div>
              </div>

              {/* 6.2.c Các nguyên tắc xây dựng đạo đức cách mạng */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-accent" />
                  c. Các nguyên tắc xây dựng đạo đức cách mạng
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Nói đi đôi với làm, nêu gương về đạo đức:</h4>
                    <p>Đây là nguyên tắc quan trọng nhất. Cán bộ, đảng viên phải là người đi đầu, làm gương trong mọi việc.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Xây đi đôi với chống:</h4>
                    <p>Phải kết hợp việc giáo dục, xây dựng những phẩm chất tốt đẹp với việc kiên quyết đấu tranh chống lại những thói hư tật xấu, chủ nghĩa cá nhân và các biểu hiện suy thoái đạo đức.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Tu dưỡng đạo đức suốt đời:</h4>
                    <p>Đạo đức cách mạng không phải tự nhiên mà có, mà phải do quá trình rèn luyện, tu dưỡng bền bỉ, kiên trì suốt đời mà thành.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'humanity' && (
            <div className="space-y-12">
              <div className="text-center mb-12 space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  Phần 6.3
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                  Tư tưởng Hồ Chí Minh về Con người
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  Phần này làm rõ quan niệm của Hồ Chí Minh về con người, vai trò và chiến lược "trồng người" của Người.
                </p>
              </div>

              {/* 6.3.a Quan niệm về con người */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-accent" />
                  a. Quan niệm về con người
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Xem xét con người một cách toàn diện:</h4>
                    <p>Hồ Chí Minh xem xét con người một cách toàn diện, trong sự thống nhất của các mặt thể lực, trí lực, tâm lực, và trong các mối quan hệ đa dạng (gia đình, xã hội, giai cấp, dân tộc).</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Quan điểm lịch sử - cụ thể:</h4>
                    <p>Người có quan điểm lịch sử - cụ thể khi xem xét con người, tức là đặt con người vào những điều kiện cụ thể của xã hội Việt Nam để thấy rõ đặc điểm của họ.</p>
                  </div>
                </div>
              </div>

              {/* 6.3.b Vai trò của con người */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-accent" />
                  b. Quan điểm về vai trò của con người
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Con người là mục tiêu của cách mạng:</h4>
                    <p>Toàn bộ sự nghiệp cách mạng của Hồ Chí Minh đều nhằm mục tiêu cuối cùng là giải phóng con người, mang lại tự do, ấm no, hạnh phúc cho nhân dân.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Con người là động lực của cách mạng:</h4>
                    <p>Hồ Chí Minh khẳng định rằng quần chúng nhân dân là vốn quý nhất, là nhân tố quyết định thành công của cách mạng. Sức mạnh của cách mạng bắt nguồn từ sự nghiệp đoàn kết của toàn dân.</p>
                  </div>
                </div>
              </div>

              {/* 6.3.c Xây dựng con người */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-accent" />
                  c. Quan điểm về xây dựng con người
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Yêu cầu khách quan và chiến lược lâu dài:</h4>
                    <p>Xây dựng con người là một yêu cầu khách quan, vừa cấp bách vừa là chiến lược lâu dài của cách mạng. Hồ Chí Minh đã nói: "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người".</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Xây dựng con người toàn diện:</h4>
                    <p>Việc xây dựng con người phải được tiến hành toàn diện, từ tư tưởng, đạo đức, lối sống đến trình độ văn hóa, chuyên môn. Con người mới phải là người vừa "hồng" (có đạo đức cách mạng) vừa "chuyên" (có năng lực, trình độ).</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Các biện pháp xây dựng con người:</h4>
                    <p>Để xây dựng con người, cần kết hợp nhiều biện pháp như giáo dục, rèn luyện trong thực tiễn, và phát huy vai trò gương mẫu của các tổ chức và cá nhân tiên tiến.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cq' && (
            <div className="space-y-12">
              <div className="text-center mb-12 space-y-4">
                <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm">
                  Câu hỏi CQ
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                  Đạo đức có phải là tất cả của người cán bộ?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  Phân tích sâu sắc về vai trò của đạo đức trong tư tưởng Hồ Chí Minh và ý nghĩa thực tiễn hiện nay
                </p>
              </div>

              {/* Vấn đề đặt ra */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-accent" />
                  Vấn đề đặt ra
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Trong tư tưởng Hồ Chí Minh, đạo đức luôn được nhấn mạnh là phẩm chất hàng đầu, là nền tảng của người cách mạng. Người từng khẳng định: 
                    <span className="italic font-medium text-foreground"> "Cũng như sông thì có nguồn, cây thì có gốc, người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi cũng không lãnh đạo được nhân dân"</span>.
                  </p>
                  <p>
                    Tuy nhiên, điều này không có nghĩa đạo đức là phẩm chất duy nhất hay là tất cả đối với người cán bộ. Thay vào đó, đạo đức phải được coi là cái gốc, là điều kiện tiên quyết để tài năng của người cán bộ được phát huy đúng hướng và phục vụ cho lợi ích chung.
                  </p>
                  <div className="bg-accent/5 p-6 rounded-xl border-l-4 border-accent">
                    <p className="font-medium text-foreground">
                      Vậy, đạo đức cách mạng theo tư tưởng Hồ Chí Minh có gì khác với đạo đức thông thường và tại sao nó lại giữ vai trò nền tảng như vậy?
                    </p>
                  </div>
                </div>
              </div>

              {/* Phân tích tư tưởng Hồ Chí Minh về đạo đức cách mạng */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-accent" />
                  Phân tích tư tưởng Hồ Chí Minh về đạo đức cách mạng
                </h3>
                
                <div className="space-y-8">
                  {/* 1. Đạo đức cách mạng – Vượt lên trên quan niệm đạo đức thông thường */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 text-xl">1. Đạo đức cách mạng – Vượt lên trên quan niệm đạo đức thông thường</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Đạo đức thông thường thường nhấn mạnh đến các quy tắc ứng xử cá nhân, các mối quan hệ gia đình, xã hội nhằm hướng con người đến sự hoàn thiện bản thân. Đạo đức cách mạng theo tư tưởng Hồ Chí Minh kế thừa những giá trị đó nhưng mang một tầm vóc và nội hàm rộng lớn, sâu sắc hơn, gắn liền với sứ mệnh chính trị và xã hội:
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-secondary/50 p-6 rounded-xl">
                        <h5 className="font-semibold text-foreground mb-3">Mục tiêu</h5>
                        <p className="text-sm text-muted-foreground">
                          Nếu đạo đức thông thường hướng tới việc tạo ra một "người tốt" trong xã hội, thì đạo đức cách mạng hướng tới việc xây dựng một "người chiến sĩ", một "người công bộc" trung thành của nhân dân.
                        </p>
                      </div>
                      <div className="bg-secondary/50 p-6 rounded-xl">
                        <h5 className="font-semibold text-foreground mb-3">Phạm vi</h5>
                        <p className="text-sm text-muted-foreground">
                          Đạo đức cách mạng không chỉ giới hạn trong quan hệ cá nhân mà được đặt trong mối quan hệ với Tổ quốc và Nhân dân. Chuẩn mực cao nhất chính là "Trung với nước, hiếu với dân".
                        </p>
                      </div>
                      <div className="bg-secondary/50 p-6 rounded-xl">
                        <h5 className="font-semibold text-foreground mb-3">Bản chất</h5>
                        <p className="text-sm text-muted-foreground">
                          Đạo đức cách mạng mang tính chính trị và giai cấp sâu sắc, là đạo đức của giai cấp công nhân, chống lại mọi biểu hiện của chủ nghĩa cá nhân, áp bức, bóc lột.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2. Vì sao đạo đức là "gốc" của người cán bộ? */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 text-xl">2. Vì sao đạo đức là "gốc" của người cán bộ?</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Hồ Chí Minh coi đạo đức là "gốc" bởi những lý do cốt lõi sau:
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-accent/5 p-6 rounded-xl">
                        <h5 className="font-semibold text-foreground mb-3">Đạo đức là nền tảng để giữ vững lập trường chính trị</h5>
                        <p className="text-muted-foreground leading-relaxed">
                          Cách mạng là một sự nghiệp gian khổ, đầy thử thách và cám dỗ. Chỉ có đạo đức vững vàng mới giúp người cán bộ không dao động, không sa ngã trước khó khăn, không bị vật chất và quyền lực làm tha hóa.
                        </p>
                      </div>
                      
                      <div className="bg-accent/5 p-6 rounded-xl">
                        <h5 className="font-semibold text-foreground mb-3">Đạo đức là cơ sở để nhân dân tin yêu và noi theo</h5>
                        <p className="text-muted-foreground leading-relaxed">
                          Người cán bộ muốn lãnh đạo được nhân dân thì trước hết phải được nhân dân tin tưởng. Uy tín không tự nhiên mà có, nó được xây dựng từ chính phẩm chất đạo đức, sự gương mẫu, "nói đi đôi với làm".
                        </p>
                      </div>
                      
                      <div className="bg-accent/5 p-6 rounded-xl">
                        <h5 className="font-semibold text-foreground mb-3">Đạo đức định hướng cho tài năng phát triển</h5>
                        <p className="text-muted-foreground leading-relaxed">
                          Hồ Chí Minh luôn yêu cầu cán bộ phải có cả Đức và Tài, trong đó Đức là gốc. "Tài" là năng lực, kiến thức, kỹ năng để hoàn thành công việc. "Đức" là động cơ, mục đích để sử dụng tài năng đó.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vận dụng: Ý nghĩa của đạo đức cách mạng */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-accent" />
                  Vận dụng: Ý nghĩa của đạo đức cách mạng trong việc hình thành nhân cách và giữ gìn uy tín của người cán bộ hiện nay
                </h3>
                
                <div className="space-y-8">
                  {/* 1. Hình thành nhân cách người cán bộ */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 text-xl">1. Hình thành nhân cách người cán bộ</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Việc tu dưỡng theo các chuẩn mực đạo đức cách mạng Hồ Chí Minh là quá trình giúp người cán bộ "tự hoàn thiện" nhân cách của mình một cách toàn diện:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-secondary/50 p-6 rounded-xl">
                        <h5 className="font-semibold text-foreground mb-3">Rèn luyện bản lĩnh chính trị</h5>
                        <p className="text-sm text-muted-foreground">
                          Phẩm chất "Trung với nước, hiếu với dân" giúp người cán bộ xác định rõ lý tưởng sống, mục tiêu phấn đấu, luôn đặt lợi ích của Tổ quốc và nhân dân lên trên hết.
                        </p>
                      </div>
                      <div className="bg-secondary/50 p-6 rounded-xl">
                        <h5 className="font-semibold text-foreground mb-3">Xây dựng lối sống trong sạch, giản dị</h5>
                        <p className="text-sm text-muted-foreground">
                          Các phẩm chất "Cần, Kiệm, Liêm, Chính, Chí công vô tư" là kim chỉ nam cho hành động hàng ngày, giúp chống lại chủ nghĩa cá nhân.
                        </p>
                      </div>
                      <div className="bg-secondary/50 p-6 rounded-xl">
                        <h5 className="font-semibold text-foreground mb-3">Nuôi dưỡng lòng nhân ái, vị tha</h5>
                        <p className="text-sm text-muted-foreground">
                          Phẩm chất "Thương yêu con người, sống có tình có nghĩa" giúp người cán bộ gần dân, hiểu dân, có thái độ ứng xử nhân văn.
                        </p>
                      </div>
                      <div className="bg-secondary/50 p-6 rounded-xl">
                        <h5 className="font-semibold text-foreground mb-3">Phát triển tinh thần quốc tế</h5>
                        <p className="text-sm text-muted-foreground">
                          Tinh thần quốc tế trong sáng giúp người cán bộ có tầm nhìn rộng lớn, đoàn kết với nhân dân lao động thế giới.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2. Giữ gìn uy tín của người cán bộ */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 text-xl">2. Giữ gìn uy tín của người cán bộ</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Uy tín là "tài sản vô hình" quý giá nhất của người cán bộ. Đạo đức cách mạng chính là nền tảng vững chắc nhất để xây dựng và bảo vệ uy tín đó:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-xl">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-accent-foreground font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Uy tín đến từ sự gương mẫu</h5>
                          <p className="text-sm text-muted-foreground">
                            Nguyên tắc "Nói đi đôi với làm, nêu gương về đạo đức" là phương pháp xây dựng uy tín hiệu quả nhất. Khi người cán bộ nói và làm thống nhất, tự khắc sẽ tạo ra sức ảnh hưởng và sự tín nhiệm.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-xl">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-accent-foreground font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Uy tín được củng cố qua đấu tranh với cái xấu</h5>
                          <p className="text-sm text-muted-foreground">
                            Nguyên tắc "Xây đi đôi với chống" đòi hỏi người cán bộ dũng cảm đấu tranh chống lại tiêu cực, tham nhũng, cái sai ngay trong chính nội bộ.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-xl">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-accent-foreground font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Uy tín là kết quả của một quá trình tu dưỡng bền bỉ</h5>
                          <p className="text-sm text-muted-foreground">
                            Nguyên tắc "Tu dưỡng đạo đức suốt đời" cho thấy việc giữ gìn uy tín không phải là chuyện một sớm một chiều. Đạo đức phải được rèn luyện hàng ngày, hàng giờ.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kết luận */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Scale className="w-6 h-6 text-accent" />
                  Kết luận
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Trả lời cho câu hỏi chủ đề, có thể khẳng định: <span className="font-semibold text-foreground">Đạo đức không phải là tất cả, nhưng là nền tảng không thể thiếu của người cán bộ</span>.
                  </p>
                  <p>
                    Trong tư tưởng Hồ Chí Minh, một người cán bộ chân chính phải là sự kết hợp hài hòa giữa Đức và Tài, trong đó Đức là gốc. Trong bối cảnh hiện nay, khi đất nước đang đối mặt với nhiều cơ hội và thách thức, việc tu dưỡng, rèn luyện đạo đức cách mạng theo gương Bác càng trở nên cấp thiết.
                  </p>
                  <p>
                    Nó không chỉ là yêu cầu để hình thành nhân cách cao đẹp mà còn là điều kiện tiên quyết để người cán bộ giữ gìn uy tín, củng cố niềm tin của nhân dân, và hoàn thành xuất sắc nhiệm vụ mà Đảng và nhân dân giao phó.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
