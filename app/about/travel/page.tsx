import { Navigation } from "@/components/navigation"
import { ArrowLeft, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const countries = [
  {
    name: "England",
    size: "normal" as const,
    image: "/images/a16cc7cc-c27b-4fc2-96b1-dc448d35c96e-1-105-c.jpeg",
  },
  {
    name: "France",
    size: "normal" as const,
    image: "/images/nicebuildings.jpg",
  },
  {
    name: "Ireland",
    size: "normal" as const,
    image: "/images/35beff14-70a0-43b9-b6ee-32f4eaa3e0fd-1-105-c.jpeg",
  },
  {
    name: "Italy",
    size: "wide" as const,
    image: "/images/vaticancity.jpeg",
  },
  {
    name: "Monaco",
    size: "normal" as const,
    image: "/images/f9b28eda-4bf6-4b0a-97d2-36d736e0cf28-1-105-c.jpeg",
  },
  {
    name: "Scotland",
    size: "normal" as const,
    image: "/images/6d5d921c-806a-4444-ae39-a6f5b8f70346-1-105-c.jpeg",
  },
  {
    name: "Spain",
    size: "normal" as const,
    image: "/images/24ed2128-fffc-4d1f-a635-f46a59bce866-1-105-c.jpeg",
  },
  {
    name: "Costa Rica",
    size: "normal" as const,
    image: "/images/IMG_2638.JPG",
  },
  {
    name: "Vietnam",
    size: "wide" as const,
    image: "/images/e3867893-62b3-4f5c-bd5e-562ecaf0fdfc-1-102-o.jpeg",
  },
  {
    name: "Turks & Caicos",
    size: "normal" as const,
    image: "/images/8de63afc-5cba-4ba9-9fde-1858a5182934-1-105-c.jpeg",
  },
  {
    name: "Denmark",
    size: "normal" as const,
    image: "/Copenhagen.jpeg",
  },
  {
    name: "Finland",
    size: "normal" as const,
    image: "/Helsinki.jpeg",
  },
  {
    name: "Sweden",
    size: "normal" as const,
    image: "/Gamla%20Stan.jpeg",
  },
]

const futureDestinations: {
  name: string
  year: string
  highlight: string
  image: string
}[] = []

const travelSiteHref = "https://taylortravels.co/"

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0E1016]">
      <Navigation />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <Link href="/work#outside-the-roadmap">
          <Button variant="ghost" className="mb-8 -ml-2 gap-2">
            <ArrowLeft className="size-4" />
            Back to Outside the Roadmap
          </Button>
        </Link>

        <div className="mb-12">
          <h1 className="mb-3 text-balance text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
            Places I've Been
          </h1>
          <p className="text-pretty text-xl leading-relaxed text-muted-foreground">
            Each place shaped how I see the world.
          </p>

          <div className="relative mt-5 flex w-full items-center gap-3 overflow-hidden rounded-full border border-primary/20 bg-gradient-to-r from-primary/[0.08] via-background to-accent/[0.08] py-1.5 pl-3 pr-1.5 shadow-sm dark:border-primary/25 dark:from-primary/10 dark:via-background dark:to-accent/10 sm:gap-4 sm:py-2 sm:pl-4 sm:pr-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/10 to-transparent dark:from-primary/15" />
            <Plane className="relative z-[1] size-3.5 shrink-0 text-primary sm:size-4" aria-hidden />
            <p className="relative z-[1] min-w-0 flex-1 truncate text-xs leading-tight text-muted-foreground sm:text-sm sm:leading-snug">
              <span className="font-medium text-foreground">Travel Site</span>
              <span className="text-muted-foreground">
                {" "}
                — maps, recs, packing lists, and shareable itineraries. All crafted from my experiences.
              </span>
            </p>
            <Button
              asChild
              size="sm"
              variant="default"
              className="relative z-[1] h-7 shrink-0 rounded-full px-4 text-xs font-semibold"
            >
              <Link href={travelSiteHref} target="_blank" rel="noopener noreferrer">
                View Travel Site
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country, index) => (
            <div
              key={country.name}
              className={`relative overflow-hidden rounded-2xl ${country.size === "wide" ? "sm:col-span-2" : ""}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-accent/20 dark:via-accent/10 dark:to-accent/5" />
              <img
                src={country.image || `/.jpg?height=400&width=600&query=${encodeURIComponent(country.name)}`}
                alt={country.name}
                className={`absolute inset-0 size-full object-cover brightness-110 dark:opacity-80 dark:brightness-100 ${
                  country.name === "Sweden"
                    ? "scale-[3] [transform-origin:58%_92%] [object-position:58%_92%]"
                    : ""
                } ${
                  country.name === "Italy" ||
                  country.name === "France" ||
                  country.name === "Ireland" ||
                  country.name === "Scotland" ||
                  country.name === "Costa Rica" ||
                  country.name === "Turks & Caicos"
                    ? "object-center"
                    : ""
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
                            : country.name === "Finland"
                              ? { objectPosition: "center 38%" }
                              : country.name === "Turks & Caicos"
                                ? { objectPosition: "center 65%" }
                                : undefined
                }
              />

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 dark:from-black/80 dark:via-black/30">
                <h2 className="text-2xl font-bold text-white drop-shadow-lg">{country.name}</h2>
              </div>
            </div>
          ))}
        </div>

        {futureDestinations.length > 0 ? (
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
                  <div
                    className="absolute inset-0 bg-cover bg-center brightness-50"
                    style={{
                      backgroundImage: `url(${destination.image})`,
                      filter: "blur(20px) saturate(1.2)",
                      transform: "scale(1.1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />
                  <div className="absolute inset-0 backdrop-blur-md bg-background/50 dark:bg-background/40" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-40 dark:from-accent/10 dark:to-primary/10" />
                  <div className="relative z-10 flex h-full flex-col items-center justify-center p-6">
                    <div className="mb-2 text-center">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg dark:text-white">{destination.name}</h3>
                      <p className="mt-1 text-sm font-medium text-primary-foreground drop-shadow-md dark:text-primary-foreground">{destination.year}</p>
                    </div>
                    <div className="mt-4 rounded-lg border border-primary/30 bg-primary/30 px-4 py-2 text-sm font-medium italic text-white shadow-sm backdrop-blur-sm dark:border-accent/30 dark:bg-accent/30 dark:text-white">
                      Flights booked...
                    </div>
                    <p className="mt-3 text-center text-xs text-white/90 drop-shadow-md dark:text-white/80">{destination.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

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
