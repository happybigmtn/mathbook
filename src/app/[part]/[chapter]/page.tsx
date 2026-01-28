import { allChapters } from "@/data/chapters"
import ChapterContent from "./ChapterContent"

export function generateStaticParams() {
  return allChapters.map((chapter) => ({
    part: chapter.part,
    chapter: chapter.id,
  }))
}

interface PageProps {
  params: Promise<{
    part: string
    chapter: string
  }>
}

export default async function ChapterPage({ params }: PageProps) {
  const { part, chapter } = await params
  return <ChapterContent partId={part} chapterId={chapter} />
}
