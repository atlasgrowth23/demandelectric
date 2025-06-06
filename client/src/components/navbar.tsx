import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Zap, Menu } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/residential", label: "Residential" },
    { href: "/commercial", label: "Commercial" },
    { href: "/industrial", label: "Industrial" },
    { href: "/gallery", label: "Gallery" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="bg-white shadow-xl border-b-2 border-electric-orange fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center">
            <img 
              src="https://s3-media0.fl.yelpcdn.com/bphoto/ZjE2kYNlTmPlZl_W27JVUg/l.jpg" 
              alt="Demand Electric LLC Logo" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8 mr-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-semibold text-lg transition-colors ${
                    isActive(item.href)
                      ? "text-electric-blue border-b-2 border-electric-orange pb-1"
                      : "text-gray-700 hover:text-electric-blue"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-electric-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg transform hover:scale-105 transition-all duration-200 px-6 py-3">
              <a href="tel:5016936229">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`font-medium p-2 rounded transition-colors ${
                        isActive(item.href)
                          ? "bg-blue-50 electric-blue"
                          : "electric-gray hover:text-blue-600"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button className="bg-electric-blue hover:bg-blue-700 text-white mt-4">
                    <a href="tel:5016936229">Contact Us</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
