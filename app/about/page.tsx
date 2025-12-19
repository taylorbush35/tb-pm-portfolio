"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Plane, Camera, Flag, ChevronDown, Sparkles } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const [expandedCards, setExpandedCards] = useState<number[]>([])

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

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

        <div className="mb-24 rounded-2xl bg-foreground px-8 py-16 text-background sm:px-12 sm:py-20">
          <div className="mb-12">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Professional Journey</h2>
            <p className="text-background/70">Building products across startups and enterprise scale</p>
          </div>

          <div className="space-y-4">
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
            ].map((role, index) => {
              const isExpanded = expandedCards.includes(index)

              return (
                <Card
                  key={index}
                  className="group relative cursor-pointer overflow-hidden border-background/20 bg-background/10 transition-all hover:bg-background/20 hover:shadow-md"
                  onClick={() => toggleCard(index)}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-purple-500 opacity-60 transition-opacity group-hover:opacity-100" />

                  <div className="p-6 pl-8">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                          {role.period}
                        </div>
                        <h3 className="mb-1 text-xl font-bold text-background">{role.title}</h3>
                        <div className="font-medium text-background/70">{role.company}</div>
                      </div>
                      <ChevronDown
                        className={`size-5 flex-shrink-0 text-background/60 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`grid transition-all duration-200 ${
                        isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-pretty leading-relaxed text-background/80">{role.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
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
