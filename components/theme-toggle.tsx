"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-md transition-colors hover:bg-secondary"
        aria-label="Toggle theme"
        disabled
      />
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 rounded-md transition-colors hover:bg-secondary"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 transition-transform duration-200" />
      ) : (
        <Sun className="h-4 w-4 transition-transform duration-200" />
      )}
    </Button>
  )
}
