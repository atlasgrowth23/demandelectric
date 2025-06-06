import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Phone } from "lucide-react";
import QuoteForm from "./quote-form";

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <section className="pt-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <div className="flex text-electric-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded">5.0 Google Rating</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Professional Electrical Services You Can Trust
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Serving Little Rock and nearby areas, we provide reliable electrical solutions with exceptional customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-electric-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="tel:5016936229" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (501) 693-6229
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg"
                onClick={() => setIsFormOpen(true)}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-orange to-electric-blue rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipPWJ9FJjqUGqEFl9uudrmG_LcaWxG1Kxg9ZuIvG=s680-w680-h510-rw" 
              alt="Demand Electric LLC professional electrical work" 
              className="relative rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-all duration-500" 
            />
          </div>
        </div>
      </div>
      <QuoteForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}
