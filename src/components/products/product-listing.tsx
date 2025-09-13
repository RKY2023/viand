import React from 'react';
import ProductCard from "@/components/products/product-card"
import { Button } from "@/components/ui/button"
import { Select } from "radix-ui"

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    rating: number;
    discount?: number;
    isNew?: boolean;
}

interface ProductListingProps {
    categoryName: string;
    products: Product[];
}

const ProductListing: React.FC<ProductListingProps> = ({categoryName, products}) => {
  return (
    <div className="flex-1">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">{categoryName}</h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Select.Root defaultValue="featured">
            <Select.Trigger className="w-full sm:w-[180px]">
              <Select.Value placeholder="Sort by" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="featured">Featured</Select.Item>
              <Select.Item value="price-low">Price: Low to High</Select.Item>
              <Select.Item value="price-high">Price: High to Low</Select.Item>
              <Select.Item value="newest">Newest Arrivals</Select.Item>
              <Select.Item value="rating">Highest Rated</Select.Item>
            </Select.Content>
          </Select.Root>

          <Select.Root defaultValue="24">
            <Select.Trigger className="w-full sm:w-[180px]">
              <Select.Value placeholder="Show" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="12">Show 12</Select.Item>
              <Select.Item value="24">Show 24</Select.Item>
              <Select.Item value="48">Show 48</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
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
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">No products found</h2>
          <p className="text-muted-foreground mb-6">We couldn&apos;t find any products matching your criteria.</p>
          <Button>Continue Shopping</Button>
        </div>
      )}

      {/* Pagination */}
      
    </div> 
  );
};

export default ProductListing;