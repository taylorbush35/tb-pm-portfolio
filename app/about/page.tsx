"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Plane, Camera, Flag, Sparkles, FileText, MessageSquare, Code2, Terminal, Bot } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="mb-24 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="mb-3 text-balance text-5xl font-bold tracking-tight transition-colors duration-300 hover:text-primary/80 lg:text-6xl">
                WHO IS TAYLOR?
              </h1>
              <p className="text-pretty text-lg font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
                Building products by bringing clarity, direction, and a steady hand to the moments that feel uncertain.
              </p>
            </div>

            <div className="space-y-4 text-pretty leading-relaxed text-foreground/90">
              <p className="transition-all duration-300 hover:text-foreground">
                I'm a Product Manager who thrives in the messy middle — where ideas meet execution, ambiguity turns into
                clarity, and cross-functional teams move toward a shared goal. I bring structure to chaos, momentum to
                stalled initiatives, and calm leadership when things get intense.
              </p>
              <p className="transition-all duration-300 hover:text-foreground">
                I've worked across startups and enterprise scale, most recently leading AI-powered HR tech at a company
                acquired by Workday. I've built features for millions of candidates, partnered closely with engineering
                and design, and shaped product strategies that drive meaningful outcomes.
              </p>
              <p className="transition-all duration-300 hover:text-foreground">
                Outside the roadmap, I'm probably planning my next trip, wandering with my camera, or hyper-fixating on
                a new hobby. I love understanding what makes people tick — and that shows up in every product decision I
                make.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="group relative h-[500px] w-[320px] overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:shadow-2xl">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <Image
                src="/images/33bb2ebb-9625-4a9e-8d13-71cdccf53777-1-105-c.jpeg"
                alt="Taylor Bush"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Professional Journey Timeline */}
        <div className="relative mb-24 rounded-2xl py-16 sm:py-20">
          {/* Subtle background gradient - mode specific, fades naturally */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-muted/30 via-muted/15 to-transparent dark:from-muted/20 dark:via-muted/10 dark:to-transparent" />
          {/* Subtle accent gradient overlay - enhanced purple in both modes */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/10 to-transparent dark:via-primary/10" />

          <div className="relative mb-16">
            <h2 className="mb-3 text-3xl font-bold tracking-tight transition-colors duration-300 hover:text-primary/80 sm:text-4xl">
              Professional Journey
            </h2>
            <p className="text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
              Building products across startups and enterprise scale
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-border sm:block" />

            {/* Timeline Items */}
            <div className="relative grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-12">
              {[
                {
                  period: "2022 — 2023",
                  title: "Senior Product Content Specialist",
                  company: "Paradox, AI",
                  description:
                    "Partnered with global enterprise clients and cross-functional teams to deliver high-quality conversational AI experiences, using performance data, KPI analysis, and customer insights to optimize workflows and shape early product direction.",
                },
                {
                  period: "2023 — 2025",
                  title: "Associate Product Manager",
                  company: "Paradox, AI",
                  description:
                    "Drove end-to-end development for conversational AI features—leading prioritization, experimentation, and user research to advance personalization, context-awareness, and early generative AI experiences.",
                },
                {
                  period: "2025 — Present",
                  title: "Product Manager",
                  company: "Workday (acquisition)",
                  description:
                    "Build and scale AI-driven product experiences by defining strategy, guiding multi-quarter roadmaps, leading discovery, and partnering across engineering and AI teams to deliver measurable improvements in performance and user experience.",
                },
              ].map((role, index) => (
                <div key={index} className="group relative">
                  {/* Date Stamp - Above line on desktop */}
                  <div className="mb-8 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-all duration-300 group-hover:text-foreground/70 group-hover:tracking-widest sm:mb-10">
                    {role.period}
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-border bg-foreground shadow-sm transition-all duration-300 group-hover:scale-150 group-hover:border-primary/50 group-hover:shadow-primary/50 group-hover:shadow-lg sm:block" />

                  {/* Job Title & Company - Interactive element */}
                  <div className="space-y-1.5 pt-2">
                    <h3 className="cursor-default text-xl font-semibold leading-tight text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary/90 sm:text-2xl">
                      {role.title}
                    </h3>
                    <div className="text-sm font-medium text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-foreground/80">
                      {role.company}
                    </div>
                  </div>

                  {/* Hover Tooltip/Overlay - Appears below on desktop, above on mobile */}
                  <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-6 w-full max-w-xs -translate-x-1/2 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:mt-8 group-hover:opacity-100">
                    <div className="relative rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-foreground shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl dark:bg-card/95 dark:backdrop-blur-md">
                      <p className="text-pretty">{role.description}</p>
                      {/* Tooltip Arrow - Centered to align with timeline dot */}
                      <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-border bg-card dark:bg-card/95" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* My Go-To Tools */}
        <div className="relative mt-24 rounded-2xl bg-muted/30 px-8 py-16 transition-all duration-500 hover:bg-muted/40 dark:bg-muted/20 dark:hover:bg-muted/30 sm:px-12 sm:py-20">
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

        <div className="relative mt-24 rounded-2xl bg-muted/30 px-8 py-16 transition-all duration-500 hover:bg-muted/40 dark:bg-muted/20 dark:hover:bg-muted/30 sm:px-12 sm:py-20">
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
      </section>
    </div>
  )
}
