import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Mail, Linkedin, FileDown } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="mx-auto max-w-7xl px-6 pb-0 pt-24 sm:px-8 sm:pt-32">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Left: Photo */}
          <div className="relative flex items-center justify-center bg-muted/30 py-16 lg:py-24">
            <div className="relative h-[500px] w-[400px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/gemini-20generated-20image.png"
                alt="Taylor Bush"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col items-center justify-center space-y-8 bg-background px-8 py-16 text-center lg:px-16 lg:py-24">
            <div className="space-y-6">
              <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">TAYLOR BUSH</h1>
              <p className="text-pretty text-lg font-medium text-muted-foreground sm:text-xl">
                Product Manager | Turning ambiguity into forward momentum
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: About content */}
            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
              <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                ABOUT
                <br />
                TAYLOR
              </h2>
              <p className="text-pretty leading-relaxed text-background/90">
                Strategic influence, high-pressure execution, user focus, and cross-functional leadership. I build
                products with clarity, velocity, and just enough chaos-energy to keep things exciting.
              </p>
              <p className="text-pretty leading-relaxed text-background/90">
                I thrive in the messy middle — where ideas meet execution, ambiguity turns into clarity, and
                cross-functional teams move toward a shared goal.
              </p>
              <div className="border-t border-background/20 pt-6">
                <div className="grid grid-cols-3 gap-4">
                  <Link
                    href="/about"
                    className="group flex flex-col items-center justify-center space-y-2 rounded-full border-2 border-background/30 p-4 transition-all hover:border-[#4527A0] hover:bg-[#4527A0]"
                  >
                    <p className="text-center text-sm font-medium text-background transition-colors">
                      Learn More About Me
                    </p>
                  </Link>
                  <Link
                    href="/work"
                    className="group flex flex-col items-center justify-center space-y-2 rounded-full border-2 border-background/30 p-4 transition-all hover:border-[#4527A0] hover:bg-[#4527A0]"
                  >
                    <p className="text-center text-sm font-medium text-background transition-colors">My Work</p>
                  </Link>
                  <Link
                    href="/tools"
                    className="group flex flex-col items-center justify-center space-y-2 rounded-full border-2 border-background/30 p-4 transition-all hover:border-[#4527A0] hover:bg-[#4527A0]"
                  >
                    <p className="text-center text-sm font-medium text-background transition-colors">Tools I Love</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="flex items-center justify-center">
              <div className="relative h-[500px] w-[400px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/a757fa8e-ef67-400b-85b5-839726b854fc-1-105-c.jpeg"
                  alt="Taylor Bush"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Always excited for the next challenge
          </h2>
          <p className="mb-8 text-pretty text-lg text-muted-foreground">— or the next flight out.</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="default" className="rounded-full px-8">
              <a href="mailto:taylor.bush@example.com">
                <Mail className="mr-2 size-4" />
                Get in Touch
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
              <a href="https://www.linkedin.com/in/taylorbush35/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 size-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
              <a href="/resume.pdf" download>
                <FileDown className="mr-2 size-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
