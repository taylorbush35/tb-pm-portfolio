"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Camera } from "lucide-react"
import Link from "next/link"

const photos = [
  {
    id: 1,
    src: "/images/IMG_1040.JPG",
    alt: "Photography",
    size: "tall", // Vertical: 4000x6000
  },
  {
    id: 2,
    src: "/images/DSCF0118.jpg",
    alt: "Photography",
    size: "tall", // Horizontal: 2976x1984 (displayed as vertical)
  },
  {
    id: 3,
    src: "/images/DSCF0443.jpg",
    alt: "Photography",
    size: "tall", // Horizontal: 2976x1984 (displayed as vertical)
  },
  {
    id: 4,
    src: "/images/IMG_0943.jpeg",
    alt: "Photography",
    size: "tall", // Vertical: 4284x5712
  },
  {
    id: 5,
    src: "/images/IMG_1051.JPG",
    alt: "Photography",
    size: "tall", // Horizontal: 6000x4000 (displayed as vertical)
  },
  {
    id: 6,
    src: "/images/DSCF0124.jpg",
    alt: "Photography",
    size: "tall", // Horizontal: 2976x1984 (displayed as vertical)
  },
  {
    id: 7,
    src: "/images/DSCF0422.jpg",
    alt: "Photography",
    size: "tall", // Horizontal: 2976x1984 (displayed as vertical)
  },
  {
    id: 8,
    src: "/images/IMG_1038.JPG",
    alt: "Photography",
    size: "tall", // Vertical: 4000x6000
  },
  {
    id: 9,
    src: "/images/DSCF0431.jpg",
    alt: "Photography",
    size: "tall", // Horizontal: 2976x1984 (displayed as vertical)
  },
  {
    id: 10,
    src: "/images/DSCF0447.jpg",
    alt: "Photography",
    size: "tall", // Horizontal: 2976x1984 (displayed as vertical)
  },
  {
    id: 11,
    src: "/images/IMG_1043.JPG",
    alt: "Photography",
    size: "wide", // Horizontal: 6000x4000
  },
  {
    id: 12,
    src: "/images/8F4AADAE-58BD-420B-99F5-6E2F049F6810_1_105_c.jpeg",
    alt: "Photography",
    size: "wide", // Horizontal
  },
  {
    id: 13,
    src: "/images/205D9220-5E79-4EC7-9921-8EAEF26ED468_1_105_c.jpeg",
    alt: "Photography",
    size: "tall", // Horizontal (displayed as vertical)
  },
]

export default function PhotographyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="mb-12">
          <Link href="/work#outside-the-roadmap">
            <Button variant="ghost" size="sm" className="mb-6 -ml-2">
              <ArrowLeft className="mr-2 size-4" />
              Back to Outside the Roadmap
            </Button>
          </Link>

          <div className="mb-8 flex items-start gap-6">
            <div className="rounded-2xl bg-gradient-to-br from-accent/10 to-purple-500/10 p-4">
              <Camera className="size-10 text-accent" />
            </div>
            <div>
              <h1 className="mb-3 text-balance text-4xl font-bold tracking-tight lg:text-5xl">Photography</h1>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Capturing everyday moments and travel adventures. Currently shooting on a Fujifilm X100VI — a camera
                that feels as good as the images it creates.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Masonry-style Grid */}
        <div className="grid auto-rows-[200px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`relative overflow-hidden rounded-xl bg-muted ring-1 ring-border/50
                ${photo.size === "tall" ? "row-span-2" : ""}
                ${photo.size === "wide" ? "sm:col-span-2 lg:col-span-2" : ""}
                ${photo.size === "square" ? "row-span-1" : ""}
              `}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="size-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Shot on Fujifilm X100VI • All photos taken during everyday life and travels
          </p>
        </div>
      </div>
    </div>
  )
}
