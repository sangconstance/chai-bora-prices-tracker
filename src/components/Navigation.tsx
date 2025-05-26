
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/dashboard", label: "Market Prices" },
    { href: "/trends", label: "Price Trends" },
    { href: "/alerts", label: "Price Alerts" },
    { href: "/profile", label: "Profile" }
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-tea-700">
            ChaiBora
          </Link>
          
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href}>
                <Button
                  variant={location.pathname === item.href ? "default" : "ghost"}
                  className={cn(
                    "text-tea-700",
                    location.pathname === item.href && "bg-tea-600 text-white hover:bg-tea-700"
                  )}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <Link to="/">
            <Button variant="outline" className="border-tea-600 text-tea-700 hover:bg-tea-50">
              Logout
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
