import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, Plane } from "lucide-react"

type PassionProject = {
  id: string
  title: string
  description: string
  year: string
  impact: string
  liveUrl?: string
  /** Shown unblurred with a WIP status bar while the build is active */
  status?: "in-flight"
}

const passionProjects: PassionProject[] = [
  {
    id: "passion-project-1",
    title: "F1 2026 Interactive Calendar",
    description: "An interactive Formula 1 race calendar that makes complex season data easy to explore. Built with a product-first mindset, prioritizing clarity and fan experience.",
    year: "2026",
    impact: "Built for fun and learning",
    liveUrl: "https://tracksidebytaylor.co/",
  },
  {
    id: "passion-project-2",
    title: "Travel Site",
    description:
      "A shareable travel site that turns places I've been into one guide—maps, recommendations, and packing. Built with a product-first mindset, prioritizing clarity and reuse.",
    year: "2026",
    impact: "Shipping one destination at a time",
    liveUrl: "https://taylortravels.co/",
    status: "in-flight",
  },
]

export function PassionProjects() {
  return (
    <div id="passion-projects" className="relative mb-8 rounded-2xl py-16 sm:py-20">
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
        {passionProjects.map((project) => {
          const isCaseStudy = project.id === "passion-project-1"

          if (isCaseStudy) {
            return (
              <div key={project.id} className="relative h-full min-h-0">
                <Link href={`/work/${project.id}`} className="block h-full min-h-0">
                  <Card className="group flex h-full min-h-0 cursor-pointer flex-col border-border/50 p-3 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/20">
                    <div className="mb-1.5 flex items-start justify-between">
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {project.year}
                      </span>
                      <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    </div>

                    <h3 className="mb-1 text-balance text-lg font-semibold leading-tight transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>

                    <p className="mb-2 min-h-0 flex-1 text-pretty text-sm leading-snug text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="border-t border-border/50 pt-2 mb-0 text-xs font-medium text-accent">
                      {project.impact}
                    </div>

                    {project.liveUrl && (
                      <div onClick={(e) => e.stopPropagation()} className="-mt-2.5">
                        <Button
                          asChild
                          variant="default"
                          size="sm"
                          className="h-7 w-full justify-between text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/80"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/btn">
                            <span>View Live Calendar</span>
                            <ArrowUpRight className="ml-1.5 size-3 opacity-70 transition-opacity group-hover/btn:opacity-100" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </Card>
                </Link>
              </div>
            )
          }

          if (project.status === "in-flight") {
            return (
              <Card key={project.id} className="flex h-full min-h-0 flex-col border-border/50 p-3">
                <div className="mb-1.5 flex items-start justify-between">
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <h3 className="mb-1 text-balance text-lg font-semibold leading-tight">{project.title}</h3>

                <p className="mb-2 min-h-0 flex-1 text-pretty text-sm leading-snug text-muted-foreground">{project.description}</p>

                <div className="border-t border-border/50 pt-2 mb-0 text-xs font-medium text-accent">
                  {project.impact}
                </div>

                {project.liveUrl ? (
                  <div className="-mt-2.5">
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="h-7 w-full justify-between text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/80"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/btn">
                        <span>View Travel Site</span>
                        <Plane className="ml-1.5 size-3 opacity-70 transition-opacity group-hover/btn:opacity-100" aria-hidden />
                      </a>
                    </Button>
                  </div>
                ) : (
                  <div className="-mt-2.5">
                    <div
                      role="status"
                      aria-label="Work in progress"
                      className="pointer-events-none flex h-7 w-full cursor-default select-none items-center justify-between rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground shadow-sm"
                    >
                      <span className="min-w-0 truncate pr-2 text-left">This flight will take off soon.</span>
                      <Plane className="size-3 shrink-0 opacity-70" aria-hidden />
                    </div>
                  </div>
                )}
              </Card>
            )
          }

          // Other projects show coming soon
          return (
            <div key={project.id} className="relative">
              <Card className="h-full border-border/50 p-3 overflow-hidden">
                <div className="blur-sm">
                  <div className="mb-1.5 flex items-start justify-between">
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {project.year}
                    </span>
                    <ArrowRight className="size-3.5 text-muted-foreground" />
                  </div>

                  <h3 className="mb-1 text-balance text-lg font-semibold leading-tight">{project.title}</h3>

                  <p className="mb-2 text-pretty text-sm leading-snug text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="border-t border-border/50 pt-2 mb-2 text-xs font-medium text-accent">
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
          )
        })}
      </div>
    </div>
  )
}
