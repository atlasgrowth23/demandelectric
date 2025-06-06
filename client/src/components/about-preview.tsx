import { Award, Handshake, CreditCard } from "lucide-react";

export default function AboutPreview() {
  const features = [
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Decades of proven expertise in electrical services across Arkansas."
    },
    {
      icon: Handshake,
      title: "Personal Approach",
      description: "Unlike big corporations, we genuinely want to help with personalized service."
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Options",
      description: "Multiple payment solutions to make our services accessible to everyone."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold electric-gray mb-6">Why Choose Demand Electric LLC?</h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 25 years of experience in the Mountain Pine, AR area, you can trust our electrical contractors to provide trustworthy solutions and exceptional customer service. We'll carefully explain our process, so you know what to expect.
            </p>
            
            <div className="space-y-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start">
                    <div className="bg-electric-yellow w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon className="electric-blue h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold electric-gray mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Professional electricians with tools and safety equipment" 
              className="rounded-xl shadow-xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
