import { Link } from "wouter";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useCart } from "@/hooks/use-cart";

export default function CartPage() {
  const { cartItems, totalPrice, updateCart, removeFromCart, clearCart, isUpdatingCart, isRemovingFromCart } = useCart();

  const updateQuantity = (id: number, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      updateCart({ id, quantity: newQuantity });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gm-text-secondary hover:gm-text-teal">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold font-mono">Shopping Cart</h1>
            <p className="gm-text-secondary">
              {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
            </p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 gm-text-secondary mx-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="gm-text-secondary mb-8">Add some gaming gear to get started!</p>
            <Link href="/">
              <Button className="gm-bg-teal text-black px-8 py-3 font-semibold hover:bg-cyan-400">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="gm-background-secondary border border-gray-700 rounded-lg p-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.product.imageUrl || "/placeholder-product.jpg"} 
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <Link href={`/product/${item.product.id}`}>
                        <h3 className="font-semibold hover:gm-text-teal transition-colors">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="gm-text-secondary text-sm">Gaming Gear</p>
                      <p className="gm-text-teal font-semibold">${item.product.price}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity, -1)}
                        disabled={isUpdatingCart}
                        className="w-8 h-8 p-0"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity, 1)}
                        disabled={isUpdatingCart}
                        className="w-8 h-8 p-0"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold">
                        ${(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        disabled={isRemovingFromCart}
                        className="text-red-400 hover:text-red-300 hover:bg-red-400/10 mt-2"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center pt-4">
                <Button
                  variant="outline"
                  onClick={() => clearCart()}
                  className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                >
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="gm-background-secondary border border-gray-700 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-6 font-mono">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
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
                    <span>${(totalPrice * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4 flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span className="gm-text-teal">${(totalPrice * 1.08).toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full gm-bg-teal text-black py-3 font-semibold hover:bg-cyan-400 gm-shadow-teal transition-all duration-300 mb-4">
                  Proceed to Checkout
                </Button>

                <div className="text-center text-sm gm-text-secondary">
                  <p>Secure checkout powered by</p>
                  <p className="gm-text-teal font-semibold">GamersMarket Wallet</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
