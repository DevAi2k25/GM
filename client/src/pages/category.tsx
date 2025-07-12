import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/product-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Category, Product } from "@shared/schema";

export default function CategoryPage() {
  const [, params] = useRoute("/category/:slug");
  const slug = params?.slug;

  const { data: category, isLoading: categoryLoading } = useQuery<Category>({
    queryKey: ["/api/categories", slug],
    enabled: !!slug,
  });

  const { data: products = [], isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ["/api/products", { categoryId: category?.id }],
    enabled: !!category?.id,
  });

  if (categoryLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-8 w-64 mb-4" />
          <Skeleton className="h-4 w-96 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-80 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <p className="gm-text-secondary">The category you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Category Header */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 font-mono">{category.name}</h1>
            <p className="gm-text-secondary text-lg max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 gm-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold font-mono">Products</h2>
            <div className="flex items-center space-x-4 text-sm gm-text-secondary">
              <span>{products.length} items found</span>
            </div>
          </div>

          {productsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-80 w-full" />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="gm-text-secondary">Check back later for new arrivals in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
