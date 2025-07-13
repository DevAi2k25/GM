import { TrendingUp, Star } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@shared/schema";

export default function BestSellersPage() {
  // Dummy data for best sellers
  const bestSellers: Product[] = [
    {
      id: 1,
      name: "Logitech G Pro X Superlight",
      description: "Ultra-lightweight wireless gaming mouse for professional gaming",
      price: "159.99",
      originalPrice: "199.99",
      imageUrl: "/images/products/mouse-pro.jpg",
      categoryId: 1,
      sellerId: 1,
      stock: 150,
      featured: true,
      verified: true,
      rating: "4.9",
      reviewCount: 1500,
      createdAt: new Date("2024-01-01")
    },
    {
      id: 2,
      name: "HyperX Cloud Alpha",
      description: "Professional gaming headset with dual chamber drivers",
      price: "99.99",
      originalPrice: "129.99",
      imageUrl: "/images/products/headset-alpha.jpg",
      categoryId: 2,
      sellerId: 1,
      stock: 200,
      featured: true,
      verified: true,
      rating: "4.8",
      reviewCount: 2500,
      createdAt: new Date("2024-01-15")
    },
    {
      id: 3,
      name: "Ducky One 3 SF",
      description: "Premium mechanical keyboard with hot-swappable switches",
      price: "119.99",
      originalPrice: "149.99",
      imageUrl: "/images/products/keyboard.jpg",
      categoryId: 3,
      sellerId: 1,
      stock: 100,
      featured: true,
      verified: true,
      rating: "4.7",
      reviewCount: 1800,
      createdAt: new Date("2024-02-01")
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
              Best Sellers
            </h1>
            <p className="text-xl gm-text-secondary max-w-2xl mx-auto">
              Our most popular gaming products loved by the community.
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-4">
            <Badge className="gm-bg-teal text-black px-4 py-2">Top Rated</Badge>
            <Badge variant="outline" className="border-pink-500 text-pink-500 px-4 py-2">Community Favorites</Badge>
            <Badge variant="outline" className="border-purple-500 text-purple-400 px-4 py-2">High Quality</Badge>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <div key={product.id} className="relative">
              <div className="absolute -top-2 -right-2 z-10">
                <Badge className="gm-bg-pink">
                  <Star className="w-3 h-3 mr-1" />
                  {product.rating}
                </Badge>
              </div>
              <ProductCard
                product={product}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
} 