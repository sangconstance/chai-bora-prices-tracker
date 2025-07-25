
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-tea-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-white/15"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-white/10"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 rounded-full bg-white/25"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          ChaiBora
        </div>
        <div className="space-x-4">
          <Link to="/login">
            <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-white text-tea-700 hover:bg-white/90">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-bounce-subtle">
          Track tea prices.
          <br />
          <span className="text-tea-100">Sell smart.</span>
        </h1>
        
        <p className="text-xl text-tea-100 mb-8 max-w-2xl">
          Get real-time market prices from top buyers across Kenya. Make informed decisions and maximize your tea profits.
        </p>

        <div className="space-x-4">
          <Link to="/dashboard">
            <Button size="lg" className="bg-white text-tea-700 hover:bg-white/90 px-8 py-3 text-lg">
              View Market Prices
            </Button>
          </Link>
          <Link to="/trends">
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-3 text-lg">
              Price Trends
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Preview */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tea-600 text-xl">📊</span>
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Real-time Prices</h3>
              <p className="text-tea-100 text-sm">Compare prices from KETEPA, Unilever, and other major buyers instantly.</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tea-600 text-xl">🔔</span>
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Price Alerts</h3>
              <p className="text-tea-100 text-sm">Get notified when prices hit your target via SMS or push notifications.</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tea-600 text-xl">📈</span>
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Market Trends</h3>
              <p className="text-tea-100 text-sm">Analyze 7-day and 30-day price trends to plan your sales strategy.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 border-t border-white/20">
        <p className="text-tea-100">ChaiBora. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Index;
