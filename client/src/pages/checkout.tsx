import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CreditCard, Lock, Truck, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useCart } from "@/hooks/use-cart";

export default function CheckoutPage() {
  const { cartItems, totalPrice } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      // Redirect to order confirmation
    }, 3000);
  };

  const tax = totalPrice * 0.08;
  const shipping = 0; // Free shipping
  const finalTotal = totalPrice + tax + shipping;

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/cart">
            <Button variant="ghost" size="sm" className="gm-text-secondary hover:gm-text-teal">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold font-mono">Secure Checkout</h1>
            <p className="gm-text-secondary">Complete your purchase safely</p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="gm-text-secondary mb-8">Add some items before checking out</p>
            <Link href="/">
              <Button className="gm-bg-teal text-black">Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'gm-bg-teal text-black' : 'border border-gray-700 gm-text-secondary'}`}>
                    1
                  </div>
                  <span className={step >= 1 ? 'gm-text-teal' : 'gm-text-secondary'}>Shipping</span>
                </div>
                <div className="flex-1 h-px bg-gray-700 mx-4"></div>
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'gm-bg-teal text-black' : 'border border-gray-700 gm-text-secondary'}`}>
                    2
                  </div>
                  <span className={step >= 2 ? 'gm-text-teal' : 'gm-text-secondary'}>Payment</span>
                </div>
                <div className="flex-1 h-px bg-gray-700 mx-4"></div>
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'gm-bg-teal text-black' : 'border border-gray-700 gm-text-secondary'}`}>
                    3
                  </div>
                  <span className={step >= 3 ? 'gm-text-teal' : 'gm-text-secondary'}>Review</span>
                </div>
              </div>

              {/* Shipping Information */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center font-mono">
                    <Truck className="w-5 h-5 mr-2 gm-text-teal" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        className="gm-background border-gray-700 focus:gm-border-teal"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        className="gm-background border-gray-700 focus:gm-border-teal"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      className="gm-background border-gray-700 focus:gm-border-teal"
                      placeholder="123 Gaming Street"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        className="gm-background border-gray-700 focus:gm-border-teal"
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Select>
                        <SelectTrigger className="gm-background border-gray-700 focus:gm-border-teal">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent className="gm-background-secondary border-gray-700">
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                          <SelectItem value="fl">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input
                        id="zip"
                        className="gm-background border-gray-700 focus:gm-border-teal"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center font-mono">
                    <CreditCard className="w-5 h-5 mr-2 gm-text-teal" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="gm-wallet" />
                      <Label htmlFor="gm-wallet">Use GamersMarket Wallet</Label>
                      <span className="gm-text-teal text-sm">($0.00 available)</span>
                    </div>
                  </div>
                  
                  <Separator className="bg-gray-700" />
                  
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      className="gm-background border-gray-700 focus:gm-border-teal"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        className="gm-background border-gray-700 focus:gm-border-teal"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        className="gm-background border-gray-700 focus:gm-border-teal"
                        placeholder="123"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input
                      id="cardName"
                      className="gm-background border-gray-700 focus:gm-border-teal"
                      placeholder="John Doe"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="gm-background-secondary border-gray-700 sticky top-24">
                <CardHeader>
                  <CardTitle className="font-mono">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3">
                        <img 
                          src={item.product.imageUrl || "/placeholder-product.jpg"} 
                          alt={item.product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm line-clamp-1">{item.product.name}</h4>
                          <p className="text-xs gm-text-secondary">Qty: {item.quantity}</p>
                        </div>
                        <span className="font-semibold gm-text-teal">
                          ${(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator className="bg-gray-700" />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping:</span>
                      <span className="gm-text-teal">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax:</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator className="bg-gray-700" />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span className="gm-text-teal">${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className="w-full gm-bg-teal text-black py-3 font-semibold hover:bg-cyan-400 gm-shadow-teal transition-all duration-300"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 mr-2" />
                        Place Order
                      </>
                    )}
                  </Button>

                  <div className="text-center text-xs gm-text-secondary">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Lock className="w-3 h-3" />
                      <span>Secure 256-bit SSL encryption</span>
                    </div>
                    <p>Your payment information is safe and secure</p>
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