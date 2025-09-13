"use client";
import type React from "react"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { toast } from "sonner";

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  rating: number
  discount?: number
  isNew?: boolean
}

export default function ProductCard({ id, name, price, image, category, rating, discount, isNew }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    toast("Added to cart", {
      description: `${name} has been added to your cart.`,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsWishlisted(!isWishlisted)

    // toast({
    //   title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
    //   description: `${name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    // })
  }

  // Format price with currency
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price)

  // Calculate discounted price if applicable
  const discountedPrice = discount
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price * (1 - discount / 100))
    : null

  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <Link href={`/product/${id}`} className="flex-1 flex flex-col">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg?height=400&width=400"}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />

          {/* Product badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {isNew && <Badge className="bg-green-500 hover:bg-green-600">New</Badge>}
            {discount && <Badge className="bg-red-500 hover:bg-red-600">{discount}% OFF</Badge>}
          </div>

          {/* Quick action buttons */}
          <div className="absolute top-2 right-2">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleToggleWishlist}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
          </div>
        </div>

        <CardContent className="p-4 flex-1">
          <div className="text-sm text-muted-foreground mb-1">{category}</div>
          <h3 className="font-medium mb-1 line-clamp-2">{name}</h3>

          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">({rating})</span>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div>
            {discountedPrice ? (
              <div className="flex items-center gap-2">
                <span className="font-semibold">{discountedPrice}</span>
                <span className="text-sm text-muted-foreground line-through">{formattedPrice}</span>
              </div>
            ) : (
              <span className="font-semibold">{formattedPrice}</span>
            )}
          </div>

          <Button size="sm" onClick={() => handleAddToCart} aria-label={`Add ${name} to cart`}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </CardFooter>
      </Link>
    </Card>
  )
}

