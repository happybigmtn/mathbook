import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../styles/globals.css"
import { Navigation } from "@/components/Navigation"
import { ProgressProvider } from "@/components/ProgressProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "The Princeton Companion to Mathematics - Interactive",
  description: "An interactive journey through mathematics with 3Blue1Brown-style visualizations and Feynman-style explanations. Based on The Princeton Companion to Mathematics.",
  keywords: ["mathematics", "interactive", "education", "3blue1brown", "manim", "princeton companion"],
  authors: [{ name: "Interactive Mathematics Project" }],
  openGraph: {
    title: "The Princeton Companion to Mathematics - Interactive",
    description: "An interactive journey through mathematics with beautiful visualizations",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <ProgressProvider>
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
        </ProgressProvider>
      </body>
    </html>
  )
}
