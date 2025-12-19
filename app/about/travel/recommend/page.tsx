"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function RecommendPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    reason: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("[v0] Travel recommendation submitted:", formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-20">
          <Card className="p-8 text-center">
            <div className="mb-4 text-5xl">✨</div>
            <h1 className="mb-3 text-3xl font-bold">Thanks for the recommendation!</h1>
            <p className="mb-6 text-muted-foreground">
              I appreciate you taking the time to share your travel suggestions. I'll add it to my list!
            </p>
            <Link href="/about/travel">
              <Button className="gap-2">
                <ArrowLeft className="size-4" />
                Back to Travel
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-20">
        <Link href="/about/travel">
          <Button variant="ghost" className="mb-8 -ml-2 gap-2">
            <ArrowLeft className="size-4" />
            Back to Travel
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="mb-3 text-balance text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            Recommend a Destination
          </h1>
          <p className="text-pretty text-lg font-medium leading-relaxed text-muted-foreground">
            Got a place I should visit? Share your recommendations and why you think I'd love it.
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Taylor Bush"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="taylor@example.com"
              />
            </div>

            <div>
              <label htmlFor="country" className="mb-2 block text-sm font-medium">
                Country/City Recommendation
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="e.g., Japan, Iceland, New Zealand"
              />
            </div>

            <div>
              <label htmlFor="reason" className="mb-2 block text-sm font-medium">
                Why should I go there?
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Tell me what makes this place special, what to see, where to eat, or any insider tips..."
              />
            </div>

            <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="size-4" />
                  Send Recommendation
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
