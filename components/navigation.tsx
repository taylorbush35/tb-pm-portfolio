"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/work", label: "Other Cool Stuff" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b border-primary/20 bg-background/90 backdrop-blur-lg">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight transition-colors hover:text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            TB
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-4 py-2 text-sm font-medium transition-all hover:bg-primary/20 hover:text-primary",
                    pathname === item.href && "bg-primary/10 text-primary font-semibold shadow-sm shadow-primary/20",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
