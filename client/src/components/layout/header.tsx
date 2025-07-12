import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, Heart, ShoppingCart, User, Menu, Wallet, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/use-cart";
import CartPanel from "@/components/cart-panel";

export default function Header() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <header className="gm-background-secondary border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-2 text-sm gm-text-secondary border-b border-gray-800">
            <div className="flex items-center space-x-4">
              <span>Free shipping on orders over $99</span>
              <span className="gm-text-teal">•</span>
              <span>24/7 Customer Support</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:gm-text-teal transition-colors">Track Order</Link>
              <Link href="#" className="hover:gm-text-teal transition-colors">Help</Link>
              <div className="flex items-center space-x-2">
                <Globe className="w-3 h-3" />
                <select className="bg-transparent text-xs focus:outline-none">
                  <option>EN</option>
                  <option>ES</option>
                  <option>FR</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold font-mono">
                <span className="gm-text-teal">Gamers</span>
                <span className="gm-text-pink">Market</span>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search for gaming gear, collectibles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-20 py-3 gm-background border-gray-700 focus:gm-border-teal"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
                <Button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 gm-bg-teal text-black px-4 py-1.5 rounded-md hover:bg-cyan-400 transition-colors font-medium"
                >
                  Search
                </Button>
              </form>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-6">
              {/* Wallet */}
              <div className="flex items-center space-x-2 cursor-pointer hover:gm-text-teal transition-colors">
                <Wallet className="w-5 h-5" />
                <span className="hidden lg:block">$0.00</span>
              </div>

              {/* Wishlist */}
              <div className="relative cursor-pointer hover:gm-text-teal transition-colors">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 gm-bg-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative cursor-pointer hover:gm-text-teal transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 gm-bg-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* User Account */}
              <Link href="/auth" className="flex items-center space-x-2 cursor-pointer hover:gm-text-teal transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-black" />
                </div>
                <span className="hidden lg:block">Account</span>
              </Link>
            </div>
          </div>

          {/* Mega Menu Navigation */}
          <nav className="border-t border-gray-800">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-8">
                <div className="relative group">
                  <button className="flex items-center space-x-2 py-2 hover:gm-text-teal transition-colors">
                    <Menu className="w-4 h-4" />
                    <span className="font-medium">Categories</span>
                  </button>
                </div>
                
                <Link href="#" className="hover:gm-text-teal transition-colors">New Arrivals</Link>
                <Link href="#" className="hover:gm-text-teal transition-colors">Best Sellers</Link>
                <Link href="#" className="hover:gm-text-teal transition-colors">Deals</Link>
                <Link href="#" className="hover:gm-text-teal transition-colors">Marketplace</Link>
                <Link href="#" className="hover:gm-text-teal transition-colors">Community</Link>
                <Link href="#" className="hover:gm-text-teal transition-colors">Authentication</Link>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <span className="gm-text-teal">⚡ Flash Sale: Up to 70% Off</span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
