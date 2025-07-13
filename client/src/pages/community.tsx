import { MessageSquare, Users, Trophy, TrendingUp, Heart } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CommunityPage() {
  const forumCategories = [
    {
      title: "Gaming Discussion",
      description: "General gaming topics and discussions",
      topics: 1250,
      posts: 15000,
      icon: MessageSquare
    },
    {
      title: "Hardware & Tech",
      description: "Tech support and hardware recommendations",
      topics: 850,
      posts: 12000,
      icon: TrendingUp
    },
    {
      title: "Tournaments",
      description: "Upcoming tournaments and competitions",
      topics: 450,
      posts: 8000,
      icon: Trophy
    }
  ];

  const featuredMembers = [
    {
      name: "Alex_Gaming",
      role: "Community Leader",
      contributions: 1500,
      avatar: "/images/avatars/alex.jpg"
    },
    {
      name: "TechPro",
      role: "Hardware Expert",
      contributions: 1200,
      avatar: "/images/avatars/tech.jpg"
    },
    {
      name: "StreamQueen",
      role: "Content Creator",
      contributions: 980,
      avatar: "/images/avatars/stream.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-mono">
              Gaming Community
            </h1>
            <p className="text-xl gm-text-secondary max-w-2xl mx-auto">
              Join our vibrant community of gamers. Share experiences, get help, and make friends!
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-4">
            <Badge className="gm-bg-teal text-black px-4 py-2">25K+ Members</Badge>
            <Badge variant="outline" className="border-pink-500 text-pink-500 px-4 py-2">Active Forums</Badge>
            <Badge variant="outline" className="border-purple-500 text-purple-400 px-4 py-2">Daily Events</Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Forum Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-mono">Discussion Forums</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forumCategories.map((category) => (
              <Card key={category.title} className="gm-background-secondary border-gray-700 hover:gm-border-teal transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg gm-bg-teal flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{category.title}</h3>
                      <p className="text-sm gm-text-secondary mb-4">{category.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span>{category.topics} Topics</span>
                        <span>•</span>
                        <span>{category.posts} Posts</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Members */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-mono">Featured Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredMembers.map((member) => (
              <Card key={member.name} className="gm-background-secondary border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500" />
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm gm-text-secondary">{member.role}</p>
                      <p className="text-sm mt-1">
                        <Heart className="w-4 h-4 inline mr-1 text-pink-500" />
                        {member.contributions} Contributions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <Card className="gm-background-secondary border-gray-700">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
              <p className="gm-text-secondary mb-6 max-w-2xl mx-auto">
                Be part of our growing gaming community. Share your experiences, participate in events, and connect with fellow gamers.
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="gm-bg-teal text-black hover:bg-cyan-400">
                  Join Now
                </Button>
                <Button variant="outline" className="border-gray-700 hover:gm-border-teal">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
} 