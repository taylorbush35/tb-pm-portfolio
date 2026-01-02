import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"

const toolCategories = [
  {
    title: "Product & Strategy",
    tools: [
      { name: "Figma", note: "Where ideas become pixels" },
      { name: "Notion", note: "My second brain. Sometimes my first." },
      { name: "Linear", note: "The best issue tracker, no contest" },
      { name: "Amplitude", note: "Because gut feelings don't scale" },
      { name: "Miro", note: "Virtual whiteboard chaos, but make it productive" },
    ],
  },
  {
    title: "Design & Research",
    tools: [
      { name: "Figma", note: "Yes, it's here twice" },
      { name: "Maze", note: "User testing without the overhead" },
      { name: "UserTesting", note: "When you need the real deal" },
      { name: "Dovetail", note: "Research synthesis that actually works" },
    ],
  },
  {
    title: "AI & Technical",
    tools: [
      { name: "ChatGPT", note: "My rubber duck, but smarter" },
      { name: "Claude", note: "For when I need nuanced thinking" },
      { name: "Jupyter Notebooks", note: "Data exploration playground" },
      { name: "GitHub Copilot", note: "SQL queries at lightning speed" },
    ],
  },
  {
    title: "Communication",
    tools: [
      { name: "Slack", note: "Where async work lives" },
      { name: "Loom", note: "Because typing is overrated" },
      { name: "Gamma", note: "Presentations that don't bore people to tears" },
      { name: "Grammarly", note: "Saving me from embarrassing typos since 2019" },
    ],
  },
  {
    title: "My Creative Stack",
    tools: [
      { name: "Fujifilm X-T4", note: "My main camera body" },
      { name: "Lightroom", note: "Where photos come to life" },
      { name: "VSCO", note: "Quick mobile edits on the go" },
      { name: "Spotify", note: "Focus mode: deep house or classical" },
    ],
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="mb-12 space-y-4">
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Tools I Love</h1>
          <p className="text-pretty text-xl leading-relaxed text-muted-foreground">
            The software and gear that helps me build better products (and capture better moments).
          </p>
        </div>

        <div className="space-y-12">
          {toolCategories.map((category) => (
            <section key={category.title}>
              <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {category.title}
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.tools.map((tool) => (
                  <Card
                    key={tool.name}
                    className="group border-border/50 p-5 transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 dark:hover:shadow-primary/20"
                  >
                    <h3 className="mb-2 font-semibold transition-colors group-hover:text-primary">{tool.name}</h3>
                    <p className="text-pretty text-sm italic leading-relaxed text-muted-foreground">{tool.note}</p>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 rounded-lg border border-border/50 bg-secondary/30 p-6 text-center">
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            This list evolves as I discover new tools and workflows. Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  )
}
