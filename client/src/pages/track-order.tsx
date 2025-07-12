import { useState } from "react";
import { Link } from "wouter";
import { 
  Package, 
  Truck, 
  CheckCircle, 
  Clock, 
  MapPin,
  Calendar,
  Search,
  Download,
  Share2,
  Phone,
  Mail,
  AlertCircle,
  Info,
  Eye,
  ArrowRight,
  Navigation,
  User,
  Shield,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [searchedOrder, setSearchedOrder] = useState<any>(null);

  // Mock order data
  const mockOrder = {
    id: "GM-2024-001",
    status: "in_transit",
    orderDate: "2024-12-18",
    estimatedDelivery: "2024-12-22",
    trackingNumber: "1Z999AA1234567890",
    carrier: "FedEx",
    total: 149.99,
    items: [
      {
        id: 1,
        name: "Corsair K95 RGB Platinum XT",
        quantity: 1,
        price: 149.99,
        imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        seller: "TechDealsGuru"
      }
    ],
    shippingAddress: {
      name: "John Doe",
      street: "123 Gaming Street",
      city: "Tech City",
      state: "CA",
      zipCode: "90210",
      country: "United States"
    },
    tracking: [
      {
        status: "order_placed",
        timestamp: "2024-12-18T10:30:00Z",
        location: "GamersMarket Warehouse",
        description: "Order confirmed and being prepared",
        completed: true
      },
      {
        status: "processing",
        timestamp: "2024-12-18T14:15:00Z",
        location: "GamersMarket Warehouse",
        description: "Item picked and packaged",
        completed: true
      },
      {
        status: "shipped",
        timestamp: "2024-12-19T09:00:00Z",
        location: "Los Angeles, CA",
        description: "Package shipped from warehouse",
        completed: true
      },
      {
        status: "in_transit",
        timestamp: "2024-12-20T11:30:00Z",
        location: "Phoenix, AZ",
        description: "Package in transit",
        completed: true,
        current: true
      },
      {
        status: "out_for_delivery",
        timestamp: null,
        location: "Tech City, CA",
        description: "Out for delivery",
        completed: false
      },
      {
        status: "delivered",
        timestamp: null,
        location: "Tech City, CA",
        description: "Package delivered",
        completed: false
      }
    ]
  };

  const recentOrders = [
    {
      id: "GM-2024-002",
      status: "delivered",
      orderDate: "2024-12-15",
      deliveredDate: "2024-12-19",
      total: 89.99,
      itemsCount: 1,
      mainItem: "Logitech G Pro X Superlight"
    },
    {
      id: "GM-2024-003",
      status: "processing",
      orderDate: "2024-12-20",
      estimatedDelivery: "2024-12-24",
      total: 249.99,
      itemsCount: 2,
      mainItem: "SteelSeries Arctis 7P + Mouse Pad"
    },
    {
      id: "GM-2024-004",
      status: "cancelled",
      orderDate: "2024-12-10",
      total: 499.99,
      itemsCount: 1,
      mainItem: "Secretlab TITAN Evo"
    }
  ];

  const handleTrackOrder = () => {
    if (orderNumber === "GM-2024-001" || orderNumber === "1Z999AA1234567890") {
      setSearchedOrder(mockOrder);
    } else {
      setSearchedOrder(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "text-green-400";
      case "in_transit": return "gm-text-teal";
      case "processing": return "text-yellow-400";
      case "cancelled": return "text-red-400";
      case "shipped": return "text-blue-400";
      default: return "gm-text-secondary";
    }
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (!completed) return <Clock className="w-5 h-5 gm-text-secondary" />;
    
    switch (status) {
      case "order_placed": return <Package className="w-5 h-5 text-green-400" />;
      case "processing": return <User className="w-5 h-5 text-blue-400" />;
      case "shipped": return <Truck className="w-5 h-5 text-purple-400" />;
      case "in_transit": return <Navigation className="w-5 h-5 gm-text-teal" />;
      case "out_for_delivery": return <Truck className="w-5 h-5 text-orange-400" />;
      case "delivered": return <CheckCircle className="w-5 h-5 text-green-400" />;
      default: return <Clock className="w-5 h-5 gm-text-secondary" />;
    }
  };

  const getProgressPercentage = (tracking: any[]) => {
    const completedSteps = tracking.filter(step => step.completed).length;
    return (completedSteps / tracking.length) * 100;
  };

  const formatDateTime = (timestamp: string | null) => {
    if (!timestamp) return "Pending";
    const date = new Date(timestamp);
    return date.toLocaleDateString() + " at " + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-mono">
              Track Your <span className="gm-text-teal">Order</span>
            </h1>
            <p className="text-xl gm-text-secondary max-w-2xl mx-auto">
              Stay updated on your order status and delivery progress. Enter your order number or tracking ID below.
            </p>
          </div>

          {/* Order Tracking Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="gm-background border-gray-700">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
                    <Input
                      placeholder="Enter order number (e.g., GM-2024-001) or tracking ID"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      className="pl-10 gm-background border-gray-700 focus:gm-border-teal"
                    />
                  </div>
                  <Button
                    onClick={handleTrackOrder}
                    className="gm-bg-teal text-black hover:bg-cyan-400"
                  >
                    Track Order
                  </Button>
                </div>
                
                <div className="mt-4 text-sm gm-text-secondary">
                  <p>💡 Try tracking with: <span className="gm-text-teal">GM-2024-001</span> or <span className="gm-text-teal">1Z999AA1234567890</span></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {searchedOrder ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Tracking Content */}
            <div className="lg:col-span-3">
              {/* Order Header */}
              <Card className="gm-background-secondary border-gray-700 mb-8">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Order {searchedOrder.id}</h2>
                      <div className="flex items-center space-x-4 text-sm gm-text-secondary">
                        <span>Ordered: {searchedOrder.orderDate}</span>
                        <span>•</span>
                        <span>Expected: {searchedOrder.estimatedDelivery}</span>
                        <span>•</span>
                        <Badge className={getStatusColor(searchedOrder.status)}>
                          {searchedOrder.status.replace('_', ' ').toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex space-x-2">
                      <Button variant="outline" size="sm" className="border-gray-700">
                        <Download className="w-4 h-4 mr-2" />
                        Invoice
                      </Button>
                      <Button variant="outline" size="sm" className="border-gray-700">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Delivery Progress</span>
                      <span className="text-sm gm-text-secondary">{Math.round(getProgressPercentage(searchedOrder.tracking))}% Complete</span>
                    </div>
                    <Progress value={getProgressPercentage(searchedOrder.tracking)} className="h-3" />
                  </div>

                  {/* Current Status */}
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center">
                        <Truck className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold gm-text-teal">Package in Transit</h3>
                        <p className="text-sm gm-text-secondary">Last updated: Phoenix, AZ - December 20, 2024 at 11:30 AM</p>
                        <p className="text-sm mt-1">Tracking Number: <span className="gm-text-teal">{searchedOrder.trackingNumber}</span></p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Tracking */}
              <Card className="gm-background-secondary border-gray-700 mb-8">
                <CardHeader>
                  <CardTitle className="font-mono flex items-center">
                    <MapPin className="w-5 h-5 gm-text-teal mr-2" />
                    Tracking Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {searchedOrder.tracking.map((step: any, index: number) => (
                      <div key={index} className={`flex items-start space-x-4 ${step.current ? 'bg-teal-500/10 rounded-lg p-4' : ''}`}>
                        <div className="flex-shrink-0">
                          {getStatusIcon(step.status, step.completed)}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${step.completed ? 'text-white' : 'gm-text-secondary'}`}>
                            {step.description}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm gm-text-secondary mt-1">
                            <span>{step.location}</span>
                            {step.timestamp && (
                              <>
                                <span>•</span>
                                <span>{formatDateTime(step.timestamp)}</span>
                              </>
                            )}
                          </div>
                        </div>
                        {step.current && (
                          <Badge className="gm-bg-teal text-black">Current</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Order Items */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Order Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {searchedOrder.items.map((item: any) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-700 rounded-lg">
                        <img 
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm gm-text-secondary">Sold by {item.seller}</p>
                          <p className="text-sm gm-text-secondary">Quantity: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold gm-text-teal">${item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6 sticky top-24">
                {/* Delivery Info */}
                <Card className="gm-background-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="font-mono">Delivery Info</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Shipping Address</h4>
                        <div className="text-sm gm-text-secondary">
                          <p>{searchedOrder.shippingAddress.name}</p>
                          <p>{searchedOrder.shippingAddress.street}</p>
                          <p>{searchedOrder.shippingAddress.city}, {searchedOrder.shippingAddress.state} {searchedOrder.shippingAddress.zipCode}</p>
                          <p>{searchedOrder.shippingAddress.country}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Carrier</h4>
                        <p className="text-sm gm-text-secondary">{searchedOrder.carrier}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Estimated Delivery</h4>
                        <p className="text-sm gm-text-teal">{searchedOrder.estimatedDelivery}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Support */}
                <Card className="gm-background-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="font-mono">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Link href="/help-support">
                        <Button variant="outline" className="w-full border-gray-700">
                          <Phone className="w-4 h-4 mr-2" />
                          Contact Support
                        </Button>
                      </Link>
                      <Button variant="outline" className="w-full border-gray-700">
                        <Mail className="w-4 h-4 mr-2" />
                        Report Issue
                      </Button>
                      <Button variant="outline" className="w-full border-gray-700">
                        <Info className="w-4 h-4 mr-2" />
                        Delivery FAQ
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Order Actions */}
                <Card className="gm-background-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="font-mono">Order Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full border-gray-700">
                        <Star className="w-4 h-4 mr-2" />
                        Leave Review
                      </Button>
                      <Button variant="outline" className="w-full border-gray-700">
                        <Package className="w-4 h-4 mr-2" />
                        Return Item
                      </Button>
                      <Button variant="outline" className="w-full border-gray-700">
                        <Shield className="w-4 h-4 mr-2" />
                        Report Problem
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Orders */}
            <div className="lg:col-span-2">
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  {recentOrders.length === 0 ? (
                    <div className="text-center py-8">
                      <Package className="w-16 h-16 gm-text-secondary mx-auto mb-4" />
                      <p className="gm-text-secondary">No recent orders found</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:gm-border-teal transition-colors">
                          <div>
                            <h4 className="font-semibold">{order.id}</h4>
                            <p className="text-sm gm-text-secondary">{order.mainItem}</p>
                            <div className="flex items-center space-x-2 text-xs gm-text-secondary mt-1">
                              <span>Ordered: {order.orderDate}</span>
                              <span>•</span>
                              <Badge className={getStatusColor(order.status)} variant="outline">
                                {order.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold gm-text-teal">${order.total}</p>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-700 mt-2"
                              onClick={() => {
                                setOrderNumber(order.id);
                                handleTrackOrder();
                              }}
                            >
                              Track
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Tracking Tips */}
            <div className="lg:col-span-1">
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Tracking Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm gm-text-secondary">
                    <div className="flex items-start space-x-2">
                      <Info className="w-4 h-4 gm-text-teal mt-0.5 flex-shrink-0" />
                      <p>Order numbers start with "GM-" followed by the year and order ID</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Info className="w-4 h-4 gm-text-teal mt-0.5 flex-shrink-0" />
                      <p>Tracking updates may take 24-48 hours to appear after shipping</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Info className="w-4 h-4 gm-text-teal mt-0.5 flex-shrink-0" />
                      <p>Check your email for shipping confirmations and tracking links</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Info className="w-4 h-4 gm-text-teal mt-0.5 flex-shrink-0" />
                      <p>Contact support if your package is delayed beyond the estimated delivery date</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}