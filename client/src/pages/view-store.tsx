import { useState } from "react";
import { Link } from "wouter";
import { 
  Store, 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  Package,
  Award,
  Shield,
  Heart,
  MessageSquare,
  Phone,
  Mail,
  Globe,
  Filter,
  Search,
  Grid3X3,
  List,
  TrendingUp,
  Clock,
  CheckCircle,
  ThumbsUp,
  Eye,
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { useCart } from "@/hooks/use-cart";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function ViewStorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useCart();

  // Mock store data
  const storeData = {
    id: 1,
    name: "TechDealsGuru",
    avatar: "",
    banner: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400",
    description: "Your trusted source for premium gaming gear at unbeatable prices. We specialize in high-quality keyboards, mice, and accessories from top brands.",
    location: "Los Angeles, CA",
    joined: "January 2023",
    verified: true,
    rating: 4.9,
    totalReviews: 1247,
    totalSales: 3420,
    responseTime: "< 2 hours",
    followers: 8924,
    following: 156,
    stats: {
      productsListed: 67,
      totalOrders: 3420,
      completionRate: 99.8,
      positiveRating: 98.5
    },
    badges: [
      { name: "Top Seller", color: "bg-yellow-400 text-black", icon: Award },
      { name: "Verified Store", color: "bg-green-500 text-white", icon: Shield },
      { name: "Fast Shipping", color: "gm-bg-teal text-black", icon: Clock }
    ],
    contact: {
      email: "support@techdeals.com",
      phone: "+1 (555) 123-4567",
      website: "www.techdeals.com"
    },
    policies: {
      returns: "30-day return policy",
      shipping: "Free shipping on orders over $50",
      warranty: "1-year manufacturer warranty"
    }
  };

  const storeProducts = [
    {
      id: 1,
      name: "Corsair K95 RGB Platinum XT",
      price: 149.99,
      originalPrice: 199.99,
      imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      category: "Keyboards",
      rating: 4.8,
      reviewCount: 234,
      inStock: true,
      discount: 25,
      featured: true,
      dateAdded: "2024-12-15"
    },
    {
      id: 2,
      name: "Logitech G Pro X Superlight",
      price: 89.99,
      originalPrice: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      category: "Gaming Mice",
      rating: 4.7,
      reviewCount: 456,
      inStock: true,
      discount: 0,
      featured: true,
      dateAdded: "2024-12-10"
    },
    {
      id: 3,
      name: "SteelSeries QcK Heavy Gaming Mousepad",
      price: 24.99,
      originalPrice: 29.99,
      imageUrl: "https://images.unsplash.com/photo-1612198463686-25a2204fe058?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      category: "Accessories",
      rating: 4.6,
      reviewCount: 189,
      inStock: true,
      discount: 17,
      featured: false,
      dateAdded: "2024-12-08"
    },
    {
      id: 4,
      name: "Razer Huntsman V3 Pro",
      price: 229.99,
      originalPrice: 249.99,
      imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      category: "Keyboards",
      rating: 4.9,
      reviewCount: 123,
      inStock: false,
      discount: 8,
      featured: true,
      dateAdded: "2024-12-05"
    },
    {
      id: 5,
      name: "HyperX Cloud III Wireless",
      price: 159.99,
      originalPrice: 179.99,
      imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      category: "Headsets",
      rating: 4.5,
      reviewCount: 276,
      inStock: true,
      discount: 11,
      featured: false,
      dateAdded: "2024-12-02"
    },
    {
      id: 6,
      name: "ASUS ROG Keris Wireless",
      price: 79.99,
      originalPrice: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      category: "Gaming Mice",
      rating: 4.4,
      reviewCount: 145,
      inStock: true,
      discount: 20,
      featured: false,
      dateAdded: "2024-11-28"
    }
  ];

  const storeReviews = [
    {
      id: 1,
      userName: "GameMaster_Pro",
      avatar: "",
      rating: 5,
      comment: "Excellent store! Fast shipping and great customer service. The keyboard I ordered arrived in perfect condition.",
      date: "2024-12-18",
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      userName: "TechEnthusiast",
      avatar: "",
      rating: 5,
      comment: "TechDealsGuru has the best prices and authentic products. Highly recommended!",
      date: "2024-12-15",
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      userName: "GamerGirl123",
      avatar: "",
      rating: 4,
      comment: "Good selection and competitive prices. Only minor issue was slightly delayed shipping.",
      date: "2024-12-12",
      verified: true,
      helpful: 5
    }
  ];

  const categories = [
    { id: "all", name: "All Products", count: storeProducts.length },
    { id: "keyboards", name: "Keyboards", count: 2 },
    { id: "gaming_mice", name: "Gaming Mice", count: 2 },
    { id: "headsets", name: "Headsets", count: 1 },
    { id: "accessories", name: "Accessories", count: 1 }
  ];

  const handleAddToCart = (productId: number) => {
    addToCart({
      productId: productId,
      quantity: 1
    });
  };

  const filteredProducts = storeProducts.filter(product => 
    (selectedCategory === "all" || product.category.toLowerCase().replace(/\s+/g, '_') === selectedCategory) &&
    (searchQuery === "" || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price_low": return a.price - b.price;
      case "price_high": return b.price - a.price;
      case "rating": return b.rating - a.rating;
      case "newest": return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      case "featured": return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      default: return 0;
    }
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Store Banner */}
      <section className="relative h-64 overflow-hidden">
        <img 
          src={storeData.banner}
          alt="Store Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="flex items-end justify-between">
              <div className="flex items-end space-x-6">
                <Avatar className="w-24 h-24 border-4 border-white">
                  <AvatarFallback className="text-2xl font-bold">
                    {storeData.name[0]}
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-white">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold">{storeData.name}</h1>
                    {storeData.verified && (
                      <Shield className="w-6 h-6 text-green-400" />
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                      <span>{storeData.rating} ({storeData.totalReviews} reviews)</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{storeData.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Joined {storeData.joined}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  <Heart className="w-4 h-4 mr-2" />
                  Follow
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              {/* Store Info */}
              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">About Store</h3>
                  <p className="text-sm gm-text-secondary mb-4">{storeData.description}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="gm-text-secondary">Response Time</span>
                      <span className="font-semibold">{storeData.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="gm-text-secondary">Followers</span>
                      <span className="font-semibold">{storeData.followers.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="gm-text-secondary">Total Sales</span>
                      <span className="font-semibold">{storeData.totalSales.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Store Badges */}
              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Store Badges</h3>
                  <div className="space-y-2">
                    {storeData.badges.map((badge, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <badge.icon className="w-4 h-4" />
                        <Badge className={`${badge.color} text-xs`}>
                          {badge.name}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left p-2 rounded-lg border transition-colors ${
                          selectedCategory === category.id 
                            ? "gm-border-teal gm-bg-teal/10" 
                            : "border-gray-700 hover:border-gray-600"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{category.name}</span>
                          <Badge variant="outline" className="border-gray-600 text-xs">
                            {category.count}
                          </Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Contact Store</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 gm-text-teal" />
                      <span className="gm-text-secondary">{storeData.contact.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 gm-text-teal" />
                      <span className="gm-text-secondary">{storeData.contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Globe className="w-4 h-4 gm-text-teal" />
                      <span className="gm-text-secondary">{storeData.contact.website}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Store Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-4 text-center">
                  <Package className="w-8 h-8 gm-text-teal mx-auto mb-2" />
                  <div className="text-2xl font-bold">{storeData.stats.productsListed}</div>
                  <div className="text-xs gm-text-secondary">Products</div>
                </CardContent>
              </Card>
              
              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 gm-text-pink mx-auto mb-2" />
                  <div className="text-2xl font-bold">{storeData.stats.totalOrders}</div>
                  <div className="text-xs gm-text-secondary">Orders</div>
                </CardContent>
              </Card>
              
              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{storeData.stats.completionRate}%</div>
                  <div className="text-xs gm-text-secondary">Completion</div>
                </CardContent>
              </Card>
              
              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-4 text-center">
                  <ThumbsUp className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{storeData.stats.positiveRating}%</div>
                  <div className="text-xs gm-text-secondary">Positive</div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="products">
              <TabsList className="gm-background-secondary border-gray-700 mb-6">
                <TabsTrigger value="products" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
                  Products ({storeProducts.length})
                </TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
                  Reviews ({storeData.totalReviews})
                </TabsTrigger>
                <TabsTrigger value="about" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
                  About Store
                </TabsTrigger>
              </TabsList>

              <TabsContent value="products">
                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
                    <Input
                      placeholder="Search store products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 gm-background border-gray-700 focus:gm-border-teal"
                    />
                  </div>
                  
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full md:w-48 gm-background border-gray-700">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="gm-background-secondary border-gray-700">
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price_low">Price: Low to High</SelectItem>
                      <SelectItem value="price_high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant={viewMode === "grid" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className={viewMode === "grid" ? "gm-bg-teal text-black" : "border-gray-700"}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className={viewMode === "list" ? "gm-bg-teal text-black" : "border-gray-700"}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Products Grid */}
                <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
                  {sortedProducts.map((product) => (
                    <Card key={product.id} className={`gm-background-secondary border-gray-700 group hover:gm-border-teal transition-all duration-300 ${viewMode === "list" ? "flex" : ""}`}>
                      <div className={`relative ${viewMode === "list" ? "w-32 h-32" : "aspect-square"} overflow-hidden ${viewMode === "grid" ? "rounded-t-lg" : "rounded-l-lg"}`}>
                        <img 
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {/* Badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {product.discount > 0 && (
                            <Badge className="bg-red-500 text-white text-xs">
                              -{product.discount}%
                            </Badge>
                          )}
                          {product.featured && (
                            <Badge className="gm-bg-teal text-black text-xs">
                              Featured
                            </Badge>
                          )}
                          {!product.inStock && (
                            <Badge className="bg-gray-600 text-white text-xs">
                              Out of Stock
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <CardContent className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                        <div className={viewMode === "list" ? "flex items-center justify-between h-full" : ""}>
                          <div className={viewMode === "list" ? "flex-1" : ""}>
                            <Badge variant="outline" className="border-gray-600 text-xs mb-2">
                              {product.category}
                            </Badge>
                            
                            <h3 className={`font-semibold group-hover:gm-text-teal transition-colors ${viewMode === "list" ? "text-lg mb-2" : "mb-2"}`}>
                              {product.name}
                            </h3>
                            
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                                ))}
                              </div>
                              <span className="text-xs gm-text-secondary">({product.reviewCount})</span>
                            </div>
                            
                            <div className="flex items-center space-x-2 mb-4">
                              <span className="text-lg font-bold gm-text-teal">${product.price}</span>
                              {product.originalPrice > product.price && (
                                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className={`flex gap-2 ${viewMode === "list" ? "flex-col" : ""}`}>
                            <Button
                              size="sm"
                              onClick={() => handleAddToCart(product.id)}
                              disabled={!product.inStock}
                              className="gm-bg-teal text-black hover:bg-cyan-400 disabled:opacity-50"
                            >
                              <ShoppingCart className="w-3 h-3 mr-1" />
                              {viewMode === "grid" ? "Add" : "Add to Cart"}
                            </Button>
                            <Link href={`/product/${product.id}`}>
                              <Button variant="outline" size="sm" className="border-gray-700">
                                <Eye className="w-3 h-3 mr-1" />
                                {viewMode === "grid" ? "View" : "View Details"}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {storeReviews.map((review) => (
                        <div key={review.id} className="border border-gray-700 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <Avatar className="w-10 h-10">
                                <AvatarFallback>{review.userName[0]}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium">{review.userName}</span>
                                  {review.verified && (
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                  )}
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                                    ))}
                                  </div>
                                  <span className="text-xs gm-text-secondary">{review.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="gm-text-secondary mb-3">{review.comment}</p>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="text-xs">
                              <ThumbsUp className="w-3 h-3 mr-1" />
                              Helpful ({review.helpful})
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="about">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="gm-background-secondary border-gray-700">
                    <CardHeader>
                      <CardTitle>Store Policies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div>
                          <h4 className="font-semibold mb-1">Returns</h4>
                          <p className="gm-text-secondary">{storeData.policies.returns}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Shipping</h4>
                          <p className="gm-text-secondary">{storeData.policies.shipping}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Warranty</h4>
                          <p className="gm-text-secondary">{storeData.policies.warranty}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="gm-background-secondary border-gray-700">
                    <CardHeader>
                      <CardTitle>Store Statistics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm">Order Completion Rate</span>
                            <span className="text-sm font-semibold">{storeData.stats.completionRate}%</span>
                          </div>
                          <Progress value={storeData.stats.completionRate} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm">Positive Rating</span>
                            <span className="text-sm font-semibold">{storeData.stats.positiveRating}%</span>
                          </div>
                          <Progress value={storeData.stats.positiveRating} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm">Customer Satisfaction</span>
                            <span className="text-sm font-semibold">97.2%</span>
                          </div>
                          <Progress value={97.2} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}