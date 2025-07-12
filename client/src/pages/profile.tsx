import { useState } from "react";
import { User, Package, Heart, Settings, Star, TrendingUp, DollarSign, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data - in real app this would come from authentication context
  const user = {
    id: 1,
    username: "demogamer",
    email: "demo@gamersmarket.com",
    firstName: "Demo",
    lastName: "Gamer",
    joinDate: "January 2024",
    avatar: null,
    stats: {
      orders: 12,
      reviews: 8,
      wishlistItems: 15,
      totalSpent: 1249.99
    }
  };

  const { data: wishlistItems = [] } = useQuery<any[]>({
    queryKey: ["/api/wishlist"],
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="gm-background-secondary border border-gray-700 rounded-xl p-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-black" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold font-mono">{user.firstName} {user.lastName}</h1>
              <p className="gm-text-secondary">@{user.username}</p>
              <p className="gm-text-secondary text-sm">Member since {user.joinDate}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold gm-text-teal">{user.stats.orders}</div>
                <div className="text-sm gm-text-secondary">Orders</div>
              </div>
              <div>
                <div className="text-2xl font-bold gm-text-pink">{user.stats.reviews}</div>
                <div className="text-sm gm-text-secondary">Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="gm-background-secondary border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 gm-text-teal" />
                </div>
                <div>
                  <p className="text-sm gm-text-secondary">Total Orders</p>
                  <p className="text-xl font-bold">{user.stats.orders}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="gm-background-secondary border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 gm-text-pink" />
                </div>
                <div>
                  <p className="text-sm gm-text-secondary">Wishlist Items</p>
                  <p className="text-xl font-bold">{user.stats.wishlistItems}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="gm-background-secondary border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm gm-text-secondary">Reviews Given</p>
                  <p className="text-xl font-bold">{user.stats.reviews}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="gm-background-secondary border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm gm-text-secondary">Total Spent</p>
                  <p className="text-xl font-bold">${user.stats.totalSpent}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 gm-background-secondary">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Orders */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-gray-700 rounded-lg">
                      <div>
                        <p className="font-semibold">Order #GM001234</p>
                        <p className="text-sm gm-text-secondary">2 items • Dec 15, 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold gm-text-teal">$299.98</p>
                        <Badge className="gm-bg-teal text-black">Delivered</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border border-gray-700 rounded-lg">
                      <div>
                        <p className="font-semibold">Order #GM001233</p>
                        <p className="text-sm gm-text-secondary">1 item • Dec 10, 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold gm-text-teal">$149.99</p>
                        <Badge className="gm-bg-pink text-white">Shipped</Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Orders
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 gm-text-teal" />
                      </div>
                      <div>
                        <p className="text-sm">Left a review for <span className="gm-text-teal">Corsair K95 RGB</span></p>
                        <p className="text-xs gm-text-secondary">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 gm-text-pink" />
                      </div>
                      <div>
                        <p className="text-sm">Added <span className="gm-text-pink">Gaming Chair Pro</span> to wishlist</p>
                        <p className="text-xs gm-text-secondary">1 week ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                        <Package className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm">Order <span className="text-green-400">#GM001234</span> delivered</p>
                        <p className="text-xs gm-text-secondary">1 week ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="mt-8">
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="font-mono">Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <Package className="w-16 h-16 gm-text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No orders yet</h3>
                  <p className="gm-text-secondary mb-4">Your order history will appear here</p>
                  <Button className="gm-bg-teal text-black hover:bg-cyan-400">
                    Start Shopping
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wishlist" className="mt-8">
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="font-mono">Wishlist ({wishlistItems.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {wishlistItems.length === 0 ? (
                  <div className="text-center py-16">
                    <Heart className="w-16 h-16 gm-text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
                    <p className="gm-text-secondary mb-4">Save items you love for later</p>
                    <Button className="gm-bg-teal text-black hover:bg-cyan-400">
                      Browse Products
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Wishlist items would be mapped here */}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="font-mono">My Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <Star className="w-16 h-16 gm-text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No reviews yet</h3>
                  <p className="gm-text-secondary mb-4">Share your experience with products you've purchased</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Personal Information */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        defaultValue={user.firstName}
                        className="gm-background border-gray-700 focus:gm-border-teal"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        defaultValue={user.lastName}
                        className="gm-background border-gray-700 focus:gm-border-teal"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={user.email}
                      className="gm-background border-gray-700 focus:gm-border-teal"
                    />
                  </div>
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      defaultValue={user.username}
                      className="gm-background border-gray-700 focus:gm-border-teal"
                    />
                  </div>
                  <Button className="gm-bg-teal text-black hover:bg-cyan-400">
                    Update Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Account Settings */}
              <Card className="gm-background-secondary border-gray-700">
                <CardHeader>
                  <CardTitle className="font-mono">Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      className="gm-background border-gray-700 focus:gm-border-teal"
                    />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      className="gm-background border-gray-700 focus:gm-border-teal"
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      className="gm-background border-gray-700 focus:gm-border-teal"
                    />
                  </div>
                  <Button variant="outline" className="w-full">
                    Change Password
                  </Button>

                  <div className="pt-4 border-t border-gray-700">
                    <h4 className="font-semibold mb-3">Danger Zone</h4>
                    <Button variant="destructive" className="w-full">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
