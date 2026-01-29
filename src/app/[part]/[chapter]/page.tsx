import ChapterContent from "./ChapterContent"
import { getChapterContent } from "@/lib/content"
import params from "./params.json"

export async function generateStaticParams() {
  return params
}

interface PageProps {
  params: Promise<{
    part: string
    chapter: string
  }>
}

export default async function ChapterPage({ params }: PageProps) {
  const { part, chapter } = await params
  const fullText = await getChapterContent(part, chapter)
  return <ChapterContent partId={part} chapterId={chapter} initialFullText={fullText} />
}
