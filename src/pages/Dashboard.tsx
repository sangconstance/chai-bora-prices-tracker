
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const Dashboard = () => {
  const buyers = [
    { name: "KETEPA", price: 58, location: "Kericho", change: "+2.5", trending: "up" },
    { name: "Unilever Kenya", price: 56, location: "Nairobi", change: "+1.8", trending: "up" },
    { name: "Finlays Kenya", price: 54, location: "Kericho", change: "-0.5", trending: "down" },
    { name: "Eastern Produce", price: 53, location: "Nyeri", change: "+0.8", trending: "up" },
    { name: "Williamson Tea", price: 52, location: "Sotik", change: "-1.2", trending: "down" },
    { name: "James Finlay", price: 51, location: "Kericho", change: "+0.3", trending: "up" },
    { name: "Tinderet Tea", price: 50, location: "Nandi Hills", change: "-2.1", trending: "down" },
    { name: "Kapchorua Tea", price: 49, location: "Bomet", change: "+1.5", trending: "up" }
  ];

  const bestOffer = buyers[0];

  return (
    <div className="min-h-screen bg-tea-light">
      <Navigation />
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-tea-800 mb-2">Today's Market Prices</h1>
          <p className="text-tea-600">Current tea prices per kg from registered buyers</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Buyers List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-tea-700">Active Buyers</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {buyers.map((buyer, index) => (
                      <div 
                        key={buyer.name}
                        className="flex justify-between items-center p-4 rounded-lg border hover:bg-tea-50 transition-colors"
                      >
                        <div>
                          <h3 className="font-semibold text-tea-800">{buyer.name}</h3>
                          <p className="text-sm text-tea-600">{buyer.location}</p>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-tea-700">
                            KSh {buyer.price}
                          </div>
                          <div className="flex items-center gap-1">
                            <Badge 
                              variant={buyer.trending === "up" ? "default" : "destructive"}
                              className={
                                buyer.trending === "up" 
                                  ? "bg-green-100 text-green-800" 
                                  : "bg-red-100 text-red-800"
                              }
                            >
                              {buyer.change}%
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Best Offer Highlight */}
          <div>
            <Card className="bg-tea-gradient text-white">
              <CardHeader>
                <CardTitle className="text-white">🏆 Best Offer Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{bestOffer.name}</h3>
                  <div className="text-4xl font-bold mb-2">
                    KSh {bestOffer.price}
                  </div>
                  <p className="text-tea-100 mb-4">{bestOffer.location}</p>
                  <Badge className="bg-white text-tea-700">
                    +{bestOffer.change}% today
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-tea-700">Market Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-tea-600">Average Price</span>
                    <span className="font-semibold text-tea-800">KSh 53</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tea-600">Highest Offer</span>
                    <span className="font-semibold text-tea-800">KSh {bestOffer.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tea-600">Active Buyers</span>
                    <span className="font-semibold text-tea-800">{buyers.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tea-600">Last Updated</span>
                    <span className="font-semibold text-tea-800">2 min ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
