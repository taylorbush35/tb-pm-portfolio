"use client"

import { Navigation } from "@/components/navigation"
import { ProductWork } from "@/components/sections/ProductWork"
import { PassionProjects } from "@/components/sections/PassionProjects"
import Image from "next/image"
import { useState } from "react"

export default function AboutPage() {
  const [expandedRole, setExpandedRole] = useState<number | null>(null)
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
              ].map((role, index) => {
                const isExpanded = expandedRole === index
                return (
                  <div 
                    key={index} 
                    className="group relative"
                    onClick={() => setExpandedRole(isExpanded ? null : index)}
                  >
                    {/* Date Stamp - Above line on desktop */}
                    <div className={`mb-8 text-xs font-medium uppercase tracking-wider transition-all duration-300 sm:mb-10 ${
                      isExpanded ? "text-foreground/70 tracking-widest" : "text-muted-foreground group-hover:text-foreground/70 group-hover:tracking-widest"
                    }`}>
                      {role.period}
                    </div>

                    {/* Timeline Dot */}
                    <div className={`absolute left-1/2 top-8 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-foreground shadow-sm transition-all duration-300 sm:block ${
                      isExpanded ? "scale-150 border-primary/50 shadow-primary/50 shadow-lg" : "border-border group-hover:scale-150 group-hover:border-primary/50 group-hover:shadow-primary/50 group-hover:shadow-lg"
                    }`} />

                    {/* Job Title & Company - Interactive element */}
                    <div className="space-y-1.5 pt-2">
                      <h3 className={`cursor-pointer text-xl font-semibold leading-tight transition-all duration-300 sm:text-2xl ${
                        isExpanded ? "translate-x-1 text-primary/90" : "text-foreground group-hover:translate-x-1 group-hover:text-primary/90"
                      }`}>
                        {role.title}
                      </h3>
                      <div className={`text-sm font-medium transition-all duration-300 ${
                        isExpanded ? "translate-x-0.5 text-foreground/80" : "text-muted-foreground group-hover:translate-x-0.5 group-hover:text-foreground/80"
                      }`}>
                        {role.company}
                      </div>
                    </div>

                    {/* Description Tooltip/Overlay - Shows on hover (desktop) or click (mobile) */}
                    <div className={`absolute left-1/2 top-full z-10 mt-6 w-full max-w-xs -translate-x-1/2 transition-all duration-300 ease-out sm:pointer-events-none sm:opacity-0 sm:group-hover:pointer-events-auto sm:group-hover:mt-8 sm:group-hover:opacity-100 ${
                      isExpanded ? "pointer-events-auto mt-8 opacity-100" : "pointer-events-none opacity-0"
                    }`}>
                      <div className="relative rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-foreground shadow-lg backdrop-blur-sm transition-all duration-300 sm:group-hover:shadow-xl dark:bg-card/95 dark:backdrop-blur-md">
                        <p className="text-pretty">{role.description}</p>
                        {/* Tooltip Arrow - Centered to align with timeline dot */}
                        <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-border bg-card dark:bg-card/95" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <ProductWork />
        <PassionProjects />

      </section>
    </div>
  )
}

