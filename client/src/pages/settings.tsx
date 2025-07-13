import { useState } from "react";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Smartphone,
  CreditCard,
  Mail
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    twoFactor: false,
    newsletter: true,
    language: "en"
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 font-mono">Settings</h1>
            <p className="text-lg gm-text-secondary">
              Manage your account preferences and settings
            </p>
          </div>

          {/* Appearance */}
          <Card className="mb-6 gm-background-secondary border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Moon className="w-5 h-5 mr-2 gm-text-teal" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm gm-text-secondary">Toggle dark mode theme</p>
                </div>
                <Switch
                  checked={settings.darkMode}
                  onCheckedChange={(checked) => setSettings({ ...settings, darkMode: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Language</p>
                  <p className="text-sm gm-text-secondary">Choose your preferred language</p>
                </div>
                <Select
                  value={settings.language}
                  onValueChange={(value) => setSettings({ ...settings, language: value })}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="mb-6 gm-background-secondary border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2 gm-text-pink" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm gm-text-secondary">Get notified about new deals and updates</p>
                </div>
                <Switch
                  checked={settings.notifications}
                  onCheckedChange={(checked) => setSettings({ ...settings, notifications: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Newsletter</p>
                  <p className="text-sm gm-text-secondary">Receive our weekly newsletter</p>
                </div>
                <Switch
                  checked={settings.newsletter}
                  onCheckedChange={(checked) => setSettings({ ...settings, newsletter: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card className="mb-6 gm-background-secondary border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-purple-400" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm gm-text-secondary">Add an extra layer of security</p>
                </div>
                <Switch
                  checked={settings.twoFactor}
                  onCheckedChange={(checked) => setSettings({ ...settings, twoFactor: checked })}
                />
              </div>
              <Button variant="outline" className="w-full border-gray-700 hover:gm-border-teal">
                Change Password
              </Button>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="mb-6 gm-background-secondary border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-green-400" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full border-gray-700 hover:gm-border-teal">
                Manage Payment Methods
              </Button>
            </CardContent>
          </Card>

          {/* Save Changes */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline" className="border-gray-700 hover:gm-border-teal">
              Cancel
            </Button>
            <Button className="gm-bg-teal text-black hover:bg-cyan-400">
              Save Changes
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 