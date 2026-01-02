"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Plane, Camera, Flag, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="mb-24 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="mb-3 text-balance text-5xl font-bold tracking-tight lg:text-6xl">WHO IS TAYLOR?</h1>
              <p className="text-pretty text-lg font-medium text-muted-foreground">
                Building products by bringing clarity, direction, and a steady hand to the moments that feel uncertain.
              </p>
            </div>

            <div className="space-y-4 text-pretty leading-relaxed text-foreground/90">
              <p>
                I'm a Product Manager who thrives in the messy middle — where ideas meet execution, ambiguity turns into
                clarity, and cross-functional teams move toward a shared goal. I bring structure to chaos, momentum to
                stalled initiatives, and calm leadership when things get intense.
              </p>
              <p>
                I've worked across startups and enterprise scale, most recently leading AI-powered HR tech at a company
                acquired by Workday. I've built features for millions of candidates, partnered closely with engineering
                and design, and shaped product strategies that drive meaningful outcomes.
              </p>
              <p>
                Outside the roadmap, I'm probably planning my next trip, wandering with my camera, or hyper-fixating on
                a new hobby. I love understanding what makes people tick — and that shows up in every product decision I
                make.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-[500px] w-[320px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/33bb2ebb-9625-4a9e-8d13-71cdccf53777-1-105-c.jpeg"
                alt="Taylor Bush"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Professional Journey Timeline */}
        <div className="mb-24 pt-8">
          <div className="mb-16">
            <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Professional Journey</h2>
            <p className="text-muted-foreground">Building products across startups and enterprise scale</p>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-border sm:block" />

            {/* Timeline Items */}
            <div className="relative grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-12">
              {[
                {
                  period: "2025 — Present",
                  title: "Product Manager",
                  company: "Workday (acquisition)",
                  description:
                    "Build and scale AI-driven product experiences by defining strategy, guiding multi-quarter roadmaps, leading discovery, and partnering across engineering and AI teams to deliver measurable improvements in performance and user experience.",
                },
                {
                  period: "2023 — 2025",
                  title: "Associate Product Manager",
                  company: "Paradox, AI",
                  description:
                    "Drove end-to-end development for conversational AI features—leading prioritization, experimentation, and user research to advance personalization, context-awareness, and early generative AI experiences.",
                },
                {
                  period: "2022 — 2023",
                  title: "Senior Product Content Specialist",
                  company: "Paradox, AI",
                  description:
                    "Partnered with global enterprise clients and cross-functional teams to deliver high-quality conversational AI experiences, using performance data, KPI analysis, and customer insights to optimize workflows and shape early product direction.",
                },
              ].map((role, index) => (
                <div key={index} className="group relative">
                  {/* Date Stamp - Above line on desktop */}
                  <div className="mb-8 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:mb-10">
                    {role.period}
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-border bg-foreground transition-all duration-200 group-hover:scale-150 group-hover:border-primary/50 sm:block" />

                  {/* Job Title & Company - Interactive element */}
                  <div className="space-y-1.5 pt-2">
                    <h3 className="cursor-default text-xl font-semibold leading-tight text-foreground transition-colors duration-200 group-hover:text-primary/90 sm:text-2xl">
                      {role.title}
                    </h3>
                    <div className="text-sm font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">
                      {role.company}
                    </div>
                  </div>

                  {/* Hover Tooltip/Overlay - Appears below on desktop, above on mobile */}
                  <div className="pointer-events-none absolute left-0 top-full z-10 mt-6 w-full max-w-xs opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:mt-8 group-hover:opacity-100 sm:left-1/2 sm:-translate-x-1/2">
                    <div className="relative rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-foreground shadow-lg backdrop-blur-sm">
                      <p className="text-pretty">{role.description}</p>
                      {/* Tooltip Arrow */}
                      <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-border bg-card" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-muted/30 px-8 py-16 sm:px-12 sm:py-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Outside the Roadmap</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <Link href="/about/travel" className="block">
              <Card className="group relative h-full border-border/50 bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                <Plane className="mb-4 size-8 text-accent transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-lg font-semibold">Travel Enthusiast</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  Always planning the next adventure. 9 countries and counting.
                </p>
              </Card>
            </Link>

            <Link href="/about/photography" className="block">
              <Card className="group relative h-full border-border/50 bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                <Camera className="mb-4 size-8 text-accent transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-lg font-semibold">Photography</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  Every day life and travel photography. Currently shooting on a Fujifilm X100VI.
                </p>
              </Card>
            </Link>

            <Card className="group relative h-full border-border/50 bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute -top-3 left-4 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent/90 to-purple-500/90 px-3 py-1 text-xs font-medium text-white shadow-md">
                <Sparkles className="size-3" />
                <span>My current hyperfixation</span>
              </div>
              <Flag className="mb-4 size-8 text-accent transition-transform group-hover:scale-110" />
              <h3 className="mb-2 text-lg font-semibold">F1 Fanatic</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Sunday mornings are for race weekends. Team McLaren since the Häkkinen days.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
