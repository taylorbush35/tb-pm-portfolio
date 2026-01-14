import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Plane, Camera, Flag } from "lucide-react"

export function OutsideTheRoadmap() {
  return (
    <div id="outside-the-roadmap" className="relative rounded-2xl bg-muted/30 px-8 py-16 transition-all duration-500 hover:bg-muted/40 dark:bg-muted/20 dark:hover:bg-muted/30 sm:px-12 sm:py-20">
      {/* Subtle gradient overlay - enhanced purple in both modes */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 hover:opacity-100 dark:from-primary/10 dark:to-accent/10" />

      <div className="relative mb-12">
        <h2 className="text-3xl font-bold tracking-tight transition-colors duration-300 hover:text-primary/80 sm:text-4xl">
          Outside the Roadmap
        </h2>
      </div>

      <div className="relative grid gap-6 sm:grid-cols-3">
        <Link href="/about/travel" className="block">
          <Card className="group relative h-full border-border/50 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 cursor-pointer dark:hover:shadow-primary/20">
            <Plane className="mb-4 size-8 text-accent transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
            <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
              Travel Enthusiast
            </h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
              Always planning the next adventure. 9 countries and counting.
            </p>
          </Card>
        </Link>

        <Link href="/about/photography" className="block">
          <Card className="group relative h-full border-border/50 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 cursor-pointer dark:hover:shadow-primary/20">
            <Camera className="mb-4 size-8 text-accent transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
            <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
              Photography
            </h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
              Every day life and travel photography. Currently shooting on a Fujifilm X100VI.
            </p>
          </Card>
        </Link>

        <Card className="group relative h-full overflow-hidden border-border/50 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/20">
          {/* Bottom layer: Breadcrumb (hidden by default, revealed by wipe) */}
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex flex-col items-center gap-4">
              <img src="/images/mclaren.jpg" alt="McLaren" className="h-12 w-auto" />
              <div className="text-base font-medium text-primary">WDC + WCC 2025 🏆🏆</div>
            </div>
          </div>

          {/* Middle layer: Default content */}
          <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
            <Flag className="mb-4 size-8 text-accent transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
            <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
              Formula 1
            </h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
              Race weekends, McLaren colors only
            </p>
          </div>

          {/* Top layer: Wipe mask */}
          <div className="pointer-events-none absolute inset-0 z-20 translate-x-[-110%] bg-background/80 backdrop-blur-[1px] transition-transform duration-500 ease-in-out group-hover:translate-x-[110%]" />
        </Card>
      </div>
    </div>
  )
}
