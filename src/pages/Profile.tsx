
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [name, setName] = useState("John Kipchoge");
  const [phone, setPhone] = useState("+254 712 345 678");
  const [location, setLocation] = useState("Kericho");
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [marketUpdates, setMarketUpdates] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);
  const { toast } = useToast();

  const locations = [
    "Kericho",
    "Nyeri", 
    "Nandi Hills",
    "Bomet",
    "Sotik",
    "Nairobi",
    "Meru",
    "Kisii",
    "Nakuru",
    "Other"
  ];

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated!",
      description: "Your settings have been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-tea-light">
      <Navigation />
      
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-tea-800 mb-2">Profile Settings</h1>
          <p className="text-tea-600">Manage your account and notification preferences</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-tea-700">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Preferred Location</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your location..." />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-tea-600">
                  This helps us show relevant market data for your area
                </p>
              </div>

              <Button 
                onClick={handleSaveProfile}
                className="w-full bg-tea-600 hover:bg-tea-700"
                size="lg"
              >
                Save Changes
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-tea-700">Alert Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="price-alerts" className="text-sm font-medium">
                    Price Alerts
                  </Label>
                  <p className="text-xs text-tea-600">
                    Get notified when target prices are reached
                  </p>
                </div>
                <Switch
                  id="price-alerts"
                  checked={priceAlerts}
                  onCheckedChange={setPriceAlerts}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="market-updates" className="text-sm font-medium">
                    Market Updates
                  </Label>
                  <p className="text-xs text-tea-600">
                    Daily market price updates
                  </p>
                </div>
                <Switch
                  id="market-updates"
                  checked={marketUpdates}
                  onCheckedChange={setMarketUpdates}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="weekly-reports" className="text-sm font-medium">
                    Weekly Reports
                  </Label>
                  <p className="text-xs text-tea-600">
                    Comprehensive market analysis
                  </p>
                </div>
                <Switch
                  id="weekly-reports"
                  checked={weeklyReports}
                  onCheckedChange={setWeeklyReports}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Account Stats */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-tea-700">Account Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-tea-700">12</div>
                <p className="text-sm text-tea-600">Active Alerts</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tea-700">45</div>
                <p className="text-sm text-tea-600">Days Active</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tea-700">8</div>
                <p className="text-sm text-tea-600">Successful Sales</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tea-700">KSh 58</div>
                <p className="text-sm text-tea-600">Best Price Achieved</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-tea-700">Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start">
                📞 Contact Support
              </Button>
              <Button variant="outline" className="justify-start">
                📚 User Guide
              </Button>
              <Button variant="outline" className="justify-start">
                💬 Join Community
              </Button>
              <Button variant="outline" className="justify-start">
                🐛 Report Issue
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
