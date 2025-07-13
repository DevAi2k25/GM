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
    category: "",
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
              Help & <span className="gm-text-teal">Support</span>
            </h1>
            <p className="text-xl gm-text-secondary max-w-2xl mx-auto">
              Get the help you need with our comprehensive support center. Search our knowledge base, 
              contact support, or browse popular articles.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 gm-text-secondary" />
              <Input
                placeholder="Search for help articles, guides, or common issues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg gm-background border-gray-700 focus:gm-border-teal"
              />
            </div>
          </div>

          {/* Support Categories */}
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

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              {/* Contact Options */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Contact Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactOptions.map((option) => (
                      <div key={option.type} className={`p-3 border rounded-lg ${option.available ? 'border-gray-700 hover:gm-border-teal' : 'border-gray-800'} transition-colors`}>
                        <div className="flex items-center space-x-3 mb-2">
                          <option.icon className={`w-5 h-5 ${option.available ? option.color : 'text-gray-600'}`} />
                          <h4 className={`font-semibold ${option.available ? 'text-white' : 'text-gray-600'}`}>
                            {option.title}
                          </h4>
                        </div>
                        <p className={`text-xs mb-2 ${option.available ? 'gm-text-secondary' : 'text-gray-600'}`}>
                          {option.description}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className={option.available ? 'gm-text-secondary' : 'text-gray-600'}>
                            {option.responseTime}
                          </span>
                          {option.available ? (
                            <Badge className="gm-bg-teal text-black">Available</Badge>
                          ) : (
                            <Badge className="bg-gray-600 text-white">Offline</Badge>
                          )}
                        </div>
                        {option.number && (
                          <p className="text-xs gm-text-teal mt-1">{option.number}</p>
                        )}
                        {option.email && (
                          <p className="text-xs gm-text-teal mt-1">{option.email}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Link href="/track-order" className="block p-2 rounded hover:bg-gray-800 transition-colors">
                      <div className="flex items-center space-x-2">
                        <Package className="w-4 h-4 gm-text-teal" />
                        <span className="text-sm">Track My Order</span>
                      </div>
                    </Link>
                    <Link href="/profile" className="block p-2 rounded hover:bg-gray-800 transition-colors">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 gm-text-teal" />
                        <span className="text-sm">Account Settings</span>
                      </div>
                    </Link>
                    <Link href="/wallet" className="block p-2 rounded hover:bg-gray-800 transition-colors">
                      <div className="flex items-center space-x-2">
                        <Wallet className="w-4 h-4 gm-text-teal" />
                        <span className="text-sm">Payment Methods</span>
                      </div>
                    </Link>
                    <Link href="/seller-dashboard" className="block p-2 rounded hover:bg-gray-800 transition-colors">
                      <div className="flex items-center space-x-2">
                        <Store className="w-4 h-4 gm-text-teal" />
                        <span className="text-sm">Seller Dashboard</span>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Operating Hours */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Support Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Live Chat</span>
                      <Badge className="gm-bg-teal text-black">24/7</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Phone Support</span>
                      <span className="gm-text-secondary">9AM-8PM EST</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Email Support</span>
                      <Badge className="gm-bg-teal text-black">24/7</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Video Calls</span>
                      <span className="gm-text-secondary">10AM-6PM EST</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="faq">
              <TabsList className="gm-background-secondary border-gray-700 mb-6">
                <TabsTrigger value="faq" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
                  FAQ & Articles
                </TabsTrigger>
                <TabsTrigger value="contact" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
                  Contact Form
                </TabsTrigger>
                <TabsTrigger value="guides" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
                  Guides & Tutorials
                </TabsTrigger>
              </TabsList>

              <TabsContent value="faq">
                {/* Category Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="gm-background border-gray-700">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent className="gm-background-secondary border-gray-700">
                      <SelectItem value="">All Categories</SelectItem>
                      {supportCategories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* FAQ Accordion */}
                <Card className="gm-background-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="font-mono">Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="space-y-4">
                      {filteredFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-gray-700 rounded-lg px-4">
                          <AccordionTrigger className="hover:no-underline hover:gm-text-teal">
                            <div className="flex items-center space-x-3">
                              <Badge variant="outline" className="border-gray-600 text-xs">
                                {supportCategories.find(cat => cat.id === faq.category)?.name}
                              </Badge>
                              <span>{faq.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-4">
                            <p className="gm-text-secondary leading-relaxed mb-4">{faq.answer}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <span className="text-sm gm-text-secondary">Was this helpful?</span>
                                <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300">
                                  <ThumbsUp className="w-3 h-3 mr-1" />
                                  {faq.helpful}
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                                  <ThumbsDown className="w-3 h-3 mr-1" />
                                  {faq.notHelpful}
                                </Button>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact">
                <Card className="gm-background-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="font-mono">Submit a Support Ticket</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitTicket} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Category</label>
                          <Select 
                            value={ticketForm.category} 
                            onValueChange={(value) => setTicketForm({...ticketForm, category: value})}
                          >
                            <SelectTrigger className="gm-background border-gray-700">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent className="gm-background-secondary border-gray-700">
                              {supportCategories.map((cat) => (
                                <SelectItem key={cat.id} value={cat.id}>
                                  {cat.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Priority</label>
                          <Select 
                            value={ticketForm.priority} 
                            onValueChange={(value) => setTicketForm({...ticketForm, priority: value})}
                          >
                            <SelectTrigger className="gm-background border-gray-700">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="gm-background-secondary border-gray-700">
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="urgent">Urgent</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Subject</label>
                        <Input
                          placeholder="Brief description of your issue"
                          value={ticketForm.subject}
                          onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                          className="gm-background border-gray-700 focus:gm-border-teal"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <Textarea
                          placeholder="Please provide detailed information about your issue..."
                          value={ticketForm.description}
                          onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                          className="gm-background border-gray-700 focus:gm-border-teal min-h-32"
                        />
                      </div>

                      <div className="flex items-center space-x-4">
                        <Button type="submit" className="gm-bg-teal text-black hover:bg-cyan-400">
                          <Send className="w-4 h-4 mr-2" />
                          Submit Ticket
                        </Button>
                        <Button type="button" variant="outline" className="border-gray-700">
                          <Paperclip className="w-4 h-4 mr-2" />
                          Attach File
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="guides">
                <Card className="gm-background-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="font-mono">Popular Guides & Tutorials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {popularArticles.map((article, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:gm-border-teal transition-colors cursor-pointer">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                              <FileText className="w-6 h-6 gm-text-teal" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">{article.title}</h4>
                              <div className="flex items-center space-x-3 text-sm gm-text-secondary">
                                <Badge variant="outline" className="border-gray-600 text-xs">
                                  {article.category}
                                </Badge>
                                <span>{article.views.toLocaleString()} views</span>
                                <span>•</span>
                                <div className="flex items-center">
                                  <Star className="w-3 h-3 text-yellow-400 mr-1 fill-current" />
                                  {article.rating}
                                </div>
                                <span>•</span>
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 gm-text-secondary" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}