import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Building, Factory } from "lucide-react";
import { Link } from "wouter";

export default function ServicesOverview() {
  const services = [
    {
      icon: Home,
      title: "Residential",
      description: "Complete home electrical services including wiring, panel upgrades, outlet installation, lighting, and emergency repairs.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      href: "/residential"
    },
    {
      icon: Building,
      title: "Commercial",
      description: "Professional electrical solutions for offices, retail spaces, restaurants, and other commercial properties.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      href: "/commercial"
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Heavy-duty electrical systems for manufacturing facilities, warehouses, and industrial complexes.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      href: "/industrial"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold electric-gray mb-4">Our Electrical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional electrical solutions for residential, commercial, and industrial needs throughout Little Rock and surrounding areas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="bg-gray-50 hover:shadow-xl transition-all duration-300 group border-0">
                <CardContent className="p-8 text-center">
                  <img 
                    src={service.image} 
                    alt={`${service.title} electrical work`} 
                    className="w-full h-48 object-cover rounded-lg mb-6" 
                  />
                  <div className="bg-electric-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors">
                    <Icon className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold electric-gray mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button 
                    className="bg-electric-yellow text-electric-blue hover:bg-yellow-500 font-semibold"
                    asChild
                  >
                    <Link href={service.href}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
