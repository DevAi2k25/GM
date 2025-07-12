import { Shield, Users, Award, Truck, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function AboutPage() {
  const stats = [
    { label: "Active Users", value: "500K+", icon: Users },
    { label: "Products Sold", value: "2M+", icon: Award },
    { label: "Countries", value: "50+", icon: Globe },
    { label: "Verified Items", value: "100K+", icon: Shield }
  ];

  const features = [
    {
      icon: Shield,
      title: "Authentication Service",
      description: "Professional authentication for high-value collectibles and rare gaming items"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Connect with fellow gamers, share setups, and trade with confidence"
    },
    {
      icon: Truck,
      title: "Secure Shipping",
      description: "Specialized packaging and delivery for delicate gaming equipment"
    },
    {
      icon: Zap,
      title: "Instant Transactions",
      description: "GamersMarket Wallet enables quick and secure payments"
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Former esports professional turned entrepreneur with 10+ years in gaming industry"
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Tech lead with expertise in marketplace platforms and blockchain technologies"
    },
    {
      name: "Mike Johnson",
      role: "Head of Community",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Community manager and gaming influencer with deep understanding of gamer culture"
    },
    {
      name: "Lisa Wang",
      role: "Head of Authentication",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Former auction house specialist bringing expertise in item verification and grading"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gm-background-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 font-mono">
            About <span className="gm-text-teal">Gamers</span><span className="gm-text-pink">Market</span>
          </h1>
          <p className="text-xl gm-text-secondary max-w-3xl mx-auto leading-relaxed">
            We're building the ultimate marketplace for gaming gear, collectibles, and community-driven trading. 
            Our mission is to connect gamers worldwide in a trusted, secure environment where passion meets commerce.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gm-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <div className="text-3xl font-bold gm-text-teal mb-2">{stat.value}</div>
                <div className="gm-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-mono">Our Mission</h2>
              <p className="gm-text-secondary text-lg leading-relaxed mb-6">
                GamersMarket was born from a simple observation: the gaming community needed a dedicated, 
                trusted platform that understood their unique needs. Whether you're a casual gamer looking 
                for the perfect headset or a collector seeking rare figurines, we provide the tools, 
                verification, and community support you need.
              </p>
              <p className="gm-text-secondary text-lg leading-relaxed mb-8">
                We believe in transparency, authenticity, and the power of community. Every feature we build, 
                every partnership we form, and every decision we make is guided by our commitment to serving 
                the gaming community with excellence.
              </p>
              <Button className="gm-bg-teal text-black px-8 py-3 font-semibold hover:bg-cyan-400 gm-shadow-teal transition-all duration-300">
                Join Our Community
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Gaming setup"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gm-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-mono">What Sets Us Apart</h2>
            <p className="gm-text-secondary text-lg max-w-2xl mx-auto">
              We've built features specifically for the gaming community, understanding the unique challenges 
              and opportunities in this market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="gm-background-secondary border-gray-700 group hover:gm-border-teal transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-mono">{feature.title}</h3>
                  <p className="gm-text-secondary leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-mono">Meet Our Team</h2>
            <p className="gm-text-secondary text-lg max-w-2xl mx-auto">
              We're a diverse team of gamers, entrepreneurs, and industry experts united by our passion 
              for creating exceptional experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="gm-background border-gray-700 group hover:gm-border-teal transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="gm-text-teal text-sm mb-3">{member.role}</p>
                  <p className="gm-text-secondary text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gm-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-mono">Our Values</h2>
            <p className="gm-text-secondary text-lg max-w-2xl mx-auto">
              These core principles guide everything we do at GamersMarket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 gm-text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-mono">Trust & Security</h3>
              <p className="gm-text-secondary leading-relaxed">
                We prioritize the safety and security of our community through advanced verification, 
                secure payments, and transparent policies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 gm-text-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-mono">Community First</h3>
              <p className="gm-text-secondary leading-relaxed">
                Our community is at the heart of everything we do. We listen, learn, and build 
                features that truly serve our users' needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-mono">Innovation</h3>
              <p className="gm-text-secondary leading-relaxed">
                We constantly push boundaries, embracing new technologies and ideas to create 
                the best possible experience for gamers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-mono">Ready to Join Us?</h2>
          <p className="text-xl gm-text-secondary mb-8 max-w-2xl mx-auto">
            Whether you're buying, selling, or just exploring, become part of the GamersMarket community today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gm-bg-teal text-black px-8 py-3 font-semibold hover:bg-cyan-400 gm-shadow-teal transition-all duration-300">
              Start Shopping
            </Button>
            <Button variant="outline" className="border-pink-500 text-pink-500 px-8 py-3 font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300">
              Become a Seller
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}