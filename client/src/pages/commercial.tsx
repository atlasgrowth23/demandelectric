import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Store, Utensils, Briefcase, Lightbulb, Shield } from "lucide-react";

export default function Commercial() {
  const services = [
    {
      icon: Building,
      title: "Office Buildings",
      description: "Complete electrical systems for office environments including lighting design, power distribution, and technology infrastructure."
    },
    {
      icon: Store,
      title: "Retail Spaces",
      description: "Specialized lighting and power solutions for retail environments to showcase products and create inviting atmospheres."
    },
    {
      icon: Utensils,
      title: "Restaurants",
      description: "Kitchen and dining area electrical installations including specialized equipment power and ambient lighting systems."
    },
    {
      icon: Briefcase,
      title: "Medical Facilities",
      description: "Critical power systems and specialized electrical requirements for healthcare and medical office environments."
    },
    {
      icon: Lightbulb,
      title: "Energy Efficiency",
      description: "LED lighting retrofits and energy-efficient electrical solutions to reduce operating costs and environmental impact."
    },
    {
      icon: Shield,
      title: "Code Compliance",
      description: "Ensuring all commercial electrical work meets current safety codes and regulations for business operations."
    }
  ];

  const industries = [
    "Office Buildings & Corporate Centers",
    "Retail Stores & Shopping Centers",
    "Restaurants & Food Service",
    "Medical & Healthcare Facilities",
    "Hotels & Hospitality",
    "Education & Schools",
    "Fitness Centers & Gyms",
    "Auto Dealerships & Service Centers"
  ];

  return (
    <div className="pt-24">
      <title>Commercial Electrical Services - Demand Electric LLC | Little Rock, AR</title>
      <meta name="description" content="Professional commercial electrical services in Little Rock, AR. Office buildings, retail spaces, restaurants, and more. Expert installation and maintenance. Call (501) 693-6229." />
      
      {/* Hero Section */}
      <section className="py-20 min-h-[70vh] relative overflow-hidden text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://s3-media0.fl.yelpcdn.com/bphoto/p_94qy5ki81dXZ8Ysp1XJg/o.jpg')"}}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Commercial Electrical Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
              Keep your business running smoothly with our comprehensive commercial electrical services designed for efficiency, reliability, and code compliance.
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
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold electric-gray mb-4">Our Commercial Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional electrical solutions tailored to meet the unique needs of your business, ensuring safety, efficiency, and compliance with all commercial codes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
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
              <img 
                src="https://s3-media0.fl.yelpcdn.com/bphoto/kj2NABLROE0csdMGTdGaAA/o.jpg" 
                alt="Demand Electric LLC commercial electrical work" 
                className="rounded-xl shadow-xl w-full h-80 object-cover" 
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold electric-gray mb-6">Professional Business Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                From small retail spaces to large office complexes, we provide comprehensive electrical services that keep your business operating safely and efficiently.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-orange rounded-full mt-2"></div>
                  <div>
                    <strong className="electric-gray">Office Lighting Design:</strong>
                    <span className="text-gray-600"> Energy-efficient lighting solutions for productivity and ambiance</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-orange rounded-full mt-2"></div>
                  <div>
                    <strong className="electric-gray">Commercial Panel Upgrades:</strong>
                    <span className="text-gray-600"> High-capacity electrical panels for business power demands</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-orange rounded-full mt-2"></div>
                  <div>
                    <strong className="electric-gray">Data & Technology Wiring:</strong>
                    <span className="text-gray-600"> Network infrastructure and technology power solutions</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-orange rounded-full mt-2"></div>
                  <div>
                    <strong className="electric-gray">Emergency Lighting Systems:</strong>
                    <span className="text-gray-600"> Code-compliant emergency and exit lighting installation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industries Served */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold electric-gray mb-6 text-center">Industries We Serve</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <span className="text-gray-700">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold electric-gray mb-4">Why Businesses Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that electrical issues can disrupt your business operations. That's why we prioritize reliability, efficiency, and minimal downtime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="font-semibold electric-gray text-xl mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed commercial electricians with comprehensive insurance coverage for your business protection.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="font-semibold electric-gray text-xl mb-3">Minimal Downtime</h3>
              <p className="text-gray-600">We work efficiently to minimize disruption to your business operations and get you back to normal quickly.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-yellow-600 h-8 w-8" />
              </div>
              <h3 className="font-semibold electric-gray text-xl mb-3">Energy Solutions</h3>
              <p className="text-gray-600">Cost-saving electrical solutions that reduce your energy bills while improving system performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-electric-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Business Success?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't let electrical issues slow down your business. Our commercial electrical experts are ready to provide reliable solutions that keep your operations running smoothly.
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
              Schedule Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
