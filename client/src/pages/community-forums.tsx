import { useState } from "react";
import { Link } from "wouter";
import { 
  MessageSquare, 
  Users, 
  Pin, 
  Lock, 
  Flame, 
  ThumbsUp, 
  Reply, 
  Search,
  Plus,
  Crown,
  Shield,
  Star,
  Calendar,
  Eye,
  TrendingUp,
  Filter,
  Clock,
  Award,
  Gamepad2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function CommunityForumsPage() {
  const [selectedForum, setSelectedForum] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");

  const forumCategories = [
    {
      id: "general",
      name: "General Discussion",
      description: "General gaming topics and community chat",
      icon: MessageSquare,
      color: "gm-text-teal",
      topics: 1234,
      posts: 15678,
      lastPost: "2 min ago"
    },
    {
      id: "hardware",
      name: "Hardware & Tech",
      description: "Gaming PC builds, peripherals, and tech support",
      icon: Gamepad2,
      color: "gm-text-pink",
      topics: 856,
      posts: 9234,
      lastPost: "5 min ago"
    },
    {
      id: "esports",
      name: "Esports & Competitive",
      description: "Professional gaming, tournaments, and strategies",
      icon: Award,
      color: "text-purple-400",
      topics: 432,
      posts: 6789,
      lastPost: "12 min ago"
    },
    {
      id: "trading",
      name: "Trading & Marketplace",
      description: "Buy, sell, and trade gaming items safely",
      icon: Users,
      color: "text-green-400",
      topics: 678,
      posts: 4321,
      lastPost: "18 min ago"
    }
  ];

  const topicTypes = [
    { id: "all", name: "All Topics", count: 3200 },
    { id: "hot", name: "Hot Topics", count: 45 },
    { id: "pinned", name: "Pinned", count: 12 },
    { id: "unanswered", name: "Unanswered", count: 89 }
  ];

  const hotTopics = [
    {
      id: 1,
      title: "RTX 5090 Performance Analysis - Real World Benchmarks Inside!",
      author: {
        name: "TechGuru42",
        avatar: "",
        role: "Moderator",
        reputation: 9850,
        level: "Expert"
      },
      category: "hardware",
      isHot: true,
      isPinned: false,
      isLocked: false,
      replies: 234,
      views: 15600,
      likes: 187,
      lastReply: "3 min ago",
      lastReplyBy: "GameMaster",
      createdAt: "2 hours ago",
      tags: ["RTX 5090", "Benchmarks", "Performance"]
    },
    {
      id: 2,
      title: "World Championship 2024 - Predictions and Analysis Thread",
      author: {
        name: "EsportsKing",
        avatar: "",
        role: "Champion",
        reputation: 7420,
        level: "Pro"
      },
      category: "esports",
      isHot: true,
      isPinned: true,
      isLocked: false,
      replies: 156,
      views: 8900,
      likes: 203,
      lastReply: "8 min ago",
      lastReplyBy: "ProPlayer99",
      createdAt: "6 hours ago",
      tags: ["Championship", "Esports", "Predictions"]
    },
    {
      id: 3,
      title: "Trading Safety Guide - How to Avoid Scams",
      author: {
        name: "SafeTrader",
        avatar: "",
        role: "Trusted Seller",
        reputation: 12300,
        level: "Veteran"
      },
      category: "trading",
      isHot: false,
      isPinned: true,
      isLocked: false,
      replies: 89,
      views: 12500,
      likes: 445,
      lastReply: "15 min ago",
      lastReplyBy: "NewUser123",
      createdAt: "1 day ago",
      tags: ["Safety", "Trading", "Guide"]
    },
    {
      id: 4,
      title: "Best Gaming Setup Under $2000 - Community Recommendations",
      author: {
        name: "BudgetGamer",
        avatar: "",
        role: "Member",
        reputation: 1850,
        level: "Enthusiast"
      },
      category: "hardware",
      isHot: false,
      isPinned: false,
      isLocked: false,
      replies: 67,
      views: 4300,
      likes: 89,
      lastReply: "22 min ago",
      lastReplyBy: "HardwareExpert",
      createdAt: "4 hours ago",
      tags: ["Budget", "Setup", "Recommendations"]
    },
    {
      id: 5,
      title: "Weekly Gaming Discussion - What Are You Playing?",
      author: {
        name: "CommunityBot",
        avatar: "",
        role: "Bot",
        reputation: 0,
        level: "System"
      },
      category: "general",
      isHot: false,
      isPinned: true,
      isLocked: false,
      replies: 312,
      views: 5600,
      likes: 178,
      lastReply: "1 min ago",
      lastReplyBy: "CasualGamer",
      createdAt: "3 days ago",
      tags: ["Weekly", "Discussion", "Gaming"]
    }
  ];

  const onlineUsers = [
    { name: "TechGuru42", status: "online", role: "Moderator" },
    { name: "EsportsKing", status: "online", role: "Champion" },
    { name: "GameMaster", status: "online", role: "Expert" },
    { name: "ProPlayer99", status: "away", role: "Pro" },
    { name: "HardwareExpert", status: "online", role: "Veteran" }
  ];

  const getRoleColor = (role: string) => {
    const colors: { [key: string]: string } = {
      "Moderator": "gm-text-teal",
      "Champion": "text-yellow-400",
      "Expert": "gm-text-pink",
      "Pro": "text-purple-400",
      "Veteran": "text-green-400",
      "Trusted Seller": "text-blue-400",
      "Member": "gm-text-secondary",
      "Bot": "text-gray-500"
    };
    return colors[role] || "gm-text-secondary";
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Moderator": return <Shield className="w-3 h-3" />;
      case "Champion": return <Crown className="w-3 h-3" />;
      case "Expert": return <Star className="w-3 h-3" />;
      case "Pro": return <Award className="w-3 h-3" />;
      default: return null;
    }
  };

  const filteredTopics = hotTopics.filter(topic => 
    (selectedForum === "all" || topic.category === selectedForum) &&
    (searchQuery === "" || topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     topic.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-mono">
              Community <span className="gm-text-teal">Forums</span>
            </h1>
            <p className="text-xl gm-text-secondary max-w-3xl mx-auto">
              Join thousands of gamers discussing hardware, esports, trading strategies, 
              and everything gaming. Share knowledge, get help, and connect with the community.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gm-text-teal mb-2">25.6K</div>
              <div className="text-sm gm-text-secondary">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gm-text-pink mb-2">3.2K</div>
              <div className="text-sm gm-text-secondary">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">36K</div>
              <div className="text-sm gm-text-secondary">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1.2K</div>
              <div className="text-sm gm-text-secondary">Online</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              {/* Quick Actions */}
              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-6">
                  <Button className="w-full gm-bg-teal text-black hover:bg-cyan-400 mb-4">
                    <Plus className="w-4 h-4 mr-2" />
                    New Topic
                  </Button>
                  <div className="space-y-2">
                    <Link href="/auth" className="block">
                      <Button variant="outline" size="sm" className="w-full border-gray-700">
                        Login / Register
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Forum Categories */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Forum Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {forumCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedForum(category.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${
                          selectedForum === category.id 
                            ? "gm-border-teal gm-bg-teal/10" 
                            : "border-gray-700 hover:border-gray-600"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className={`w-5 h-5 ${category.color}`} />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{category.name}</h4>
                            <p className="text-xs gm-text-secondary">{category.description}</p>
                            <div className="flex space-x-3 text-xs gm-text-secondary mt-1">
                              <span>{category.topics} topics</span>
                              <span>{category.posts} posts</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Online Users */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono flex items-center">
                    <Users className="w-5 h-5 gm-text-teal mr-2" />
                    Online Now
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {onlineUsers.map((user, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${
                            user.status === "online" ? "bg-green-400" : "bg-yellow-400"
                          }`} />
                          <span className="text-sm font-medium">{user.name}</span>
                        </div>
                        <div className={`flex items-center space-x-1 ${getRoleColor(user.role)}`}>
                          {getRoleIcon(user.role)}
                          <span className="text-xs">{user.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
                <Input
                  placeholder="Search topics, tags, or content..."
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
                  <SelectItem value="latest">Latest Activity</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="replies">Most Replies</SelectItem>
                  <SelectItem value="views">Most Viewed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Topic Types */}
            <div className="flex flex-wrap gap-2 mb-8">
              {topicTypes.map((type) => (
                <Button
                  key={type.id}
                  variant="outline"
                  size="sm"
                  className="border-gray-700 hover:gm-border-teal"
                >
                  {type.name} ({type.count})
                </Button>
              ))}
            </div>

            {/* Topics List */}
            <div className="space-y-4">
              {filteredTopics.map((topic) => (
                <Card key={topic.id} className="gm-background-secondary border-gray-700 hover:gm-border-teal transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      {/* Topic Info */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="flex flex-col items-center space-y-1">
                            {topic.isPinned && <Pin className="w-4 h-4 text-yellow-400" />}
                            {topic.isHot && <Flame className="w-4 h-4 text-red-400" />}
                            {topic.isLocked && <Lock className="w-4 h-4 gm-text-secondary" />}
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2 hover:gm-text-teal transition-colors cursor-pointer">
                              {topic.title}
                            </h3>
                            
                            <div className="flex items-center space-x-4 text-sm gm-text-secondary mb-3">
                              <div className="flex items-center space-x-2">
                                <Avatar className="w-5 h-5">
                                  <AvatarFallback className="text-xs">
                                    {topic.author.name[0]}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{topic.author.name}</span>
                                <div className={`flex items-center space-x-1 ${getRoleColor(topic.author.role)}`}>
                                  {getRoleIcon(topic.author.role)}
                                  <span className="text-xs">{topic.author.role}</span>
                                </div>
                              </div>
                              <span>•</span>
                              <span>{topic.createdAt}</span>
                              <Badge className={`${forumCategories.find(c => c.id === topic.category)?.color || 'gm-text-secondary'}`}>
                                {topic.category}
                              </Badge>
                            </div>
                            
                            <div className="flex flex-wrap gap-1 mb-3">
                              {topic.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs border-gray-600">
                                  #{tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Stats */}
                      <div className="text-right space-y-2">
                        <div className="flex items-center space-x-4 text-sm gm-text-secondary">
                          <div className="flex items-center">
                            <Reply className="w-3 h-3 mr-1" />
                            {topic.replies}
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {topic.views.toLocaleString()}
                          </div>
                          <div className="flex items-center">
                            <ThumbsUp className="w-3 h-3 mr-1" />
                            {topic.likes}
                          </div>
                        </div>
                        
                        <div className="text-xs gm-text-secondary">
                          Last reply by <span className="font-medium">{topic.lastReplyBy}</span>
                          <br />
                          {topic.lastReply}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="border-gray-700">Previous</Button>
                <Button size="sm" className="gm-bg-teal text-black">1</Button>
                <Button variant="outline" size="sm" className="border-gray-700">2</Button>
                <Button variant="outline" size="sm" className="border-gray-700">3</Button>
                <Button variant="outline" size="sm" className="border-gray-700">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}