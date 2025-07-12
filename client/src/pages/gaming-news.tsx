import { useState } from "react";
import { Link } from "wouter";
import { 
  Calendar, 
  Clock, 
  Eye, 
  MessageSquare, 
  Share2, 
  Bookmark, 
  TrendingUp,
  Filter,
  Search,
  Tag,
  ChevronRight,
  Star,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function GamingNewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const newsCategories = [
    { id: "all", name: "All News", count: 45 },
    { id: "hardware", name: "Hardware", count: 12 },
    { id: "esports", name: "Esports", count: 8 },
    { id: "reviews", name: "Reviews", count: 15 },
    { id: "industry", name: "Industry", count: 10 }
  ];

  const featuredNews = [
    {
      id: 1,
      title: "RTX 5090 Leaked Specs Show Massive Performance Jump",
      summary: "New benchmarks suggest NVIDIA's upcoming flagship could deliver 40% better performance than the RTX 4090.",
      category: "hardware",
      author: "Tech Insider",
      publishDate: "2 hours ago",
      readTime: "4 min read",
      views: 15400,
      comments: 89,
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: "World Championship 2024: Upsets Rock the Gaming Community",
      summary: "Underdog teams are making waves in this year's championship with unprecedented strategies and gameplay.",
      category: "esports",
      author: "Esports Daily",
      publishDate: "4 hours ago",
      readTime: "6 min read",
      views: 23600,
      comments: 156,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      featured: true,
      trending: true
    }
  ];

  const recentNews = [
    {
      id: 3,
      title: "Corsair K100 Air Review: The Ultimate Wireless Gaming Keyboard",
      summary: "We test Corsair's latest flagship wireless mechanical keyboard to see if it lives up to the hype.",
      category: "reviews",
      author: "Hardware Hub",
      publishDate: "6 hours ago",
      readTime: "8 min read",
      views: 8900,
      comments: 45,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 4,
      title: "Gaming Industry Revenue Hits Record $200B in 2024",
      summary: "Mobile gaming leads growth while PC and console markets show steady expansion across all demographics.",
      category: "industry",
      author: "Market Watch",
      publishDate: "8 hours ago",
      readTime: "5 min read",
      views: 12300,
      comments: 67,
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 5,
      title: "AMD Announces Revolutionary RDNA 4 Architecture",
      summary: "New GPU architecture promises better ray tracing performance and improved power efficiency.",
      category: "hardware",
      author: "Tech Review",
      publishDate: "12 hours ago",
      readTime: "7 min read",
      views: 19500,
      comments: 134,
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 6,
      title: "Pro Gaming Setup Guide: What the Pros Actually Use",
      summary: "Inside look at the exact hardware, settings, and peripherals used by professional esports players.",
      category: "esports",
      author: "Pro Gaming",
      publishDate: "1 day ago",
      readTime: "10 min read",
      views: 31200,
      comments: 203,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  const trendingTopics = [
    "RTX 5090", "World Championship", "Wireless Gaming", "AMD RDNA 4", "Gaming Revenue", 
    "Pro Setups", "Hardware Reviews", "Esports News"
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      hardware: "gm-text-teal",
      esports: "gm-text-pink", 
      reviews: "text-purple-400",
      industry: "text-green-400"
    };
    return colors[category] || "gm-text-secondary";
  };

  const getCategoryBadge = (category: string) => {
    const colors: { [key: string]: string } = {
      hardware: "gm-bg-teal text-black",
      esports: "bg-pink-500 text-white",
      reviews: "bg-purple-500 text-white", 
      industry: "bg-green-500 text-white"
    };
    return colors[category] || "bg-gray-500 text-white";
  };

  const filteredNews = recentNews.filter(article => 
    (selectedCategory === "all" || article.category === selectedCategory) &&
    (searchQuery === "" || article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     article.summary.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-mono">
              Gaming <span className="gm-text-teal">News</span> & <span className="gm-text-pink">Reviews</span>
            </h1>
            <p className="text-xl gm-text-secondary max-w-3xl mx-auto">
              Stay updated with the latest gaming hardware releases, esports tournaments, 
              industry news, and comprehensive product reviews.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
              <Input
                placeholder="Search news articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 gm-background border-gray-700 focus:gm-border-teal"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 gm-background border-gray-700">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="gm-background-secondary border-gray-700">
                {newsCategories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name} ({cat.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Articles */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
                <Star className="w-6 h-6 gm-text-teal mr-3" />
                Featured Stories
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredNews.map((article) => (
                  <Card key={article.id} className="gm-background-secondary border-gray-700 group hover:gm-border-teal transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      {article.trending && (
                        <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                      <Badge className={`absolute top-4 right-4 ${getCategoryBadge(article.category)}`}>
                        {article.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 group-hover:gm-text-teal transition-colors">
                        {article.title}
                      </h3>
                      <p className="gm-text-secondary mb-4 leading-relaxed">
                        {article.summary}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm gm-text-secondary">
                        <div className="flex items-center space-x-4">
                          <span>{article.author}</span>
                          <span>•</span>
                          <span>{article.publishDate}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                        <div className="flex items-center space-x-4 text-sm gm-text-secondary">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {article.views.toLocaleString()}
                          </div>
                          <div className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            {article.comments}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost" className="gm-text-secondary hover:gm-text-teal">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="gm-text-secondary hover:gm-text-teal">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Articles */}
            <section>
              <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
                <Clock className="w-6 h-6 gm-text-pink mr-3" />
                Recent Articles
              </h2>
              
              <div className="space-y-6">
                {filteredNews.map((article) => (
                  <Card key={article.id} className="gm-background-secondary border-gray-700 group hover:gm-border-teal transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <img 
                          src={article.image}
                          alt={article.title}
                          className="w-32 h-24 object-cover rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`${getCategoryBadge(article.category)} text-xs`}>
                              {article.category}
                            </Badge>
                            <span className="text-xs gm-text-secondary">{article.publishDate}</span>
                          </div>
                          
                          <h3 className="text-lg font-semibold mb-2 group-hover:gm-text-teal transition-colors">
                            {article.title}
                          </h3>
                          
                          <p className="gm-text-secondary mb-3 leading-relaxed">
                            {article.summary}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm gm-text-secondary">
                              <span>{article.author}</span>
                              <span>•</span>
                              <span>{article.readTime}</span>
                              <span>•</span>
                              <div className="flex items-center">
                                <Eye className="w-3 h-3 mr-1" />
                                {article.views.toLocaleString()}
                              </div>
                              <div className="flex items-center">
                                <MessageSquare className="w-3 h-3 mr-1" />
                                {article.comments}
                              </div>
                            </div>
                            
                            <Button size="sm" className="gm-bg-teal text-black hover:bg-cyan-400">
                              Read More
                              <ChevronRight className="w-3 h-3 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              {/* Trending Topics */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono flex items-center">
                    <TrendingUp className="w-5 h-5 gm-text-teal mr-2" />
                    Trending Topics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {trendingTopics.map((topic, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-3 py-2 rounded-lg border border-gray-700 hover:gm-border-teal hover:gm-bg-teal/10 transition-colors text-sm"
                      >
                        <Tag className="w-3 h-3 inline mr-2 gm-text-secondary" />
                        {topic}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Gaming Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm gm-text-secondary mb-4">
                    Get the latest gaming news, reviews, and exclusive content delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input 
                      placeholder="Enter your email"
                      className="gm-background border-gray-700 focus:gm-border-teal"
                    />
                    <Button className="w-full gm-bg-teal text-black hover:bg-cyan-400">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Authors */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Popular Authors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["Tech Insider", "Esports Daily", "Hardware Hub", "Pro Gaming"].map((author, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{author}</p>
                          <p className="text-xs gm-text-secondary">Gaming Journalist</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}