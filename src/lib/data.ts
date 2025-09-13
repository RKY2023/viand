// Mock data for the shopping website
// In a real application, this would come from a database or API

export interface Product {
    id: string
    name: string
    price: number
    description: string
    fullDescription?: string
    image: string
    additionalImages?: string[]
    category: string
    rating: number
    reviewCount: number
    discount?: number
    isNew?: boolean
    colors?: Array<{ name: string; value: string }>
    sizes?: string[]
    features?: string[]
    specifications?: Record<string, string>
  }
  
  export interface Category {
    id: string
    name: string
    href: string
    image: string
  }
  
  // Categories
  export const categories: Category[] = [
    {
      id: "womens-fashion",
      name: "Women's Fashion",
      href: "/category/womens-fashion",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "mens-fashion",
      name: "Men's Fashion",
      href: "/category/mens-fashion",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "electronics",
      name: "Electronics",
      href: "/category/electronics",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "home-living",
      name: "Home & Living",
      href: "/category/home-living",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]
  
  // Products
  const products: Product[] = [
    {
      id: "p1",
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      description: "Comfortable and stylish cotton t-shirt for everyday wear.",
      fullDescription:
        "This premium cotton t-shirt is made from 100% organic cotton, providing exceptional comfort and durability. Perfect for everyday wear, it features a classic fit and is available in multiple colors. The breathable fabric ensures you stay comfortable throughout the day.",
      image: "/placeholder.svg?height=600&width=600",
      additionalImages: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "Men's Fashion",
      rating: 4.5,
      reviewCount: 128,
      colors: [
        { name: "Black", value: "#000000" },
        { name: "White", value: "#ffffff" },
        { name: "Navy", value: "#000080" },
        { name: "Red", value: "#ff0000" },
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      features: ["100% organic cotton", "Classic fit", "Breathable fabric", "Machine washable", "Pre-shrunk"],
      specifications: {
        Material: "100% Organic Cotton",
        Fit: "Classic",
        Neck: "Crew Neck",
        Sleeve: "Short Sleeve",
        Care: "Machine wash cold, tumble dry low",
      },
    },
    {
      id: "p2",
      name: "Wireless Bluetooth Headphones",
      price: 129.99,
      description: "High-quality wireless headphones with noise cancellation.",
      fullDescription:
        "Experience premium sound quality with these wireless Bluetooth headphones. Featuring active noise cancellation, they provide an immersive audio experience. With up to 30 hours of battery life and comfortable ear cushions, they're perfect for long listening sessions.",
      image: "/placeholder.svg?height=600&width=600",
      additionalImages: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "Electronics",
      rating: 4.8,
      reviewCount: 256,
      discount: 15,
      colors: [
        { name: "Black", value: "#000000" },
        { name: "Silver", value: "#c0c0c0" },
        { name: "Blue", value: "#0000ff" },
      ],
      features: [
        "Active noise cancellation",
        "30-hour battery life",
        "Bluetooth 5.0",
        "Built-in microphone",
        "Foldable design",
      ],
      specifications: {
        Connectivity: "Bluetooth 5.0",
        "Battery Life": "Up to 30 hours",
        "Noise Cancellation": "Active",
        Microphone: "Built-in",
        Weight: "250g",
      },
    },
    {
      id: "p3",
      name: "Summer Floral Dress",
      price: 49.99,
      description: "Lightweight floral dress perfect for summer days.",
      fullDescription:
        "This beautiful floral dress is designed for comfort and style during warm summer days. Made from lightweight, breathable fabric, it features a flattering A-line silhouette and adjustable straps. The vibrant floral pattern adds a touch of elegance to your summer wardrobe.",
      image: "/placeholder.svg?height=600&width=600",
      additionalImages: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "Women's Fashion",
      rating: 4.3,
      reviewCount: 89,
      isNew: true,
      colors: [
        { name: "Blue Floral", value: "#add8e6" },
        { name: "Pink Floral", value: "#ffc0cb" },
        { name: "Yellow Floral", value: "#ffff00" },
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      features: ["Lightweight fabric", "A-line silhouette", "Adjustable straps", "Floral pattern", "Machine washable"],
      specifications: {
        Material: "95% Polyester, 5% Elastane",
        Length: "Midi",
        Pattern: "Floral",
        Neckline: "V-neck",
        Care: "Machine wash cold, line dry",
      },
    },
    {
      id: "p4",
      name: "Modern Coffee Table",
      price: 199.99,
      description: "Stylish coffee table with minimalist design for your living room.",
      fullDescription:
        "Enhance your living space with this modern coffee table featuring a minimalist design. The combination of wood and metal creates a contemporary look that complements various interior styles. With its spacious surface and lower shelf, it provides ample storage space for books, magazines, and decorative items.",
      image: "/placeholder.svg?height=600&width=600",
      additionalImages: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "Home & Living",
      rating: 4.6,
      reviewCount: 75,
      discount: 10,
      colors: [
        { name: "Walnut", value: "#5c4033" },
        { name: "Oak", value: "#d2b48c" },
        { name: "Black", value: "#000000" },
      ],
      features: [
        "Solid wood construction",
        "Metal frame",
        "Lower storage shelf",
        "Easy assembly",
        "Scratch-resistant surface",
      ],
      specifications: {
        Material: "Solid Wood, Metal",
        Dimensions: "120cm x 60cm x 45cm",
        Weight: "15kg",
        Assembly: "Required, tools included",
        Warranty: "2 years",
      },
    },
    {
      id: "p5",
      name: "Smart Fitness Watch",
      price: 149.99,
      description: "Track your fitness goals with this advanced smart watch.",
      image: "/placeholder.svg?height=600&width=600",
      category: "Electronics",
      rating: 4.7,
      reviewCount: 203,
      isNew: true,
    },
    {
      id: "p6",
      name: "Leather Crossbody Bag",
      price: 79.99,
      description: "Elegant leather bag with adjustable strap and multiple compartments.",
      image: "/placeholder.svg?height=600&width=600",
      category: "Women's Fashion",
      rating: 4.4,
      reviewCount: 112,
      discount: 20,
    },
    {
      id: "p7",
      name: "Men's Slim-Fit Jeans",
      price: 59.99,
      description: "Classic slim-fit jeans with comfortable stretch fabric.",
      image: "/placeholder.svg?height=600&width=600",
      category: "Men's Fashion",
      rating: 4.2,
      reviewCount: 98,
    },
    {
      id: "p8",
      name: "Scented Soy Candle Set",
      price: 34.99,
      description: "Set of 3 hand-poured soy candles with relaxing scents.",
      image: "/placeholder.svg?height=600&width=600",
      category: "Home & Living",
      rating: 4.9,
      reviewCount: 67,
      discount: 15,
    },
  ]
  
  // Featured products
  export const featuredProducts = products.slice(0, 4)
  
  // Get product by ID
  export function getProductById(id: string): Product | undefined {
    return products.find((product) => product.id === id)
  }
  
  // Get related products
  export function getRelatedProducts(category: string, currentProductId: string): Product[] {
    return products.filter((product) => product.category === category && product.id !== currentProductId).slice(0, 4)
  }
  
  // Get products by category
  export function getProductsByCategory(categoryId: string): Product[] {
    const categoryMap: Record<string, string> = {
      "womens-fashion": "Women's Fashion",
      "mens-fashion": "Men's Fashion",
      electronics: "Electronics",
      "home-living": "Home & Living",
    }
  
    const categoryName = categoryMap[categoryId]
  
    if (!categoryName) return []
  
    return products.filter((product) => product.category === categoryName)
  }
  
  