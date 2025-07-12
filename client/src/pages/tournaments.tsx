import { useState } from "react";
import { Link } from "wouter";
import { 
  Trophy, 
  Calendar, 
  Users, 
  DollarSign, 
  Clock, 
  MapPin, 
  Star, 
  Award,
  Target,
  Gamepad2,
  Crown,
  Medal,
  Zap,
  Filter,
  Search,
  Play,
  Eye,
  ChevronRight,
  Gift,
  Timer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function TournamentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tournamentCategories = [
    { id: "all", name: "All Games", count: 24 },
    { id: "fps", name: "FPS", count: 8 },
    { id: "moba", name: "MOBA", count: 6 },
    { id: "rts", name: "Strategy", count: 4 },
    { id: "fighting", name: "Fighting", count: 3 },
    { id: "racing", name: "Racing", count: 3 }
  ];

  const featuredTournament = {
    id: 1,
    name: "GamersMarket World Championship 2024",
    game: "Tactical Arena",
    status: "live",
    prizePool: 500000,
    participants: 128,
    maxParticipants: 128,
    startDate: "Dec 20, 2024",
    endDate: "Dec 22, 2024",
    registrationDeadline: "Dec 18, 2024",
    format: "Single Elimination",
    entryFee: 100,
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    organizer: "GamersMarket Esports",
    currentRound: "Semi-Finals",
    nextMatch: "Today 7:00 PM EST",
    streamViewers: 45200,
    featured: true
  };

  const activeTournaments = [
    {
      id: 2,
      name: "Winter Hardware Championship",
      game: "Hardware Quiz",
      status: "registering",
      prizePool: 25000,
      participants: 67,
      maxParticipants: 100,
      startDate: "Dec 25, 2024",
      endDate: "Dec 27, 2024",
      registrationDeadline: "Dec 23, 2024",
      format: "Swiss System",
      entryFee: 25,
      thumbnail: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      organizer: "Tech Masters",
      category: "quiz"
    },
    {
      id: 3,
      name: "Speed Build Championship",
      game: "PC Building",
      status: "upcoming",
      prizePool: 15000,
      participants: 24,
      maxParticipants: 32,
      startDate: "Jan 5, 2025",
      endDate: "Jan 5, 2025",
      registrationDeadline: "Jan 3, 2025",
      format: "Time Trial",
      entryFee: 50,
      thumbnail: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      organizer: "Build Masters",
      category: "hardware"
    },
    {
      id: 4,
      name: "FPS Masters League",
      game: "Competitive Shooter",
      status: "live",
      prizePool: 100000,
      participants: 64,
      maxParticipants: 64,
      startDate: "Dec 15, 2024",
      endDate: "Dec 30, 2024",
      registrationDeadline: "Dec 12, 2024",
      format: "Round Robin + Playoffs",
      entryFee: 75,
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      organizer: "FPS Pro League",
      category: "fps"
    },
    {
      id: 5,
      name: "MOBA Legends Tournament",
      game: "Strategy Arena",
      status: "registering",
      prizePool: 75000,
      participants: 89,
      maxParticipants: 128,
      startDate: "Jan 10, 2025",
      endDate: "Jan 15, 2025",
      registrationDeadline: "Jan 8, 2025",
      format: "Double Elimination",
      entryFee: 100,
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      organizer: "MOBA Champions",
      category: "moba"
    },
    {
      id: 6,
      name: "Retro Gaming Championships",
      game: "Classic Arcade",
      status: "upcoming",
      prizePool: 10000,
      participants: 45,
      maxParticipants: 64,
      startDate: "Feb 1, 2025",
      endDate: "Feb 3, 2025",
      registrationDeadline: "Jan 30, 2025",
      format: "Best of 3",
      entryFee: 20,
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225",
      organizer: "Retro Gamers",
      category: "retro"
    }
  ];

  const recentWinners = [
    {
      tournament: "Autumn Championships",
      winner: "ProGamer_Elite",
      prize: "$50,000",
      date: "Dec 10, 2024"
    },
    {
      tournament: "Hardware Masters",
      winner: "TechWizard",
      prize: "$25,000",
      date: "Dec 8, 2024"
    },
    {
      tournament: "Speed Challenge",
      winner: "RapidFire_99",
      prize: "$15,000",
      date: "Dec 5, 2024"
    }
  ];

  const upcomingMatches = [
    {
      tournament: "World Championship",
      match: "Team Alpha vs Team Beta",
      time: "Today 7:00 PM",
      round: "Semi-Final"
    },
    {
      tournament: "FPS Masters",
      match: "Elite Squad vs Pro Warriors",
      time: "Today 9:00 PM",
      round: "Quarter-Final"
    },
    {
      tournament: "MOBA Legends",
      match: "Dragon Slayers vs Phoenix Rising",
      time: "Tomorrow 6:00 PM",
      round: "Group Stage"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live": return "text-red-400";
      case "registering": return "gm-text-teal";
      case "upcoming": return "text-yellow-400";
      case "completed": return "text-green-400";
      default: return "gm-text-secondary";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live": return <Badge className="bg-red-500 text-white">Live</Badge>;
      case "registering": return <Badge className="gm-bg-teal text-black">Registering</Badge>;
      case "upcoming": return <Badge className="bg-yellow-400 text-black">Upcoming</Badge>;
      case "completed": return <Badge className="bg-green-400 text-black">Completed</Badge>;
      default: return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredTournaments = activeTournaments.filter(tournament => 
    (selectedCategory === "all" || tournament.category === selectedCategory) &&
    (selectedStatus === "all" || tournament.status === selectedStatus) &&
    (searchQuery === "" || tournament.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     tournament.game.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-mono">
              Gaming <span className="gm-text-teal">Tournaments</span> & <span className="gm-text-pink">Competitions</span>
            </h1>
            <p className="text-xl gm-text-secondary max-w-3xl mx-auto">
              Compete in professional esports tournaments, hardware challenges, and community competitions. 
              Win prizes, gain recognition, and prove your skills.
            </p>
          </div>

          {/* Tournament Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gm-text-teal mb-2">24</div>
              <div className="text-sm gm-text-secondary">Active Tournaments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gm-text-pink mb-2">$726K</div>
              <div className="text-sm gm-text-secondary">Total Prize Pool</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">1.2K</div>
              <div className="text-sm gm-text-secondary">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">6</div>
              <div className="text-sm gm-text-secondary">Live Now</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Tournament */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
                <Crown className="w-6 h-6 text-yellow-400 mr-3" />
                Featured Tournament
              </h2>
              
              <Card className="gm-background-secondary border-gray-700 overflow-hidden">
                <div className="relative">
                  <img 
                    src={featuredTournament.thumbnail}
                    alt={featuredTournament.name}
                    className="w-full h-64 object-cover"
                  />
                  
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {getStatusBadge(featuredTournament.status)}
                    <Badge className="bg-black/80 text-white">
                      <Eye className="w-3 h-3 mr-1" />
                      {featuredTournament.streamViewers.toLocaleString()}
                    </Badge>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Live
                    </Button>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{featuredTournament.name}</h3>
                    <p className="text-white/80 mb-4">{featuredTournament.game}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
                      <div>
                        <p className="text-white/60 text-sm">Prize Pool</p>
                        <p className="font-bold">${featuredTournament.prizePool.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Players</p>
                        <p className="font-bold">{featuredTournament.participants}/{featuredTournament.maxParticipants}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Current Round</p>
                        <p className="font-bold">{featuredTournament.currentRound}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Next Match</p>
                        <p className="font-bold">{featuredTournament.nextMatch}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
                <Input
                  placeholder="Search tournaments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 gm-background border-gray-700 focus:gm-border-teal"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-40 gm-background border-gray-700">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="gm-background-secondary border-gray-700">
                  {tournamentCategories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name} ({cat.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full md:w-40 gm-background border-gray-700">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="gm-background-secondary border-gray-700">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="live">Live</SelectItem>
                  <SelectItem value="registering">Registering</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tournament Grid */}
            <section>
              <h2 className="text-2xl font-bold mb-6 font-mono flex items-center">
                <Trophy className="w-6 h-6 gm-text-teal mr-3" />
                Active Tournaments
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTournaments.map((tournament) => (
                  <Card key={tournament.id} className="gm-background-secondary border-gray-700 group hover:gm-border-teal transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={tournament.thumbnail}
                        alt={tournament.name}
                        className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      <div className="absolute top-3 left-3">
                        {getStatusBadge(tournament.status)}
                      </div>
                      
                      <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm">
                        ${tournament.prizePool.toLocaleString()}
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2 group-hover:gm-text-teal transition-colors">
                        {tournament.name}
                      </h3>
                      
                      <p className="gm-text-secondary mb-4">{tournament.game}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="gm-text-secondary">Participants</span>
                          <span>{tournament.participants}/{tournament.maxParticipants}</span>
                        </div>
                        
                        <Progress 
                          value={(tournament.participants / tournament.maxParticipants) * 100} 
                          className="h-2"
                        />
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="gm-text-secondary">Entry Fee</span>
                            <p className="font-semibold">${tournament.entryFee}</p>
                          </div>
                          <div>
                            <span className="gm-text-secondary">Format</span>
                            <p className="font-semibold">{tournament.format}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="gm-text-secondary">Start Date</span>
                          <span>{tournament.startDate}</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="gm-text-secondary">Registration Ends</span>
                          <span className="text-yellow-400">{tournament.registrationDeadline}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        {tournament.status === "registering" && (
                          <Button className="flex-1 gm-bg-teal text-black hover:bg-cyan-400">
                            Register Now
                          </Button>
                        )}
                        {tournament.status === "live" && (
                          <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white">
                            <Play className="w-4 h-4 mr-2" />
                            Watch Live
                          </Button>
                        )}
                        {tournament.status === "upcoming" && (
                          <Button variant="outline" className="flex-1 border-gray-700">
                            <Clock className="w-4 h-4 mr-2" />
                            Coming Soon
                          </Button>
                        )}
                        <Button variant="outline" size="sm" className="border-gray-700">
                          <Eye className="w-4 h-4" />
                        </Button>
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
              {/* Upcoming Matches */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono flex items-center">
                    <Timer className="w-5 h-5 gm-text-teal mr-2" />
                    Next Matches
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingMatches.map((match, index) => (
                      <div key={index} className="p-3 border border-gray-700 rounded-lg">
                        <h4 className="font-semibold text-sm mb-1">{match.tournament}</h4>
                        <p className="text-xs gm-text-secondary mb-2">{match.match}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="gm-text-teal">{match.time}</span>
                          <Badge variant="outline" className="border-gray-600 text-xs">
                            {match.round}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Winners */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono flex items-center">
                    <Medal className="w-5 h-5 text-yellow-400 mr-2" />
                    Recent Winners
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentWinners.map((winner, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm">{winner.winner}</p>
                          <p className="text-xs gm-text-secondary">{winner.tournament}</p>
                          <p className="text-xs gm-text-secondary">{winner.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold gm-text-teal">{winner.prize}</p>
                          <Trophy className="w-4 h-4 text-yellow-400 ml-auto" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Create Tournament */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Host Tournament</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm gm-text-secondary mb-4">
                    Organize your own gaming tournament and bring the community together.
                  </p>
                  <Button className="w-full gm-bg-teal text-black hover:bg-cyan-400 mb-2">
                    <Award className="w-4 h-4 mr-2" />
                    Create Tournament
                  </Button>
                  <Link href="/seller-dashboard">
                    <Button variant="outline" size="sm" className="w-full border-gray-700">
                      Organizer Dashboard
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Tournament Rules */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Quick Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 gm-text-teal" />
                      <span>Fair play guaranteed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span>Secure prize distribution</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>Professional referees</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Gamepad2 className="w-4 h-4 gm-text-pink" />
                      <span>Multiple game formats</span>
                    </div>
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