import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, Users, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully! We'll get back to you within 24 hours.");
    }, 2000);
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team",
      value: "Available 24/7",
      action: "Start Chat",
      color: "teal"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      value: "support@gamersmarket.com",
      action: "Send Email",
      color: "pink"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team directly",
      value: "+1 (555) 123-4567",
      action: "Call Now",
      color: "purple"
    }
  ];

  const supportCategories = [
    { icon: Users, title: "Account & Billing", description: "Login issues, payment problems, account management" },
    { icon: Headphones, title: "Technical Support", description: "Website bugs, performance issues, technical help" },
    { icon: MessageSquare, title: "Orders & Shipping", description: "Order status, shipping questions, returns" },
    { icon: MapPin, title: "Authentication", description: "Item verification, grading services, authenticity questions" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 font-mono">Contact Us</h1>
          <p className="text-xl gm-text-secondary max-w-2xl mx-auto">
            Have a question or need help? We're here to assist you 24/7. 
            Choose the contact method that works best for you.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="gm-background-secondary border-gray-700 group hover:gm-border-teal transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-${method.color}-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className={`w-8 h-8 gm-text-${method.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-mono">{method.title}</h3>
                <p className="gm-text-secondary text-sm mb-3">{method.description}</p>
                <p className={`gm-text-${method.color} font-semibold mb-4`}>{method.value}</p>
                <Button className={`gm-bg-${method.color} text-black hover:bg-${method.color}-400 transition-colors`}>
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="font-mono">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        required
                        className="gm-background border-gray-700 focus:gm-border-teal"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        required
                        className="gm-background border-gray-700 focus:gm-border-teal"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="gm-background border-gray-700 focus:gm-border-teal"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger className="gm-background border-gray-700 focus:gm-border-teal">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent className="gm-background-secondary border-gray-700">
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="account">Account & Billing</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="orders">Orders & Shipping</SelectItem>
                        <SelectItem value="authentication">Authentication Services</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      required
                      className="gm-background border-gray-700 focus:gm-border-teal min-h-[120px]"
                      placeholder="Please describe your question or issue in detail..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full gm-bg-teal text-black py-3 font-semibold hover:bg-cyan-400 gm-shadow-teal transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Support Categories & Info */}
          <div className="space-y-6">
            {/* Support Categories */}
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="font-mono">Support Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportCategories.map((category, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 border border-gray-700 rounded-lg hover:gm-border-teal transition-colors">
                    <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center">
                      <category.icon className="w-4 h-4 gm-text-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{category.title}</h4>
                      <p className="text-xs gm-text-secondary">{category.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center font-mono">
                  <Clock className="w-5 h-5 mr-2 gm-text-teal" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="gm-text-secondary">Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="gm-text-secondary">Saturday</span>
                  <span>10:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="gm-text-secondary">Sunday</span>
                  <span>12:00 PM - 5:00 PM EST</span>
                </div>
                <div className="pt-3 border-t border-gray-700">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="gm-text-teal">Live Chat available 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="font-mono">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="#" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                  Frequently Asked Questions
                </a>
                <a href="#" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                  Shipping & Returns Policy
                </a>
                <a href="#" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                  Authentication Services
                </a>
                <a href="#" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                  Seller Guidelines
                </a>
                <a href="#" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                  Community Forums
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Preview */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 font-mono text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="gm-background-secondary border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How does the authentication service work?</h3>
                <p className="gm-text-secondary text-sm">
                  Our authentication experts verify the authenticity of high-value items using advanced techniques 
                  and industry standards. Items receive a certificate and verified badge upon approval.
                </p>
              </CardContent>
            </Card>

            <Card className="gm-background-secondary border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="gm-text-secondary text-sm">
                  We accept all major credit cards, PayPal, and our GamersMarket Wallet. 
                  Cryptocurrency payments are also supported for eligible transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="gm-background-secondary border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How long does shipping take?</h3>
                <p className="gm-text-secondary text-sm">
                  Standard shipping takes 3-7 business days. Expedited options are available. 
                  High-value items include signature confirmation and insurance.
                </p>
              </CardContent>
            </Card>

            <Card className="gm-background-secondary border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I return items?</h3>
                <p className="gm-text-secondary text-sm">
                  Yes, we offer a 30-day return policy for most items. Items must be in original condition. 
                  Digital items and personalized products may have different return policies.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}