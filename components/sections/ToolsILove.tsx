import { Card } from "@/components/ui/card"
import { Sparkles, FileText, MessageSquare, Code2, Terminal, Bot } from "lucide-react"

export function ToolsILove() {
  return (
    <div id="tools" className="relative mb-24 rounded-2xl bg-muted/30 px-8 py-16 transition-all duration-500 hover:bg-muted/40 dark:bg-muted/20 dark:hover:bg-muted/30 sm:px-12 sm:py-20">
      {/* Subtle gradient overlay - enhanced purple in both modes */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 hover:opacity-100 dark:from-primary/10 dark:to-accent/10" />

      <div className="relative mb-12">
        <h2 className="text-3xl font-bold tracking-tight transition-colors duration-300 hover:text-primary/80 sm:text-4xl">
          My Go-To Tools
        </h2>
        <p className="mt-3 text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
          The tools that power my workflow and help me build better products
        </p>
      </div>

      <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { name: "ChatGPT", icon: MessageSquare, description: "Accelerating thinking, writing, and product exploration" },
          { name: "Cursor", icon: Terminal, description: "Turning ideas into working code through tight iteration" },
          { name: "V0", icon: Sparkles, description: "Rapidly prototyping interfaces and product concepts" },
          { name: "Claude", icon: Bot, description: "Deep reasoning, synthesis, and long-form clarity" },
          { name: "Notion", icon: FileText, description: "Turning ambiguity into shared understanding" },
          { name: "GitHub Copilot", icon: Code2, description: "Staying close to real-world code through hands-on exploration" },
        ].map((tool) => {
          const Icon = tool.icon
          return (
            <Card
              key={tool.name}
              className="group relative border-border/50 bg-background p-6"
            >
              <Icon className="mb-4 size-8 text-accent" />
              <h3 className="mb-2 text-lg font-semibold">
                {tool.name}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {tool.description}
              </p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
