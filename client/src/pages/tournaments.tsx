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
  Timer,
  Shield
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
                <div className="text-3xl font-bold gm-text-pink mb-2">$725K</div>
                <div className="text-sm gm-text-secondary">Total Prize Pool</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gm-text-teal mb-2">417</div>
                <div className="text-sm gm-text-secondary">Registered Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gm-text-pink mb-2">45.2K</div>
                <div className="text-sm gm-text-secondary">Live Viewers</div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Featured Tournament */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Tournament</h2>
            <div className="relative rounded-xl overflow-hidden gm-background-secondary border border-gray-700">
              <img 
                src={featuredTournament.thumbnail}
                alt={featuredTournament.name}
                className="w-full h-[400px] object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-red-500 text-white px-3 py-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2" />
                    Live Now
                  </Badge>
                  <Badge className="gm-bg-teal text-black">
                    <Trophy className="w-4 h-4 mr-1" />
                    ${featuredTournament.prizePool.toLocaleString()}
                  </Badge>
                  <Badge variant="outline" className="border-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    {featuredTournament.participants}/{featuredTournament.maxParticipants}
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold mb-2">{featuredTournament.name}</h3>
                <p className="text-lg gm-text-secondary mb-4">{featuredTournament.game}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div>
                    <div className="text-sm gm-text-secondary mb-1">Current Round</div>
                    <div className="font-semibold">{featuredTournament.currentRound}</div>
                  </div>
                  <div>
                    <div className="text-sm gm-text-secondary mb-1">Next Match</div>
                    <div className="font-semibold">{featuredTournament.nextMatch}</div>
                  </div>
                  <div>
                    <div className="text-sm gm-text-secondary mb-1">Format</div>
                    <div className="font-semibold">{featuredTournament.format}</div>
                  </div>
                  <div>
                    <div className="text-sm gm-text-secondary mb-1">Live Viewers</div>
                    <div className="font-semibold">{featuredTournament.streamViewers.toLocaleString()}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="gm-bg-teal text-black hover:bg-cyan-400">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Live
                  </Button>
                  <Button variant="outline">
                    <Shield className="w-4 h-4 mr-2" />
                    Tournament Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Tournament List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar */}
              <div className="w-full md:w-64 space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {tournamentCategories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? "gm-bg-teal text-black"
                            : "hover:gm-background-secondary"
                        }`}
                      >
                        <span>{category.name}</span>
                        <Badge variant="outline" className="ml-2">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </div>
  
                <div>
                  <h3 className="font-semibold mb-4">Status</h3>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="live">Live</SelectItem>
                      <SelectItem value="registering">Registering</SelectItem>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
  
                <div>
                  <h3 className="font-semibold mb-4">Recent Winners</h3>
                  <div className="space-y-4">
                    {recentWinners.map((winner, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>
                            {winner.winner.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">{winner.winner}</div>
                          <div className="text-xs gm-text-secondary">{winner.tournament}</div>
                          <div className="text-xs gm-text-teal">{winner.prize}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
  
                <div>
                  <h3 className="font-semibold mb-4">Upcoming Matches</h3>
                  <div className="space-y-4">
                    {upcomingMatches.map((match, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="text-sm font-medium mb-1">{match.match}</div>
                          <div className="text-xs gm-text-secondary mb-1">{match.tournament}</div>
                          <div className="flex items-center gap-2 text-xs">
                            <Clock className="w-3 h-3" />
                            {match.time}
                            <Badge variant="outline" className="ml-auto">
                              {match.round}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
  
              {/* Main Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1">
                    <Input
                      placeholder="Search tournaments..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </div>
  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredTournaments.map(tournament => (
                    <Link key={tournament.id} href={`/tournament/${tournament.id}`}>
                      <Card className="h-full hover:border-cyan-400 transition-colors">
                        <CardContent className="p-0">
                          <div className="relative">
                            <img
                              src={tournament.thumbnail}
                              alt={tournament.name}
                              className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="absolute top-2 left-2">
                              {getStatusBadge(tournament.status)}
                            </div>
                            {tournament.entryFee > 0 && (
                              <Badge className="absolute top-2 right-2 gm-bg-pink">
                                ${tournament.entryFee}
                              </Badge>
                            )}
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold mb-1">{tournament.name}</h3>
                            <p className="text-sm gm-text-secondary mb-3">{tournament.game}</p>
                            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                              <div>
                                <div className="gm-text-secondary">Prize Pool</div>
                                <div className="font-medium gm-text-teal">
                                  ${tournament.prizePool.toLocaleString()}
                                </div>
                              </div>
                              <div>
                                <div className="gm-text-secondary">Players</div>
                                <div className="font-medium">
                                  {tournament.participants}/{tournament.maxParticipants}
                                </div>
                              </div>
                              <div>
                                <div className="gm-text-secondary">Start Date</div>
                                <div className="font-medium">{tournament.startDate}</div>
                              </div>
                              <div>
                                <div className="gm-text-secondary">Format</div>
                                <div className="font-medium">{tournament.format}</div>
                              </div>
                            </div>
                            <Progress 
                              value={(tournament.participants / tournament.maxParticipants) * 100}
                              className="mb-4"
                            />
                            <div className="flex items-center justify-between">
                              <div className="text-sm gm-text-secondary">
                                by {tournament.organizer}
                              </div>
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <Footer />
      </div>
    );
  } 