import { Link } from "wouter";
import { ArrowLeft, Scale, Shield, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function TermsPage() {
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
            <h1 className="text-3xl font-bold font-mono">Terms and Conditions</h1>
            <p className="gm-text-secondary">Last updated: December 20, 2024</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="gm-background-secondary border-gray-700 sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg font-mono">Table of Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  <a href="#acceptance" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    1. Acceptance of Terms
                  </a>
                  <a href="#services" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    2. Description of Services
                  </a>
                  <a href="#accounts" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    3. User Accounts
                  </a>
                  <a href="#marketplace" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    4. Marketplace Rules
                  </a>
                  <a href="#payments" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    5. Payments and Fees
                  </a>
                  <a href="#authentication" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    6. Authentication Services
                  </a>
                  <a href="#conduct" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    7. User Conduct
                  </a>
                  <a href="#intellectual" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    8. Intellectual Property
                  </a>
                  <a href="#disclaimer" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    9. Disclaimer of Warranties
                  </a>
                  <a href="#limitation" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    10. Limitation of Liability
                  </a>
                  <a href="#termination" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    11. Termination
                  </a>
                  <a href="#governing" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    12. Governing Law
                  </a>
                  <a href="#contact" className="block text-sm gm-text-secondary hover:gm-text-teal transition-colors">
                    13. Contact Information
                  </a>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Terms Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Introduction */}
              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Scale className="w-8 h-8 gm-text-teal mr-3" />
                    <h2 className="text-2xl font-bold font-mono">Welcome to GamersMarket</h2>
                  </div>
                  <p className="gm-text-secondary leading-relaxed">
                    These Terms and Conditions ("Terms") govern your use of the GamersMarket platform, 
                    website, and services operated by GamersMarket Inc. ("we," "us," or "our"). 
                    By accessing or using our services, you agree to be bound by these Terms.
                  </p>
                </CardContent>
              </Card>

              {/* Section 1 */}
              <section id="acceptance">
                <h3 className="text-xl font-bold mb-4 font-mono">1. Acceptance of Terms</h3>
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <p className="gm-text-secondary leading-relaxed mb-4">
                      By creating an account, making a purchase, or using any part of our platform, 
                      you acknowledge that you have read, understood, and agree to be bound by these Terms. 
                      If you do not agree to these Terms, you may not use our services.
                    </p>
                    <p className="gm-text-secondary leading-relaxed">
                      We reserve the right to modify these Terms at any time. We will notify users of 
                      significant changes via email or platform notifications. Continued use of our 
                      services after changes constitutes acceptance of the new Terms.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Section 2 */}
              <section id="services">
                <h3 className="text-xl font-bold mb-4 font-mono">2. Description of Services</h3>
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <p className="gm-text-secondary leading-relaxed mb-4">
                      GamersMarket provides an online marketplace platform that enables users to:
                    </p>
                    <ul className="gm-text-secondary space-y-2 mb-4 ml-6">
                      <li>• Buy and sell gaming equipment, accessories, and collectibles</li>
                      <li>• Access authentication services for high-value items</li>
                      <li>• Participate in community forums and discussions</li>
                      <li>• Use the GamersMarket Wallet for secure transactions</li>
                      <li>• Trade digital assets (where permitted by game developers)</li>
                    </ul>
                    <p className="gm-text-secondary leading-relaxed">
                      We act as an intermediary platform and are not responsible for the actual 
                      transactions between buyers and sellers.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Section 3 */}
              <section id="accounts">
                <h3 className="text-xl font-bold mb-4 font-mono">3. User Accounts</h3>
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2 gm-text-teal">Account Registration</h4>
                    <p className="gm-text-secondary leading-relaxed mb-4">
                      To use certain features, you must create an account with accurate and complete information. 
                      You are responsible for maintaining the security of your account credentials.
                    </p>
                    <h4 className="font-semibold mb-2 gm-text-teal">Account Security</h4>
                    <p className="gm-text-secondary leading-relaxed mb-4">
                      You agree to notify us immediately of any unauthorized use of your account. 
                      We are not liable for any loss resulting from unauthorized account access.
                    </p>
                    <h4 className="font-semibold mb-2 gm-text-teal">Age Requirements</h4>
                    <p className="gm-text-secondary leading-relaxed">
                      Users must be at least 13 years old. Users under 18 require parental consent 
                      for account creation and transactions.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Section 4 */}
              <section id="marketplace">
                <h3 className="text-xl font-bold mb-4 font-mono">4. Marketplace Rules</h3>
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2 gm-text-teal">Seller Responsibilities</h4>
                    <ul className="gm-text-secondary space-y-2 mb-4 ml-6">
                      <li>• Provide accurate product descriptions and images</li>
                      <li>• Ship items promptly and securely</li>
                      <li>• Respond to buyer inquiries in a timely manner</li>
                      <li>• Honor return and refund policies</li>
                    </ul>
                    <h4 className="font-semibold mb-2 gm-text-teal">Buyer Responsibilities</h4>
                    <ul className="gm-text-secondary space-y-2 mb-4 ml-6">
                      <li>• Pay for items promptly</li>
                      <li>• Communicate respectfully with sellers</li>
                      <li>• Follow return procedures if applicable</li>
                      <li>• Report any issues through proper channels</li>
                    </ul>
                    <h4 className="font-semibold mb-2 gm-text-teal">Prohibited Items</h4>
                    <p className="gm-text-secondary leading-relaxed">
                      Certain items are prohibited on our platform, including counterfeit goods, 
                      stolen items, and items that violate intellectual property rights.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Section 5 */}
              <section id="payments">
                <h3 className="text-xl font-bold mb-4 font-mono">5. Payments and Fees</h3>
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2 gm-text-teal">Transaction Fees</h4>
                    <p className="gm-text-secondary leading-relaxed mb-4">
                      GamersMarket charges a transaction fee for successful sales. Current fee structure 
                      is available on our pricing page and may be updated with notice.
                    </p>
                    <h4 className="font-semibold mb-2 gm-text-teal">Payment Methods</h4>
                    <p className="gm-text-secondary leading-relaxed mb-4">
                      We accept major credit cards, PayPal, and cryptocurrency payments. 
                      All transactions are processed securely through certified payment processors.
                    </p>
                    <h4 className="font-semibold mb-2 gm-text-teal">Refunds</h4>
                    <p className="gm-text-secondary leading-relaxed">
                      Refund policies vary by seller and item type. Platform fees may be non-refundable 
                      in certain circumstances.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Section 6 */}
              <section id="authentication">
                <h3 className="text-xl font-bold mb-4 font-mono">6. Authentication Services</h3>
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <p className="gm-text-secondary leading-relaxed mb-4">
                      Our authentication service provides expert verification of item authenticity 
                      and condition. While we use industry-standard practices, authentication 
                      opinions are not guarantees and may be subject to human error.
                    </p>
                    <p className="gm-text-secondary leading-relaxed">
                      Authentication fees are non-refundable regardless of the authentication outcome. 
                      Items that fail authentication cannot be listed on our platform.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Section 7 */}
              <section id="conduct">
                <h3 className="text-xl font-bold mb-4 font-mono">7. User Conduct</h3>
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2 gm-text-teal">Prohibited Activities</h4>
                    <ul className="gm-text-secondary space-y-2 mb-4 ml-6">
                      <li>• Harassment, threats, or abusive behavior</li>
                      <li>• Fraud, misrepresentation, or deceptive practices</li>
                      <li>• Violation of intellectual property rights</li>
                      <li>• Spam or unsolicited communications</li>
                      <li>• Attempts to circumvent platform security</li>
                    </ul>
                    <p className="gm-text-secondary leading-relaxed">
                      Violations may result in account suspension or termination. We reserve the 
                      right to investigate and take appropriate action against policy violations.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Additional sections would continue here... */}

              {/* Contact Information */}
              <section id="contact">
                <h3 className="text-xl font-bold mb-4 font-mono">13. Contact Information</h3>
                <Card className="gm-background-secondary border-gray-700">
                  <CardContent className="p-6">
                    <p className="gm-text-secondary leading-relaxed mb-4">
                      If you have questions about these Terms, please contact us:
                    </p>
                    <div className="space-y-2 gm-text-secondary">
                      <p><strong>Email:</strong> legal@gamersmarket.com</p>
                      <p><strong>Address:</strong> GamersMarket Inc., 123 Gaming Street, New York, NY 10001</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
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