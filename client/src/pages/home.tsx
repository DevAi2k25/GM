import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { ArrowRight, Shield, Store, Wallet, ChevronLeft, ChevronRight, MessageSquare, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/product-card";
import type { Category, Product } from "@shared/schema";

export default function Home() {
  const { data: featuredCategories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories/featured"],
  });

  const { data: featuredProducts = [] } = useQuery<Product[]>({
    queryKey: ["/api/products/featured"],
  });

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 font-mono">
              Level Up Your <span className="gm-text-teal">Gaming</span> Experience
            </h1>
            <p className="text-xl gm-text-secondary mb-6">
              Discover premium gaming gear, rare collectibles, and verified items from the community.
            </p>
            <div className="flex space-x-4">
              <Button className="gm-bg-teal text-black px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 gm-shadow-teal transition-all duration-300 animate-glow-teal">
                Shop Now
              </Button>
              <Button variant="outline" className="border-pink-500 text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300">
                Sell Your Gear
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-8 h-8 bg-pink-500/30 rounded-full animate-bounce"></div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-mono">Featured Categories</h2>
            <p className="gm-text-secondary">Explore our most popular gaming categories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl gm-background border border-gray-700 group-hover:gm-border-teal transition-all duration-300">
                    <img 
                      src={category.imageUrl || "/placeholder-category.jpg"} 
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                      <p className="gm-text-secondary text-sm">{category.description}</p>
                    </div>
                    {category.featured && (
                      <div className="absolute top-4 right-4 gm-bg-teal text-black px-2 py-1 rounded text-xs font-semibold">
                        Hot
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 gm-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 font-mono">Trending Products</h2>
              <p className="gm-text-secondary">Most popular items this week</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="w-10 h-10 p-0 border-gray-700 hover:gm-border-teal">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0 border-gray-700 hover:gm-border-teal">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-mono">Why Choose GamersMarket?</h2>
            <p className="gm-text-secondary">Trusted features that set us apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Authentication Service */}
            <div className="gm-background border border-gray-700 rounded-xl p-6 text-center group hover:gm-border-teal transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-mono">Verified Authentication</h3>
              <p className="gm-text-secondary mb-4">Professional authentication service for high-value collectibles and rare items</p>
              <Button variant="link" className="gm-text-teal hover:text-cyan-400 p-0">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Marketplace */}
            <div className="gm-background border border-gray-700 rounded-xl p-6 text-center group hover:gm-border-pink transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Store className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-mono">Community Marketplace</h3>
              <p className="gm-text-secondary mb-4">Buy, sell, and trade with fellow gamers in a trusted environment</p>
              <Button variant="link" className="gm-text-pink hover:text-pink-400 p-0">
                Start Selling <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* GamersMarket Wallet */}
            <div className="gm-background border border-gray-700 rounded-xl p-6 text-center group hover:gm-border-teal transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-mono">GamersMarket Wallet</h3>
              <p className="gm-text-secondary mb-4">Secure digital wallet with crypto support and instant transactions</p>
              <Button variant="link" className="gm-text-teal hover:text-cyan-400 p-0">
                Setup Wallet <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 gm-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-mono">Join the Community</h2>
              <p className="gm-text-secondary mb-6">Connect with fellow gamers, share your setup, get advice, and discover the latest gear trends in our vibrant community forums.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 gm-text-teal" />
                  </div>
                  <span>PC Hardware & Console Discussions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 gm-text-pink" />
                  </div>
                  <span>Trading Corner & Marketplace Feedback</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 gm-text-teal" />
                  </div>
                  <span>Setup Showcases & Reviews</span>
                </div>
              </div>

              <Button className="gm-bg-teal text-black px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 gm-shadow-teal transition-all duration-300">
                Join Community
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* Forum Preview Cards */}
              <div className="gm-background-secondary border border-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
                    <span className="text-black font-semibold text-sm">JG</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">JohnGamer2023</div>
                    <div className="text-xs gm-text-secondary">2 hours ago in PC Hardware</div>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Just upgraded to RTX 4080 - AMA!</h4>
                <p className="text-sm gm-text-secondary">Finally made the jump from my old GTX 1070. The performance difference is incredible...</p>
                <div className="flex items-center space-x-4 mt-3 text-xs gm-text-secondary">
                  <span className="flex items-center">👍 23</span>
                  <span className="flex items-center">💬 15</span>
                  <span className="flex items-center">🔄 3</span>
                </div>
              </div>

              <div className="gm-background-secondary border border-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">MS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">MechKeyboardMaster</div>
                    <div className="text-xs gm-text-secondary">5 hours ago in Trading Corner</div>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">[WTS] Custom Keycap Set - Artisan Collection</h4>
                <p className="text-sm gm-text-secondary">Selling my limited edition artisan keycap set. Mint condition, never used...</p>
                <div className="flex items-center space-x-4 mt-3 text-xs gm-text-secondary">
                  <span className="flex items-center">👍 8</span>
                  <span className="flex items-center">💬 12</span>
                  <span className="gm-text-teal">$250</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 font-mono">Stay in the Game</h2>
            <p className="gm-text-secondary mb-8">Get exclusive deals, new arrivals, and gaming news delivered to your inbox</p>
            
            <div className="flex max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 gm-background border-gray-700 focus:gm-border-teal rounded-r-none"
              />
              <Button className="gm-bg-teal text-black px-6 py-3 rounded-l-none font-semibold hover:bg-cyan-400 gm-shadow-teal transition-all duration-300">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs gm-text-secondary mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
