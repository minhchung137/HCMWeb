import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Chatbox from "@/components/chatbox"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata = {
  title: "Tư tưởng Hồ Chí Minh về Văn hóa, Đạo đức, Con người",
  description: "Chương 6: Tìm hiểu tư tưởng Hồ Chí Minh về văn hóa, đạo đức và con người",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body>
        {children}
        <Chatbox />
      </body>
    </html>
  )
}
