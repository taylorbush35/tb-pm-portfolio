import Link from "next/link"
import { Navigation } from "@/components/navigation"
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
    title: "Care Onboarding Enhancement",
    description:
      "Unified the Care Onboarding portal into the CMS, eliminating legacy dependencies and creating a seamless knowledge base management experience",
    tags: ["Technical Debt", "Workspace Consolidation", "AI Integration"],
    year: "2024-2025",
    impact: "Unified experience, reduced onboarding time, improved user adoption",
  },
]

const passionProjects = [
  {
    id: "passion-project-1",
    title: "Passion Project 1",
    description: "A side project that explores creative problem solving",
    tags: ["Personal", "Learning"],
    year: "2024",
    impact: "Built for fun and learning",
  },
  {
    id: "passion-project-2",
    title: "Passion Project 2",
    description: "Another side project exploring new technologies",
    tags: ["Experimentation", "Design"],
    year: "2024",
    impact: "Exploring new approaches",
  },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="mb-12 space-y-4">
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">My Work</h1>
          <p className="text-pretty text-xl leading-relaxed text-muted-foreground">
            A selection of products I've built, shipped, and learned from.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.id} href={`/work/${project.id}`}>
              <Card className="group h-full cursor-pointer border-border/50 p-6 transition-all hover:border-accent/50 hover:shadow-lg">
                <div className="mb-3 flex items-start justify-between">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {project.year}
                  </span>
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                </div>

                <h3 className="mb-3 text-balance text-xl font-semibold leading-tight transition-colors group-hover:text-accent">
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

        <div className="mt-24 space-y-12">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Passion Projects
            </h2>
            <p className="text-pretty text-xl leading-relaxed text-muted-foreground">
              A selection of projects that feed my soul
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {passionProjects.map((project) => (
              <div key={project.id} className="relative">
                <Card className="h-full border-border/50 p-6 overflow-hidden">
                  <div className="blur-sm">
                    <div className="mb-3 flex items-start justify-between">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                        {project.year}
                      </span>
                      <ArrowRight className="size-4 text-muted-foreground" />
                    </div>

                    <h3 className="mb-3 text-balance text-xl font-semibold leading-tight">{project.title}</h3>

                    <p className="mb-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-border/50 pt-4 text-xs font-medium text-accent">
                      {project.impact}
                    </div>
                  </div>
                </Card>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-xl bg-background/95 px-8 py-4 shadow-lg backdrop-blur-sm">
                    <p className="text-center text-lg font-bold tracking-wide">COMING SOON</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
