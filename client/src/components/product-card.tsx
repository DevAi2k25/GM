import { Link } from "wouter";
import { Heart, ShoppingCart, Star, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "../../../shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isAddingToCart } = useCart();

  const hasDiscount = product.originalPrice && parseFloat(product.originalPrice) > parseFloat(product.price);
  const discountPercent = hasDiscount 
    ? Math.round(((parseFloat(product.originalPrice!) - parseFloat(product.price)) / parseFloat(product.originalPrice!)) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ productId: product.id, quantity: 1 });
  };

  return (
    <div className="gm-background-secondary border border-gray-700 rounded-xl overflow-hidden group hover:gm-border-teal transition-all duration-300 hover:gm-shadow-teal">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative">
          <img 
            src={product.imageUrl || "/placeholder-product.jpg"} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.verified && (
              <Badge className="gm-bg-teal text-black">
                <Shield className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            )}
            {product.featured && (
              <Badge className="gm-bg-pink text-white">
                Hot
              </Badge>
            )}
          </div>

          {hasDiscount && (
            <Badge className="absolute top-2 right-2 gm-bg-pink text-white">
              -{discountPercent}%
            </Badge>
          )}

          <button className="absolute bottom-2 right-2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Badge variant="outline" className="text-xs gm-text-teal border-cyan-400">
              Category
            </Badge>
            <div className="flex text-xs text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(parseFloat(product.rating || "0")) ? 'fill-current' : ''}`} />
              ))}
              <span className="gm-text-secondary ml-1">({product.reviewCount})</span>
            </div>
          </div>

          <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-sm gm-text-secondary mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-lg font-bold gm-text-teal">${product.price}</span>
              {hasDiscount && (
                <span className="text-sm gm-text-secondary line-through ml-2">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <Button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className="gm-bg-teal text-black px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-cyan-400 transition-colors"
            >
              {isAddingToCart ? (
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <ShoppingCart className="w-4 h-4" />
              )}
            </Button>
          </div>

          <div className="pt-3 border-t border-gray-700">
            <div className="flex items-center justify-between text-xs gm-text-secondary">
              <span>Seller: <span className="gm-text-teal">TechStore Pro</span></span>
              <span className="flex items-center">
                <Truck className="w-3 h-3 mr-1" />
                Free Shipping
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
