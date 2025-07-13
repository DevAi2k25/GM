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
              <Link href="/routes" className="hover:gm-text-teal transition-colors">All Pages</Link>
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
            <Link href="/home" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">G</span>
              </div>
              <div className="text-xl font-bold font-mono">
                <span className="gm-text-teal">Gamers</span>
                <span className="gm-text-pink">Market</span>
              </div>
            </Link>

            {/* Search */}
            <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-xl mx-12">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full gm-background border-gray-700 focus:gm-border-teal pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-3 flex items-center justify-center text-gray-400 hover:text-white"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>

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

          {/* Collapsible Sidebar Navigation */}
          <div className="relative">
            {/* Sidebar Trigger */}
            <div className="group relative">
              <button className="flex items-center space-x-2 py-3 px-4 hover:gm-text-teal transition-colors">
                <Menu className="w-4 h-4" />
                <span className="font-medium">Categories</span>
              </button>

              {/* Sidebar Content - Opens on Hover */}
              <div className="absolute left-0 top-full w-64 gm-background-secondary border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-x-2 group-hover:translate-x-0">
                <div className="py-2">
                  <Link href="#" className="block px-4 py-2 hover:gm-bg-teal hover:text-black transition-colors">
                    New Arrivals
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:gm-bg-teal hover:text-black transition-colors">
                    Best Sellers
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:gm-bg-teal hover:text-black transition-colors">
                    Deals
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:gm-bg-teal hover:text-black transition-colors">
                    Marketplace
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:gm-bg-teal hover:text-black transition-colors">
                    Community
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:gm-bg-teal hover:text-black transition-colors">
                    Authentication
                  </Link>
                </div>
              </div>
            </div>

            {/* Flash Sale Banner */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <span className="gm-text-teal text-sm">⚡ Flash Sale: Up to 70% Off</span>
            </div>
          </div>
        </div>
      </header>

      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
