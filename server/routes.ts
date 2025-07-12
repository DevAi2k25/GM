import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Categories
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  app.get("/api/categories/featured", async (req, res) => {
    try {
      const categories = await storage.getFeaturedCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured categories" });
    }
  });

  app.get("/api/categories/:slug", async (req, res) => {
    try {
      const category = await storage.getCategoryBySlug(req.params.slug);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch category" });
    }
  });

  // Products
  app.get("/api/products", async (req, res) => {
    try {
      const { categoryId, featured, limit } = req.query;
      const options = {
        categoryId: categoryId ? parseInt(categoryId as string) : undefined,
        featured: featured === "true",
        limit: limit ? parseInt(limit as string) : undefined,
      };
      const products = await storage.getProducts(options);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  app.get("/api/products/featured", async (req, res) => {
    try {
      const products = await storage.getFeaturedProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured products" });
    }
  });

  app.get("/api/products/search", async (req, res) => {
    try {
      const { q } = req.query;
      if (!q || typeof q !== "string") {
        return res.status(400).json({ message: "Search query required" });
      }
      const products = await storage.searchProducts(q);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to search products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(parseInt(req.params.id));
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  // Cart (using demo user ID = 1 for simplicity)
  app.get("/api/cart", async (req, res) => {
    try {
      const cartItems = await storage.getCartItems(1);
      res.json(cartItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch cart items" });
    }
  });

  app.post("/api/cart", async (req, res) => {
    try {
      const { productId, quantity = 1 } = req.body;
      if (!productId) {
        return res.status(400).json({ message: "Product ID required" });
      }

      const cartItem = await storage.addToCart({
        userId: 1,
        productId: parseInt(productId),
        quantity: parseInt(quantity),
      });

      res.json(cartItem);
    } catch (error) {
      res.status(500).json({ message: "Failed to add to cart" });
    }
  });

  app.patch("/api/cart/:id", async (req, res) => {
    try {
      const { quantity } = req.body;
      if (!quantity) {
        return res.status(400).json({ message: "Quantity required" });
      }

      const cartItem = await storage.updateCartItem(parseInt(req.params.id), parseInt(quantity));
      if (!cartItem) {
        return res.status(404).json({ message: "Cart item not found" });
      }

      res.json(cartItem);
    } catch (error) {
      res.status(500).json({ message: "Failed to update cart item" });
    }
  });

  app.delete("/api/cart/:id", async (req, res) => {
    try {
      await storage.removeFromCart(parseInt(req.params.id));
      res.json({ message: "Item removed from cart" });
    } catch (error) {
      res.status(500).json({ message: "Failed to remove cart item" });
    }
  });

  app.delete("/api/cart", async (req, res) => {
    try {
      await storage.clearCart(1);
      res.json({ message: "Cart cleared" });
    } catch (error) {
      res.status(500).json({ message: "Failed to clear cart" });
    }
  });

  // Wishlist
  app.get("/api/wishlist", async (req, res) => {
    try {
      const wishlistItems = await storage.getWishlistItems(1);
      res.json(wishlistItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch wishlist items" });
    }
  });

  app.post("/api/wishlist", async (req, res) => {
    try {
      const { productId } = req.body;
      if (!productId) {
        return res.status(400).json({ message: "Product ID required" });
      }

      const wishlistItem = await storage.addToWishlist({
        userId: 1,
        productId: parseInt(productId),
      });

      res.json(wishlistItem);
    } catch (error) {
      res.status(500).json({ message: "Failed to add to wishlist" });
    }
  });

  app.delete("/api/wishlist/:id", async (req, res) => {
    try {
      await storage.removeFromWishlist(parseInt(req.params.id));
      res.json({ message: "Item removed from wishlist" });
    } catch (error) {
      res.status(500).json({ message: "Failed to remove wishlist item" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
