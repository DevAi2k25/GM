import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Search, 
  Heart, 
  ShoppingCart, 
  User, 
  Menu, 
  Wallet, 
  Globe, 
  ChevronDown,
  Settings,
  LogOut,
  Package,
  HelpCircle
} from "lucide-react";
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
        {/* Top Mini Bar */}
        <div className="bg-gray-900 py-1">
          <div className="container mx-auto px-4 flex justify-between items-center text-xs gm-text-secondary">
            <Link href="/deals" className="hover:gm-text-teal transition-colors">
              ⚡ Flash Sale: Up to 70% Off
            </Link>
            <div className="flex items-center space-x-3">
              <Link href="/track-order" className="hover:gm-text-teal transition-colors flex items-center">
                <Package className="w-3 h-3 mr-1" />
                Track Order
              </Link>
              <span>|</span>
              <Link href="/help-support" className="hover:gm-text-teal transition-colors flex items-center">
                <HelpCircle className="w-3 h-3 mr-1" />
                Help
              </Link>
              <span>|</span>
              <div className="flex items-center space-x-1 cursor-pointer group relative">
                <Globe className="w-3 h-3" />
                <select 
                  className="bg-transparent text-xs focus:outline-none cursor-pointer hover:gm-text-teal transition-colors"
                  onChange={(e) => {
                    // Handle language change
                    console.log("Language changed to:", e.target.value);
                  }}
                >
                  <option value="en">EN</option>
                  <option value="es">ES</option>
                  <option value="fr">FR</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/home" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">G</span>
              </div>
              <div className="text-lg font-bold font-mono">
                <span className="gm-text-teal">Gamers</span>
                <span className="gm-text-pink">Market</span>
              </div>
            </Link>

            {/* Search */}
            <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-xl mx-8">
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

            {/* Actions */}
            <div className="flex items-center space-x-5">
              {/* Wallet */}
              <div className="flex items-center space-x-1 cursor-pointer hover:gm-text-teal transition-colors">
                <Wallet className="w-4 h-4" />
                <span className="hidden lg:block text-sm">$0.00</span>
              </div>

              {/* Wishlist */}
              <div className="relative cursor-pointer hover:gm-text-teal transition-colors">
                <Heart className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 gm-bg-pink text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </div>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative cursor-pointer hover:gm-text-teal transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 gm-bg-pink text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* User Account - Hover Menu */}
              <div className="relative group">
                <button className="flex items-center space-x-1 cursor-pointer hover:gm-text-teal transition-colors">
                  <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-black" />
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Profile Dropdown */}
                <div className="absolute right-0 top-full mt-1 w-48 gm-background-secondary border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                  <div className="py-1">
                    <Link href="/profile" className="flex items-center px-4 py-2 text-sm hover:gm-bg-teal hover:text-black transition-colors">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                    <Link href="/track-order" className="flex items-center px-4 py-2 text-sm hover:gm-bg-teal hover:text-black transition-colors">
                      <Package className="w-4 h-4 mr-2" />
                      Orders
                    </Link>
                    <Link href="/settings" className="flex items-center px-4 py-2 text-sm hover:gm-bg-teal hover:text-black transition-colors">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                    <Link href="/help-support" className="flex items-center px-4 py-2 text-sm hover:gm-bg-teal hover:text-black transition-colors">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Help & Support
                    </Link>
                    <hr className="border-gray-700 my-1" />
                    <Link href="/auth" className="flex items-center px-4 py-2 text-sm hover:gm-bg-teal hover:text-black transition-colors">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Bar */}
          <div className="flex items-center border-t border-gray-800">
            {/* Categories Dropdown */}
            <div className="group relative">
              <button className="flex items-center space-x-2 py-2 px-4 hover:gm-text-teal transition-colors">
                <Menu className="w-4 h-4" />
                <span className="text-sm font-medium">Categories</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Categories Menu */}
              <div className="absolute left-0 top-full mt-1 w-56 gm-background-secondary border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-x-2 group-hover:translate-x-0">
                <div className="py-1">
                  <Link href="/new-arrivals" className="block px-4 py-2 text-sm hover:gm-bg-teal hover:text-black transition-colors">
                    New Arrivals
                  </Link>
                  <Link href="/best-sellers" className="block px-4 py-2 text-sm hover:gm-bg-teal hover:text-black transition-colors">
                    Best Sellers
                  </Link>
                  <Link href="/deals" className="block px-4 py-2 text-sm hover:gm-bg-teal hover:text-black transition-colors">
                    Deals
                  </Link>
                  <Link href="/category/gaming-keyboards" className="block px-4 py-2 text-sm hover:gm-bg-teal hover:text-black transition-colors">
                    Gaming Keyboards
                  </Link>
                  <Link href="/category/gaming-mice" className="block px-4 py-2 text-sm hover:gm-bg-teal hover:text-black transition-colors">
                    Gaming Mice
                  </Link>
                  <Link href="/category/gaming-headsets" className="block px-4 py-2 text-sm hover:gm-bg-teal hover:text-black transition-colors">
                    Gaming Headsets
                  </Link>
                  <Link href="/category/gaming-chairs" className="block px-4 py-2 text-sm hover:gm-bg-teal hover:text-black transition-colors">
                    Gaming Chairs
                  </Link>
                  <Link href="/category/collectibles" className="block px-4 py-2 text-sm hover:gm-bg-teal hover:text-black transition-colors">
                    Collectibles
                  </Link>
                  <Link href="/category/consoles" className="block px-4 py-2 text-sm hover:gm-bg-teal hover:text-black transition-colors">
                    Consoles
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <nav className="flex items-center space-x-6 px-4">
              <Link href="/marketplace" className="text-sm hover:gm-text-teal transition-colors">Marketplace</Link>
              <Link href="/authentication-service" className="text-sm hover:gm-text-teal transition-colors">Authentication</Link>
              <Link href="/community" className="text-sm hover:gm-text-teal transition-colors">Community</Link>
              <Link href="/help-support" className="text-sm hover:gm-text-teal transition-colors">Help</Link>
            </nav>
          </div>
        </div>
      </header>

      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
