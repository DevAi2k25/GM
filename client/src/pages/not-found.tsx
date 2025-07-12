import { Link } from "wouter";
import { 
  Home, 
  Search, 
  ArrowLeft, 
  Gamepad2, 
  ShoppingCart, 
  MessageSquare,
  HelpCircle,
  Star,
  Zap,
  Package,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function NotFound() {
  const quickLinks = [
    {
      href: "/home",
      icon: Home,
      label: "Homepage",
      description: "Browse featured products"
    },
    {
      href: "/search",
      icon: Search,
      label: "Search",
      description: "Find gaming gear"
    },
    {
      href: "/cart",
      icon: ShoppingCart,
      label: "Cart",
      description: "View your items"
    },
    {
      href: "/help-support",
      icon: HelpCircle,
      label: "Help",
      description: "Get support"
    },
    {
      href: "/community-forums",
      icon: MessageSquare,
      label: "Forums",
      description: "Join discussions"
    },
    {
      href: "/tournaments",
      icon: Star,
      label: "Tournaments",
      description: "Gaming competitions"
    }
  ];

  const popularCategories = [
    "Gaming Keyboards",
    "Gaming Mice", 
    "Headsets",
    "Graphics Cards",
    "Gaming Chairs",
    "Monitors"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          {/* 404 Hero Section */}
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <div className="text-8xl font-bold font-mono gm-text-teal opacity-20 select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center animate-bounce">
                  <Gamepad2 className="w-12 h-12 text-black" />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-4 font-mono">
              Oops! <span className="gm-text-teal">Page</span> Not <span className="gm-text-pink">Found</span>
            </h1>
            <p className="text-xl gm-text-secondary max-w-2xl mx-auto mb-8">
              Looks like this page went missing in action! Don't worry though - 
              there are plenty of other awesome gaming destinations to explore.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/home">
                <Button size="lg" className="gm-bg-teal text-black hover:bg-cyan-400 transition-all duration-300">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Homepage
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="outline" 
                className="border-gray-700 hover:gm-border-teal"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Button>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
                <Zap className="w-6 h-6 gm-text-teal mr-3" />
                Quick Navigation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <Card className="gm-background-secondary border-gray-700 hover:gm-border-teal transition-all duration-300 cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                            <link.icon className="w-6 h-6 gm-text-teal" />
                          </div>
                          <div>
                            <h3 className="font-semibold group-hover:gm-text-teal transition-colors">
                              {link.label}
                            </h3>
                            <p className="text-sm gm-text-secondary">{link.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Categories */}
            <div>
              <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
                <Package className="w-6 h-6 gm-text-pink mr-3" />
                Popular Categories
              </h2>
              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {popularCategories.map((category, index) => (
                      <Link 
                        key={index}
                        href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group">
                          <span className="text-sm group-hover:gm-text-teal transition-colors">
                            {category}
                          </span>
                          <ArrowLeft className="w-4 h-4 gm-text-secondary rotate-180 group-hover:gm-text-teal transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Help Section */}
          <div className="text-center bg-gray-900/50 rounded-xl p-8">
            <Users className="w-12 h-12 gm-text-teal mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Still Lost?</h3>
            <p className="gm-text-secondary mb-6">
              Our support team is here to help you navigate GamersMarket and find exactly what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/help-support">
                <Button className="gm-bg-teal text-black hover:bg-cyan-400">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Get Help
                </Button>
              </Link>
              <Link href="/community-forums">
                <Button variant="outline" className="border-gray-700 hover:gm-border-teal">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Ask Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
