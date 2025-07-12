import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  createdAt: Date;
  product: {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
  };
}

export function useCart() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: cartItems = [], isLoading } = useQuery<CartItem[]>({
    queryKey: ["/api/cart"],
  });

  const addToCartMutation = useMutation({
    mutationFn: async ({ productId, quantity = 1 }: { productId: number; quantity?: number }) => {
      return apiRequest("POST", "/api/cart", { productId, quantity });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
      toast({
        title: "Added to cart",
        description: "Item has been added to your cart",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to add item to cart",
        variant: "destructive",
      });
    },
  });

  const updateCartMutation = useMutation({
    mutationFn: async ({ id, quantity }: { id: number; quantity: number }) => {
      return apiRequest("PATCH", `/api/cart/${id}`, { quantity });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update cart item",
        variant: "destructive",
      });
    },
  });

  const removeFromCartMutation = useMutation({
    mutationFn: async (id: number) => {
      return apiRequest("DELETE", `/api/cart/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
      toast({
        title: "Removed from cart",
        description: "Item has been removed from your cart",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to remove item from cart",
        variant: "destructive",
      });
    },
  });

  const clearCartMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("DELETE", "/api/cart");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
      toast({
        title: "Cart cleared",
        description: "All items have been removed from your cart",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to clear cart",
        variant: "destructive",
      });
    },
  });

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.product.price) * item.quantity, 0);

  return {
    cartItems,
    isLoading,
    totalItems,
    totalPrice,
    addToCart: addToCartMutation.mutate,
    updateCart: updateCartMutation.mutate,
    removeFromCart: removeFromCartMutation.mutate,
    clearCart: clearCartMutation.mutate,
    isAddingToCart: addToCartMutation.isPending,
    isUpdatingCart: updateCartMutation.isPending,
    isRemovingFromCart: removeFromCartMutation.isPending,
    isClearingCart: clearCartMutation.isPending,
  };
}
