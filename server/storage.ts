import { users, categories, products, cartItems, wishlistItems, type User, type InsertUser, type Category, type InsertCategory, type Product, type InsertProduct, type CartItem, type InsertCartItem, type WishlistItem, type InsertWishlistItem } from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Categories
  getCategories(): Promise<Category[]>;
  getFeaturedCategories(): Promise<Category[]>;
  getCategory(id: number): Promise<Category | undefined>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;

  // Products
  getProducts(options?: { categoryId?: number; featured?: boolean; limit?: number }): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  searchProducts(query: string): Promise<Product[]>;
  getProductsByCategory(categoryId: number): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;

  // Cart
  getCartItems(userId: number): Promise<(CartItem & { product: Product })[]>;
  addToCart(item: InsertCartItem): Promise<CartItem>;
  updateCartItem(id: number, quantity: number): Promise<CartItem | undefined>;
  removeFromCart(id: number): Promise<void>;
  clearCart(userId: number): Promise<void>;

  // Wishlist
  getWishlistItems(userId: number): Promise<(WishlistItem & { product: Product })[]>;
  addToWishlist(item: InsertWishlistItem): Promise<WishlistItem>;
  removeFromWishlist(id: number): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private categories: Map<number, Category>;
  private products: Map<number, Product>;
  private cartItems: Map<number, CartItem>;
  private wishlistItems: Map<number, WishlistItem>;
  private currentUserId: number;
  private currentCategoryId: number;
  private currentProductId: number;
  private currentCartId: number;
  private currentWishlistId: number;

  constructor() {
    this.users = new Map();
    this.categories = new Map();
    this.products = new Map();
    this.cartItems = new Map();
    this.wishlistItems = new Map();
    this.currentUserId = 1;
    this.currentCategoryId = 1;
    this.currentProductId = 1;
    this.currentCartId = 1;
    this.currentWishlistId = 1;
    this.seedData();
  }

  private seedData() {
    // Seed categories
    const categoriesData = [
      { name: "Gaming Keyboards", slug: "gaming-keyboards", description: "Mechanical & RGB keyboards for gaming", imageUrl: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", featured: true },
      { name: "Gaming Headsets", slug: "gaming-headsets", description: "Professional gaming headsets", imageUrl: "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", featured: true },
      { name: "Gaming Chairs", slug: "gaming-chairs", description: "Ergonomic gaming chairs", imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", featured: true },
      { name: "Gaming Mice", slug: "gaming-mice", description: "High-precision gaming mice", imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", featured: true },
      { name: "Collectibles", slug: "collectibles", description: "Gaming collectibles and figurines", imageUrl: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", featured: true },
      { name: "Consoles", slug: "consoles", description: "Gaming consoles and accessories", imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400", featured: true },
    ];

    categoriesData.forEach(cat => {
      const id = this.currentCategoryId++;
      this.categories.set(id, { ...cat, id });
    });

    // Seed products
    const productsData = [
      { name: "Corsair K95 RGB Platinum XT", description: "Premium mechanical gaming keyboard with Cherry MX switches", price: "149.99", originalPrice: "199.99", imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", categoryId: 1, sellerId: 1, stock: 50, featured: true, verified: true, rating: "4.8", reviewCount: 127 },
      { name: "SteelSeries Arctis Pro Wireless", description: "Hi-Res wireless gaming headset with dual wireless", price: "329.99", originalPrice: null, imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", categoryId: 2, sellerId: 1, stock: 25, featured: true, verified: false, rating: "4.6", reviewCount: 89 },
      { name: "Logitech G Pro X Superlight", description: "Ultra-lightweight wireless gaming mouse for esports", price: "89.99", originalPrice: null, imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", categoryId: 4, sellerId: 1, stock: 75, featured: true, verified: true, rating: "4.9", reviewCount: 234 },
      { name: "PlayStation 5 Console", description: "Next-gen gaming console with ultra-high speed SSD", price: "499.99", originalPrice: null, imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", categoryId: 6, sellerId: 1, stock: 10, featured: true, verified: false, rating: "4.8", reviewCount: 156 },
      { name: "Razer BlackWidow V3 Pro", description: "Wireless mechanical gaming keyboard with Razer Green switches", price: "229.99", originalPrice: "249.99", imageUrl: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", categoryId: 1, sellerId: 1, stock: 30, featured: false, verified: true, rating: "4.7", reviewCount: 98 },
      { name: "HyperX Cloud Alpha", description: "Gaming headset with dual chamber drivers", price: "99.99", originalPrice: "129.99", imageUrl: "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300", categoryId: 2, sellerId: 1, stock: 45, featured: false, verified: false, rating: "4.5", reviewCount: 167 },
    ];

    productsData.forEach(prod => {
      const id = this.currentProductId++;
      this.products.set(id, { ...prod, id, createdAt: new Date() });
    });

    // Seed a demo user
    const demoUser: User = {
      id: this.currentUserId++,
      username: "demogamer",
      email: "demo@gamersmarket.com",
      password: "password",
      firstName: "Demo",
      lastName: "Gamer",
      createdAt: new Date(),
    };
    this.users.set(demoUser.id, demoUser);
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id, createdAt: new Date() };
    this.users.set(id, user);
    return user;
  }

  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getFeaturedCategories(): Promise<Category[]> {
    return Array.from(this.categories.values()).filter(cat => cat.featured);
  }

  async getCategory(id: number): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(cat => cat.slug === slug);
  }

  async getProducts(options?: { categoryId?: number; featured?: boolean; limit?: number }): Promise<Product[]> {
    let products = Array.from(this.products.values());
    
    if (options?.categoryId) {
      products = products.filter(p => p.categoryId === options.categoryId);
    }
    
    if (options?.featured) {
      products = products.filter(p => p.featured);
    }
    
    if (options?.limit) {
      products = products.slice(0, options.limit);
    }
    
    return products;
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async searchProducts(query: string): Promise<Product[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.products.values()).filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.description?.toLowerCase().includes(lowerQuery)
    );
  }

  async getProductsByCategory(categoryId: number): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.categoryId === categoryId);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.featured);
  }

  async getCartItems(userId: number): Promise<(CartItem & { product: Product })[]> {
    const items = Array.from(this.cartItems.values()).filter(item => item.userId === userId);
    return items.map(item => ({
      ...item,
      product: this.products.get(item.productId!)!
    }));
  }

  async addToCart(item: InsertCartItem): Promise<CartItem> {
    const existingItem = Array.from(this.cartItems.values()).find(
      ci => ci.userId === item.userId && ci.productId === item.productId
    );

    if (existingItem) {
      existingItem.quantity += item.quantity;
      this.cartItems.set(existingItem.id, existingItem);
      return existingItem;
    }

    const id = this.currentCartId++;
    const cartItem: CartItem = { ...item, id, createdAt: new Date() };
    this.cartItems.set(id, cartItem);
    return cartItem;
  }

  async updateCartItem(id: number, quantity: number): Promise<CartItem | undefined> {
    const item = this.cartItems.get(id);
    if (!item) return undefined;
    
    item.quantity = quantity;
    this.cartItems.set(id, item);
    return item;
  }

  async removeFromCart(id: number): Promise<void> {
    this.cartItems.delete(id);
  }

  async clearCart(userId: number): Promise<void> {
    Array.from(this.cartItems.entries()).forEach(([id, item]) => {
      if (item.userId === userId) {
        this.cartItems.delete(id);
      }
    });
  }

  async getWishlistItems(userId: number): Promise<(WishlistItem & { product: Product })[]> {
    const items = Array.from(this.wishlistItems.values()).filter(item => item.userId === userId);
    return items.map(item => ({
      ...item,
      product: this.products.get(item.productId!)!
    }));
  }

  async addToWishlist(item: InsertWishlistItem): Promise<WishlistItem> {
    const id = this.currentWishlistId++;
    const wishlistItem: WishlistItem = { ...item, id, createdAt: new Date() };
    this.wishlistItems.set(id, wishlistItem);
    return wishlistItem;
  }

  async removeFromWishlist(id: number): Promise<void> {
    this.wishlistItems.delete(id);
  }
}

export const storage = new MemStorage();
