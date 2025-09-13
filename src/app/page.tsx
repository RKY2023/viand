import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { featuredProducts, categories } from "@/lib/data";
import CategoryCard from "@/components/products/category-card";
import ProductCard from "@/components/products/product-card";

export default function Home() {
  return (
    <>
    <div>
      {/* Hero section  */}
      <section className="relative">
        <div className="relative h-[500px] w-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            // src="/hero.jpg"
            alt="Shop the latest fashion trends"
            layout="fill"
            objectFit="cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Summer Collection 2023</h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mb-8">
              Discover the latest trends in fashion, electronics, and home goods with fast delivery and easy returns.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                <Link href="/category/womens-fashion">Shop Women</Link>
              </Button>
              <Button size="lg" className="bg-white/10 text-white hover:bg-white/20">
                <Link href="/category/mens-fashion">Shop Men</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section  */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} name={category.name} image={category.image} href={category.href} />
          ))}
        </div>
      </section>

      {/* Featured Products Section  */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              rating={product.rating}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Get 20% Off Your First Order</h2>
              <p className="text-muted-foreground mb-6">
                Sign up for our newsletter and receive a 20% discount code for your first purchase. Stay updated with
                the latest trends and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/signup">Sign Up Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/products">Shop Now</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[300px] w-full">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Special offer"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-muted-foreground">Free shipping on all orders over $50. No minimum purchase required.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-muted-foreground">All transactions are secure and encrypted for your protection.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-muted-foreground">Our customer service team is available 24/7 to assist you.</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
