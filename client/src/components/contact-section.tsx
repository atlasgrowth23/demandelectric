import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "(501) 693-6229",
      href: "tel:5016936229"
    },
    {
      icon: MapPin,
      title: "Service Area",
      description: "We serve the entire region",
      value: "Little Rock & Nearby Areas",
      href: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "When we're available",
      value: "Open • Closes 5 PM",
      href: null
    }
  ];

  return (
    <section className="py-20 bg-electric-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100">Contact us today for reliable electrical services in Little Rock and nearby areas.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="text-center">
                <div className="bg-electric-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="electric-blue h-8 w-8" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-blue-100 mb-4">{item.description}</p>
                <p className="text-electric-yellow font-semibold text-lg">
                  {item.value}
                </p>
              </div>
            );

            return item.href ? (
              <a key={item.title} href={item.href} className="hover:opacity-80 transition-opacity">
                {content}
              </a>
            ) : (
              <div key={item.title}>
                {content}
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-electric-yellow text-electric-blue hover:bg-yellow-500 font-bold text-lg"
          >
            Get Your Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
}
