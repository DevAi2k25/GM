import { useState } from "react";
import { Link } from "wouter";
import { 
  Heart, 
  Star, 
  ShoppingCart, 
  Eye, 
  Filter,
  Search,
  Grid3X3,
  List,
  SortAsc,
  SortDesc,
  Trash2,
  Share2,
  Package,
  TrendingUp,
  Calendar,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/hooks/use-cart";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function FavouritesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("recent");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useCart();

  const favouriteItems = [
    {
      id: 1,
      name: "Corsair K95 RGB Platinum XT",
      price: 149.99,
      originalPrice: 199.99,
      imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      category: "Keyboards",
      rating: 4.8,
      reviewCount: 234,
      inStock: true,
      dateAdded: "2024-12-15",
      discount: 25,
      seller: "TechDealsGuru",
      verified: true,
      priceHistory: "down"
    },
    {
      id: 2,
      name: "NVIDIA RTX 4090 Founders Edition",
      price: 1599.99,
      originalPrice: 1699.99,
      imageUrl: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      category: "Graphics Cards",
      rating: 4.9,
      reviewCount: 567,
      inStock: false,
      dateAdded: "2024-12-10",
      discount: 6,
      seller: "HardwareMaster",
      verified: true,
      priceHistory: "up"
    },
    {
      id: 3,
      name: "Logitech G Pro X Superlight",
      price: 89.99,
      originalPrice: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      category: "Gaming Mice",
      rating: 4.7,
      reviewCount: 456,
      inStock: true,
      dateAdded: "2024-12-08",
      discount: 0,
      seller: "GamingGearPro",
      verified: false,
      priceHistory: "stable"
    },
    {
      id: 4,
      name: "SteelSeries Arctis 7P Wireless",
      price: 129.99,
      originalPrice: 159.99,
      imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      category: "Headsets",
      rating: 4.6,
      reviewCount: 189,
      inStock: true,
      dateAdded: "2024-12-05",
      discount: 19,
      seller: "AudioExperts",
      verified: true,
      priceHistory: "down"
    },
    {
      id: 5,
      name: "Secretlab TITAN Evo 2022",
      price: 449.99,
      originalPrice: 499.99,
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      category: "Gaming Chairs",
      rating: 4.9,
      reviewCount: 342,
      inStock: true,
      dateAdded: "2024-12-02",
      discount: 10,
      seller: "ChairMasters",
      verified: true,
      priceHistory: "down"
    },
    {
      id: 6,
      name: "Razer DeathAdder V3 Pro",
      price: 129.99,
      originalPrice: 149.99,
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      category: "Gaming Mice",
      rating: 4.5,
      reviewCount: 278,
      inStock: false,
      dateAdded: "2024-11-28",
      discount: 13,
      seller: "RazerOfficial",
      verified: true,
      priceHistory: "stable"
    }
  ];

  const categories = [
    { id: "all", name: "All Categories", count: favouriteItems.length },
    { id: "keyboards", name: "Keyboards", count: 1 },
    { id: "graphics_cards", name: "Graphics Cards", count: 1 },
    { id: "gaming_mice", name: "Gaming Mice", count: 2 },
    { id: "headsets", name: "Headsets", count: 1 },
    { id: "gaming_chairs", name: "Gaming Chairs", count: 1 }
  ];

  const priceAlerts = [
    {
      id: 1,
      productName: "NVIDIA RTX 4090 FE",
      targetPrice: 1400.00,
      currentPrice: 1599.99,
      status: "waiting",
      dateCreated: "2024-12-10"
    },
    {
      id: 2,
      productName: "Corsair K95 RGB",
      targetPrice: 140.00,
      currentPrice: 149.99,
      status: "triggered",
      dateCreated: "2024-12-15"
    }
  ];

  const collections = [
    { name: "Gaming Setup 2024", count: 5, lastUpdated: "2024-12-15" },
    { name: "Wishlist Birthday", count: 3, lastUpdated: "2024-12-10" },
    { name: "Black Friday Deals", count: 8, lastUpdated: "2024-11-25" }
  ];

  const handleAddToCart = (productId: number) => {
    addToCart({
      productId: productId,
      quantity: 1
    });
  };

  const handleRemoveFromFavourites = (productId: number) => {
    // Implementation for removing from favourites
    console.log("Removing from favourites:", productId);
  };

  const getPriceHistoryIcon = (history: string) => {
    switch (history) {
      case "down": return <TrendingUp className="w-3 h-3 text-green-400 rotate-180" />;
      case "up": return <TrendingUp className="w-3 h-3 text-red-400" />;
      default: return <div className="w-3 h-3 bg-gray-400 rounded-full" />;
    }
  };

  const filteredItems = favouriteItems.filter(item => 
    (selectedCategory === "all" || item.category.toLowerCase().replace(/\s+/g, '_') === selectedCategory) &&
    (searchQuery === "" || item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     item.seller.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price_low": return a.price - b.price;
      case "price_high": return b.price - a.price;
      case "rating": return b.rating - a.rating;
      case "recent": return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      default: return 0;
    }
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 font-mono">
              My <span className="gm-text-teal">Favourites</span>
            </h1>
            <p className="text-xl gm-text-secondary max-w-2xl mx-auto">
              Keep track of your favourite gaming gear, get price alerts, and organize your wishlist.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gm-text-teal mb-2">{favouriteItems.length}</div>
              <div className="text-sm gm-text-secondary">Saved Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gm-text-pink mb-2">{favouriteItems.filter(item => item.discount > 0).length}</div>
              <div className="text-sm gm-text-secondary">On Sale</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{favouriteItems.filter(item => item.inStock).length}</div>
              <div className="text-sm gm-text-secondary">In Stock</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{collections.length}</div>
              <div className="text-sm gm-text-secondary">Collections</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              {/* Categories Filter */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${
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

              {/* Price Alerts */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono flex items-center">
                    <AlertCircle className="w-5 h-5 gm-text-teal mr-2" />
                    Price Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {priceAlerts.map((alert) => (
                      <div key={alert.id} className="p-3 border border-gray-700 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">{alert.productName}</h4>
                        <div className="flex items-center justify-between text-xs gm-text-secondary">
                          <span>Target: ${alert.targetPrice}</span>
                          <Badge className={alert.status === "triggered" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"}>
                            {alert.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4 border-gray-700">
                    Manage Alerts
                  </Button>
                </CardContent>
              </Card>

              {/* Collections */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Collections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {collections.map((collection, index) => (
                      <div key={index} className="p-3 border border-gray-700 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">{collection.name}</h4>
                        <div className="flex items-center justify-between text-xs gm-text-secondary">
                          <span>{collection.count} items</span>
                          <span>{collection.lastUpdated}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4 border-gray-700">
                    Create Collection
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
                <Input
                  placeholder="Search your favourites..."
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
                  <SelectItem value="recent">Recently Added</SelectItem>
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

            {/* Items Display */}
            {sortedItems.length === 0 ? (
              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-12 text-center">
                  <Heart className="w-16 h-16 gm-text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No favourites yet</h3>
                  <p className="gm-text-secondary mb-6">
                    Start exploring and add items to your favourites to see them here.
                  </p>
                  <Link href="/home">
                    <Button className="gm-bg-teal text-black hover:bg-cyan-400">
                      Browse Products
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
                {sortedItems.map((item) => (
                  <Card key={item.id} className={`gm-background-secondary border-gray-700 group hover:gm-border-teal transition-all duration-300 ${viewMode === "list" ? "flex" : ""}`}>
                    <div className={`relative ${viewMode === "list" ? "w-32 h-32" : "aspect-square"} overflow-hidden ${viewMode === "grid" ? "rounded-t-lg" : "rounded-l-lg"}`}>
                      <img 
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {item.discount > 0 && (
                          <Badge className="bg-red-500 text-white text-xs">
                            -{item.discount}%
                          </Badge>
                        )}
                        {!item.inStock && (
                          <Badge className="bg-gray-600 text-white text-xs">
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                      
                      {/* Price History */}
                      <div className="absolute top-2 right-2">
                        {getPriceHistoryIcon(item.priceHistory)}
                      </div>
                    </div>
                    
                    <CardContent className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className={viewMode === "list" ? "flex items-center justify-between h-full" : ""}>
                        <div className={viewMode === "list" ? "flex-1" : ""}>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="border-gray-600 text-xs">
                              {item.category}
                            </Badge>
                            <button
                              onClick={() => handleRemoveFromFavourites(item.id)}
                              className="text-red-400 hover:text-red-300 transition-colors"
                            >
                              <Heart className="w-4 h-4 fill-current" />
                            </button>
                          </div>
                          
                          <h3 className={`font-semibold group-hover:gm-text-teal transition-colors ${viewMode === "list" ? "text-lg mb-2" : "mb-2"}`}>
                            {item.name}
                          </h3>
                          
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-3 h-3 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                              ))}
                            </div>
                            <span className="text-xs gm-text-secondary">({item.reviewCount})</span>
                          </div>
                          
                          <div className="flex items-center space-x-2 mb-4">
                            <span className="text-lg font-bold gm-text-teal">${item.price}</span>
                            {item.originalPrice > item.price && (
                              <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                            )}
                          </div>
                          
                          <div className="text-xs gm-text-secondary mb-4">
                            by {item.seller} {item.verified && <CheckCircle className="w-3 h-3 inline text-green-400" />}
                            <br />
                            Added: {item.dateAdded}
                          </div>
                        </div>
                        
                        <div className={`flex gap-2 ${viewMode === "list" ? "flex-col" : ""}`}>
                          <Button
                            size="sm"
                            onClick={() => handleAddToCart(item.id)}
                            disabled={!item.inStock}
                            className="gm-bg-teal text-black hover:bg-cyan-400 disabled:opacity-50"
                          >
                            <ShoppingCart className="w-3 h-3 mr-1" />
                            {viewMode === "grid" ? "Add" : "Add to Cart"}
                          </Button>
                          <Link href={`/product/${item.id}`}>
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
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}