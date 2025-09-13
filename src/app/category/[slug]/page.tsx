import { notFound } from "next/navigation"
import Breadcrumb from "@/components/navigation/breadcrumb"
// import ProductCard from "@/components/products/product-card"
import { getProductsByCategory } from "@/lib/data"
import { Button } from "@/components/ui/button"
// import { Select } from "radix-ui"
import ProductListing from "@/components/products/product-listing"

interface CategoryPageProps {
  params: Promise <{
    slug: string
  }>
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const categoryMap: Record<string, string> = {
    "womens-fashion": "Women's Fashion",
    "mens-fashion": "Men's Fashion",
    electronics: "Electronics",
    "home-living": "Home & Living",
  }
  const { slug } = await params;

  const categoryName = categoryMap[slug]

  if (!categoryName) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found.",
    }
  }

  return {
    title: `${categoryName} | ShopEase`,
    description: `Shop our collection of ${categoryName.toLowerCase()} products. Find the latest trends with fast shipping and easy returns.`,
    openGraph: {
      title: `${categoryName} | ShopEase`,
      description: `Shop our collection of ${categoryName.toLowerCase()} products. Find the latest trends with fast shipping and easy returns.`,
      type: "website",
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryMap: Record<string, string> = {
    "womens-fashion": "Women's Fashion",
    "mens-fashion": "Men's Fashion",
    electronics: "Electronics",
    "home-living": "Home & Living",
  };
  const { slug } = await params;

  const categoryName = categoryMap[slug];

  if (!categoryName) {
    notFound();
  }

  const products = getProductsByCategory(slug) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="font-medium mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                  >
                    All {categoryName}
                  </Button>
                </li>
                {slug === "womens-fashion" && (
                  <>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Dresses
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Tops
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Bottoms
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Accessories
                      </Button>
                    </li>
                  </>
                )}
                {slug === "mens-fashion" && (
                  <>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Shirts
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Pants
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Outerwear
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Accessories
                      </Button>
                    </li>
                  </>
                )}
                {slug === "electronics" && (
                  <>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Smartphones
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Laptops
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Audio
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Accessories
                      </Button>
                    </li>
                  </>
                )}
                {slug === "home-living" && (
                  <>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Furniture
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Decor
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Kitchen
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-muted-foreground hover:text-foreground justify-start"
                      >
                        Bath
                      </Button>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Price Range</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input id="price-all" type="radio" name="price" className="h-4 w-4" defaultChecked />
                  <label htmlFor="price-all" className="ml-2 text-sm">
                    All Prices
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="price-under-50" type="radio" name="price" className="h-4 w-4" />
                  <label htmlFor="price-under-50" className="ml-2 text-sm">
                    Under $50
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="price-50-100" type="radio" name="price" className="h-4 w-4" />
                  <label htmlFor="price-50-100" className="ml-2 text-sm">
                    $50 - $100
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="price-100-200" type="radio" name="price" className="h-4 w-4" />
                  <label htmlFor="price-100-200" className="ml-2 text-sm">
                    $100 - $200
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="price-over-200" type="radio" name="price" className="h-4 w-4" />
                  <label htmlFor="price-over-200" className="ml-2 text-sm">
                    Over $200
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Customer Rating</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input id="rating-all" type="radio" name="rating" className="h-4 w-4" defaultChecked />
                  <label htmlFor="rating-all" className="ml-2 text-sm">
                    All Ratings
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="rating-4-up" type="radio" name="rating" className="h-4 w-4" />
                  <label htmlFor="rating-4-up" className="ml-2 text-sm">
                    4★ & Up
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="rating-3-up" type="radio" name="rating" className="h-4 w-4" />
                  <label htmlFor="rating-3-up" className="ml-2 text-sm">
                    3★ & Up
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="rating-2-up" type="radio" name="rating" className="h-4 w-4" />
                  <label htmlFor="rating-2-up" className="ml-2 text-sm">
                    2★ & Up
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Listing */}
        <ProductListing categoryName={categoryName} products={products} />
      </div>
    </div>
  );
}

