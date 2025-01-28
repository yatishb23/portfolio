"use client"

import * as React from "react"
import { Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  return (
    <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
      <Moon className="h-5 w-5" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

