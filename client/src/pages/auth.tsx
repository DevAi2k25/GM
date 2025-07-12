import { useState } from "react";
import { Link } from "wouter";
import { User, Mail, Lock, Eye, EyeOff, Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to profile or previous page
    }, 2000);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to profile or previous page
    }, 2000);
  };

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
        </div>

        <div className="max-w-md mx-auto">
          {/* Auth Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-3xl font-bold font-mono mb-2">Welcome to GamersMarket</h1>
            <p className="gm-text-secondary">Join the ultimate gaming community</p>
          </div>

          <Card className="gm-background-secondary border-gray-700">
            <CardContent className="p-6">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 gm-background">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="register">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="mt-6">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="loginEmail">Email or Username</Label>
                      <div className="relative">
                        <Input
                          id="loginEmail"
                          type="text"
                          placeholder="Enter your email or username"
                          className="gm-background border-gray-700 focus:gm-border-teal pl-10"
                          required
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="loginPassword">Password</Label>
                      <div className="relative">
                        <Input
                          id="loginPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="gm-background border-gray-700 focus:gm-border-teal pl-10 pr-10"
                          required
                        />
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 gm-text-secondary hover:gm-text-teal"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="text-sm">Remember me</Label>
                      </div>
                      <Button variant="link" className="p-0 h-auto gm-text-teal hover:text-cyan-400">
                        Forgot password?
                      </Button>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full gm-bg-teal text-black py-3 font-semibold hover:bg-cyan-400 gm-shadow-teal transition-all duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                      ) : null}
                      Sign In
                    </Button>
                  </form>

                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-700"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="gm-background-secondary px-2 gm-text-secondary">Or continue with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <Button variant="outline" className="border-gray-700 hover:gm-border-teal">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" className="border-gray-700 hover:gm-border-teal">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="register" className="mt-6">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="John"
                          className="gm-background border-gray-700 focus:gm-border-teal"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                          className="gm-background border-gray-700 focus:gm-border-teal"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="username">Username</Label>
                      <div className="relative">
                        <Input
                          id="username"
                          type="text"
                          placeholder="Choose a username"
                          className="gm-background border-gray-700 focus:gm-border-teal pl-10"
                          required
                        />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="gm-background border-gray-700 focus:gm-border-teal pl-10"
                          required
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="gm-background border-gray-700 focus:gm-border-teal pl-10 pr-10"
                          required
                        />
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 gm-text-secondary hover:gm-text-teal"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="gm-background border-gray-700 focus:gm-border-teal pl-10 pr-10"
                          required
                        />
                        <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 gm-text-secondary" />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 gm-text-secondary hover:gm-text-teal"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Button variant="link" className="p-0 h-auto gm-text-teal hover:text-cyan-400">
                          Terms of Service
                        </Button>{" "}
                        and{" "}
                        <Button variant="link" className="p-0 h-auto gm-text-teal hover:text-cyan-400">
                          Privacy Policy
                        </Button>
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full gm-bg-pink text-white py-3 font-semibold hover:bg-pink-400 gm-shadow-pink transition-all duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      ) : null}
                      Create Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="text-center mt-8 space-y-4">
            <div className="gm-text-secondary text-sm">
              <p>Join thousands of gamers already on GamersMarket</p>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm gm-text-secondary">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 gm-text-teal" />
                <span>Secure & Safe</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4 gm-text-pink" />
                <span>Trusted Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
