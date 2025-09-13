"use client"

// import { useState } from "react"
import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { ShoppingBag, User, Search, Menu, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Input from "@/components/ui/input"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import Badge from "@/components/ui/badge"
import { NavigationMenu } from "radix-ui";
import "./styles.css";


const categories = [
  {
    title: "Women's Fashion",
    href: "/category/womens-fashion",
    subcategories: [
      { name: "Dresses", href: "/category/womens-fashion/dresses" },
      { name: "Tops", href: "/category/womens-fashion/tops" },
      { name: "Bottoms", href: "/category/womens-fashion/bottoms" },
      { name: "Accessories", href: "/category/womens-fashion/accessories" },
    ],
  },
  {
    title: "Men's Fashion",
    href: "/category/mens-fashion",
    subcategories: [
      { name: "Shirts", href: "/category/mens-fashion/shirts" },
      { name: "Pants", href: "/category/mens-fashion/pants" },
      { name: "Outerwear", href: "/category/mens-fashion/outerwear" },
      { name: "Accessories", href: "/category/mens-fashion/accessories" },
    ],
  },
  {
    title: "Electronics",
    href: "/category/electronics",
    subcategories: [
      { name: "Smartphones", href: "/category/electronics/smartphones" },
      { name: "Laptops", href: "/category/electronics/laptops" },
      { name: "Audio", href: "/category/electronics/audio" },
      { name: "Accessories", href: "/category/electronics/accessories" },
    ],
  },
  {
    title: "Home & Living",
    href: "/category/home-living",
    subcategories: [
      { name: "Furniture", href: "/category/home-living/furniture" },
      { name: "Decor", href: "/category/home-living/decor" },
      { name: "Kitchen", href: "/category/home-living/kitchen" },
      { name: "Bath", href: "/category/home-living/bath" },
    ],
  },
]

export default function Header() {
  // const [isSearchOpen, setIsSearchOpen] = useState(false)
  // const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      {/* Announcement banner - non-intrusive alternative to popups */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <p>Free shipping on orders over $50 | Use code WELCOME10 for 10% off your first order</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu */}
          {/* <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                  ShopEase
                </Link>
                <div className="mt-4 space-y-3">
                  {categories.map((category) => (
                    <div key={category.title} className="space-y-3">
                      <Link href={category.href} className="text-lg font-medium hover:text-primary">
                        {category.title}
                      </Link>
                      <ul className="ml-4 space-y-2">
                        {category.subcategories.map((subcategory) => (
                          <li key={subcategory.name}>
                            <Link href={subcategory.href} className="text-sm text-muted-foreground hover:text-primary">
                              {subcategory.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet> */}

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            ShopEase
          </Link>

          {/* Desktop navigation */}
          <NavigationMenu.Root className="hidden md:flex NavigationMenuRoot">
            <NavigationMenu.List className="NavigationMenuList">
              {categories.map((category) => (
                <NavigationMenu.Item key={category.title} className="NavigationMenuItem">
                  <NavigationMenu.Trigger className="NavigationMenuTrigger">{category.title}</NavigationMenu.Trigger>
                  <NavigationMenu.Content className="NavigationMenuContent">
                    <ul className="one">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory.name} style={{ gridRow: "span 3" }}>
                          <NavigationMenu.Link asChild>
                            <Link
                              href={subcategory.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{subcategory.name}</div>
                            </Link>
                          </NavigationMenu.Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Actions */}
          {/* <div className="flex items-center gap-2">
            {isSearchOpen ? (
              <div className="flex items-center">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full md:w-[200px] lg:w-[300px]"
                  autoFocus
                />
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} aria-label="Close search">
                  <X className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
            )}

            <Button variant="ghost" size="icon" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              <Badge className="absolute top-2 right-2 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
                3
              </Badge>
              <span className="sr-only">3 items in cart</span>
            </Button>
          </div> */}
        </div>
      </div>
    </header>
  )
}

