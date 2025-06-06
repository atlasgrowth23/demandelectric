import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Phone } from "lucide-react";
import QuoteForm from "./quote-form";

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section className="pt-24 min-h-screen relative overflow-hidden text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://lh3.googleusercontent.com/p/AF1QipPWJ9FJjqUGqEFl9uudrmG_LcaWxG1Kxg9ZuIvG=s680-w680-h510-rw')"}}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center min-h-[80vh]">
        <div className="max-w-3xl">
          <div className="flex items-center mb-6">
            <div className="flex text-electric-orange">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <span className="ml-3 text-sm bg-white/20 px-3 py-2 rounded-full backdrop-blur-sm">5.0 Google Rating</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Professional Electrical Services You Can Trust
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
            Serving Little Rock and nearby areas, we provide reliable electrical solutions with exceptional customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-electric-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4"
              asChild
            >
              <a href="tel:5016936229" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (501) 693-6229
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg shadow-xl px-8 py-4"
              onClick={() => setIsFormOpen(true)}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
      <QuoteForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}
