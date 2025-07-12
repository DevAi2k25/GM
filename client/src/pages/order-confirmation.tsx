import { Link } from "wouter";
import { CheckCircle, Package, Truck, MapPin, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function OrderConfirmationPage() {
  // Mock order data - in real app this would come from URL params or API
  const order = {
    id: "GM001235",
    date: "December 20, 2024",
    status: "confirmed",
    estimatedDelivery: "December 25, 2024",
    trackingNumber: "GM1234567892",
    items: [
      {
        id: 1,
        name: "Corsair K95 RGB Platinum XT",
        price: "149.99",
        quantity: 1,
        imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      },
      {
        id: 2,
        name: "Logitech G Pro X Superlight",
        price: "89.99",
        quantity: 1,
        imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      }
    ],
    subtotal: 239.98,
    tax: 19.20,
    shipping: 0,
    total: 259.18,
    shippingAddress: {
      name: "Demo Gamer",
      address: "123 Gaming Street",
      city: "New York",
      state: "NY",
      zip: "10001"
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
          <h1 className="text-3xl font-bold font-mono mb-2">Order Confirmed!</h1>
          <p className="gm-text-secondary text-lg">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Information */}
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center justify-between font-mono">
                  <span>Order #{order.id}</span>
                  <Badge className="gm-bg-teal text-black">Confirmed</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Order Date</h4>
                    <p className="gm-text-secondary">{order.date}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Estimated Delivery</h4>
                    <p className="gm-text-teal">{order.estimatedDelivery}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tracking Number</h4>
                    <p className="gm-text-secondary font-mono">{order.trackingNumber}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Total Amount</h4>
                    <p className="text-xl font-bold gm-text-teal">${order.total.toFixed(2)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="font-mono">Items Ordered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-700 rounded-lg">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm gm-text-secondary">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold gm-text-teal">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center font-mono">
                  <MapPin className="w-5 h-5 mr-2 gm-text-teal" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="gm-text-secondary">
                  <p className="font-semibold text-white">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.address}</p>
                  <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
                </div>
              </CardContent>
            </Card>

            {/* Order Actions */}
            <div className="flex flex-wrap gap-4">
              <Button className="gm-bg-teal text-black hover:bg-cyan-400">
                <Package className="w-4 h-4 mr-2" />
                Track Order
              </Button>
              <Button variant="outline" className="border-gray-700 hover:gm-border-teal">
                <Download className="w-4 h-4 mr-2" />
                Download Receipt
              </Button>
              <Button variant="outline" className="border-gray-700 hover:gm-border-teal">
                <Share2 className="w-4 h-4 mr-2" />
                Share Order
              </Button>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="gm-background-secondary border-gray-700 sticky top-24">
              <CardHeader>
                <CardTitle className="font-mono">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="gm-text-teal">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>${order.tax.toFixed(2)}</span>
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span className="gm-text-teal">${order.total.toFixed(2)}</span>
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                {/* Next Steps */}
                <div>
                  <h4 className="font-semibold mb-3">What's Next?</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-400/20 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Order Confirmation</p>
                        <p className="text-xs gm-text-secondary">You'll receive an email confirmation shortly</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Processing</p>
                        <p className="text-xs gm-text-secondary">We'll prepare your items for shipping</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Shipping</p>
                        <p className="text-xs gm-text-secondary">Track your package in real-time</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/">
                  <Button variant="outline" className="w-full border-gray-700 hover:gm-border-teal">
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}