import type { Metadata } from "next"
import { Geist, Geist_Mono, Newsreader } from "next/font/google"
import "../styles/globals.css"
import { Navigation } from "@/components/Navigation"
import { ProgressProvider } from "@/components/ProgressProvider"
import { ThemeProvider } from "@/components/ThemeProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "The Princeton Companion to Mathematics",
  description: "An interactive journey through mathematics with beautiful visualizations and clear explanations. Based on The Princeton Companion to Mathematics.",
  keywords: ["mathematics", "interactive", "education", "princeton companion", "math"],
  authors: [{ name: "Interactive Mathematics Project" }],
  openGraph: {
    title: "The Princeton Companion to Mathematics",
    description: "An interactive journey through the beauty of mathematics",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} 
                    antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider>
          <ProgressProvider>
            <Navigation />
            <main className="pt-16">
              {children}
            </main>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
