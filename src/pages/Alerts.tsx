
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const Alerts = () => {
  const [priceThreshold, setPriceThreshold] = useState("");
  const [selectedBuyer, setSelectedBuyer] = useState("");
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const { toast } = useToast();

  const buyers = [
    "KETEPA",
    "Unilever Kenya", 
    "Finlays Kenya",
    "Eastern Produce",
    "Williamson Tea",
    "James Finlay",
    "Tinderet Tea",
    "Kapchorua Tea"
  ];

  const activeAlerts = [
    { id: 1, buyer: "KETEPA", threshold: 60, type: "SMS + Push", status: "Active" },
    { id: 2, buyer: "Unilever Kenya", threshold: 55, type: "SMS", status: "Active" },
    { id: 3, buyer: "Any Buyer", threshold: 65, type: "Push", status: "Triggered" }
  ];

  const handleSaveAlert = () => {
    if (!priceThreshold || !selectedBuyer) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Alert Saved!",
      description: `You'll be notified when ${selectedBuyer} offers KSh ${priceThreshold} or higher`,
    });

    // Reset form
    setPriceThreshold("");
    setSelectedBuyer("");
  };

  return (
    <div className="min-h-screen bg-tea-light">
      <Navigation />
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-tea-800 mb-2">Price Alerts</h1>
          <p className="text-tea-600">Set up notifications when tea prices reach your target</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Create Alert Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-tea-700">Create New Alert</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="price">Price Threshold (KSh per kg)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="Enter minimum price..."
                  value={priceThreshold}
                  onChange={(e) => setPriceThreshold(e.target.value)}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="buyer">Choose Buyer</Label>
                <Select value={selectedBuyer} onValueChange={setSelectedBuyer}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a buyer..." />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="any">Any Buyer</SelectItem>
                    {buyers.map((buyer) => (
                      <SelectItem key={buyer} value={buyer}>
                        {buyer}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Notification Preferences</Label>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="sms" className="text-sm font-medium">
                      SMS Notifications
                    </Label>
                    <p className="text-xs text-tea-600">
                      Receive alerts via text message
                    </p>
                  </div>
                  <Switch
                    id="sms"
                    checked={smsNotifications}
                    onCheckedChange={setSmsNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push" className="text-sm font-medium">
                      Push Notifications
                    </Label>
                    <p className="text-xs text-tea-600">
                      Receive alerts in the app
                    </p>
                  </div>
                  <Switch
                    id="push"
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                  />
                </div>
              </div>

              <Button 
                onClick={handleSaveAlert}
                className="w-full bg-tea-600 hover:bg-tea-700"
                size="lg"
              >
                Save Alert
              </Button>
            </CardContent>
          </Card>

          {/* Active Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-tea-700">Your Active Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeAlerts.map((alert) => (
                  <div 
                    key={alert.id}
                    className="p-4 border rounded-lg hover:bg-tea-50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-tea-800">{alert.buyer}</h3>
                        <p className="text-sm text-tea-600">KSh {alert.threshold}+ per kg</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          alert.status === "Active" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-orange-100 text-orange-800"
                        }`}>
                          {alert.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-tea-600">{alert.type}</span>
                      <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}

                {activeAlerts.length === 0 && (
                  <div className="text-center py-8 text-tea-600">
                    <p>No active alerts yet.</p>
                    <p className="text-sm">Create your first alert to get started!</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alert Tips */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-tea-700">💡 Alert Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-tea-600">
              <div>
                <h4 className="font-medium text-tea-800 mb-1">Smart Pricing</h4>
                <p>Set alerts 5-10% above current market price for realistic targets.</p>
              </div>
              <div>
                <h4 className="font-medium text-tea-800 mb-1">Multiple Alerts</h4>
                <p>Create different alerts for various buyers to maximize opportunities.</p>
              </div>
              <div>
                <h4 className="font-medium text-tea-800 mb-1">Quick Response</h4>
                <p>Best prices move fast - enable both SMS and push notifications.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Alerts;
