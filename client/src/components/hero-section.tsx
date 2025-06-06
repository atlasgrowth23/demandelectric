import { Button } from "@/components/ui/button";
import { Star, Phone, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
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
                className="bg-electric-orange text-white hover:bg-orange-600 font-semibold text-lg"
                asChild
              >
                <a href="tel:5016936229" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (501) 693-6229
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-electric-blue text-white hover:bg-blue-700 font-semibold text-lg"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="@assets/screenshot-1749234609829.png" 
              alt="Demand Electric LLC Logo" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
