"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export default function Breadcrumb() {
  const pathname = usePathname()

  // Skip rendering breadcrumbs on homepage
  if (pathname === "/") return null

  // Create breadcrumb segments
  const segments = (pathname?.split("/").filter(Boolean)) || []

  // Generate human-readable names and paths
  const breadcrumbs = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`

    // Convert slug to readable text (e.g., "mens-fashion" to "Men's Fashion")
    const name = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    // Special case for product IDs
    const isProductId = segment.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)
    const displayName = isProductId ? "Product Details" : name

    return { name: displayName, path }
  })

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link href="/" className="text-muted-foreground hover:text-foreground flex items-center" aria-label="Home">
            <Home className="h-4 w-4" />
          </Link>
        </li>

        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1

          return (
            <li key={breadcrumb.path} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" aria-hidden="true" />
              {isLast ? (
                <span aria-current="page" className="font-medium">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link href={breadcrumb.path} className="text-muted-foreground hover:text-foreground">
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

