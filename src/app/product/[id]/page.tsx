import Image from "next/image"
import { notFound } from "next/navigation"
import { Star, Truck, RotateCcw, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Breadcrumb from "@/components/navigation/breadcrumb"
import ProductCard from "@/components/products/product-card"
import { getProductById, getRelatedProducts } from "@/lib/data"

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: ProductPageProps) {
  const {id: productId } = await params;
  const product = getProductById(productId);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: `${product.name} | ShopEase`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = await getProductById(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.category, id)

  // Format price with currency
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price)

  // Calculate discounted price if applicable
  const discountedPrice = product.discount
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(product.price * (1 - product.discount / 100))
    : null

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={product.image || "/placeholder.svg?height=600&width=600"}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-2 overflow-auto pb-2">
            {[product.image, ...(product.additionalImages || [])].map((img, index) => (
              <div key={index} className="relative w-20 h-20 flex-shrink-0 rounded-md border overflow-hidden">
                <Image
                  src={img || "/placeholder.svg?height=80&width=80"}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < product.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-2">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div>
            {discountedPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">{discountedPrice}</span>
                <span className="text-xl text-muted-foreground line-through">{formattedPrice}</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                  {product.discount}% OFF
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold">{formattedPrice}</span>
            )}
          </div>

          <div className="prose prose-sm max-w-none">
            <p>{product.description}</p>
          </div>

          {/* Color Options */}
          {product.colors && (
            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <div
                    key={color.name}
                    className="relative w-10 h-10 rounded-full border-2 border-muted cursor-pointer hover:border-primary"
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Options */}
          {product.sizes && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Size</h3>
                <Button variant="link" className="p-0 h-auto">
                  Size Guide
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <div
                    key={size}
                    className="min-w-[3rem] h-10 flex items-center justify-center rounded border border-input bg-background px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer"
                    aria-label={`Select size ${size}`}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Add to Wishlist
            </Button>
          </div>

          {/* Shipping & Returns */}
          <div className="border-t pt-6 space-y-4">
            <div className="flex items-start gap-2">
              <Truck className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <h4 className="font-medium">Free Shipping</h4>
                <p className="text-sm text-muted-foreground">Free standard shipping on orders over $50</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <RotateCcw className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <h4 className="font-medium">Easy Returns</h4>
                <p className="text-sm text-muted-foreground">30-day return policy</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Shield className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <h4 className="font-medium">Secure Checkout</h4>
                <p className="text-sm text-muted-foreground">SSL encrypted checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="mb-16">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
          <TabsTrigger
            value="description"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="specifications"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Specifications
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Reviews ({product.reviewCount})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="pt-6">
          <div className="prose prose-lg max-w-none">
            <h3>Product Description</h3>
            <p>{product.fullDescription || product.description}</p>

            {product.features && (
              <>
                <h4>Features</h4>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </TabsContent>

        <TabsContent value="specifications" className="pt-6">
          <div className="prose prose-lg max-w-none">
            <h3>Product Specifications</h3>
            <table className="w-full">
              <tbody>
                {product.specifications &&
                  Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b">
                      <td className="py-2 font-medium">{key}</td>
                      <td className="py-2">{value}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="pt-6">
          <div className="prose prose-lg max-w-none">
            <h3>Customer Reviews</h3>
            <p>Reviews would be displayed here.</p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                rating={product.rating}
                discount={product.discount}
                isNew={product.isNew}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

