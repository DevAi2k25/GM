import { useState } from "react";
import { Link } from "wouter";
import { 
  Trophy, 
  Crown, 
  Medal, 
  Star, 
  TrendingUp, 
  Users, 
  Target, 
  Award,
  Gamepad2,
  Timer,
  Zap,
  Shield,
  Filter,
  Search,
  Calendar,
  BarChart3,
  Flame,
  ChevronUp,
  ChevronDown,
  Eye,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function LeaderboardsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("weekly");
  const [selectedCategory, setSelectedCategory] = useState("overall");
  const [searchQuery, setSearchQuery] = useState("");

  const leaderboardCategories = [
    { id: "overall", name: "Overall Rankings", icon: Trophy },
    { id: "tournaments", name: "Tournament Points", icon: Crown },
    { id: "trading", name: "Trading Volume", icon: TrendingUp },
    { id: "community", name: "Community Score", icon: Users },
    { id: "hardware", name: "Hardware Expert", icon: Gamepad2 },
    { id: "streaming", name: "Stream Popularity", icon: Star }
  ];

  const timePeriods = [
    { id: "daily", name: "Today" },
    { id: "weekly", name: "This Week" },
    { id: "monthly", name: "This Month" },
    { id: "yearly", name: "This Year" },
    { id: "alltime", name: "All Time" }
  ];

  const topPlayers = [
    {
      rank: 1,
      username: "EliteGamer_Pro",
      avatar: "",
      level: 89,
      score: 125680,
      change: 5,
      trending: "up",
      badges: ["Champion", "Expert", "Verified"],
      specialty: "FPS Games",
      winRate: 94,
      achievements: 247,
      lastActive: "2 hours ago",
      country: "US"
    },
    {
      rank: 2,
      username: "TechMaster_2024",
      avatar: "",
      level: 76,
      score: 118250,
      change: 2,
      trending: "up",
      badges: ["Hardware Expert", "Moderator"],
      specialty: "Hardware Reviews",
      winRate: 89,
      achievements: 193,
      lastActive: "1 hour ago",
      country: "CA"
    },
    {
      rank: 3,
      username: "StrategyKing",
      avatar: "",
      level: 82,
      score: 112890,
      change: -1,
      trending: "down",
      badges: ["Strategy Master", "Tournament Winner"],
      specialty: "MOBA",
      winRate: 91,
      achievements: 215,
      lastActive: "30 min ago",
      country: "KR"
    },
    {
      rank: 4,
      username: "StreamQueen",
      avatar: "",
      level: 71,
      score: 108400,
      change: 3,
      trending: "up",
      badges: ["Content Creator", "Community Favorite"],
      specialty: "Variety Gaming",
      winRate: 87,
      achievements: 156,
      lastActive: "Online",
      country: "UK"
    },
    {
      rank: 5,
      username: "HardwareGuru",
      avatar: "",
      level: 85,
      score: 105750,
      change: 0,
      trending: "same",
      badges: ["Tech Expert", "Trusted Reviewer"],
      specialty: "PC Building",
      winRate: 96,
      achievements: 289,
      lastActive: "15 min ago",
      country: "DE"
    }
  ];

  const extendedRankings = [
    ...topPlayers,
    {
      rank: 6,
      username: "ProTrader_99",
      avatar: "",
      level: 63,
      score: 98200,
      change: 4,
      trending: "up",
      badges: ["Trusted Seller", "High Volume"],
      specialty: "Trading",
      winRate: 85,
      achievements: 142,
      lastActive: "1 day ago",
      country: "JP"
    },
    {
      rank: 7,
      username: "CommunityHero",
      avatar: "",
      level: 58,
      score: 94680,
      change: -2,
      trending: "down",
      badges: ["Helper", "Forum Expert"],
      specialty: "Community Support",
      winRate: 92,
      achievements: 178,
      lastActive: "4 hours ago",
      country: "AU"
    },
    {
      rank: 8,
      username: "SpeedRunner_Elite",
      avatar: "",
      level: 72,
      score: 91250,
      change: 1,
      trending: "up",
      badges: ["Speed Demon", "Record Holder"],
      specialty: "Speedrunning",
      winRate: 88,
      achievements: 201,
      lastActive: "6 hours ago",
      country: "SE"
    }
  ];

  const achievementCategories = [
    {
      name: "Tournament Victories",
      description: "Players with most tournament wins",
      leaders: [
        { username: "ChampionAce", count: 47, icon: Trophy },
        { username: "EliteGamer_Pro", count: 42, icon: Trophy },
        { username: "StrategyKing", count: 38, icon: Trophy }
      ]
    },
    {
      name: "Community Contributions",
      description: "Most helpful forum posts and guides",
      leaders: [
        { username: "CommunityHero", count: 1250, icon: Users },
        { username: "TechMaster_2024", count: 1089, icon: Users },
        { username: "HelpfulGamer", count: 967, icon: Users }
      ]
    },
    {
      name: "Hardware Reviews",
      description: "Most comprehensive hardware reviews",
      leaders: [
        { username: "HardwareGuru", count: 234, icon: Gamepad2 },
        { username: "TechMaster_2024", count: 198, icon: Gamepad2 },
        { username: "ReviewExpert", count: 156, icon: Gamepad2 }
      ]
    }
  ];

  const weeklyHighlights = [
    {
      title: "Biggest Climber",
      username: "RisingStarGamer",
      change: "+15 ranks",
      achievement: "Won 3 tournaments this week"
    },
    {
      title: "Consistency Award",
      username: "SteadyPlayer",
      change: "Maintained top 10 for 8 weeks",
      achievement: "98% win rate in ranked matches"
    },
    {
      title: "Community Champion",
      username: "HelpfulMentor",
      change: "+500 community points",
      achievement: "Helped 50+ new players"
    }
  ];

  const getTrendingIcon = (trending: string, change: number) => {
    if (trending === "up") return <ChevronUp className="w-4 h-4 text-green-400" />;
    if (trending === "down") return <ChevronDown className="w-4 h-4 text-red-400" />;
    return <div className="w-4 h-4" />;
  };

  const getBadgeColor = (badge: string) => {
    const colors: { [key: string]: string } = {
      "Champion": "bg-yellow-400 text-black",
      "Expert": "gm-bg-teal text-black",
      "Verified": "bg-blue-500 text-white",
      "Hardware Expert": "gm-bg-pink text-white",
      "Moderator": "bg-purple-500 text-white",
      "Strategy Master": "bg-purple-400 text-white",
      "Tournament Winner": "bg-yellow-500 text-black",
      "Content Creator": "bg-pink-500 text-white",
      "Community Favorite": "bg-green-500 text-white",
      "Tech Expert": "gm-bg-teal text-black",
      "Trusted Reviewer": "bg-blue-400 text-white"
    };
    return colors[badge] || "bg-gray-500 text-white";
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-mono">
              Gaming <span className="gm-text-teal">Leaderboards</span>
            </h1>
            <p className="text-xl gm-text-secondary max-w-3xl mx-auto">
              Track the top performers across tournaments, trading, community contributions, 
              and expertise. Compete for the crown and earn your place among gaming legends.
            </p>
          </div>

          {/* Period and Category Selectors */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="gm-background border-gray-700">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent className="gm-background-secondary border-gray-700">
                {timePeriods.map((period) => (
                  <SelectItem key={period.id} value={period.id}>
                    {period.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="gm-background border-gray-700">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="gm-background-secondary border-gray-700">
                {leaderboardCategories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-3">
            {/* Top 3 Podium */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
                <Crown className="w-6 h-6 text-yellow-400 mr-3" />
                Top Champions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topPlayers.slice(0, 3).map((player, index) => (
                  <Card key={player.rank} className={`gm-background-secondary border-gray-700 relative overflow-hidden ${
                    index === 0 ? 'ring-2 ring-yellow-400' : 
                    index === 1 ? 'ring-2 ring-gray-400' : 
                    'ring-2 ring-orange-400'
                  }`}>
                    {/* Rank Badge */}
                    <div className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      index === 0 ? 'bg-yellow-400 text-black' : 
                      index === 1 ? 'bg-gray-400 text-black' : 
                      'bg-orange-400 text-black'
                    }`}>
                      {player.rank}
                    </div>
                    
                    <CardContent className="p-6 text-center">
                      <Avatar className="w-20 h-20 mx-auto mb-4">
                        <AvatarFallback className="text-2xl font-bold">
                          {player.username[0]}
                        </AvatarFallback>
                      </Avatar>
                      
                      <h3 className="text-xl font-bold mb-2">{player.username}</h3>
                      
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <span className="text-2xl font-bold gm-text-teal">{player.score.toLocaleString()}</span>
                        {getTrendingIcon(player.trending, player.change)}
                        <span className={`text-sm ${player.trending === 'up' ? 'text-green-400' : player.trending === 'down' ? 'text-red-400' : 'gm-text-secondary'}`}>
                          {player.change > 0 ? '+' : ''}{player.change}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span>Level</span>
                          <span className="font-semibold">{player.level}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Win Rate</span>
                          <span className="font-semibold text-green-400">{player.winRate}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Achievements</span>
                          <span className="font-semibold">{player.achievements}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 justify-center">
                        {player.badges.slice(0, 2).map((badge, i) => (
                          <Badge key={i} className={`text-xs ${getBadgeColor(badge)}`}>
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Full Rankings Table */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-mono flex items-center">
                  <BarChart3 className="w-6 h-6 gm-text-teal mr-3" />
                  Full Rankings
                </h2>
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
                  <Input
                    placeholder="Search players..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64 gm-background border-gray-700 focus:gm-border-teal"
                  />
                </div>
              </div>
              
              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b border-gray-700">
                        <tr className="text-left">
                          <th className="p-4 font-mono">Rank</th>
                          <th className="p-4 font-mono">Player</th>
                          <th className="p-4 font-mono">Score</th>
                          <th className="p-4 font-mono">Change</th>
                          <th className="p-4 font-mono">Specialty</th>
                          <th className="p-4 font-mono">Win Rate</th>
                          <th className="p-4 font-mono">Last Active</th>
                        </tr>
                      </thead>
                      <tbody>
                        {extendedRankings.map((player) => (
                          <tr key={player.rank} className="border-b border-gray-700 hover:gm-bg-teal/5 transition-colors">
                            <td className="p-4">
                              <div className="flex items-center space-x-2">
                                <span className="font-bold text-lg">{player.rank}</span>
                                {player.rank <= 3 && (
                                  <Medal className={`w-4 h-4 ${
                                    player.rank === 1 ? 'text-yellow-400' : 
                                    player.rank === 2 ? 'text-gray-400' : 
                                    'text-orange-400'
                                  }`} />
                                )}
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center space-x-3">
                                <Avatar className="w-10 h-10">
                                  <AvatarFallback>{player.username[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="flex items-center space-x-2">
                                    <span className="font-semibold">{player.username}</span>
                                    <span className="text-xs gm-text-secondary">Lv.{player.level}</span>
                                  </div>
                                  <div className="flex space-x-1">
                                    {player.badges.slice(0, 2).map((badge, i) => (
                                      <Badge key={i} className={`text-xs ${getBadgeColor(badge)}`}>
                                        {badge}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className="font-bold text-lg gm-text-teal">
                                {player.score.toLocaleString()}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center space-x-1">
                                {getTrendingIcon(player.trending, player.change)}
                                <span className={`font-medium ${
                                  player.trending === 'up' ? 'text-green-400' : 
                                  player.trending === 'down' ? 'text-red-400' : 
                                  'gm-text-secondary'
                                }`}>
                                  {player.change > 0 ? '+' : ''}{player.change}
                                </span>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className="text-sm gm-text-secondary">{player.specialty}</span>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center space-x-2">
                                <Progress value={player.winRate} className="w-16 h-2" />
                                <span className="text-sm font-medium">{player.winRate}%</span>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className="text-sm gm-text-secondary">{player.lastActive}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              {/* Weekly Highlights */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono flex items-center">
                    <Flame className="w-5 h-5 text-red-400 mr-2" />
                    This Week's Stars
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyHighlights.map((highlight, index) => (
                      <div key={index} className="p-3 border border-gray-700 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1 gm-text-teal">{highlight.title}</h4>
                        <p className="font-medium text-sm">{highlight.username}</p>
                        <p className="text-xs gm-text-secondary">{highlight.change}</p>
                        <p className="text-xs gm-text-secondary mt-1">{highlight.achievement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievement Leaders */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono flex items-center">
                    <Award className="w-5 h-5 text-yellow-400 mr-2" />
                    Achievement Leaders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="0">
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                      {achievementCategories.map((category, index) => {
                        const IconComponent = category.leaders[0].icon;
                        return (
                          <TabsTrigger key={index} value={index.toString()} className="text-xs">
                            <IconComponent className="w-3 h-3" />
                          </TabsTrigger>
                        );
                      })}
                    </TabsList>
                    {achievementCategories.map((category, index) => (
                      <TabsContent key={index} value={index.toString()}>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm">{category.name}</h4>
                          <p className="text-xs gm-text-secondary">{category.description}</p>
                          {category.leaders.map((leader, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <span className="text-sm font-medium">{leader.username}</span>
                              <div className="flex items-center space-x-1">
                                <leader.icon className="w-3 h-3 gm-text-teal" />
                                <span className="text-sm font-bold">{leader.count}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>

              {/* Leaderboard Categories */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Leaderboard Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {leaderboardCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${
                          selectedCategory === category.id 
                            ? "gm-border-teal gm-bg-teal/10" 
                            : "border-gray-700 hover:border-gray-600"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <category.icon className={`w-4 h-4 ${selectedCategory === category.id ? 'gm-text-teal' : 'gm-text-secondary'}`} />
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Join Competition */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Climb the Ranks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm gm-text-secondary mb-4">
                    Participate in tournaments, contribute to the community, and showcase your skills to climb the leaderboards.
                  </p>
                  <div className="space-y-2">
                    <Link href="/tournaments">
                      <Button className="w-full gm-bg-teal text-black hover:bg-cyan-400">
                        <Trophy className="w-4 h-4 mr-2" />
                        Join Tournament
                      </Button>
                    </Link>
                    <Link href="/community-forums">
                      <Button variant="outline" size="sm" className="w-full border-gray-700">
                        <Users className="w-4 h-4 mr-2" />
                        Community Forums
                      </Button>
                    </Link>
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