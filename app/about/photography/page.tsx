"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Camera } from "lucide-react"
import Link from "next/link"

const photos: { id: number; src: string; alt: string }[] = [
  { id: 1, src: "/images/IMG_1040.JPG", alt: "Photography" },
  { id: 2, src: "/images/DSCF0118.jpg", alt: "Photography" },
  { id: 3, src: "/images/DSCF0443.jpg", alt: "Photography" },
  { id: 4, src: "/images/IMG_0943.jpeg", alt: "Photography" },
  { id: 5, src: "/images/IMG_1051.JPG", alt: "Photography" },
  { id: 6, src: "/images/DSCF0124.jpg", alt: "Photography" },
  { id: 7, src: "/images/DSCF0422.jpg", alt: "Photography" },
  { id: 8, src: "/images/IMG_1038.JPG", alt: "Photography" },
  { id: 9, src: "/images/DSCF0431.jpg", alt: "Photography" },
  { id: 10, src: "/images/DSCF0447.jpg", alt: "Photography" },
  { id: 11, src: "/images/IMG_1043.JPG", alt: "Photography" },
  { id: 12, src: "/images/8F4AADAE-58BD-420B-99F5-6E2F049F6810_1_105_c.jpeg", alt: "Photography" },
  { id: 13, src: "/images/205D9220-5E79-4EC7-9921-8EAEF26ED468_1_105_c.jpeg", alt: "Photography" },
  {
    id: 14,
    src: "/2DDF4C69-06C9-470D-A3CE-184AD03A35E9_1_105_c.jpeg",
    alt: "Black and white—couple kissing, reflected in a car side mirror by the sea at sunset",
  },
  {
    id: 15,
    src: "/2F428FA0-2CA1-4F32-8EFF-4CA557D79D87_4_5005_c.jpeg",
    alt: "Church dome and clock tower against a winter sky, bare branches in the foreground",
  },
  {
    id: 16,
    src: "/23241477-5C49-476C-A905-A7CA2836587C_1_105_c.jpeg",
    alt: "Gallery wall of framed black-and-white photographs in spotlit exhibition space",
  },
  {
    id: 17,
    src: "/A1E2339E-124C-4F5B-891F-1AE8E77882B9_4_5005_c.jpeg",
    alt: "Waterfront restaurant patio at dusk, set table and calm water",
  },
  {
    id: 18,
    src: "/523349DD-A658-4D8B-B5BA-94262F5094E5_4_5005_c.jpeg",
    alt: "Helsinki Cathedral neoclassical façade and green dome against deep blue sky",
  },
  {
    id: 19,
    src: "/9EBE10E6-AB81-4578-ABC8-602D72B34FF8_4_5005_c.jpeg",
    alt: "Motion-blurred cyclist on a European street beside classic apartment architecture",
  },
  {
    id: 20,
    src: "/62DB4156-7981-433E-9ECD-B61990B75CA9_4_5005_c.jpeg",
    alt: "Rocky shoreline at dusk, calm water and soft pink horizon",
  },
  {
    id: 21,
    src: "/750922D8-2BB6-4886-A7BD-24B8E9BB8086_4_5005_c.jpeg",
    alt: "Frederik's Church marble dome and Copenhagen street scene",
  },
  {
    id: 22,
    src: "/B14BC221-D781-45F8-92A9-308859867B5E_4_5005_c.jpeg",
    alt: "Historic red-brick gabled building on the waterfront, low angle from the water",
  },
  {
    id: 23,
    src: "/B74769AA-5EED-45F9-A88E-0600E4209BA1_4_5005_c.jpeg",
    alt: "Boats in a European harbor, gabled buildings and masts under a soft overcast sky",
  },
  {
    id: 24,
    src: "/DDE2231E-E7ED-41BD-87FB-27DFAE4894E7_4_5005_c.jpeg",
    alt: "Nyhavn, Copenhagen—colorful townhouses, boats, and canal on a bright day",
  },
]

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="mx-auto max-w-screen-2xl px-3 py-16 sm:px-4 sm:py-20 lg:px-5">
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

        <div className="columns-1 [column-gap:1rem] sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
          {photos.map((photo, index) => (
            <div key={photo.id} className="mb-4 break-inside-avoid">
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="h-auto w-full rounded-xl object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                loading={index < 6 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Shot on Fujifilm X100VI • All photos taken during everyday life and travels
          </p>
        </div>
      </div>
    </div>
  )
}
