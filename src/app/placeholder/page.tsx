export default function PlaceholderPage({
  searchParams,
}: {
  searchParams: { ref?: string }
}) {
  const ref = searchParams.ref || "Unknown"
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-serif font-medium mb-6">Coming Soon</h1>
        <p className="text-lg text-muted-foreground mb-4">
          The chapter <strong className="text-foreground">{ref}</strong> is referenced in the book
          but hasn't been fully developed yet.
        </p>
        <p className="text-muted-foreground mb-8">
          We're working on adding comprehensive coverage of all chapters from the
          Princeton Companion to Mathematics. Check back soon!
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}
