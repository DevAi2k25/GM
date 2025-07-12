import { useState } from "react";
import { Link } from "wouter";
import { 
  Play, 
  Users, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2, 
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  Gift,
  Crown,
  Star,
  Gamepad2,
  Calendar,
  Clock,
  Filter,
  Search,
  Radio,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function LiveStreamsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [isMuted, setIsMuted] = useState(false);

  const streamCategories = [
    { id: "all", name: "All Streams", count: 156 },
    { id: "fps", name: "FPS Games", count: 45 },
    { id: "moba", name: "MOBA", count: 32 },
    { id: "hardware", name: "Hardware Reviews", count: 18 },
    { id: "esports", name: "Esports Events", count: 12 },
    { id: "variety", name: "Variety Gaming", count: 49 }
  ];

  const featuredStream = {
    id: 1,
    title: "World Championship Finals - LIVE Commentary",
    streamer: {
      name: "ProCaster_Elite",
      avatar: "",
      verified: true,
      followers: 125000,
      level: "Partner"
    },
    game: "Championship Arena",
    viewers: 15420,
    category: "esports",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450",
    duration: "3:24:15",
    isLive: true,
    tags: ["Tournament", "Commentary", "Pro Play"]
  };

  const liveStreams = [
    {
      id: 2,
      title: "RTX 5090 Unboxing & First Benchmarks",
      streamer: {
        name: "TechReviewGuru",
        avatar: "",
        verified: true,
        followers: 89000,
        level: "Partner"
      },
      game: "Hardware Review",
      viewers: 8960,
      category: "hardware",
      thumbnail: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      duration: "1:45:30",
      isLive: true,
      tags: ["RTX 5090", "Unboxing", "Benchmarks"]
    },
    {
      id: 3,
      title: "Ranked Climb to Grandmaster - Road to Pro",
      streamer: {
        name: "CompetitiveAce",
        avatar: "",
        verified: false,
        followers: 24500,
        level: "Affiliate"
      },
      game: "Tactical Shooter",
      viewers: 3420,
      category: "fps",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      duration: "2:12:45",
      isLive: true,
      tags: ["Ranked", "Educational", "Pro Tips"]
    },
    {
      id: 4,
      title: "Building the Ultimate Gaming Setup - $10K Budget",
      streamer: {
        name: "SetupMaster",
        avatar: "",
        verified: true,
        followers: 156000,
        level: "Partner"
      },
      game: "PC Building",
      viewers: 12800,
      category: "hardware",
      thumbnail: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      duration: "4:18:22",
      isLive: true,
      tags: ["PC Build", "High-End", "Setup Tour"]
    },
    {
      id: 5,
      title: "MOBA Championship Strategy Analysis",
      streamer: {
        name: "StrategyKing",
        avatar: "",
        verified: false,
        followers: 67000,
        level: "Partner"
      },
      game: "Strategy Arena",
      viewers: 5670,
      category: "moba",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      duration: "1:33:18",
      isLive: true,
      tags: ["Strategy", "Analysis", "Educational"]
    },
    {
      id: 6,
      title: "Variety Gaming Night - Community Choice",
      streamer: {
        name: "CommunityGamer",
        avatar: "",
        verified: false,
        followers: 34000,
        level: "Affiliate"
      },
      game: "Various Games",
      viewers: 2100,
      category: "variety",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      duration: "0:45:12",
      isLive: true,
      tags: ["Variety", "Community", "Interactive"]
    }
  ];

  const upcomingStreams = [
    {
      id: 7,
      title: "New Gaming Laptop Reviews - 2024 Edition",
      streamer: "LaptopExpert",
      scheduledTime: "Today 8:00 PM",
      game: "Hardware Review",
      expectedViewers: "5K-10K"
    },
    {
      id: 8,
      title: "Pro Player Training Session",
      streamer: "EliteGamer_Pro",
      scheduledTime: "Tomorrow 2:00 PM",
      game: "Competitive FPS",
      expectedViewers: "15K-20K"
    }
  ];

  const topStreamers = [
    { name: "ProCaster_Elite", viewers: 15420, status: "live" },
    { name: "SetupMaster", viewers: 12800, status: "live" },
    { name: "TechReviewGuru", viewers: 8960, status: "live" },
    { name: "StrategyKing", viewers: 5670, status: "live" },
    { name: "CompetitiveAce", viewers: 3420, status: "live" }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      esports: "gm-text-teal",
      hardware: "gm-text-pink",
      fps: "text-red-400",
      moba: "text-purple-400",
      variety: "text-green-400"
    };
    return colors[category] || "gm-text-secondary";
  };

  const filteredStreams = liveStreams.filter(stream => 
    (selectedCategory === "all" || stream.category === selectedCategory) &&
    (searchQuery === "" || stream.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     stream.streamer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     stream.game.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-mono">
              Live <span className="gm-text-teal">Gaming</span> Streams
            </h1>
            <p className="text-xl gm-text-secondary max-w-3xl mx-auto">
              Watch live gameplay, hardware reviews, tournaments, and educational content 
              from top streamers and gaming content creators.
            </p>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">156</div>
              <div className="text-sm gm-text-secondary">Live Streams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gm-text-teal mb-2">47.2K</div>
              <div className="text-sm gm-text-secondary">Total Viewers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gm-text-pink mb-2">89</div>
              <div className="text-sm gm-text-secondary">Streamers Online</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
              <div className="text-sm gm-text-secondary">Live Events</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Stream */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
                <Crown className="w-6 h-6 text-yellow-400 mr-3" />
                Featured Stream
              </h2>
              
              <Card className="gm-background-secondary border-gray-700 overflow-hidden">
                <div className="relative">
                  <div className="aspect-video relative">
                    <img 
                      src={featuredStream.thumbnail}
                      alt={featuredStream.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Live Indicator */}
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white animate-pulse">
                      <Radio className="w-3 h-3 mr-1" />
                      LIVE
                    </Badge>
                    
                    {/* Viewer Count */}
                    <Badge className="absolute top-4 right-4 bg-black/80 text-white">
                      <Eye className="w-3 h-3 mr-1" />
                      {featuredStream.viewers.toLocaleString()}
                    </Badge>
                    
                    {/* Play Controls Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        size="lg"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                      >
                        <Play className="w-8 h-8" />
                      </Button>
                    </div>
                    
                    {/* Duration */}
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {featuredStream.duration}
                    </div>
                  </div>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <Button size="sm" variant="ghost" onClick={() => setIsPlaying(!isPlaying)}>
                          <Play className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => setIsMuted(!isMuted)}>
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </Button>
                        <div className="w-20">
                          <Slider
                            value={volume}
                            onValueChange={setVolume}
                            max={100}
                            step={1}
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost">
                          <Settings className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Maximize className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{featuredStream.title}</h3>
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>{featuredStream.streamer.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-1">
                              <span className="font-medium">{featuredStream.streamer.name}</span>
                              {featuredStream.streamer.verified && (
                                <Star className="w-4 h-4 text-yellow-400" />
                              )}
                            </div>
                            <p className="text-sm gm-text-secondary">
                              {featuredStream.streamer.followers.toLocaleString()} followers
                            </p>
                          </div>
                        </div>
                        
                        <Badge className={getCategoryColor(featuredStream.category)}>
                          {featuredStream.game}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {featuredStream.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="border-gray-600">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <Button className="gm-bg-teal text-black hover:bg-cyan-400">
                        <Heart className="w-4 h-4 mr-2" />
                        Follow
                      </Button>
                      <Button variant="outline" className="border-gray-700">
                        <Gift className="w-4 h-4 mr-2" />
                        Support
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
                <Input
                  placeholder="Search streams, streamers, games..."
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
                  {streamCategories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name} ({cat.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Live Streams Grid */}
            <section>
              <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
                <Radio className="w-6 h-6 text-red-400 mr-3" />
                Live Now
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredStreams.map((stream) => (
                  <Card key={stream.id} className="gm-background-secondary border-gray-700 group hover:gm-border-teal transition-all duration-300">
                    <div className="relative">
                      <div className="aspect-video relative overflow-hidden rounded-t-lg">
                        <img 
                          src={stream.thumbnail}
                          alt={stream.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        <Badge className="absolute top-3 left-3 bg-red-500 text-white text-xs">
                          <Radio className="w-2 h-2 mr-1" />
                          LIVE
                        </Badge>
                        
                        <Badge className="absolute top-3 right-3 bg-black/80 text-white text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          {stream.viewers.toLocaleString()}
                        </Badge>
                        
                        <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs">
                          {stream.duration}
                        </div>
                        
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                            <Play className="w-6 h-6" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 group-hover:gm-text-teal transition-colors line-clamp-2">
                        {stream.title}
                      </h3>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="text-xs">{stream.streamer.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-1">
                            <span className="text-sm font-medium">{stream.streamer.name}</span>
                            {stream.streamer.verified && (
                              <Star className="w-3 h-3 text-yellow-400" />
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm gm-text-secondary">
                        <span>{stream.game}</span>
                        <Badge className={`${getCategoryColor(stream.category)} text-xs`}>
                          {stream.category}
                        </Badge>
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
              {/* Top Streamers */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono flex items-center">
                    <TrendingUp className="w-5 h-5 gm-text-teal mr-2" />
                    Top Streamers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topStreamers.map((streamer, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold text-black">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{streamer.name}</p>
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-red-400 rounded-full" />
                              <span className="text-xs gm-text-secondary">
                                {streamer.viewers.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Streams */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono flex items-center">
                    <Calendar className="w-5 h-5 gm-text-pink mr-2" />
                    Upcoming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingStreams.map((stream) => (
                      <div key={stream.id} className="p-3 border border-gray-700 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">{stream.title}</h4>
                        <p className="text-xs gm-text-secondary mb-2">by {stream.streamer}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="gm-text-teal">{stream.scheduledTime}</span>
                          <span className="gm-text-secondary">{stream.expectedViewers}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Start Streaming */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Start Streaming</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm gm-text-secondary mb-4">
                    Ready to share your gaming with the world?
                  </p>
                  <Button className="w-full gm-bg-teal text-black hover:bg-cyan-400 mb-2">
                    <Gamepad2 className="w-4 h-4 mr-2" />
                    Go Live
                  </Button>
                  <Link href="/seller-dashboard">
                    <Button variant="outline" size="sm" className="w-full border-gray-700">
                      Creator Dashboard
                    </Button>
                  </Link>
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