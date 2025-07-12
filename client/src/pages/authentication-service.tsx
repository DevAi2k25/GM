import { useState } from "react";
import { Link } from "wouter";
import { Shield, Check, Star, Clock, ArrowRight, Upload, Camera, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function AuthenticationServicePage() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [activeTab, setActiveTab] = useState("services");

  const authenticationServices = [
    {
      id: "gaming_collectibles",
      name: "Gaming Collectibles Authentication",
      price: 25,
      turnaround: "3-5 business days",
      description: "Professional authentication for rare gaming collectibles, limited editions, and vintage items",
      features: [
        "Authenticity verification",
        "Condition grading (1-10 scale)", 
        "Digital certificate with blockchain verification",
        "UV light and microscopic examination",
        "Market value assessment"
      ],
      categories: ["Action Figures", "Trading Cards", "Limited Editions", "Vintage Consoles", "Signed Items"]
    },
    {
      id: "high_value_electronics",
      name: "High-Value Electronics Authentication",
      price: 50,
      turnaround: "5-7 business days",
      description: "Comprehensive authentication for expensive gaming hardware and electronics",
      features: [
        "Hardware authenticity verification",
        "Performance testing and benchmarking",
        "Warranty status verification",
        "Serial number validation",
        "Technical inspection report"
      ],
      categories: ["Graphics Cards", "Gaming Laptops", "High-End Peripherals", "VR Equipment", "Streaming Gear"]
    },
    {
      id: "rare_items",
      name: "Rare & Limited Items Authentication",
      price: 75,
      turnaround: "7-10 business days",
      description: "Expert authentication for extremely rare and one-of-a-kind gaming items",
      features: [
        "Expert specialist evaluation",
        "Historical verification and provenance",
        "Detailed authenticity report",
        "Insurance valuation",
        "Premium certification with hologram"
      ],
      categories: ["Prototype Hardware", "Developer Items", "Convention Exclusives", "Celebrity Items", "Historical Pieces"]
    }
  ];

  const recentAuthentications = [
    {
      id: "AUTH001",
      item: "Nintendo World Championships Gold Cart",
      service: "Rare & Limited Items",
      status: "authenticated",
      grade: "9.2",
      date: "Dec 15, 2024",
      value: "$75,000"
    },
    {
      id: "AUTH002", 
      item: "Corsair K95 RGB Platinum XT",
      service: "Gaming Collectibles",
      status: "authenticated",
      grade: "8.5",
      date: "Dec 14, 2024",
      value: "$149"
    },
    {
      id: "AUTH003",
      item: "NVIDIA RTX 4090 FE",
      service: "High-Value Electronics",
      status: "pending",
      grade: "-",
      date: "Dec 13, 2024",
      value: "$1,599"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "authenticated": return "text-green-400";
      case "pending": return "text-yellow-400";
      case "rejected": return "text-red-400";
      default: return "gm-text-secondary";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "authenticated": return <Badge className="bg-green-400 text-black">Authenticated</Badge>;
      case "pending": return <Badge className="bg-yellow-400 text-black">Pending</Badge>;
      case "rejected": return <Badge className="bg-red-400 text-black">Rejected</Badge>;
      default: return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-12 h-12 text-black" />
          </div>
          <h1 className="text-4xl font-bold mb-4 font-mono">Authentication Services</h1>
          <p className="text-xl gm-text-secondary max-w-3xl mx-auto">
            Protect your investments with professional authentication from certified experts. 
            Get verified authenticity certificates for your valuable gaming items.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="gm-background-secondary border-gray-700 mb-8">
            <TabsTrigger value="services" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
              Authentication Services
            </TabsTrigger>
            <TabsTrigger value="submit" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
              Submit Item
            </TabsTrigger>
            <TabsTrigger value="status" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
              Check Status
            </TabsTrigger>
            <TabsTrigger value="verified" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
              Verified Items
            </TabsTrigger>
          </TabsList>

          <TabsContent value="services">
            <div className="space-y-8">
              {/* Service Offerings */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {authenticationServices.map((service) => (
                  <Card key={service.id} className="gm-background-secondary border-gray-700 group hover:gm-border-teal transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="font-mono text-lg">{service.name}</CardTitle>
                        <div className="text-right">
                          <div className="text-2xl font-bold gm-text-teal">${service.price}</div>
                          <div className="text-xs gm-text-secondary">per item</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="gm-text-secondary mb-4">{service.description}</p>
                      
                      <div className="flex items-center mb-4">
                        <Clock className="w-4 h-4 gm-text-teal mr-2" />
                        <span className="text-sm">Turnaround: {service.turnaround}</span>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold text-sm">Included Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <Check className="w-3 h-3 gm-text-teal mr-2 flex-shrink-0" />
                              <span className="gm-text-secondary">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold text-sm">Item Categories:</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.categories.map((category, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-gray-600">
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button 
                        onClick={() => {
                          setSelectedService(service.id);
                          setActiveTab("submit");
                        }}
                        className="w-full gm-bg-teal text-black hover:bg-cyan-400"
                      >
                        Select Service
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Why Choose Us */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono text-center">Why Choose GamersMarket Authentication?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 gm-text-teal" />
                      </div>
                      <h3 className="font-semibold mb-2">Certified Experts</h3>
                      <p className="text-sm gm-text-secondary">
                        Our authentication team includes former auction house specialists and gaming industry veterans.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 gm-text-pink" />
                      </div>
                      <h3 className="font-semibold mb-2">Blockchain Verified</h3>
                      <p className="text-sm gm-text-secondary">
                        All certificates are secured on the blockchain and can be verified independently.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="font-semibold mb-2">Market Leader</h3>
                      <p className="text-sm gm-text-secondary">
                        Trusted by collectors worldwide with over 50,000 items authenticated.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="submit">
            <Card className="gm-background-secondary border-gray-700 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="font-mono">Submit Item for Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="service">Authentication Service</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger className="gm-background border-gray-700">
                        <SelectValue placeholder="Select authentication service" />
                      </SelectTrigger>
                      <SelectContent className="gm-background-secondary border-gray-700">
                        {authenticationServices.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.name} - ${service.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="itemName">Item Name</Label>
                      <Input
                        id="itemName"
                        className="gm-background border-gray-700 focus:gm-border-teal"
                        placeholder="e.g., Nintendo World Championships Cart"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger className="gm-background border-gray-700">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="gm-background-secondary border-gray-700">
                          <SelectItem value="collectibles">Gaming Collectibles</SelectItem>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="vintage">Vintage Items</SelectItem>
                          <SelectItem value="limited">Limited Editions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Item Description</Label>
                    <Textarea
                      id="description"
                      className="gm-background border-gray-700 focus:gm-border-teal"
                      placeholder="Provide detailed information about the item, including condition, provenance, and any relevant history..."
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="estimatedValue">Estimated Value</Label>
                      <Input
                        id="estimatedValue"
                        type="number"
                        className="gm-background border-gray-700 focus:gm-border-teal"
                        placeholder="1000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="urgency">Service Level</Label>
                      <Select>
                        <SelectTrigger className="gm-background border-gray-700">
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent className="gm-background-secondary border-gray-700">
                          <SelectItem value="standard">Standard (5-7 days)</SelectItem>
                          <SelectItem value="expedited">Expedited (2-3 days) +$25</SelectItem>
                          <SelectItem value="rush">Rush (24 hours) +$50</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div>
                    <Label>Item Photos</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-gray-600 transition-colors">
                        <Upload className="w-8 h-8 gm-text-secondary mx-auto mb-2" />
                        <p className="text-sm gm-text-secondary">Upload front view</p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          Choose File
                        </Button>
                      </div>
                      <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-gray-600 transition-colors">
                        <Camera className="w-8 h-8 gm-text-secondary mx-auto mb-2" />
                        <p className="text-sm gm-text-secondary">Upload additional views</p>
                        <Button variant="ghost" size="sm" className="mt-2">
                          Choose Files
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs gm-text-secondary mt-2">
                      Upload high-quality photos from multiple angles. Max 10 files, 5MB each.
                    </p>
                  </div>

                  {/* Additional Services */}
                  <div>
                    <Label>Additional Services</Label>
                    <div className="space-y-3 mt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="insurance" />
                        <label htmlFor="insurance" className="text-sm">
                          Insurance appraisal (+$15)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="photography" />
                        <label htmlFor="photography" className="text-sm">
                          Professional photography (+$20)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="storage" />
                        <label htmlFor="storage" className="text-sm">
                          Secure storage (30 days) (+$10)
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span>Service Fee:</span>
                      <span className="font-semibold">$25.00</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span>Additional Services:</span>
                      <span className="font-semibold">$0.00</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total:</span>
                      <span className="gm-text-teal">$25.00</span>
                    </div>
                  </div>

                  <Button className="w-full gm-bg-teal text-black py-3 font-semibold hover:bg-cyan-400">
                    Submit for Authentication
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status">
            <Card className="gm-background-secondary border-gray-700 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="font-mono">Check Authentication Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="authId">Authentication ID</Label>
                    <Input
                      id="authId"
                      className="gm-background border-gray-700 focus:gm-border-teal"
                      placeholder="AUTH001234"
                    />
                  </div>
                  <Button className="w-full gm-bg-teal text-black hover:bg-cyan-400">
                    Check Status
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verified">
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="font-mono">Recent Authentications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAuthentications.map((auth) => (
                    <div key={auth.id} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{auth.item}</h4>
                        <p className="text-sm gm-text-secondary">ID: {auth.id} • Service: {auth.service}</p>
                        <p className="text-sm gm-text-secondary">{auth.date}</p>
                      </div>
                      <div className="text-center mr-4">
                        <p className="text-sm gm-text-secondary">Grade</p>
                        <p className="text-xl font-bold gm-text-teal">{auth.grade}</p>
                      </div>
                      <div className="text-center mr-4">
                        <p className="text-sm gm-text-secondary">Value</p>
                        <p className="font-semibold">{auth.value}</p>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(auth.status)}
                        <div className="mt-2">
                          <Button size="sm" variant="outline" className="border-gray-700">
                            View Certificate
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}