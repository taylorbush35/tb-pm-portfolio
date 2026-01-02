"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Camera } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const photos = [
  {
    id: 1,
    src: "/urban-street-scene.png",
    alt: "Urban street scene",
    size: "tall",
  },
  {
    id: 2,
    src: "/travel-photography-landscape.jpg",
    alt: "Travel landscape",
    size: "wide",
  },
  {
    id: 3,
    src: "/everyday-life-candid-moment.jpg",
    alt: "Everyday moment",
    size: "square",
  },
  {
    id: 4,
    src: "/natural-light-portrait.png",
    alt: "Natural light portrait",
    size: "tall",
  },
  {
    id: 5,
    src: "/architecture-building-detail.jpg",
    alt: "Architectural detail",
    size: "wide",
  },
  {
    id: 6,
    src: "/food-photography-close-up.jpg",
    alt: "Food close-up",
    size: "square",
  },
  {
    id: 7,
    src: "/nature-outdoor-photography.jpg",
    alt: "Nature scene",
    size: "wide",
  },
  {
    id: 8,
    src: "/bw-street-scene.png",
    alt: "Street photography B&W",
    size: "tall",
  },
  {
    id: 9,
    src: "/abstract-light-shadow.jpg",
    alt: "Abstract light and shadow",
    size: "square",
  },
]

export default function PhotographyPage() {
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="mb-12">
          <Link href="/about">
            <Button variant="ghost" size="sm" className="mb-6 -ml-2">
              <ArrowLeft className="mr-2 size-4" />
              Back to About
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
        <div className="grid auto-rows-[280px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-xl bg-muted ring-1 ring-border/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:ring-primary/30
                ${photo.size === "tall" ? "row-span-2" : ""}
                ${photo.size === "wide" ? "sm:col-span-2 lg:col-span-2" : ""}
                ${photo.size === "square" ? "row-span-1" : ""}
              `}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
              onMouseEnter={() => setHoveredPhoto(photo.id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredPhoto === photo.id ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Caption on Hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-transform duration-300 ${
                  hoveredPhoto === photo.id ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <p className="text-sm font-medium">{photo.alt}</p>
              </div>
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
