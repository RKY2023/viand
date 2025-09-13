import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface CategoryCardProps {
  name: string
  image: string
  href: string
}

export default function CategoryCard({ name, image, href }: CategoryCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden group h-full">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg?height=400&width=400"}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-xl font-bold">{name}</h3>
          </div>
        </div>
      </Card>
    </Link>
  )
}

