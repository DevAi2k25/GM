import { useState } from "react";
import { Link } from "wouter";
import { 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  Search,
  Clock,
  Users,
  FileText,
  Video,
  BookOpen,
  Headphones,
  ChevronRight,
  ChevronDown,
  ThumbsUp,
  ThumbsDown,
  Star,
  CheckCircle,
  AlertCircle,
  Info,
  Send,
  Paperclip,
  ArrowRight,
  Package,
  CreditCard,
  Store,
  Wallet
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function HelpSupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ticketForm, setTicketForm] = useState({
    category: "general", // Set a default value
    subject: "",
    description: "",
    priority: "medium"
  });

  const supportCategories = [
    {
      id: "orders",
      name: "Orders & Shipping",
      description: "Track orders, shipping info, delivery issues",
      icon: Package,
      color: "gm-text-teal",
      articles: 12
    },
    {
      id: "account",
      name: "Account & Profile",
      description: "Login issues, profile settings, security",
      icon: Users,
      color: "gm-text-pink",
      articles: 8
    },
    {
      id: "payments",
      name: "Payments & Billing",
      description: "Payment methods, refunds, billing questions",
      icon: CreditCard,
      color: "text-purple-400",
      articles: 15
    },
    {
      id: "products",
      name: "Products & Listings",
      description: "Product info, authenticity, seller questions",
      icon: Package,
      color: "text-green-400",
      articles: 20
    },
    {
      id: "technical",
      name: "Technical Issues",
      description: "Website bugs, app problems, technical support",
      icon: HelpCircle,
      color: "text-orange-400",
      articles: 10
    },
    {
      id: "seller",
      name: "Seller Support",
      description: "Selling guidelines, store management, seller tools",
      icon: Store,
      color: "text-blue-400",
      articles: 18
    }
  ];

  const faqItems = [
    {
      category: "orders",
      question: "How can I track my order?",
      answer: "You can track your order by visiting the Track Order page and entering your order number or tracking ID. You'll receive email updates about your order status.",
      helpful: 45,
      notHelpful: 2
    },
    {
      category: "orders",
      question: "What are the shipping options available?",
      answer: "We offer standard shipping (3-5 business days), express shipping (1-2 business days), and overnight delivery. Shipping costs vary based on location and order value.",
      helpful: 38,
      notHelpful: 1
    },
    {
      category: "account",
      question: "How do I reset my password?",
      answer: "Click 'Forgot Password' on the login page, enter your email address, and follow the instructions sent to your email to reset your password.",
      helpful: 52,
      notHelpful: 0
    },
    {
      category: "payments",
      question: "What payment methods are accepted?",
      answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and cryptocurrency payments for most items.",
      helpful: 41,
      notHelpful: 3
    },
    {
      category: "products",
      question: "How do I know if a product is authentic?",
      answer: "All products on GamersMarket go through our verification process. Look for the 'Verified' badge on product listings and check seller ratings and reviews.",
      helpful: 67,
      notHelpful: 1
    },
    {
      category: "seller",
      question: "How do I become a seller on GamersMarket?",
      answer: "Visit the Seller Dashboard page and click 'Start Selling'. You'll need to verify your identity, provide business information, and agree to our seller terms.",
      helpful: 29,
      notHelpful: 2
    }
  ];

  const contactOptions = [
    {
      type: "live_chat",
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      availability: "Available 24/7",
      responseTime: "< 2 minutes",
      icon: MessageSquare,
      color: "gm-text-teal",
      available: true
    },
    {
      type: "phone",
      title: "Phone Support",
      description: "Speak directly with a support representative",
      availability: "Mon-Fri 9AM-8PM EST",
      responseTime: "Immediate",
      icon: Phone,
      color: "gm-text-pink",
      available: true,
      number: "+1 (555) 123-GAME"
    },
    {
      type: "email",
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "24/7",
      responseTime: "< 4 hours",
      icon: Mail,
      color: "text-purple-400",
      available: true,
      email: "support@gamersmarket.com"
    },
    {
      type: "video",
      title: "Video Call",
      description: "Schedule a video call for complex issues",
      availability: "Mon-Fri 10AM-6PM EST",
      responseTime: "Same day",
      icon: Video,
      color: "text-green-400",
      available: false
    }
  ];

  const popularArticles = [
    {
      title: "Complete Guide to Order Tracking",
      category: "Orders",
      views: 15420,
      rating: 4.8,
      readTime: "3 min"
    },
    {
      title: "Setting Up Two-Factor Authentication",
      category: "Account",
      views: 12800,
      rating: 4.9,
      readTime: "2 min"
    },
    {
      title: "Understanding Product Verification",
      category: "Products",
      views: 11650,
      rating: 4.7,
      readTime: "4 min"
    },
    {
      title: "Seller Dashboard Overview",
      category: "Seller",
      views: 9230,
      rating: 4.6,
      readTime: "5 min"
    },
    {
      title: "Payment Security & Safety Tips",
      category: "Payments",
      views: 8940,
      rating: 4.8,
      readTime: "3 min"
    }
  ];

  const filteredFAQs = faqItems.filter(item => 
    (selectedCategory === "" || item.category === selectedCategory) &&
    (searchQuery === "" || item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting support ticket:", ticketForm);
    // Handle ticket submission
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-mono">
              Help & Support Center
            </h1>
            <p className="text-xl gm-text-secondary max-w-2xl mx-auto">
              Find answers, get help, and contact our support team
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search help articles, FAQs, and guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full gm-background border-gray-700 focus:gm-border-teal pl-12"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
            </div>
          </div>
        </div>
      </section>

          {/* Support Categories */}
      <section className="py-12 gm-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 font-mono">
            Browse Support Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportCategories.map((category) => (
              <Card key={category.id} className="gm-background border-gray-700 group hover:gm-border-teal transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center ${category.color}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:gm-text-teal transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm gm-text-secondary">{category.articles} articles</p>
                    </div>
                  </div>
                  <p className="text-sm gm-text-secondary mb-4">{category.description}</p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto gm-text-teal hover:gm-text-cyan-400">
                    Browse articles
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Ticket Form */}
      <section className="py-12 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 font-mono">Submit a Support Ticket</h2>
            <form onSubmit={handleSubmitTicket}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Select
                    value={ticketForm.category}
                    onValueChange={(value) => setTicketForm({ ...ticketForm, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Issue</SelectItem>
                      <SelectItem value="account">Account Support</SelectItem>
                      <SelectItem value="order">Order Issue</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Priority</label>
                          <Select 
                            value={ticketForm.priority} 
                    onValueChange={(value) => setTicketForm({ ...ticketForm, priority: value })}
                          >
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                    <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="urgent">Urgent</SelectItem>
                            </SelectContent>
                          </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Subject</label>
                        <Input
                    type="text"
                    value={ticketForm.subject}
                    onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                          placeholder="Brief description of your issue"
                    className="w-full gm-background border-gray-700 focus:gm-border-teal"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <Textarea
                          value={ticketForm.description}
                    onChange={(e) => setTicketForm({ ...ticketForm, description: e.target.value })}
                    placeholder="Provide detailed information about your issue"
                    className="w-full gm-background border-gray-700 focus:gm-border-teal min-h-[150px]"
                        />
                      </div>

                <div className="flex justify-end">
                        <Button type="submit" className="gm-bg-teal text-black hover:bg-cyan-400">
                          Submit Ticket
                        </Button>
                </div>
                      </div>
                    </form>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <Footer />
    </div>
  );
}