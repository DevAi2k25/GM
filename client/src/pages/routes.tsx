import { Link } from "wouter";
import { 
  Home, 
  Package, 
  Search, 
  ShoppingCart, 
  CreditCard, 
  CheckCircle, 
  User, 
  Shield, 
  Info, 
  Mail, 
  FileText, 
  Eye, 
  Store,
  Smartphone,
  Settings,
  MessageSquare,
  Play,
  Trophy,
  BarChart3,
  TrendingUp,
  Wallet,
  Heart,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function RoutesPage() {
  const mainPages = [
    {
      path: "/home",
      name: "Homepage",
      description: "Featured products, trending items, and promotional banners",
      icon: Home,
      color: "teal"
    },
    {
      path: "/category/gaming-keyboards",
      name: "Category Listing",
      description: "Products by category (Headsets, Keyboards, Collectibles, etc.)",
      icon: Package,
      color: "pink"
    },
    {
      path: "/product/1",
      name: "Product Detail Page",
      description: "Detailed product info, images, specs, pricing, reviews, Q&A",
      icon: Eye,
      color: "purple"
    },
    {
      path: "/search",
      name: "Search Results",
      description: "Products based on user search queries",
      icon: Search,
      color: "blue"
    }
  ];

  const userPages = [
    {
      path: "/profile",
      name: "User Profile",
      description: "Account info, order history, saved items, seller listings",
      icon: User,
      color: "green"
    },
    {
      path: "/seller-dashboard",
      name: "Seller Dashboard",
      description: "Tools for sellers to manage listings, track sales, communicate",
      icon: Store,
      color: "orange"
    },
    {
      path: "/auth",
      name: "Authentication/Registration",
      description: "User registration, login, password reset",
      icon: Shield,
      color: "red"
    },
    {
      path: "/auth-verification",
      name: "Authentication Verification",
      description: "Verifies codes via text or email for secure accounts",
      icon: Smartphone,
      color: "indigo"
    }
  ];

  const shoppingPages = [
    {
      path: "/cart",
      name: "Shopping Cart",
      description: "Items in cart, adjust quantities, proceed to checkout",
      icon: ShoppingCart,
      color: "teal"
    },
    {
      path: "/checkout",
      name: "Checkout Page",
      description: "Shipping address, payment info, order confirmation",
      icon: CreditCard,
      color: "pink"
    },
    {
      path: "/order-confirmation",
      name: "Order Confirmation",
      description: "Order details, tracking information, confirmation",
      icon: CheckCircle,
      color: "green"
    }
  ];

  const servicePages = [
    {
      path: "/authentication-service",
      name: "Authentication Service",
      description: "View, select, and pay for authentication services",
      icon: Shield,
      color: "purple"
    }
  ];

  const utilityPages = [
    {
      path: "/wallet",
      name: "Gaming Wallet",
      description: "Manage balance, transactions, and payment methods",
      icon: Wallet,
      color: "green"
    },
    {
      path: "/favourites",
      name: "Favourites",
      description: "Saved items, wishlists, and price alerts",
      icon: Heart,
      color: "red"
    },
    {
      path: "/track-order",
      name: "Track Order",
      description: "Real-time order tracking and delivery updates",
      icon: Package,
      color: "blue"
    },
    {
      path: "/view-store",
      name: "View Store",
      description: "Browse seller stores and their products",
      icon: Store,
      color: "purple"
    },
    {
      path: "/help-support",
      name: "Help & Support",
      description: "Customer support, FAQ, and contact information",
      icon: HelpCircle,
      color: "orange"
    }
  ];

  const advancedPages = [
    {
      path: "/gaming-news",
      name: "Gaming News",
      description: "Latest gaming news, reviews, and industry updates",
      icon: FileText,
      color: "blue"
    },
    {
      path: "/community-forums",
      name: "Community Forums",
      description: "Discussion forums for gaming community",
      icon: MessageSquare,
      color: "purple"
    },
    {
      path: "/live-streams",
      name: "Live Streams",
      description: "Watch live gaming content and streams",
      icon: Play,
      color: "red"
    },
    {
      path: "/tournaments",
      name: "Tournaments",
      description: "Gaming tournaments and competitions",
      icon: Trophy,
      color: "yellow"
    },
    {
      path: "/leaderboards",
      name: "Leaderboards",
      description: "Player rankings and achievements",
      icon: BarChart3,
      color: "green"
    },
    {
      path: "/marketplace-analytics",
      name: "Marketplace Analytics",
      description: "Market insights and performance metrics",
      icon: TrendingUp,
      color: "orange"
    }
  ];

  const informationPages = [
    {
      path: "/contact",
      name: "Contact Us",
      description: "Form to contact GamersMarket support",
      icon: Mail,
      color: "blue"
    },
    {
      path: "/about",
      name: "About Us",
      description: "Information about GamersMarket platform and mission",
      icon: Info,
      color: "green"
    },
    {
      path: "/terms",
      name: "Terms and Conditions",
      description: "Terms and conditions of using GamersMarket",
      icon: FileText,
      color: "orange"
    },
    {
      path: "/privacy",
      name: "Privacy Policy",
      description: "How GamersMarket collects and uses user data",
      icon: Settings,
      color: "red"
    },
    {
      path: "/not-found",
      name: "404 Error Page",
      description: "Displays when accessing non-existent pages",
      icon: Eye,
      color: "gray"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      teal: "gm-text-teal hover:gm-bg-teal",
      pink: "gm-text-pink hover:bg-pink-500",
      purple: "text-purple-400 hover:bg-purple-500",
      blue: "text-blue-400 hover:bg-blue-500",
      green: "text-green-400 hover:bg-green-500",
      orange: "text-orange-400 hover:bg-orange-500",
      red: "text-red-400 hover:bg-red-500",
      indigo: "text-indigo-400 hover:bg-indigo-500",
      gray: "gm-text-secondary hover:bg-gray-500"
    };
    return colorMap[color] || "gm-text-secondary hover:bg-gray-500";
  };

  const PageCard = ({ page }: { page: any }) => (
    <Card key={page.path} className="gm-background-secondary border-gray-700 hover:gm-border-teal transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(page.color)} transition-all duration-300`}>
            <page.icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-2 font-mono">{page.name}</h3>
            <p className="text-sm gm-text-secondary mb-4 leading-relaxed">{page.description}</p>
            <div className="flex items-center justify-between">
              <code className="text-xs bg-gray-800 px-2 py-1 rounded gm-text-teal">
                {page.path}
              </code>
              <Link href={page.path}>
                <Button size="sm" className="gm-bg-teal text-black hover:bg-cyan-400 transition-colors">
                  Visit Page
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 font-mono">
            <span className="gm-text-teal">Gamers</span><span className="gm-text-pink">Market</span> Routes
          </h1>
          <p className="text-xl gm-text-secondary max-w-2xl mx-auto mb-8">
            Complete navigation directory for all pages and features in the GamersMarket platform.
            Use this page to explore and test all functionality.
          </p>
          <div className="flex justify-center space-x-4">
            <Badge className="gm-bg-teal text-black px-4 py-2">29 Total Pages</Badge>
            <Badge variant="outline" className="border-pink-500 text-pink-500 px-4 py-2">Fully Responsive</Badge>
            <Badge variant="outline" className="border-purple-500 text-purple-400 px-4 py-2">Dark Theme</Badge>
            <Badge variant="outline" className="border-green-500 text-green-400 px-4 py-2">Advanced Features</Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Main Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
            <Home className="w-6 h-6 gm-text-teal mr-3" />
            Main Shopping Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainPages.map((page) => (
              <PageCard key={page.path} page={page} />
            ))}
          </div>
        </section>

        {/* User & Account Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
            <User className="w-6 h-6 gm-text-pink mr-3" />
            User & Account Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userPages.map((page) => (
              <PageCard key={page.path} page={page} />
            ))}
          </div>
        </section>

        {/* Shopping Flow */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
            <ShoppingCart className="w-6 h-6 text-purple-400 mr-3" />
            Shopping & Checkout Flow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shoppingPages.map((page) => (
              <PageCard key={page.path} page={page} />
            ))}
          </div>
        </section>

        {/* Utility Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
            <Settings className="w-6 h-6 text-yellow-400 mr-3" />
            Utility Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilityPages.map((page) => (
              <PageCard key={page.path} page={page} />
            ))}
          </div>
        </section>

        {/* Service Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
            <Shield className="w-6 h-6 text-green-400 mr-3" />
            Authentication Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicePages.map((page) => (
              <PageCard key={page.path} page={page} />
            ))}
          </div>
        </section>

        {/* Advanced Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
            <TrendingUp className="w-6 h-6 text-orange-400 mr-3" />
            Advanced Gaming Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedPages.map((page) => (
              <PageCard key={page.path} page={page} />
            ))}
          </div>
        </section>

        {/* Information Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
            <Info className="w-6 h-6 text-blue-400 mr-3" />
            Information & Legal Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {informationPages.map((page) => (
              <PageCard key={page.path} page={page} />
            ))}
          </div>
        </section>

        {/* Page Statistics */}
        <section className="mb-12">
          <Card className="gm-background-secondary border-gray-700">
            <CardHeader>
              <CardTitle className="font-mono text-center">Platform Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold gm-text-teal mb-2">29</div>
                  <div className="text-sm gm-text-secondary">Total Pages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gm-text-pink mb-2">4</div>
                  <div className="text-sm gm-text-secondary">Main Features</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">8</div>
                  <div className="text-sm gm-text-secondary">User Functions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-sm gm-text-secondary">Responsive</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Navigation */}
        <section>
          <Card className="gm-background-secondary border-gray-700">
            <CardHeader>
              <CardTitle className="font-mono">Quick Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                <Link href="/">
                  <Button variant="outline" size="sm" className="w-full border-gray-700 hover:gm-border-teal">
                    Home
                  </Button>
                </Link>
                <Link href="/search">
                  <Button variant="outline" size="sm" className="w-full border-gray-700 hover:gm-border-teal">
                    Search
                  </Button>
                </Link>
                <Link href="/cart">
                  <Button variant="outline" size="sm" className="w-full border-gray-700 hover:gm-border-teal">
                    Cart
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button variant="outline" size="sm" className="w-full border-gray-700 hover:gm-border-teal">
                    Profile
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="sm" className="w-full border-gray-700 hover:gm-border-teal">
                    About
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="sm" className="w-full border-gray-700 hover:gm-border-teal">
                    Contact
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
}