import { Button } from "@/components/ui/button";
import { Star, Phone, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <div className="flex text-electric-yellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded">5.01 Google Rating</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Professional Electrical Services You Can Trust
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              With over 25 years of experience serving Little Rock and nearby areas, we provide reliable electrical solutions with exceptional customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-electric-yellow text-electric-blue hover:bg-yellow-500 font-semibold text-lg"
                asChild
              >
                <a href="tel:5016936229" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (501) 693-6229
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold text-lg"
              >
                Get Free Quote
              </Button>
            </div>
            <div className="mt-6 flex items-center text-blue-100">
              <Clock className="mr-2 h-5 w-5" />
              <span>Open Today • Closes 5 PM</span>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional electrician working on electrical panel" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
              <div className="electric-blue font-bold text-2xl">25+</div>
              <div className="electric-gray text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
