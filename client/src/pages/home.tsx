import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import AboutPreview from "@/components/about-preview";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div>
      <title>Demand Electric LLC - Professional Electrical Services | Little Rock, AR</title>
      <meta name="description" content="Professional electrical services with 25+ years of experience in Little Rock, AR. Residential, commercial & industrial electrical solutions. Call (501) 693-6229 for reliable service." />
      
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      
      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold electric-gray mb-4">Our Work Gallery</h2>
            <p className="text-xl text-gray-600">See examples of our professional electrical installations and repairs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
              alt="Modern electrical panel installation" 
              className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer" 
            />
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
              alt="Modern office lighting installation" 
              className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer" 
            />
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
              alt="Industrial electrical control systems" 
              className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer" 
            />
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
              alt="Professional residential electrical wiring" 
              className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer" 
            />
          </div>
          
          <div className="text-center mt-12">
            <a href="/gallery" className="bg-electric-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors inline-block">
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
