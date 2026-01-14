import { Navigation } from "@/components/navigation"
import { ToolsILove } from "@/components/sections/ToolsILove"
import { OutsideTheRoadmap } from "@/components/sections/OutsideTheRoadmap"

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
        <ToolsILove />
        <OutsideTheRoadmap />
      </div>
    </div>
  )
}
