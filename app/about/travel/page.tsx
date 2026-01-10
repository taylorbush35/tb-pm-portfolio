"use client"

import { Navigation } from "@/components/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function TravelPage() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const countries = [
    {
      name: "England",
      visits: "2024",
      highlight: "London, Oxford",
      reflection: "Where old-world charm meets relentless ambition. Every corner tells a story.",
      size: "normal",
      image: "/images/a16cc7cc-c27b-4fc2-96b1-dc448d35c96e-1-105-c.jpeg",
    },
    {
      name: "France",
      visits: "2024",
      highlight: "Antibes, Nice, Nimes",
      reflection: "Slowed down, soaked it in. The art of living well isn't rushed.",
      size: "normal",
      image: "/images/nicebuildings.jpg",
    },
    {
      name: "Ireland",
      visits: "2024",
      highlight: "Dublin, Galway",
      reflection: "Green hills, warm people, endless stories. A place that feels like home.",
      size: "normal",
      image: "/images/35beff14-70a0-43b9-b6ee-32f4eaa3e0fd-1-105-c.jpeg",
    },
    {
      name: "Italy",
      visits: "2024",
      highlight: "Rome, Florence, Orvieto, Pisa, Cinque Terre",
      reflection: "History layered on history. Every meal, every piazza — pure magic.",
      size: "wide",
      image: "/images/vaticancity.jpeg",
    },
    {
      name: "Monaco",
      visits: "2024",
      highlight: "Monte Carlo",
      reflection: "Opulence, precision, and the hum of F1 engines. A dream realized.",
      size: "normal",
      image: "/images/f9b28eda-4bf6-4b0a-97d2-36d736e0cf28-1-105-c.jpeg",
    },
    {
      name: "Scotland",
      visits: "2024",
      highlight: "Edinburgh, Inverness",
      reflection: "Rugged beauty and quiet strength. The landscapes speak louder than words.",
      size: "normal",
      image: "/images/6d5d921c-806a-4444-ae39-a6f5b8f70346-1-105-c.jpeg",
    },
    {
      name: "Spain",
      visits: "2024",
      highlight: "Barcelona",
      reflection: "Vibrant, unapologetic energy. Architecture that makes you stop and stare.",
      size: "normal",
      image: "/images/24ed2128-fffc-4d1f-a635-f46a59bce866-1-105-c.jpeg",
    },
    {
      name: "Costa Rica",
      visits: "2017",
      highlight: "Guanacaste Province",
      reflection: "Where the adventure started. Pura vida became more than a phrase.",
      size: "normal",
      image: "/images/IMG_2638.JPG",
    },
    {
      name: "Vietnam",
      visits: "2024",
      highlight: "Ho Chi Minh City, Da Nang, Hoi An",
      reflection: "Chaos and calm coexisting beautifully. Every moment was a lesson in resilience.",
      size: "wide",
      image: "/images/e3867893-62b3-4f5c-bd5e-562ecaf0fdfc-1-102-o.jpeg",
    },
    {
      name: "Turks & Caicos",
      visits: "2022",
      highlight: "Caribbean paradise",
      reflection: "Turquoise water, white sand, pure reset. Sometimes you just need to breathe.",
      size: "normal",
      image: "/images/8de63afc-5cba-4ba9-9fde-1858a5182934-1-105-c.jpeg",
    },
  ]

  const futureDestinations = [
    { 
      name: "Denmark", 
      year: "2026", 
      highlight: "Copenhagen, Nordic design & culture",
      image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80"
    },
    { 
      name: "Finland", 
      year: "2026", 
      highlight: "Helsinki, Lapland & Northern Lights",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80"
    },
    { 
      name: "Sweden", 
      year: "2026", 
      highlight: "Stockholm, Gothenburg & archarchipelago",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
    },
  ]

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0E1016]">
      <Navigation />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <Link href="/about">
          <Button variant="ghost" className="mb-8 -ml-2 gap-2">
            <ArrowLeft className="size-4" />
            Back to About
          </Button>
        </Link>

        <div className="mb-12">
          <h1 className="mb-3 text-balance text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
            Places I've Been
          </h1>
          <p className="text-pretty text-xl leading-relaxed text-muted-foreground">
            Each place shaped how I see the world.
          </p>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country, index) => (
            <div
              key={country.name}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/30 ${
                country.size === "wide" ? "sm:col-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredCountry(country.name)}
              onMouseLeave={() => setHoveredCountry(null)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Background image with lighter gradient overlay for light mode */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-accent/20 dark:via-accent/10 dark:to-accent/5" />
              <img
                src={country.image || `/.jpg?height=400&width=600&query=${encodeURIComponent(country.highlight)}`}
                alt={country.name}
                className={`absolute inset-0 size-full object-cover brightness-110 transition-all duration-500 group-hover:scale-110 group-hover:brightness-105 dark:opacity-80 dark:brightness-100 dark:group-hover:opacity-60 ${
                  country.name === "Italy" || country.name === "France" || country.name === "Ireland" || country.name === "Scotland" || country.name === "Costa Rica" || country.name === "Turks & Caicos" ? "object-center" : ""
                }`}
                style={
                  country.name === "Italy"
                    ? { objectPosition: "center 25%" }
                    : country.name === "France"
                      ? { objectPosition: "center 75%" }
                      : country.name === "Ireland"
                        ? { objectPosition: "center 75%" }
                        : country.name === "Scotland"
                          ? { objectPosition: "center 75%" }
                          : country.name === "Costa Rica"
                            ? { objectPosition: "center 30%" }
                            : country.name === "Turks & Caicos"
                              ? { objectPosition: "center 65%" }
                              : undefined
                }
              />

              {/* Always visible info with lighter gradient in light mode */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 dark:from-black/80 dark:via-black/40">
                <h2 className="text-2xl font-bold text-white drop-shadow-lg">{country.name}</h2>
                <p className="mt-1 text-sm font-medium text-white/90 drop-shadow-md dark:text-white/80">{country.visits}</p>
              </div>

              {/* Reflection overlay (appears on hover) */}
              <div
                className={`absolute inset-0 flex flex-col justify-center bg-black/90 p-6 transition-opacity duration-300 dark:bg-black/85 ${
                  hoveredCountry === country.name ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-balance text-lg italic italic-relaxed text-white">{country.reflection}</p>
                <p className="mt-4 text-sm font-medium text-white/70 dark:text-white/60">{country.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="mb-10">
            <h2 className="mb-3 text-balance text-4xl font-bold leading-tight tracking-tight">Where to next?</h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Dreaming up the next adventure. Scandinavia is calling.
            </p>
          </div>

          <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-3">
            {futureDestinations.map((destination, index) => (
              <div
                key={destination.name}
                className="group relative overflow-hidden rounded-2xl border-2 border-dashed border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 dark:border-accent/30 dark:hover:border-accent/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Blurred background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center brightness-50"
                  style={{
                    backgroundImage: `url(${destination.image})`,
                    filter: "blur(20px) saturate(1.2)",
                    transform: "scale(1.1)",
                  }}
                />
                {/* Blur overlay for extra blur effect */}
                <div className="absolute inset-0 backdrop-blur-md bg-background/40 dark:bg-background/30" />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-60 dark:from-accent/10 dark:to-primary/10" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center p-6">
                  <div className="mb-2 text-center">
                    <h3 className="text-xl font-bold text-foreground drop-shadow-lg dark:text-foreground">{destination.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary drop-shadow-md dark:text-accent">{destination.year}</p>
                  </div>
                  <div className="mt-4 rounded-lg bg-primary/20 backdrop-blur-sm px-4 py-2 text-sm font-medium italic text-primary drop-shadow-md dark:bg-accent/20 dark:text-accent">
                    Flights booked...
                  </div>
                  <p className="mt-3 text-center text-xs text-foreground/90 drop-shadow-sm dark:text-foreground/80">{destination.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-2xl bg-gradient-to-r from-accent/10 via-accent/5 to-transparent p-8 text-center shadow-sm">
          <p className="text-pretty text-lg font-medium leading-relaxed">
            Where should I go to next? Let me know your recommendations{" "}
            <Link
              href="/about/travel/recommend"
              className="font-bold text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
