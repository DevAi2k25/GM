import { X, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Link } from "wouter";

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartPanel({ isOpen, onClose }: CartPanelProps) {
  const { cartItems, totalPrice, removeFromCart, isRemovingFromCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-96 gm-background-secondary border-l border-gray-700 z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold font-mono">Shopping Cart</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="w-8 h-8 p-0 hover:gm-border-teal"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full space-y-4 gm-text-secondary">
              <ShoppingBag className="w-16 h-16" />
              <p className="text-center">Your cart is empty</p>
              <Button onClick={onClose} className="gm-bg-teal text-black hover:bg-cyan-400">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 gm-background border border-gray-700 rounded-lg p-3">
                  <img 
                    src={item.product.imageUrl || "/placeholder-product.jpg"} 
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded" 
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm line-clamp-2">{item.product.name}</h4>
                    <p className="text-xs gm-text-secondary">Quantity: {item.quantity}</p>
                    <p className="gm-text-teal font-semibold">${(parseFloat(item.product.price) * item.quantity).toFixed(2)}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    disabled={isRemovingFromCart}
                    className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t border-gray-700 gm-background-secondary">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">Total:</span>
              <span className="text-xl font-bold gm-text-teal">${totalPrice.toFixed(2)}</span>
            </div>
            <Link href="/cart" onClick={onClose}>
              <Button className="w-full gm-bg-teal text-black py-3 rounded-lg font-semibold hover:bg-cyan-400 gm-shadow-teal transition-all duration-300">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
