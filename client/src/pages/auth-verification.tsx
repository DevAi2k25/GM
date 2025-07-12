import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Mail, Smartphone, RefreshCw, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function AuthVerificationPage() {
  const [verificationMethod, setVerificationMethod] = useState<"email" | "sms">("email");
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // Mock user data - in real app this would come from auth context
  const userEmail = "demo@gamersmarket.com";
  const userPhone = "+1 (555) ***-4567";

  useEffect(() => {
    if (countdown > 0 && !canResend) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCanResend(true);
    }
  }, [countdown, canResend]);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerify = () => {
    setIsVerifying(true);
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 2000);
  };

  const handleResend = () => {
    setIsResending(true);
    setCanResend(false);
    setCountdown(60);
    
    // Simulate resend process
    setTimeout(() => {
      setIsResending(false);
    }, 1000);
  };

  const isCodeComplete = verificationCode.every(digit => digit !== "");

  if (isVerified) {
    return (
      <div className="min-h-screen">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
            <h1 className="text-3xl font-bold mb-4 font-mono">Verification Successful!</h1>
            <p className="gm-text-secondary mb-8">
              Your account has been successfully verified. You can now access all GamersMarket features.
            </p>
            <div className="space-y-4">
              <Link href="/profile">
                <Button className="w-full gm-bg-teal text-black hover:bg-cyan-400">
                  Go to Profile
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full border-gray-700">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Link href="/auth">
              <Button variant="ghost" size="sm" className="gm-text-secondary hover:gm-text-teal">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold font-mono">Verify Your Account</h1>
              <p className="gm-text-secondary">Complete your account setup for secure access</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Verification Method Selection */}
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="font-mono">Choose Verification Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <button
                    onClick={() => setVerificationMethod("email")}
                    className={`w-full p-4 border rounded-lg text-left transition-colors ${
                      verificationMethod === "email" 
                        ? "gm-border-teal gm-bg-teal/10" 
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Mail className={`w-5 h-5 ${verificationMethod === "email" ? "gm-text-teal" : "gm-text-secondary"}`} />
                      <div>
                        <h3 className="font-semibold">Email Verification</h3>
                        <p className="text-sm gm-text-secondary">Send code to {userEmail}</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setVerificationMethod("sms")}
                    className={`w-full p-4 border rounded-lg text-left transition-colors ${
                      verificationMethod === "sms" 
                        ? "gm-border-teal gm-bg-teal/10" 
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Smartphone className={`w-5 h-5 ${verificationMethod === "sms" ? "gm-text-teal" : "gm-text-secondary"}`} />
                      <div>
                        <h3 className="font-semibold">SMS Verification</h3>
                        <p className="text-sm gm-text-secondary">Send code to {userPhone}</p>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <h4 className="font-semibold mb-2">Why verify your account?</h4>
                  <ul className="text-sm gm-text-secondary space-y-1">
                    <li>• Secure your account from unauthorized access</li>
                    <li>• Enable high-value transactions</li>
                    <li>• Access seller features and authentication services</li>
                    <li>• Receive important account notifications</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Verification Code Input */}
            <Card className="gm-background-secondary border-gray-700">
              <CardHeader>
                <CardTitle className="font-mono">Enter Verification Code</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {verificationMethod === "email" ? (
                      <Mail className="w-8 h-8 gm-text-teal" />
                    ) : (
                      <Smartphone className="w-8 h-8 gm-text-teal" />
                    )}
                  </div>
                  <p className="gm-text-secondary">
                    We've sent a 6-digit verification code to{" "}
                    <span className="gm-text-teal font-semibold">
                      {verificationMethod === "email" ? userEmail : userPhone}
                    </span>
                  </p>
                </div>

                <div>
                  <Label htmlFor="verification-code" className="sr-only">Verification Code</Label>
                  <div className="flex justify-center space-x-2">
                    {verificationCode.map((digit, index) => (
                      <Input
                        key={index}
                        id={`code-${index}`}
                        type="text"
                        value={digit}
                        onChange={(e) => handleCodeChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-12 h-12 text-center text-lg font-semibold gm-background border-gray-700 focus:gm-border-teal"
                        maxLength={1}
                      />
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleVerify}
                  disabled={!isCodeComplete || isVerifying}
                  className="w-full gm-bg-teal text-black py-3 font-semibold hover:bg-cyan-400 disabled:opacity-50"
                >
                  {isVerifying ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                      Verifying...
                    </>
                  ) : (
                    "Verify Account"
                  )}
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm gm-text-secondary">
                    Didn't receive the code?
                  </p>
                  {canResend ? (
                    <Button
                      variant="ghost"
                      onClick={handleResend}
                      disabled={isResending}
                      className="text-sm gm-text-teal hover:gm-text-cyan-400"
                    >
                      {isResending ? (
                        <>
                          <RefreshCw className="w-3 h-3 mr-1 animate-spin" />
                          Resending...
                        </>
                      ) : (
                        "Resend Code"
                      )}
                    </Button>
                  ) : (
                    <p className="text-sm gm-text-secondary">
                      Resend available in {countdown}s
                    </p>
                  )}
                </div>

                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-blue-400">Security Tip</p>
                      <p className="gm-text-secondary">
                        Never share your verification code with anyone. GamersMarket will never ask 
                        for your code via phone or email.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}