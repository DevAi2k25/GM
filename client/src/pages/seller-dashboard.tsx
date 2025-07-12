import { useState } from "react";
import { Link } from "wouter";
import { 
  Plus, 
  Package, 
  DollarSign, 
  TrendingUp, 
  Eye, 
  Edit, 
  Trash2, 
  MessageSquare,
  Star,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock seller data
  const sellerStats = {
    totalSales: 15420.50,
    activeListings: 23,
    totalOrders: 142,
    averageRating: 4.8,
    totalViews: 8920,
    monthlyGrowth: 12.5
  };

  const recentOrders = [
    {
      id: "GM001234",
      product: "Corsair K95 RGB Platinum XT",
      buyer: "gamer_pro123",
      amount: 149.99,
      status: "shipped",
      date: "Dec 18, 2024"
    },
    {
      id: "GM001235",
      product: "Logitech G Pro X Superlight",
      buyer: "fps_master",
      amount: 89.99,
      status: "pending",
      date: "Dec 17, 2024"
    },
    {
      id: "GM001236",
      product: "SteelSeries Arctis 7P",
      buyer: "sound_lover",
      amount: 129.99,
      status: "delivered",
      date: "Dec 16, 2024"
    }
  ];

  const myListings = [
    {
      id: 1,
      name: "Corsair K95 RGB Platinum XT",
      price: 149.99,
      stock: 5,
      views: 234,
      status: "active",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 2,
      name: "Razer DeathAdder V3",
      price: 69.99,
      stock: 0,
      views: 156,
      status: "out_of_stock",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 3,
      name: "HyperX Cloud II",
      price: 99.99,
      stock: 12,
      views: 189,
      status: "active",
      image: "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "gm-text-teal";
      case "pending": return "text-yellow-400";
      case "shipped": return "text-blue-400";
      case "delivered": return "text-green-400";
      case "out_of_stock": return "text-red-400";
      default: return "gm-text-secondary";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active": return <Badge className="gm-bg-teal text-black">Active</Badge>;
      case "pending": return <Badge className="bg-yellow-400 text-black">Pending</Badge>;
      case "shipped": return <Badge className="bg-blue-400 text-black">Shipped</Badge>;
      case "delivered": return <Badge className="bg-green-400 text-black">Delivered</Badge>;
      case "out_of_stock": return <Badge className="bg-red-400 text-black">Out of Stock</Badge>;
      default: return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-mono">Seller Dashboard</h1>
            <p className="gm-text-secondary">Manage your GamersMarket store</p>
          </div>
          <Button className="gm-bg-teal text-black hover:bg-cyan-400">
            <Plus className="w-4 h-4 mr-2" />
            Add New Product
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="gm-background-secondary border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm gm-text-secondary">Total Sales</p>
                  <p className="text-2xl font-bold gm-text-teal">${sellerStats.totalSales.toLocaleString()}</p>
                </div>
                <DollarSign className="w-8 h-8 gm-text-teal" />
              </div>
            </CardContent>
          </Card>

          <Card className="gm-background-secondary border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm gm-text-secondary">Active Listings</p>
                  <p className="text-2xl font-bold">{sellerStats.activeListings}</p>
                </div>
                <Package className="w-8 h-8 gm-text-pink" />
              </div>
            </CardContent>
          </Card>

          <Card className="gm-background-secondary border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm gm-text-secondary">Total Orders</p>
                  <p className="text-2xl font-bold">{sellerStats.totalOrders}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="gm-background-secondary border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm gm-text-secondary">Avg Rating</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold text-yellow-400">{sellerStats.averageRating}</p>
                    <Star className="w-5 h-5 text-yellow-400 ml-1" />
                  </div>
                </div>
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="gm-background-secondary border-gray-700 mb-6">
            <TabsTrigger value="overview" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
              Overview
            </TabsTrigger>
            <TabsTrigger value="listings" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
              My Listings
            </TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
              Orders
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="messages" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
              Messages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                        <div>
                          <h4 className="font-semibold">{order.product}</h4>
                          <p className="text-sm gm-text-secondary">Order #{order.id} • {order.buyer}</p>
                          <p className="text-sm gm-text-secondary">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold gm-text-teal">${order.amount}</p>
                          {getStatusBadge(order.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Performance This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span>Total Views</span>
                      <span className="font-semibold">{sellerStats.totalViews.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Conversion Rate</span>
                      <span className="font-semibold gm-text-teal">3.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Monthly Growth</span>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                        <span className="font-semibold text-green-400">+{sellerStats.monthlyGrowth}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Response Time</span>
                      <span className="font-semibold">&lt; 2 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="listings">
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-mono">My Listings</CardTitle>
                  <div className="flex space-x-4">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-40 gm-background border-gray-700">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent className="gm-background-secondary border-gray-700">
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input 
                      placeholder="Search products..." 
                      className="w-64 gm-background border-gray-700"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myListings.map((listing) => (
                    <div key={listing.id} className="flex items-center space-x-4 p-4 border border-gray-700 rounded-lg">
                      <img 
                        src={listing.image}
                        alt={listing.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{listing.name}</h4>
                        <div className="flex items-center space-x-4 text-sm gm-text-secondary">
                          <span>Stock: {listing.stock}</span>
                          <span>Views: {listing.views}</span>
                          <span className={getStatusColor(listing.status)}>
                            {listing.status.replace('_', ' ').toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold gm-text-teal">${listing.price}</p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" variant="outline" className="border-gray-700">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-gray-700">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="font-mono">Order Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-6 border border-gray-700 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">Order #{order.id}</h4>
                          {getStatusBadge(order.status)}
                        </div>
                        <p className="gm-text-secondary">{order.product}</p>
                        <p className="text-sm gm-text-secondary">Buyer: {order.buyer} • {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold gm-text-teal">${order.amount}</p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" className="gm-bg-teal text-black">
                            View Details
                          </Button>
                          <Button size="sm" variant="outline" className="border-gray-700">
                            <MessageSquare className="w-3 h-3 mr-1" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Sales Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <TrendingUp className="w-16 h-16 gm-text-secondary mx-auto mb-4" />
                    <p className="gm-text-secondary">Advanced analytics coming soon!</p>
                    <p className="text-sm gm-text-secondary">Track your sales performance, customer insights, and growth metrics.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Product Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Best Selling Product</span>
                      <span className="font-semibold">Corsair K95 RGB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Most Viewed Product</span>
                      <span className="font-semibold">Logitech G Pro X</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Highest Rated Product</span>
                      <div className="flex items-center">
                        <span className="font-semibold mr-1">HyperX Cloud II</span>
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">4.9</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="messages">
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="font-mono">Customer Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <MessageSquare className="w-16 h-16 gm-text-secondary mx-auto mb-4" />
                  <p className="gm-text-secondary">No new messages</p>
                  <p className="text-sm gm-text-secondary">Customer inquiries and messages will appear here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}