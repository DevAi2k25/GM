import { Package } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@shared/schema";

export default function NewArrivalsPage() {
  // Dummy data for new arrivals
  const newArrivals: Product[] = [
    {
      id: 1,
      name: "Razer DeathAdder V3 Pro",
      description: "Latest gaming mouse with advanced optical sensor",
      price: "149.99",
      originalPrice: null,
      imageUrl: "/images/products/mouse.jpg",
      categoryId: 1,
      sellerId: 1,
      stock: 100,
      featured: true,
      verified: true,
      rating: "4.9",
      reviewCount: 12,
      createdAt: new Date("2024-03-20")
    },
    {
      id: 2,
      name: "SteelSeries Arctis Nova Pro",
      description: "Premium wireless gaming headset with active noise cancellation",
      price: "349.99",
      originalPrice: null,
      imageUrl: "/images/products/headset.jpg",
      categoryId: 2,
      sellerId: 1,
      stock: 75,
      featured: true,
      verified: true,
      rating: "4.8",
      reviewCount: 8,
      createdAt: new Date("2024-03-19")
    },
    {
      id: 3,
      name: "ASUS ROG Swift PG279QM",
      description: "27-inch gaming monitor with 240Hz refresh rate",
      price: "799.99",
      originalPrice: null,
      imageUrl: "/images/products/monitor.jpg",
      categoryId: 3,
      sellerId: 1,
      stock: 50,
      featured: true,
      verified: true,
      rating: "4.7",
      reviewCount: 5,
      createdAt: new Date("2024-03-18")
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-mono">
              New Arrivals
            </h1>
            <p className="text-xl gm-text-secondary max-w-2xl mx-auto">
              Discover the latest gaming gear and accessories that just landed in our store.
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-4">
            <Badge className="gm-bg-teal text-black px-4 py-2">Latest Products</Badge>
            <Badge variant="outline" className="border-pink-500 text-pink-500 px-4 py-2">Updated Daily</Badge>
            <Badge variant="outline" className="border-purple-500 text-purple-400 px-4 py-2">Pre-order Available</Badge>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
} 