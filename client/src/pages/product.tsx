import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Star, Shield, Heart, ShoppingCart, Truck, MessageSquare, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useCart } from "@/hooks/use-cart";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@shared/schema";

export default function ProductPage() {
  const [, params] = useRoute("/product/:id");
  const productId = params?.id;
  const { addToCart, isAddingToCart } = useCart();

  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["/api/products", productId],
    enabled: !!productId,
  });

  const handleAddToCart = () => {
    if (product) {
      addToCart({ productId: product.id, quantity: 1 });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Skeleton className="aspect-square w-full" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="gm-text-secondary">The product you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const hasDiscount = product.originalPrice && parseFloat(product.originalPrice) > parseFloat(product.price);
  const discountPercent = hasDiscount 
    ? Math.round(((parseFloat(product.originalPrice!) - parseFloat(product.price)) / parseFloat(product.originalPrice!)) * 100)
    : 0;

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative">
            <img 
              src={product.imageUrl || "/placeholder-product.jpg"} 
              alt={product.name}
              className="w-full aspect-square object-cover rounded-xl"
            />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.verified && (
                <Badge className="gm-bg-teal text-black">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
              {hasDiscount && (
                <Badge className="gm-bg-pink text-white">
                  -{discountPercent}% OFF
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="outline" className="gm-text-teal border-cyan-400">
                  Gaming Gear
                </Badge>
                <div className="flex text-sm text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(parseFloat(product.rating || "0")) ? 'fill-current' : ''}`} />
                  ))}
                  <span className="gm-text-secondary ml-2">({product.reviewCount} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mb-2 font-mono">{product.name}</h1>
              <p className="gm-text-secondary text-lg">{product.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold gm-text-teal">${product.price}</span>
                {hasDiscount && (
                  <span className="text-xl gm-text-secondary line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className="flex-1 gm-bg-teal text-black py-3 text-lg font-semibold hover:bg-cyan-400 gm-shadow-teal transition-all duration-300"
                >
                  {isAddingToCart ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <ShoppingCart className="w-5 h-5 mr-2" />
                  )}
                  Add to Cart
                </Button>
                
                <Button variant="outline" size="lg" className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm gm-text-secondary">
                <div className="flex items-center">
                  <Truck className="w-4 h-4 mr-2" />
                  Free shipping
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  2-year warranty
                </div>
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Seller Information</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="gm-text-teal font-medium">TechStore Pro</p>
                  <p className="text-sm gm-text-secondary">98% positive feedback</p>
                </div>
                <Button variant="outline" size="sm">
                  View Store
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3 gm-background-secondary">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-8">
            <div className="gm-background-secondary border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 font-mono">Product Description</h3>
              <p className="gm-text-secondary leading-relaxed">
                {product.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-8">
            <div className="gm-background-secondary border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 font-mono">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="gm-text-secondary">Brand</span>
                    <span>Corsair</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="gm-text-secondary">Model</span>
                    <span>K95 RGB Platinum XT</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="gm-text-secondary">Switch Type</span>
                    <span>Cherry MX Blue</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="gm-text-secondary">Connectivity</span>
                    <span>USB-C</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="gm-text-secondary">Backlight</span>
                    <span>RGB</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="gm-text-secondary">Weight</span>
                    <span>1.2kg</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-8">
            <div className="space-y-6">
              <div className="gm-background-secondary border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 font-mono">Customer Reviews</h3>
                
                {/* Review Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold gm-text-teal mb-2">{product.rating}</div>
                    <div className="flex justify-center text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(parseFloat(product.rating || "0")) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <p className="gm-text-secondary">Based on {product.reviewCount} reviews</p>
                  </div>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center space-x-2">
                        <span className="text-sm w-8">{stars}★</span>
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${Math.random() * 80 + 10}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-xs font-semibold text-black">G{review}</span>
                          </div>
                          <span className="font-medium">Gamer{review}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < 5 ? 'fill-current' : ''}`} />
                            ))}
                          </div>
                          <span className="text-sm gm-text-secondary">2 days ago</span>
                        </div>
                      </div>
                      <p className="gm-text-secondary mb-2">
                        Amazing quality and performance! The RGB lighting is stunning and the mechanical switches feel great.
                      </p>
                      <div className="flex items-center space-x-4 text-sm gm-text-secondary">
                        <button className="flex items-center space-x-1 hover:gm-text-teal">
                          <ThumbsUp className="w-3 h-3" />
                          <span>Helpful (5)</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:gm-text-teal">
                          <MessageSquare className="w-3 h-3" />
                          <span>Reply</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
