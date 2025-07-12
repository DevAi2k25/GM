import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Search as SearchIcon } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/product-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@shared/schema";

export default function SearchPage() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split('?')[1] || '');
  const query = searchParams.get('q') || '';

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products/search", { q: query }],
    enabled: !!query,
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <SearchIcon className="w-6 h-6 gm-text-teal" />
            <h1 className="text-2xl font-bold font-mono">Search Results</h1>
          </div>
          {query && (
            <p className="gm-text-secondary">
              Showing results for: <span className="gm-text-teal font-semibold">"{query}"</span>
            </p>
          )}
        </div>

        {!query ? (
          <div className="text-center py-16">
            <SearchIcon className="w-16 h-16 gm-text-secondary mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No search query</h2>
            <p className="gm-text-secondary">Please enter a search term to find products.</p>
          </div>
        ) : isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-80 w-full" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16">
            <SearchIcon className="w-16 h-16 gm-text-secondary mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No products found</h2>
            <p className="gm-text-secondary">
              Try adjusting your search terms or browse our categories.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="gm-text-secondary">
                Found {products.length} product{products.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
