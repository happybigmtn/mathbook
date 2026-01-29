import fs from 'fs/promises'
import path from 'path'

export async function getChapterContent(partId: string, chapterId: string): Promise<string | null> {
  try {
    // Construct path to content file
    // process.cwd() is the root of the nextjs app
    const filePath = path.join(process.cwd(), 'src/content', partId, `${chapterId}.md`)
    
    // Check if file exists
    try {
        await fs.access(filePath)
    } catch {
        return null
    }

    const content = await fs.readFile(filePath, 'utf-8')
    return content
  } catch (error) {
    console.error(`Error loading content for ${partId}/${chapterId}:`, error)
    return null
  }
}
