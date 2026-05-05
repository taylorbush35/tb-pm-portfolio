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
  {
    id: 14,
    src: "/2DDF4C69-06C9-470D-A3CE-184AD03A35E9_1_105_c.jpeg",
    alt: "Black and white—couple kissing, reflected in a car side mirror by the sea at sunset",
    size: "tall",
  },
  {
    id: 15,
    src: "/2F428FA0-2CA1-4F32-8EFF-4CA557D79D87_4_5005_c.jpeg",
    alt: "Church dome and clock tower against a winter sky, bare branches in the foreground",
    size: "tall",
  },
  {
    id: 16,
    src: "/23241477-5C49-476C-A905-A7CA2836587C_1_105_c.jpeg",
    alt: "Gallery wall of framed black-and-white photographs in spotlit exhibition space",
    size: "wide",
  },
  {
    id: 17,
    src: "/A1E2339E-124C-4F5B-891F-1AE8E77882B9_4_5005_c.jpeg",
    alt: "Waterfront restaurant patio at dusk, set table and calm water",
    size: "wide",
  },
  {
    id: 18,
    src: "/523349DD-A658-4D8B-B5BA-94262F5094E5_4_5005_c.jpeg",
    alt: "Helsinki Cathedral neoclassical façade and green dome against deep blue sky",
    size: "tall",
  },
  {
    id: 19,
    src: "/9EBE10E6-AB81-4578-ABC8-602D72B34FF8_4_5005_c.jpeg",
    alt: "Motion-blurred cyclist on a European street beside classic apartment architecture",
    size: "tall",
  },
  {
    id: 20,
    src: "/62DB4156-7981-433E-9ECD-B61990B75CA9_4_5005_c.jpeg",
    alt: "Rocky shoreline at dusk, calm water and soft pink horizon",
    size: "tall",
  },
  {
    id: 21,
    src: "/750922D8-2BB6-4886-A7BD-24B8E9BB8086_4_5005_c.jpeg",
    alt: "Frederik's Church marble dome and Copenhagen street scene",
    size: "tall",
  },
  {
    id: 22,
    src: "/B14BC221-D781-45F8-92A9-308859867B5E_4_5005_c.jpeg",
    alt: "Historic red-brick gabled building on the waterfront, low angle from the water",
    size: "tall",
  },
  {
    id: 23,
    src: "/B74769AA-5EED-45F9-A88E-0600E4209BA1_4_5005_c.jpeg",
    alt: "Boats in a European harbor, gabled buildings and masts under a soft overcast sky",
    size: "tall",
  },
  {
    id: 24,
    src: "/DDE2231E-E7ED-41BD-87FB-27DFAE4894E7_4_5005_c.jpeg",
    alt: "Nyhavn, Copenhagen—colorful townhouses, boats, and canal on a bright day",
    size: "tall",
  },
]

export default function PhotographyPage() {
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
