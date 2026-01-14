import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: "agentic-help-assistant",
    title: "Agentic-Powered Help Assistant",
    description: "Transformed Paradox's help widget into an intelligent, task-executing AI assistant",
    tags: ["Agentic AI", "Product Strategy", "Platform Integration"],
    year: "2025",
    impact: "40% increase in adoption, 60-80% time savings on routine tasks",
  },
  {
    id: "care-onboarding-enhancement",
    title: "CMS Onboarding",
    description:
      "Unified the Care Onboarding portal into the CMS, eliminating legacy dependencies and creating a seamless knowledge base management experience",
    tags: ["Technical Debt", "Workspace Consolidation", "AI Integration"],
    year: "2024-2025",
    impact: "Unified experience, reduced onboarding time, improved user adoption",
  },
]

export function ProductWork() {
  return (
    <div id="other-cool-stuff" className="relative mb-24 rounded-2xl py-16 sm:py-20">
      {/* Subtle background gradient - mode specific, fades naturally */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-muted/30 via-muted/15 to-transparent dark:from-muted/20 dark:via-muted/10 dark:to-transparent" />
      {/* Subtle accent gradient overlay - enhanced purple in both modes */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/10 to-transparent dark:via-primary/10" />

      <div className="relative mb-12">
        <h2 className="mb-3 text-3xl font-bold tracking-tight transition-colors duration-300 hover:text-primary/80 sm:text-4xl">
          My Work
        </h2>
        <p className="text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
          A selection of products I've built, shipped, and learned from.
        </p>
      </div>

      <div className="relative grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.id} href={`/work/${project.id}`}>
            <Card className="group h-full cursor-pointer border-border/50 p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/20">
              <div className="mb-3 flex items-start justify-between">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  {project.year}
                </span>
                <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </div>

              <h3 className="mb-3 text-balance text-xl font-semibold leading-tight transition-colors group-hover:text-primary">
                {project.title}
              </h3>

              <p className="mb-4 text-pretty text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-border/50 pt-4 text-xs font-medium text-accent">{project.impact}</div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
