import { Link } from "wouter";
import { ArrowLeft, Shield, Eye, Lock, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gm-text-secondary hover:gm-text-teal">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold font-mono">Privacy Policy</h1>
            <p className="gm-text-secondary">Last updated: December 20, 2024</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="gm-background-secondary border-gray-700 sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg font-mono">Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  <a href="#overview" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    Privacy Overview
                  </a>
                  <a href="#collection" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    Information We Collect
                  </a>
                  <a href="#usage" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    How We Use Information
                  </a>
                  <a href="#sharing" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    Information Sharing
                  </a>
                  <a href="#security" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    Data Security
                  </a>
                  <a href="#cookies" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    Cookies & Tracking
                  </a>
                  <a href="#rights" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    Your Rights
                  </a>
                  <a href="#children" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    Children's Privacy
                  </a>
                  <a href="#changes" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    Policy Changes
                  </a>
                  <a href="#contact" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    Contact Us
                  </a>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Privacy Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Overview */}
              <section id="overview">
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Shield className="w-8 h-8 gm-text-teal mr-3" />
                      <h2 className="text-2xl font-bold font-mono">Your Privacy Matters</h2>
                    </div>
                    <p className="gm-text-secondary leading-relaxed mb-4">
                      At GamersMarket, we are committed to protecting your privacy and ensuring the security 
                      of your personal information. This Privacy Policy explains how we collect, use, 
                      and safeguard your data when you use our platform.
                    </p>
                    <p className="gm-text-secondary leading-relaxed">
                      We believe in transparency and want you to understand exactly how your information 
                      is handled. If you have any questions about this policy, please don't hesitate to contact us.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Information Collection */}
              <section id="collection">
                <h3 className="text-xl font-bold mb-4 font-mono">Information We Collect</h3>
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3 gm-text-teal flex items-center">
                      <Database className="w-4 h-4 mr-2" />
                      Personal Information
                    </h4>
                    <ul className="gm-text-secondary space-y-2 mb-6 ml-6">
                      <li>• Name, email address, and contact information</li>
                      <li>• Billing and shipping addresses</li>
                      <li>• Payment information (processed securely by third parties)</li>
                      <li>• Account preferences and settings</li>
                      <li>• Profile information and photos (optional)</li>
                    </ul>

                    <h4 className="font-semibold mb-3 gm-text-teal flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      Usage Information
                    </h4>
                    <ul className="gm-text-secondary space-y-2 mb-6 ml-6">
                      <li>• Pages visited and features used</li>
                      <li>• Search queries and browsing patterns</li>
                      <li>• Device information and browser type</li>
                      <li>• IP address and location data</li>
                      <li>• Interaction with emails and notifications</li>
                    </ul>

                    <h4 className="font-semibold mb-3 gm-text-teal flex items-center">
                      <Lock className="w-4 h-4 mr-2" />
                      Transaction Data
                    </h4>
                    <ul className="gm-text-secondary space-y-2 ml-6">
                      <li>• Purchase and sale history</li>
                      <li>• Payment methods and transaction details</li>
                      <li>• Communication with other users</li>
                      <li>• Authentication service records</li>
                      <li>• Dispute and resolution history</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* How We Use Information */}
              <section id="usage">
                <h3 className="text-xl font-bold mb-4 font-mono">How We Use Your Information</h3>
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 gm-text-teal">Service Provision</h4>
                        <ul className="gm-text-secondary space-y-1 text-sm ml-4">
                          <li>• Process transactions and payments</li>
                          <li>• Provide customer support</li>
                          <li>• Enable communication between users</li>
                          <li>• Deliver authentication services</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 gm-text-teal">Platform Improvement</h4>
                        <ul className="gm-text-secondary space-y-1 text-sm ml-4">
                          <li>• Analyze usage patterns</li>
                          <li>• Develop new features</li>
                          <li>• Personalize recommendations</li>
                          <li>• Improve security measures</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 gm-text-teal">Communication</h4>
                        <ul className="gm-text-secondary space-y-1 text-sm ml-4">
                          <li>• Send transaction notifications</li>
                          <li>• Provide platform updates</li>
                          <li>• Share promotional content (opt-in)</li>
                          <li>• Respond to inquiries</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 gm-text-teal">Legal Compliance</h4>
                        <ul className="gm-text-secondary space-y-1 text-sm ml-4">
                          <li>• Comply with regulations</li>
                          <li>• Prevent fraud and abuse</li>
                          <li>• Enforce terms of service</li>
                          <li>• Respond to legal requests</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Information Sharing */}
              <section id="sharing">
                <h3 className="text-xl font-bold mb-4 font-mono">Information Sharing</h3>
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <p className="gm-text-secondary leading-relaxed mb-4">
                      We do not sell, rent, or trade your personal information to third parties. 
                      We only share information in the following limited circumstances:
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-cyan-400 pl-4">
                        <h4 className="font-semibold gm-text-teal">Service Providers</h4>
                        <p className="gm-text-secondary text-sm">
                          Trusted partners who help us operate our platform (payment processors, 
                          shipping companies, authentication experts).
                        </p>
                      </div>
                      <div className="border-l-4 border-pink-500 pl-4">
                        <h4 className="font-semibold gm-text-pink">Legal Requirements</h4>
                        <p className="gm-text-secondary text-sm">
                          When required by law, court orders, or to protect our rights and safety.
                        </p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-purple-400">Business Transfers</h4>
                        <p className="gm-text-secondary text-sm">
                          In connection with mergers, acquisitions, or asset sales (with user notification).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Data Security */}
              <section id="security">
                <h3 className="text-xl font-bold mb-4 font-mono">Data Security</h3>
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 gm-text-teal">Technical Safeguards</h4>
                        <ul className="gm-text-secondary space-y-2 text-sm ml-4">
                          <li>• 256-bit SSL encryption</li>
                          <li>• Secure data centers</li>
                          <li>• Regular security audits</li>
                          <li>• Multi-factor authentication</li>
                          <li>• Automated threat detection</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 gm-text-teal">Operational Safeguards</h4>
                        <ul className="gm-text-secondary space-y-2 text-sm ml-4">
                          <li>• Employee security training</li>
                          <li>• Access controls and monitoring</li>
                          <li>• Incident response procedures</li>
                          <li>• Regular backup systems</li>
                          <li>• Third-party security assessments</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-cyan-400/10 border border-cyan-400/20 rounded-lg">
                      <p className="gm-text-secondary text-sm">
                        <strong className="gm-text-teal">Security Notice:</strong> While we implement industry-standard 
                        security measures, no system is 100% secure. We encourage users to use strong passwords 
                        and report any suspicious activity immediately.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Your Rights */}
              <section id="rights">
                <h3 className="text-xl font-bold mb-4 font-mono">Your Privacy Rights</h3>
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <p className="gm-text-secondary leading-relaxed mb-4">
                      You have several rights regarding your personal information:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-700 rounded-lg">
                        <h4 className="font-semibold gm-text-teal mb-2">Access & Portability</h4>
                        <p className="gm-text-secondary text-sm">
                          Request a copy of your personal data and download your information.
                        </p>
                      </div>
                      <div className="p-4 border border-gray-700 rounded-lg">
                        <h4 className="font-semibold gm-text-teal mb-2">Correction</h4>
                        <p className="gm-text-secondary text-sm">
                          Update or correct inaccurate personal information in your account.
                        </p>
                      </div>
                      <div className="p-4 border border-gray-700 rounded-lg">
                        <h4 className="font-semibold gm-text-teal mb-2">Deletion</h4>
                        <p className="gm-text-secondary text-sm">
                          Request deletion of your account and associated personal data.
                        </p>
                      </div>
                      <div className="p-4 border border-gray-700 rounded-lg">
                        <h4 className="font-semibold gm-text-teal mb-2">Opt-out</h4>
                        <p className="gm-text-secondary text-sm">
                          Unsubscribe from marketing communications and data processing.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="gm-bg-teal text-black hover:bg-cyan-400">
                        Manage Privacy Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Contact */}
              <section id="contact">
                <h3 className="text-xl font-bold mb-4 font-mono">Contact Our Privacy Team</h3>
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <p className="gm-text-secondary leading-relaxed mb-4">
                      If you have questions about this Privacy Policy or want to exercise your privacy rights:
                    </p>
                    <div className="space-y-2 gm-text-secondary">
                      <p><strong>Email:</strong> privacy@gamersmarket.com</p>
                      <p><strong>Address:</strong> Privacy Officer, GamersMarket Inc., 123 Gaming Street, New York, NY 10001</p>
                      <p><strong>Response Time:</strong> We respond to privacy requests within 30 days</p>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}