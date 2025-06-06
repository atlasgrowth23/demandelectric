import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Shield, Wrench, Zap, Home, AlertTriangle } from "lucide-react";

export default function Residential() {
  const services = [
    {
      icon: Lightbulb,
      title: "Lighting Solutions",
      description: "Interior and exterior lighting installation, repairs, and upgrades including LED conversions and smart lighting systems."
    },
    {
      icon: Zap,
      title: "Panel Upgrades",
      description: "Electrical panel replacements and upgrades to meet modern safety standards and increased power demands."
    },
    {
      icon: Shield,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety evaluations to identify potential hazards and ensure code compliance."
    },
    {
      icon: Wrench,
      title: "Outlet & Switch Installation",
      description: "New outlet installations, GFCI upgrades, switch replacements, and USB outlet installations."
    },
    {
      icon: Home,
      title: "Whole House Rewiring",
      description: "Complete home rewiring services for older homes or major renovations with modern, safe wiring."
    },
    {
      icon: AlertTriangle,
      title: "Emergency Repairs",
      description: "24/7 emergency electrical repair services for power outages, safety hazards, and urgent electrical issues."
    }
  ];

  return (
    <div className="pt-24">
      <title>Residential Electrical Services - Demand Electric LLC | Little Rock, AR</title>
      <meta name="description" content="Professional residential electrical services in Little Rock, AR. Panel upgrades, lighting installation, home rewiring, and emergency repairs. 25+ years experience. Call (501) 693-6229." />
      
      {/* Hero Section */}
      <section className="py-20 min-h-[70vh] relative overflow-hidden text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://s3-media0.fl.yelpcdn.com/bphoto/M4-2HjgrPpcJcuZU0g19fA/o.jpg')"}}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Residential Electrical Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
              Complete home electrical solutions from simple repairs to whole house rewiring. We handle all your residential electrical needs with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-electric-yellow to-yellow-400 text-electric-blue hover:from-yellow-400 hover:to-yellow-500 font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4"
                asChild
              >
                <a href="tel:5016936229" className="flex items-center justify-center">Call for Service</a>
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold shadow-xl px-8 py-4"
              >
                Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold electric-gray mb-4">Our Residential Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple outlet installations to complete home rewiring, we provide comprehensive electrical services for homeowners throughout Little Rock and surrounding areas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <CardContent className="p-6 text-center">
                    <div className="bg-electric-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white h-8 w-8" />
                    </div>
                    <h3 className="font-semibold electric-gray text-xl mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold electric-gray mb-6">Complete Home Electrical Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're building a new home, renovating an existing one, or just need electrical repairs, our experienced team has the expertise to handle any residential electrical project.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-orange rounded-full mt-2"></div>
                  <div>
                    <strong className="electric-gray">Panel Upgrades & Replacements:</strong>
                    <span className="text-gray-600"> Modernize your electrical system for safety and capacity</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-orange rounded-full mt-2"></div>
                  <div>
                    <strong className="electric-gray">New Outlet & Switch Installation:</strong>
                    <span className="text-gray-600"> Add convenience and functionality to any room</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-orange rounded-full mt-2"></div>
                  <div>
                    <strong className="electric-gray">Ceiling Fan Installation:</strong>
                    <span className="text-gray-600"> Professional installation with proper support and wiring</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-orange rounded-full mt-2"></div>
                  <div>
                    <strong className="electric-gray">Home Rewiring Services:</strong>
                    <span className="text-gray-600"> Complete electrical system updates for older homes</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://s3-media0.fl.yelpcdn.com/bphoto/QkZUKm1JIlKWV_vB9t_a3g/o.jpg" 
                alt="Demand Electric LLC residential electrical work" 
                className="rounded-xl shadow-xl w-full h-80 object-cover" 
              />
            </div>
          </div>

          {/* Common Issues */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold electric-gray mb-6 text-center">Common Residential Electrical Issues We Fix</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="text-red-600 h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Frequent Breaker Trips</h4>
                <p className="text-sm text-gray-600">Overloaded circuits causing safety concerns</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="text-yellow-600 h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Flickering Lights</h4>
                <p className="text-sm text-gray-600">Loose connections or wiring issues</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="text-blue-600 h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Outlet Problems</h4>
                <p className="text-sm text-gray-600">Dead outlets or GFCI issues</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-green-600 h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Outdated Wiring</h4>
                <p className="text-sm text-gray-600">Old systems needing updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-electric-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Home's Electrical System?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't let electrical problems compromise your family's safety or comfort. Our experienced residential electricians are ready to help with any project, big or small.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-electric-orange text-white hover:bg-orange-600 font-semibold text-lg"
              asChild
            >
              <a href="tel:5016936229">Call (501) 693-6229</a>
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
