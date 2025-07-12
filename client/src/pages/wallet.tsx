import { useState } from "react";
import { Link } from "wouter";
import { 
  Wallet, 
  Plus, 
  Minus, 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight,
  ArrowDownLeft,
  Calendar,
  Filter,
  Download,
  Eye,
  EyeOff,
  RefreshCw,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Gift,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function WalletPage() {
  const [balance, setBalance] = useState(1245.67);
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  const walletStats = {
    totalSpent: 3456.78,
    totalEarned: 4702.45,
    pendingAmount: 234.56,
    cashback: 89.23
  };

  const recentTransactions = [
    {
      id: 1,
      type: "purchase",
      title: "Corsair K95 RGB Platinum XT",
      amount: -149.99,
      date: "2024-12-20",
      time: "14:30",
      status: "completed",
      orderId: "GM-2024-001"
    },
    {
      id: 2,
      type: "sale",
      title: "SteelSeries Arctis 7P",
      amount: +120.00,
      date: "2024-12-19",
      time: "10:15",
      status: "completed",
      orderId: "GM-2024-002"
    },
    {
      id: 3,
      type: "cashback",
      title: "Tournament Entry Cashback",
      amount: +15.50,
      date: "2024-12-18",
      time: "16:45",
      status: "completed",
      orderId: "GM-2024-003"
    },
    {
      id: 4,
      type: "purchase",
      title: "Logitech G Pro X Superlight",
      amount: -89.99,
      date: "2024-12-17",
      time: "12:20",
      status: "pending",
      orderId: "GM-2024-004"
    },
    {
      id: 5,
      type: "refund",
      title: "Refund - Razer DeathAdder V3",
      amount: +67.99,
      date: "2024-12-16",
      time: "09:30",
      status: "completed",
      orderId: "GM-2024-005"
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: "credit_card",
      name: "Visa •••• 4532",
      brand: "Visa",
      isDefault: true,
      expiry: "12/26"
    },
    {
      id: 2,
      type: "paypal",
      name: "PayPal Account",
      brand: "PayPal",
      isDefault: false,
      email: "user@example.com"
    },
    {
      id: 3,
      type: "crypto",
      name: "Bitcoin Wallet",
      brand: "BTC",
      isDefault: false,
      address: "bc1q...x7k9"
    }
  ];

  const achievements = [
    {
      title: "First Purchase",
      description: "Made your first purchase on GamersMarket",
      earned: true,
      reward: "$5 cashback"
    },
    {
      title: "Big Spender",
      description: "Spent over $1000 in total",
      earned: true,
      reward: "$25 bonus"
    },
    {
      title: "Seller Pro",
      description: "Earn $500 from selling items",
      earned: false,
      progress: 65,
      reward: "$50 bonus"
    },
    {
      title: "Community Star",
      description: "Get 100 positive reviews",
      earned: false,
      progress: 23,
      reward: "$30 bonus"
    }
  ];

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "purchase": return <ArrowDownLeft className="w-4 h-4 text-red-400" />;
      case "sale": return <ArrowUpRight className="w-4 h-4 text-green-400" />;
      case "cashback": return <Gift className="w-4 h-4 gm-text-teal" />;
      case "refund": return <RefreshCw className="w-4 h-4 text-blue-400" />;
      default: return <DollarSign className="w-4 h-4 gm-text-secondary" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-400";
      case "pending": return "text-yellow-400";
      case "failed": return "text-red-400";
      default: return "gm-text-secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="w-3 h-3" />;
      case "pending": return <Clock className="w-3 h-3" />;
      case "failed": return <AlertCircle className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 gm-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 font-mono">
              Gaming <span className="gm-text-teal">Wallet</span>
            </h1>
            <p className="text-xl gm-text-secondary max-w-2xl mx-auto">
              Manage your GamersMarket balance, view transaction history, and track your spending.
            </p>
          </div>

          {/* Balance Card */}
          <div className="max-w-2xl mx-auto">
            <Card className="gm-background border-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center">
                      <Wallet className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">GamersMarket Wallet</h3>
                      <p className="text-sm gm-text-secondary">Available Balance</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsBalanceVisible(!isBalanceVisible)}
                  >
                    {isBalanceVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold gm-text-teal mb-4">
                    {isBalanceVisible ? `$${balance.toFixed(2)}` : "••••••"}
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Button className="gm-bg-teal text-black hover:bg-cyan-400">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Funds
                    </Button>
                    <Button variant="outline" className="border-gray-700">
                      <Minus className="w-4 h-4 mr-2" />
                      Withdraw
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm gm-text-secondary">Total Spent</p>
                      <p className="text-2xl font-bold text-red-400">${walletStats.totalSpent}</p>
                    </div>
                    <TrendingDown className="w-8 h-8 text-red-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm gm-text-secondary">Total Earned</p>
                      <p className="text-2xl font-bold text-green-400">${walletStats.totalEarned}</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm gm-text-secondary">Pending</p>
                      <p className="text-2xl font-bold text-yellow-400">${walletStats.pendingAmount}</p>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="gm-background-secondary border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm gm-text-secondary">Cashback</p>
                      <p className="text-2xl font-bold gm-text-teal">${walletStats.cashback}</p>
                    </div>
                    <Gift className="w-8 h-8 gm-text-teal" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="transactions">
              <TabsList className="gm-background-secondary border-gray-700 mb-6">
                <TabsTrigger value="transactions" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
                  Transaction History
                </TabsTrigger>
                <TabsTrigger value="methods" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
                  Payment Methods
                </TabsTrigger>
                <TabsTrigger value="achievements" className="data-[state=active]:gm-bg-teal data-[state=active]:text-black">
                  Achievements
                </TabsTrigger>
              </TabsList>

              <TabsContent value="transactions">
                <Card className="gm-background-secondary border-gray-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-mono">Recent Transactions</CardTitle>
                      <div className="flex space-x-2">
                        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                          <SelectTrigger className="w-32 gm-background border-gray-700">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="gm-background-secondary border-gray-700">
                            <SelectItem value="7d">Last 7 days</SelectItem>
                            <SelectItem value="30d">Last 30 days</SelectItem>
                            <SelectItem value="90d">Last 3 months</SelectItem>
                            <SelectItem value="1y">Last year</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm" className="border-gray-700">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentTransactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:gm-border-teal transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                              {getTransactionIcon(transaction.type)}
                            </div>
                            <div>
                              <h4 className="font-semibold">{transaction.title}</h4>
                              <div className="flex items-center space-x-2 text-sm gm-text-secondary">
                                <span>{transaction.date}</span>
                                <span>•</span>
                                <span>{transaction.time}</span>
                                <span>•</span>
                                <span>#{transaction.orderId}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-lg font-bold ${transaction.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                            </div>
                            <div className={`flex items-center space-x-1 text-sm ${getStatusColor(transaction.status)}`}>
                              {getStatusIcon(transaction.status)}
                              <span>{transaction.status}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="methods">
                <Card className="gm-background-secondary border-gray-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-mono">Payment Methods</CardTitle>
                      <Button className="gm-bg-teal text-black hover:bg-cyan-400">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Method
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                              <CreditCard className="w-6 h-6 gm-text-teal" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{method.name}</h4>
                              <p className="text-sm gm-text-secondary">
                                {method.expiry ? `Expires ${method.expiry}` : 
                                 method.email ? method.email : 
                                 method.address}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {method.isDefault && (
                              <Badge className="gm-bg-teal text-black">Default</Badge>
                            )}
                            <Button variant="outline" size="sm" className="border-gray-700">
                              Edit
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements">
                <Card className="gm-background-secondary border-gray-700">
                  <CardHeader>
                    <CardTitle className="font-mono flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      Wallet Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className={`p-4 border rounded-lg ${achievement.earned ? 'border-green-400 bg-green-400/10' : 'border-gray-700'}`}>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold flex items-center">
                              {achievement.earned && <CheckCircle className="w-4 h-4 text-green-400 mr-2" />}
                              {achievement.title}
                            </h4>
                            <Badge className={achievement.earned ? 'bg-green-500 text-white' : 'bg-gray-600 text-white'}>
                              {achievement.reward}
                            </Badge>
                          </div>
                          <p className="text-sm gm-text-secondary mb-2">{achievement.description}</p>
                          {!achievement.earned && achievement.progress !== undefined && (
                            <div className="flex items-center space-x-2">
                              <Progress value={achievement.progress} className="flex-1 h-2" />
                              <span className="text-sm gm-text-secondary">{achievement.progress}%</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              {/* Quick Actions */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full gm-bg-teal text-black hover:bg-cyan-400">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Funds
                    </Button>
                    <Button variant="outline" className="w-full border-gray-700">
                      <Download className="w-4 h-4 mr-2" />
                      Request Withdrawal
                    </Button>
                    <Button variant="outline" className="w-full border-gray-700">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Auto-reload Setup
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Security */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Two-factor authentication enabled</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>SSL encryption active</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>PCI DSS compliant</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm gm-text-secondary mb-4">
                    Questions about your wallet or transactions?
                  </p>
                  <Link href="/help-support">
                    <Button variant="outline" className="w-full border-gray-700">
                      Contact Support
                    </Button>
                  </Link>
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