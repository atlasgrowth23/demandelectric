import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Cog, Zap, Shield, Wrench, AlertTriangle } from "lucide-react";

export default function Industrial() {
  const services = [
    {
      icon: Factory,
      title: "Manufacturing Facilities",
      description: "Complex electrical systems for production facilities including machinery power, control systems, and safety equipment."
    },
    {
      icon: Cog,
      title: "Motor Control Systems",
      description: "Installation and maintenance of motor control centers, variable frequency drives, and industrial automation systems."
    },
    {
      icon: Zap,
      title: "High-Voltage Systems",
      description: "Specialized high-voltage electrical installations and maintenance for heavy industrial equipment and facilities."
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Industrial safety systems and electrical code compliance for OSHA and other regulatory requirements."
    },
    {
      icon: Wrench,
      title: "Preventive Maintenance",
      description: "Scheduled maintenance programs to prevent costly downtime and extend the life of your electrical systems."
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response",
      description: "24/7 emergency electrical services to minimize production downtime and restore operations quickly."
    }
  ];

  const capabilities = [
    "480V and higher voltage systems",
    "Motor control center installation",
    "Variable frequency drive (VFD) setup",
    "Industrial lighting design",
    "Power distribution systems",
    "Electrical safety audits",
    "Emergency generator connections",
    "Crane and hoist electrical systems"
  ];

  return (
    <div className="pt-16">
      <title>Industrial Electrical Services - Demand Electric LLC | Little Rock, AR</title>
      <meta name="description" content="Professional industrial electrical services in Little Rock, AR. Manufacturing facilities, motor control systems, high-voltage installations. Heavy-duty electrical solutions. Call (501) 693-6229." />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Industrial Electrical Services
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Specialized electrical services for manufacturing facilities, warehouses, and industrial complexes requiring high-capacity, reliable electrical systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-electric-yellow text-electric-blue hover:bg-yellow-500 font-semibold"
                  asChild
                >
                  <a href="tel:5016936229">Call for Service</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold"
                >
                  Industrial Assessment
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Industrial electrical control panels and systems" 
                className="rounded-xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold electric-gray mb-4">Heavy-Duty Industrial Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our industrial electrical expertise ensures your manufacturing and production facilities operate safely and efficiently with minimal downtime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-electric-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="electric-blue h-8 w-8" />
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
              <h2 className="text-3xl font-bold electric-gray mb-6">Industrial Electrical Expertise</h2>
              <p className="text-lg text-gray-600 mb-6">
                Industrial electrical work requires specialized knowledge and experience. Our team understands the unique challenges of manufacturing environments and heavy-duty electrical systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-yellow rounded-full mt-2"></div>
                  <div>
                    <strong className="electric-gray">Motor Control Systems:</strong>
                    <span className="text-gray-600"> Advanced motor controls for precise equipment operation</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-yellow rounded-full mt-2"></div>
                  <div>
                    <strong className="electric-gray">High-Voltage Installations:</strong>
                    <span className="text-gray-600"> Safe installation and maintenance of high-voltage systems</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-yellow rounded-full mt-2"></div>
                  <div>
                    <strong className="electric-gray">Industrial Lighting:</strong>
                    <span className="text-gray-600"> High-bay and specialized lighting for industrial environments</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-electric-yellow rounded-full mt-2"></div>
                  <div>
                    <strong className="electric-gray">Power Distribution:</strong>
                    <span className="text-gray-600"> Complex power distribution systems for large facilities</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Industrial electrical control room with monitoring systems" 
                className="rounded-xl shadow-xl w-full h-auto" 
              />
            </div>
          </div>

          {/* Capabilities */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold electric-gray mb-6 text-center">Our Industrial Capabilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold electric-gray mb-4">Safety is Our Priority</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industrial electrical work carries inherent risks. We prioritize safety in every project, ensuring compliance with all safety standards and regulations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-red-600 h-8 w-8" />
              </div>
              <h3 className="font-semibold electric-gray text-xl mb-3">OSHA Compliance</h3>
              <p className="text-gray-600">All work performed in compliance with OSHA safety standards and industrial electrical codes.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="text-yellow-600 h-8 w-8" />
              </div>
              <h3 className="font-semibold electric-gray text-xl mb-3">Risk Assessment</h3>
              <p className="text-gray-600">Comprehensive safety assessments before beginning any industrial electrical project.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="font-semibold electric-gray text-xl mb-3">Certified Technicians</h3>
              <p className="text-gray-600">Our industrial electricians are trained and certified in specialized industrial electrical systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-electric-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Keep Your Industrial Operations Running</h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't let electrical issues halt your production. Our industrial electrical specialists provide reliable solutions that keep your facility operating safely and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-electric-yellow text-electric-blue hover:bg-yellow-500 font-semibold text-lg"
              asChild
            >
              <a href="tel:5016936229">Call (501) 693-6229</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold text-lg"
            >
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
