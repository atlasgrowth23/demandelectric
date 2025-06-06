import { Zap, Phone, MapPin, Clock, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-electric-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://s3-media0.fl.yelpcdn.com/bphoto/ZjE2kYNlTmPlZl_W27JVUg/l.jpg" 
                alt="Demand Electric LLC Logo" 
                className="h-10 w-auto mr-2"
              />
            </div>
            <p className="text-gray-300">
              Professional electrical services with over 25 years of experience serving Little Rock and nearby areas.
            </p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-electric-orange text-electric-orange" />
              ))}
              <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded">5.01 Google Rating</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-electric-orange" />
                <a href="tel:5016936229" className="hover:text-electric-orange transition-colors">
                  (501) 693-6229
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-electric-orange" />
                <span>Little Rock & Nearby Areas</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-electric-orange" />
                <span>Open • Closes 5 PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <div className="space-y-2">
              <div>Residential Electrical</div>
              <div>Commercial Solutions</div>
              <div>Industrial Systems</div>
              <div>Emergency Repairs</div>
              <div>Panel Upgrades</div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Service Areas</h3>
            <div className="space-y-2">
              <div>Little Rock, AR</div>
              <div>Mountain Pine, AR</div>
              <div>Surrounding Areas</div>
            </div>
            <div className="mt-6">
              <button className="bg-electric-yellow text-electric-blue px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Demand Electric LLC. All rights reserved. | Professional electrical services in Arkansas</p>
        </div>
      </div>
    </footer>
  );
}
