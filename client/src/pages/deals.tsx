import { Tag, Timer } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function DealsPage() {
  // Dummy data for deals
  const deals = [
    {
      id: 1,
      name: "Corsair K70 RGB PRO",
      price: 169.99,
      discountedPrice: 129.99,
      image: "/images/products/keyboard-k70.jpg",
      category: "Gaming Keyboard",
      stockLeft: 45,
      totalStock: 100,
      endsIn: "2d 5h"
    },
    {
      id: 2,
      name: "ASUS ROG Strix G15",
      price: 1299.99,
      discountedPrice: 999.99,
      image: "/images/products/laptop.jpg",
      category: "Gaming Laptop",
      stockLeft: 12,
      totalStock: 50,
      endsIn: "1d 12h"
    },
    {
      id: 3,
      name: "Razer Basilisk V3",
      price: 69.99,
      discountedPrice: 49.99,
      image: "/images/products/mouse-basilisk.jpg",
      category: "Gaming Mouse",
      stockLeft: 78,
      totalStock: 150,
      endsIn: "3d 8h"
    },
    // Add more products as needed
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-mono">
              Hot Deals
            </h1>
            <p className="text-xl gm-text-secondary max-w-2xl mx-auto">
              Limited-time offers on premium gaming gear. Grab them before they're gone!
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-4">
            <Badge className="gm-bg-teal text-black px-4 py-2">Limited Time</Badge>
            <Badge variant="outline" className="border-pink-500 text-pink-500 px-4 py-2">Up to 70% Off</Badge>
            <Badge variant="outline" className="border-purple-500 text-purple-400 px-4 py-2">Flash Sales</Badge>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {deals.map((product) => (
            <div key={product.id} className="relative">
              {/* Discount Badge */}
              <div className="absolute -top-2 -right-2 z-10">
                <Badge className="gm-bg-pink">
                  {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
                </Badge>
              </div>
              
              <div className="relative">
                <ProductCard
                  product={{
                    ...product,
                    price: product.discountedPrice,
                    originalPrice: product.price
                  }}
                />
                
                {/* Stock and Timer */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="gm-text-secondary">Stock Left:</span>
                    <span className="font-medium">{product.stockLeft}/{product.totalStock}</span>
                  </div>
                  <Progress value={(product.stockLeft / product.totalStock) * 100} />
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="gm-text-secondary">Ends in:</span>
                    <span className="font-medium flex items-center">
                      <Timer className="w-4 h-4 mr-1" />
                      {product.endsIn}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
} 