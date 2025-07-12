import { useState } from "react";
import { Link } from "wouter";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Calendar,
  Filter,
  Download,
  RefreshCw,
  Eye,
  Star,
  Award,
  Zap,
  Clock,
  Globe,
  Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function MarketplaceAnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const timePeriods = [
    { id: "24h", name: "Last 24 Hours" },
    { id: "7d", name: "Last 7 Days" },
    { id: "30d", name: "Last 30 Days" },
    { id: "90d", name: "Last 3 Months" },
    { id: "1y", name: "Last Year" }
  ];

  const marketOverview = {
    totalVolume: 2850000,
    totalTransactions: 15678,
    activeUsers: 45230,
    totalListings: 8920,
    volumeChange: 15.4,
    transactionChange: 8.7,
    userChange: 12.3,
    listingChange: -2.1
  };

  const topCategories = [
    {
      name: "Gaming Keyboards",
      volume: 850000,
      transactions: 3420,
      avgPrice: 248.54,
      change: 18.5,
      trending: "up",
      marketShare: 29.8
    },
    {
      name: "Graphics Cards",
      volume: 720000,
      transactions: 1890,
      avgPrice: 681.22,
      change: 12.3,
      trending: "up",
      marketShare: 25.3
    },
    {
      name: "Gaming Headsets",
      volume: 480000,
      transactions: 4560,
      avgPrice: 105.26,
      change: -5.2,
      trending: "down",
      marketShare: 16.8
    },
    {
      name: "Gaming Mice",
      volume: 420000,
      transactions: 5890,
      avgPrice: 71.33,
      change: 22.1,
      trending: "up",
      marketShare: 14.7
    },
    {
      name: "Gaming Chairs",
      volume: 380000,
      transactions: 890,
      avgPrice: 427.00,
      change: 8.9,
      trending: "up",
      marketShare: 13.3
    }
  ];

  const topProducts = [
    {
      name: "Corsair K95 RGB Platinum XT",
      sales: 1250,
      revenue: 186750,
      avgPrice: 149.40,
      rating: 4.8,
      views: 45600,
      category: "Keyboards"
    },
    {
      name: "NVIDIA RTX 4090 FE",
      sales: 890,
      revenue: 1423400,
      avgPrice: 1599.33,
      rating: 4.9,
      views: 89200,
      category: "Graphics Cards"
    },
    {
      name: "Logitech G Pro X Superlight",
      sales: 2340,
      revenue: 210600,
      avgPrice: 89.99,
      rating: 4.7,
      views: 32100,
      category: "Gaming Mice"
    },
    {
      name: "SteelSeries Arctis 7P",
      sales: 1890,
      revenue: 245700,
      avgPrice: 129.99,
      rating: 4.6,
      views: 28400,
      category: "Headsets"
    },
    {
      name: "Secretlab TITAN Evo",
      sales: 450,
      revenue: 224550,
      avgPrice: 499.00,
      rating: 4.9,
      views: 15600,
      category: "Gaming Chairs"
    }
  ];

  const priceRanges = [
    { range: "$0 - $50", percentage: 35, volume: 998500, color: "bg-green-400" },
    { range: "$50 - $150", percentage: 28, volume: 798000, color: "gm-bg-teal" },
    { range: "$150 - $500", percentage: 22, volume: 627000, color: "bg-blue-400" },
    { range: "$500 - $1000", percentage: 10, volume: 285000, color: "bg-purple-400" },
    { range: "$1000+", percentage: 5, volume: 142500, color: "bg-pink-500" }
  ];

  const geographicData = [
    { country: "United States", percentage: 42, volume: 1197000, flag: "🇺🇸" },
    { country: "Canada", percentage: 18, volume: 513000, flag: "🇨🇦" },
    { country: "United Kingdom", percentage: 12, volume: 342000, flag: "🇬🇧" },
    { country: "Germany", percentage: 8, volume: 228000, flag: "🇩🇪" },
    { country: "Australia", percentage: 6, volume: 171000, flag: "🇦🇺" },
    { country: "Other", percentage: 14, volume: 399000, flag: "🌍" }
  ];

  const deviceBreakdown = [
    { device: "Desktop", percentage: 68, sessions: 30804 },
    { device: "Mobile", percentage: 25, sessions: 11307 },
    { device: "Tablet", percentage: 7, sessions: 3169 }
  ];

  const topSellers = [
    {
      username: "TechDealsGuru",
      revenue: 125000,
      sales: 890,
      rating: 4.9,
      products: 67,
      joinDate: "Jan 2023"
    },
    {
      username: "HardwareMaster",
      revenue: 98500,
      sales: 723,
      rating: 4.8,
      products: 45,
      joinDate: "Mar 2023"
    },
    {
      username: "GamingGearPro",
      revenue: 87200,
      sales: 1234,
      rating: 4.7,
      products: 89,
      joinDate: "Feb 2023"
    },
    {
      username: "PCPartDealer",
      revenue: 76800,
      sales: 567,
      rating: 4.9,
      products: 34,
      joinDate: "May 2023"
    }
  ];

  const marketTrends = [
    {
      trend: "RGB Gaming Gear",
      growth: "+34%",
      description: "RGB-enabled gaming peripherals showing strong growth",
      category: "Peripherals"
    },
    {
      trend: "Wireless Gaming",
      growth: "+28%",
      description: "Wireless keyboards and mice gaining popularity",
      category: "Peripherals"
    },
    {
      trend: "High-End Graphics Cards",
      growth: "+22%",
      description: "Premium GPU segment experiencing surge",
      category: "Hardware"
    },
    {
      trend: "Streaming Equipment",
      growth: "+19%",
      description: "Content creation tools in high demand",
      category: "Streaming"
    }
  ];

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
  };

  const getChangeColor = (change: number) => {
    return change >= 0 ? "text-green-400" : "text-red-400";
  };

  const getChangeIcon = (change: number) => {
    return change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-mono">
              Marketplace <span className="gm-text-teal">Analytics</span>
            </h1>
            <p className="text-xl gm-text-secondary max-w-3xl mx-auto">
              Comprehensive market insights, trends, and performance metrics for the gaming marketplace. 
              Track sales, analyze trends, and make data-driven decisions.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="gm-background border-gray-700">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent className="gm-background-secondary border-gray-700">
                {timePeriods.map((period) => (
                  <SelectItem key={period.id} value={period.id}>
                    {period.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button variant="outline" className="border-gray-700">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            
            <Button variant="outline" className="border-gray-700">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Market Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-mono">Market Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="gm-background-secondary border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm gm-text-secondary">Total Volume</p>
                    <p className="text-3xl font-bold gm-text-teal">{formatCurrency(marketOverview.totalVolume)}</p>
                    <div className={`flex items-center text-sm ${getChangeColor(marketOverview.volumeChange)}`}>
                      {getChangeIcon(marketOverview.volumeChange)}
                      <span className="ml-1">+{marketOverview.volumeChange}%</span>
                    </div>
                  </div>
                  <DollarSign className="w-8 h-8 gm-text-teal" />
                </div>
              </CardContent>
            </Card>

            <Card className="gm-background-secondary border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm gm-text-secondary">Transactions</p>
                    <p className="text-3xl font-bold">{marketOverview.totalTransactions.toLocaleString()}</p>
                    <div className={`flex items-center text-sm ${getChangeColor(marketOverview.transactionChange)}`}>
                      {getChangeIcon(marketOverview.transactionChange)}
                      <span className="ml-1">+{marketOverview.transactionChange}%</span>
                    </div>
                  </div>
                  <ShoppingCart className="w-8 h-8 gm-text-pink" />
                </div>
              </CardContent>
            </Card>

            <Card className="gm-background-secondary border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm gm-text-secondary">Active Users</p>
                    <p className="text-3xl font-bold">{(marketOverview.activeUsers / 1000).toFixed(1)}K</p>
                    <div className={`flex items-center text-sm ${getChangeColor(marketOverview.userChange)}`}>
                      {getChangeIcon(marketOverview.userChange)}
                      <span className="ml-1">+{marketOverview.userChange}%</span>
                    </div>
                  </div>
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="gm-background-secondary border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm gm-text-secondary">Total Listings</p>
                    <p className="text-3xl font-bold">{(marketOverview.totalListings / 1000).toFixed(1)}K</p>
                    <div className={`flex items-center text-sm ${getChangeColor(marketOverview.listingChange)}`}>
                      {getChangeIcon(marketOverview.listingChange)}
                      <span className="ml-1">{marketOverview.listingChange}%</span>
                    </div>
                  </div>
                  <Package className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Analytics */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="categories">
              <TabsList className="gm-background-secondary border-gray-700 mb-6">
                <TabsTrigger value="categories" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
                  Categories
                </TabsTrigger>
                <TabsTrigger value="products" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
                  Top Products
                </TabsTrigger>
                <TabsTrigger value="sellers" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
                  Top Sellers
                </TabsTrigger>
                <TabsTrigger value="trends" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
                  Trends
                </TabsTrigger>
              </TabsList>

              <TabsContent value="categories">
                <Card className="gm-background-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="font-mono flex items-center">
                      <PieChart className="w-5 h-5 gm-text-teal mr-2" />
                      Category Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topCategories.map((category, index) => (
                        <div key={index} className="p-4 border border-gray-700 rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold">{category.name}</h4>
                            <div className="flex items-center space-x-2">
                              <div className={`flex items-center text-sm ${getChangeColor(category.change)}`}>
                                {getChangeIcon(category.change)}
                                <span className="ml-1">{category.change > 0 ? '+' : ''}{category.change}%</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                            <div>
                              <span className="gm-text-secondary">Volume</span>
                              <p className="font-bold gm-text-teal">{formatCurrency(category.volume)}</p>
                            </div>
                            <div>
                              <span className="gm-text-secondary">Transactions</span>
                              <p className="font-bold">{category.transactions.toLocaleString()}</p>
                            </div>
                            <div>
                              <span className="gm-text-secondary">Avg Price</span>
                              <p className="font-bold">${category.avgPrice.toFixed(2)}</p>
                            </div>
                            <div>
                              <span className="gm-text-secondary">Market Share</span>
                              <p className="font-bold">{category.marketShare}%</p>
                            </div>
                          </div>
                          
                          <Progress value={category.marketShare} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="products">
                <Card className="gm-background-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="font-mono flex items-center">
                      <Award className="w-5 h-5 text-yellow-400 mr-2" />
                      Best Selling Products
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topProducts.map((product, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 border border-gray-700 rounded-lg">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center font-bold text-black">
                            {index + 1}
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{product.name}</h4>
                            <div className="flex items-center space-x-4 text-sm gm-text-secondary">
                              <span>{product.category}</span>
                              <div className="flex items-center">
                                <Star className="w-3 h-3 text-yellow-400 mr-1" />
                                {product.rating}
                              </div>
                              <div className="flex items-center">
                                <Eye className="w-3 h-3 mr-1" />
                                {product.views.toLocaleString()}
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <p className="font-bold gm-text-teal">{formatCurrency(product.revenue)}</p>
                            <p className="text-sm gm-text-secondary">{product.sales} sales</p>
                            <p className="text-sm gm-text-secondary">${product.avgPrice}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sellers">
                <Card className="gm-background-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="font-mono flex items-center">
                      <Users className="w-5 h-5 gm-text-pink mr-2" />
                      Top Performing Sellers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topSellers.map((seller, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 border border-gray-700 rounded-lg">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center font-bold text-black">
                            {index + 1}
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{seller.username}</h4>
                            <div className="flex items-center space-x-4 text-sm gm-text-secondary">
                              <span>{seller.products} products</span>
                              <div className="flex items-center">
                                <Star className="w-3 h-3 text-yellow-400 mr-1" />
                                {seller.rating}
                              </div>
                              <span>Joined {seller.joinDate}</span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <p className="font-bold gm-text-teal">{formatCurrency(seller.revenue)}</p>
                            <p className="text-sm gm-text-secondary">{seller.sales} sales</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="trends">
                <Card className="gm-background-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="font-mono flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                      Market Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {marketTrends.map((trend, index) => (
                        <div key={index} className="p-4 border border-gray-700 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{trend.trend}</h4>
                            <Badge className="bg-green-500 text-white">{trend.growth}</Badge>
                          </div>
                          <p className="text-sm gm-text-secondary mb-2">{trend.description}</p>
                          <Badge variant="outline" className="border-gray-600">
                            {trend.category}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar Analytics */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              {/* Price Distribution */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Price Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {priceRanges.map((range, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{range.range}</span>
                          <span className="text-sm gm-text-secondary">{range.percentage}%</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress value={range.percentage} className="flex-1 h-2" />
                          <span className="text-xs gm-text-secondary">{formatCurrency(range.volume)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Geographic Distribution */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Geographic Sales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {geographicData.map((geo, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{geo.flag}</span>
                          <span className="text-sm font-medium">{geo.country}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold">{geo.percentage}%</p>
                          <p className="text-xs gm-text-secondary">{formatCurrency(geo.volume)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Device Analytics */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono flex items-center">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Device Usage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {deviceBreakdown.map((device, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{device.device}</span>
                          <span className="text-sm gm-text-secondary">{device.percentage}%</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress value={device.percentage} className="flex-1 h-2" />
                          <span className="text-xs gm-text-secondary">{device.sessions.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full gm-bg-teal text-black hover:bg-cyan-400">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Detailed Report
                    </Button>
                    <Button variant="outline" className="w-full border-gray-700">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Report
                    </Button>
                    <Button variant="outline" className="w-full border-gray-700">
                      <Target className="w-4 h-4 mr-2" />
                      Set Alerts
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}