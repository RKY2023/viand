"use client"

import type React from "react"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export function AccessibleForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    setError("")
    // Form submission logic would go here
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby={error ? "email-error" : undefined}
          aria-invalid={!!error}
          placeholder="Enter your email"
          required
        />
        {error && (
          <div id="email-error" className="text-sm text-destructive flex items-center gap-2" role="alert">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        )}
      </div>

      <Button type="submit">Subscribe</Button>
    </form>
  )
}

