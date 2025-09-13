import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

export function Container({ children, className, size = "lg" }: ContainerProps) {
  const getMaxWidth = () => {
    switch (size) {
      case "sm":
        return "max-w-screen-sm"
      case "md":
        return "max-w-screen-md"
      case "lg":
        return "max-w-screen-lg"
      case "xl":
        return "max-w-screen-xl"
      case "full":
        return "max-w-full"
      default:
        return "max-w-screen-lg"
    }
  }

  return <div className={cn("mx-auto px-4 sm:px-6 w-full", getMaxWidth(), className)}>{children}</div>
}

