
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Trends = () => {
  const [period, setPeriod] = useState<"7" | "30">("7");

  const data7Days = [
    { day: "Mon", price: 52 },
    { day: "Tue", price: 54 },
    { day: "Wed", price: 53 },
    { day: "Thu", price: 56 },
    { day: "Fri", price: 55 },
    { day: "Sat", price: 57 },
    { day: "Sun", price: 58 }
  ];

  const data30Days = [
    { day: "Week 1", price: 48 },
    { day: "Week 2", price: 51 },
    { day: "Week 3", price: 54 },
    { day: "Week 4", price: 58 }
  ];

  const currentData = period === "7" ? data7Days : data30Days;
  const currentPrice = currentData[currentData.length - 1].price;
  const previousPrice = currentData[currentData.length - 2].price;
  const priceChange = currentPrice - previousPrice;
  const percentChange = ((priceChange / previousPrice) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-tea-light">
      <Navigation />
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-tea-800 mb-2">Price Trends</h1>
          <p className="text-tea-600">Historical tea price data and market analysis</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Chart */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-tea-700">
                    Tea Price Trends - Last {period} {period === "7" ? "Days" : "Days"}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant={period === "7" ? "default" : "outline"}
                      onClick={() => setPeriod("7")}
                      className={period === "7" ? "bg-tea-600 hover:bg-tea-700" : ""}
                    >
                      7 Days
                    </Button>
                    <Button
                      variant={period === "30" ? "default" : "outline"}
                      onClick={() => setPeriod("30")}
                      className={period === "30" ? "bg-tea-600 hover:bg-tea-700" : ""}
                    >
                      30 Days
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={currentData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis 
                        dataKey="day" 
                        stroke="#64748b"
                        fontSize={12}
                      />
                      <YAxis 
                        stroke="#64748b"
                        fontSize={12}
                        domain={['dataMin - 2', 'dataMax + 2']}
                      />
                      <Tooltip 
                        formatter={(value) => [`KSh ${value}`, 'Price per kg']}
                        labelStyle={{ color: '#1e40af' }}
                        contentStyle={{ 
                          backgroundColor: '#f8fafc', 
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#16a34a" 
                        strokeWidth={3}
                        dot={{ fill: '#16a34a', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#16a34a', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <Card className="bg-tea-gradient text-white">
              <CardHeader>
                <CardTitle className="text-white">Current Price</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">
                  KSh {currentPrice}
                </div>
                <div className={`flex items-center gap-1 ${priceChange >= 0 ? 'text-green-200' : 'text-red-200'}`}>
                  <span>{priceChange >= 0 ? '↗' : '↘'}</span>
                  <span>
                    {priceChange >= 0 ? '+' : ''}{priceChange} 
                    ({priceChange >= 0 ? '+' : ''}{percentChange}%)
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-tea-700">Price Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-tea-600">Highest</span>
                  <span className="font-semibold text-tea-800">
                    KSh {Math.max(...currentData.map(d => d.price))}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tea-600">Lowest</span>
                  <span className="font-semibold text-tea-800">
                    KSh {Math.min(...currentData.map(d => d.price))}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tea-600">Average</span>
                  <span className="font-semibold text-tea-800">
                    KSh {Math.round(currentData.reduce((sum, d) => sum + d.price, 0) / currentData.length)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tea-600">Volatility</span>
                  <span className="font-semibold text-tea-800">
                    {period === "7" ? "Low" : "Medium"}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-tea-700">Market Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-tea-600 space-y-2">
                  <p>
                    📈 Prices have been {priceChange >= 0 ? 'trending upward' : 'declining'} 
                    over the last {period} {period === "7" ? "days" : "days"}.
                  </p>
                  <p>
                    🏭 Major buyers are actively purchasing, indicating strong demand.
                  </p>
                  <p>
                    ☀️ Weather conditions remain favorable for tea quality.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
