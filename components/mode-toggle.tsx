"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "./theme";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
    >
      {theme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] text-white" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] text-gray-900" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}