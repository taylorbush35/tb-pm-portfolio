import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projectData: Record<string, any> = {
  "ai-talent-intelligence": {
    title: "AI-Powered Talent Intelligence",
    year: "2022",
    role: "Lead Product Manager",
    tags: ["AI/ML", "Product Strategy", "HR Tech", "B2B"],
    hero: "/modern-dashboard-ai-interface.jpg",
    overview:
      "Led the development of a machine learning platform that revolutionized how recruiters match candidates with job opportunities. This was the flagship product that led to our acquisition by Workday.",
    challenge: `The existing matching system relied on basic keyword matching, resulting in poor candidate-job fit and frustrated users on both sides of the marketplace. Recruiters spent hours manually searching, and qualified candidates were being overlooked.`,
    solution: `Built an ML-powered matching engine that considered skills, experience, culture fit, and historical placement data. Worked with data science to develop proprietary scoring algorithms and designed the PM experience to surface insights transparently.`,
    outcome: [
      "40% increase in successful placement accuracy",
      "$2M+ in new ARR from enterprise customers",
      "Reduced time-to-match from 3 hours to 15 minutes",
      "95% recruiter satisfaction score",
    ],
    process: [
      {
        title: "Discovery & Research",
        description:
          "Conducted 30+ interviews with recruiters and hiring managers. Analyzed 50K historical placements to identify patterns.",
      },
      {
        title: "Cross-functional Alignment",
        description:
          "Partnered with Data Science, Engineering, and Design to define success metrics and feasibility constraints.",
      },
      {
        title: "Iterative Development",
        description:
          "Shipped beta to 10 customers, gathered feedback, refined algorithm. 3 major iterations before GA launch.",
      },
      {
        title: "Go-to-Market",
        description: "Collaborated with Sales and Marketing on positioning. Created training materials and demo flows.",
      },
    ],
    tools: ["Figma", "Jira", "Amplitude", "Python/Jupyter", "Tableau", "Slack"],
    reflection:
      "If I could do it again, I'd involve Sales earlier in the process. We underestimated how much education would be needed to shift customers from manual workflows to AI-assisted ones.",
  },
  "agentic-help-assistant": {
    title: "Agentic-Powered Help Assistant",
    year: "2025",
    role: "Product Manager",
    tags: ["AI/ML", "Agentic AI", "Product Strategy", "HR Tech"],
    overview:
      "Led the development of an agentic AI assistant that transformed Paradox's in-product help widget from routing-based responses into an intelligent, task-executing assistant.",
    challenge: `Rigid routing-based responses forced users to complete tasks manually, creating friction across complex workflows. Analysis of 29,000+ interactions showed demand for automation and bulk actions the system couldn't support, leading to user drop-off, eroded trust, and growing competitive pressure.`,
    solution: `Built an agentic AI assistant that executes complex workflows end-to-end via natural conversation, supporting scheduling, job and candidate management, and availability updates with secure permissions, approval flows, and real-time task visibility.`,
    outcome: [
      "40% increase in adoption rate",
      "30% increase in engagement depth",
      "60-80% time savings on routine recruiting tasks while maintaining quality standards",
      "Increased self-serve capabilities enabling users to complete complex operations without deep product knowledge",
    ],
  },
  "care-onboarding-enhancement": {
    title: "Care Onboarding Enhancement",
    year: "2024-2025",
    role: "Product Manager",
    tags: ["Product Strategy", "Enterprise", "AI Integration", "B2B"],
    overview:
      "Led the integration and enhancement of the Care Onboarding portal directly into the CMS, creating a unified experience for clients to approve and manage their knowledge bases, eliminating legacy dependencies, consolidated two separate systems into one seamless workflow, and modernized the onboarding experience as part of the Sunset Legacy Care initiative. The enhancement enabled clients to upload documents, generate AI-powered responses, and manage their entire knowledge base from a single, intuitive interface.",
    challenge: `The Care Onboarding portal existed as a separate system from the CMS, creating a fragmented and frustrating user experience. Clients had to navigate between two different databases and interfaces to approve and manage their knowledge bases, with limited functionality available in the portal. The legacy logic didn't align with the current CMS architecture, causing inconsistencies and requiring users to make changes in multiple locations.`,
    solution: `Integrated the Care Onboarding portal fully into the CMS, creating a unified publishing system that syncs changes in real-time. Built a new card/icon view as an alternative to the table view, giving users a more visual and manageable way to review responses. Integrated functionality allowing clients to upload documents and generate AI-powered Q&A responses within the same workflow. Implemented progress tracking, mass approval capabilities, and an in-app testing feature for clients to validate responses.`,
    outcome: [
      "Unified experience - Eliminated the need to navigate between separate systems, creating one seamless workflow for knowledge base management",
      "Reduced onboarding time - Streamlined the initial knowledge base setup process with integrated document upload and AI-powered response generation",
      "Improved user adoption - Clients who previously avoided the portal due to limited functionality now have full CMS capabilities in an intuitive interface",
      "Platform scalability - Consolidated legacy systems and established a foundation for future Care product enhancements",
    ],
  },
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projectData[id] || projectData["ai-talent-intelligence"]

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
        <Button asChild variant="ghost" className="mb-8 -ml-4">
          <Link href="/work">
            <ArrowLeft className="mr-2 size-4" />
            Back to Work
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{project.title}</h1>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div>
              <span className="font-medium">Year:</span> {project.year}
            </div>
            <div>
              <span className="font-medium">Role:</span> {project.role}
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Overview</h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">{project.overview}</p>
        </section>

        {id === "agentic-help-assistant" && (
          <section className="mb-12">
            <div className="overflow-hidden rounded-lg border-2 border-[#4527A0] bg-secondary/30">
              <img
                src="/images/email-20from-20taylor-20bush.gif"
                alt="Agentic AI Assistant Demo - showing the assistant interface within Paradox recruiting platform"
                className="w-full scale-[1.02]"
              />
            </div>
          </section>
        )}

        {/* The Challenge */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">The Challenge</h2>
          <Card className="border-l-4 border-l-accent bg-secondary/30 p-6">
            <p className="text-pretty leading-relaxed">{project.challenge}</p>
          </Card>
        </section>

        {/* What I Shipped */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">What I Shipped</h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">{project.solution}</p>
        </section>

        {/* The Win */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">The Win</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.outcome.map((item: string, index: number) => (
              <Card key={index} className="border-border/50 bg-accent/5 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    ✓
                  </div>
                  <p className="text-pretty pt-1 font-medium leading-relaxed">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex justify-center border-t border-border/50 pt-12">
          <Button asChild size="lg">
            <Link href="/work">
              View More Projects
              <ArrowLeft className="ml-2 size-4 rotate-180" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
