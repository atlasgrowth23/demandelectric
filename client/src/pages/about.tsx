import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Handshake, CreditCard, Shield, Users, Clock, Star } from "lucide-react";
import QuoteForm from "@/components/quote-form";
import { useQuoteForm } from "@/hooks/use-quote-form";

export default function About() {
  const { isFormOpen, openForm, closeForm } = useQuoteForm();
  const values = [
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Decades of proven expertise in electrical services across Arkansas, serving both residential and commercial customers."
    },
    {
      icon: Handshake,
      title: "Personal Approach",
      description: "Unlike big corporations that only want your money, we genuinely want to help and build lasting relationships with our customers."
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Options",
      description: "Multiple payment solutions to make our services accessible to everyone, because quality electrical work shouldn't break the bank."
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed electrical contractors with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled electricians stay current with the latest codes, technologies, and safety practices in the industry."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "We show up on time, complete projects as promised, and stand behind our work with comprehensive warranties."
    }
  ];

  return (
    <div className="pt-24">
      <title>About Demand Electric LLC - 25+ Years of Electrical Excellence</title>
      <meta name="description" content="Learn about Demand Electric LLC's 25+ years of electrical contracting experience in Little Rock, AR. Trusted local electricians with personalized service and flexible payment options." />
      
      {/* Hero Section */}
      <section className="py-20 min-h-[70vh] relative overflow-hidden text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://lh3.googleusercontent.com/p/AF1QipPWJ9FJjqUGqEFl9uudrmG_LcaWxG1Kxg9ZuIvG=s680-w680-h510-rw')"}}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[60vh]">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Demand Electric LLC</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12">
              With over 25 years of experience in the Mountain Pine, AR area, we've built our reputation on trustworthy solutions and exceptional customer service.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl md:text-5xl font-bold text-electric-orange mb-2">25+</div>
                <div className="text-lg md:text-xl">Years of Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex justify-center items-center mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-electric-orange mr-2">5.0</span>
                  <div className="flex text-electric-orange">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-lg md:text-xl">Google Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl md:text-5xl font-bold text-electric-orange mb-2">100%</div>
                <div className="text-lg md:text-xl">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold electric-gray mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  For over 25 years, Demand Electric LLC has been the trusted name in electrical services throughout the Mountain Pine and Little Rock areas. What started as a small local business has grown into a respected electrical contracting company, but we've never lost sight of our core values.
                </p>
                <p>
                  We understand that electrical work can be intimidating and expensive. That's why we take the time to carefully explain our process, so you know exactly what to expect. Our transparent approach and fair pricing have earned us the trust of countless homeowners and businesses across Arkansas.
                </p>
                <p>
                  Unlike large corporations that treat customers as just another number, we genuinely care about solving your electrical problems. We're committed to your satisfaction and offer flexible payment options to make our services accessible to everyone who needs them.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipPWJ9FJjqUGqEFl9uudrmG_LcaWxG1Kxg9ZuIvG=s680-w680-h510-rw" 
                alt="Demand Electric LLC professional electrical services" 
                className="rounded-xl shadow-xl w-full h-80 object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold electric-gray mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just electricians – we're your neighbors, committed to providing honest, reliable service that you can count on.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-electric-orange w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Icon className="text-white h-6 w-6" />
                    </div>
                    <h3 className="font-semibold electric-gray text-xl mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-electric-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the hundreds of satisfied customers who trust Demand Electric LLC for all their electrical needs. We're here to help with honest advice, quality work, and fair pricing.
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
              onClick={openForm}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
      <QuoteForm isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
}
