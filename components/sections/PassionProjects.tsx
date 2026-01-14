import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

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

export function PassionProjects() {
  return (
    <div id="passion-projects" className="relative mb-24 rounded-2xl py-16 sm:py-20">
      {/* Subtle background gradient - mode specific, fades naturally */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-muted/30 via-muted/15 to-transparent dark:from-muted/20 dark:via-muted/10 dark:to-transparent" />
      {/* Subtle accent gradient overlay - enhanced purple in both modes */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/10 to-transparent dark:via-primary/10" />

      <div className="relative mb-12">
        <h2 className="mb-3 text-3xl font-bold tracking-tight transition-colors duration-300 hover:text-primary/80 sm:text-4xl">
          Passion Projects
        </h2>
        <p className="text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
          A selection of projects that feed my soul
        </p>
      </div>

      <div className="relative grid gap-6 sm:grid-cols-2">
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
  )
}
