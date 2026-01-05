import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Mail, Linkedin, FileDown } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Ambient background layers */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Subtle radial gradient - enhanced purple effect in both modes */}
        <div className="absolute -right-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/10 dark:blur-[100px]" />
        <div className="absolute -left-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[80px] dark:bg-accent/10 dark:blur-[80px]" />
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHJlc3VsdD0ibm9pc2UiLz48ZmVDb2xvck1hdHJpeCBpbi0ibm9pc2UiIHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] opacity-30 dark:opacity-20" />
      </div>

      <Navigation />

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-0 pt-12 sm:px-8 sm:pt-16">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Left: Photo */}
          <div className="relative flex items-center justify-center py-16 lg:py-24">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/10 to-transparent dark:from-muted/15 dark:via-muted/5 dark:to-transparent" />
            <div className="group relative z-10 h-[500px] w-[400px] overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:shadow-2xl">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <Image
                src="/images/gemini-20generated-20image.png"
                alt="Taylor Bush"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col items-center justify-center space-y-8 px-8 py-16 text-center lg:px-16 lg:py-24">
            <div className="space-y-6">
              <h1 className="text-balance text-5xl font-bold tracking-tight transition-colors duration-300 hover:text-primary/80 sm:text-6xl lg:text-7xl">
                TAYLOR BUSH
              </h1>
              <p className="text-pretty text-lg font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground/80 sm:text-xl">
                Product Manager | Turning ambiguity into forward momentum
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24">
        {/* Subtle background gradient - mode specific, fades naturally */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/15 to-transparent dark:from-muted/20 dark:via-muted/10 dark:to-transparent" />
        {/* Subtle accent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent dark:via-primary/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: About content */}
            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
              <h2 className="text-balance text-4xl font-bold tracking-tight transition-colors duration-300 hover:text-primary/80 sm:text-5xl">
                ABOUT
                <br />
                TAYLOR
              </h2>
              <div className="space-y-4">
                <p className="text-pretty leading-relaxed text-foreground/90 transition-all duration-300 hover:text-foreground">
                  Strategic influence, high-pressure execution, user focus, and cross-functional leadership. I build
                  products with clarity, velocity, and just enough chaos-energy to keep things exciting.
                </p>
                <p className="text-pretty leading-relaxed text-foreground/90 transition-all duration-300 hover:text-foreground">
                  I thrive in the messy middle — where ideas meet execution, ambiguity turns into clarity, and
                  cross-functional teams move toward a shared goal.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Link
                    href="/about"
                    className="group flex flex-col items-center justify-center space-y-2 rounded-xl border-2 border-border bg-muted/30 p-4 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <p className="text-center text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                      Learn More About Me
                    </p>
                  </Link>
                  <Link
                    href="/work"
                    className="group flex flex-col items-center justify-center space-y-2 rounded-xl border-2 border-border bg-muted/30 p-4 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <p className="text-center text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                      My Work
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="flex items-center justify-center">
              <div className="group relative h-[500px] w-[400px] shrink-0 overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:shadow-2xl border border-red-500">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <Image
                  src="/images/a757fa8e-ef67-400b-85b5-839726b854fc-1-105-c.jpeg"
                  alt="Taylor Bush"
                  fill
                  sizes="(min-width: 1024px) 400px, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight transition-colors duration-300 hover:text-primary/80 sm:text-4xl">
            Always excited for the next challenge
          </h2>
          <p className="mb-8 text-pretty text-lg text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
            — or the next flight out.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="default"
              className="rounded-full px-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <a href="mailto:taylor.bush@example.com">
                <Mail className="mr-2 size-4 transition-transform duration-300 group-hover:scale-110" />
                Get in Touch
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <a href="https://www.linkedin.com/in/taylorbush35/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 size-4 transition-transform duration-300 group-hover:scale-110" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <a href="/resume.pdf" download>
                <FileDown className="mr-2 size-4 transition-transform duration-300 group-hover:scale-110" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
