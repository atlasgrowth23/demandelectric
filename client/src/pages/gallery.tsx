import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, ZoomIn } from "lucide-react";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Modern electrical panel installation",
      category: "Residential",
      title: "Electrical Panel Upgrade"
    },
    {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Modern office lighting installation",
      category: "Commercial",
      title: "Office Lighting Design"
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Industrial electrical control systems",
      category: "Industrial",
      title: "Control Panel Installation"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Professional residential electrical wiring",
      category: "Residential",
      title: "Home Rewiring Project"
    },
    {
      src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Professional electricians at work",
      category: "Commercial",
      title: "Commercial Installation"
    },
    {
      src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Industrial control room systems",
      category: "Industrial",
      title: "Industrial Control Systems"
    },
    {
      src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Outdoor electrical installation",
      category: "Residential",
      title: "Outdoor Lighting Installation"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Modern office building electrical",
      category: "Commercial",
      title: "Office Building Project"
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Industrial"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="pt-24">
      <title>Project Gallery - Demand Electric LLC | Little Rock, AR</title>
      <meta name="description" content="View our completed electrical projects in Little Rock, AR. Residential, commercial, and industrial electrical work gallery. Professional electrical installations and repairs." />
      
      {/* Hero Section */}
      <section className="py-20 min-h-[60vh] relative overflow-hidden text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://lh3.googleusercontent.com/p/AF1QipPWJ9FJjqUGqEFl9uudrmG_LcaWxG1Kxg9ZuIvG=s680-w680-h510-rw')"}}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex items-center min-h-[50vh]">
          <div className="w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work Gallery</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
              See examples of our professional electrical installations and repairs across residential, commercial, and industrial projects throughout Little Rock and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-lg">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  className={activeCategory === category ? "bg-electric-blue text-white" : "text-gray-600"}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0 relative">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white hover:bg-white/20"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <ZoomIn className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold electric-gray">{image.title}</h3>
                        <span className="text-sm text-gray-500">{image.category}</span>
                      </div>
                      <span className="bg-electric-orange text-white px-2 py-1 rounded text-xs font-semibold">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold electric-blue mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold electric-blue mb-2">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold electric-blue mb-2">100%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold electric-blue mb-2">5.0</div>
                <div className="text-gray-600">Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-electric-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us bring the same level of professionalism and quality to your electrical project. Contact us today for a free consultation and estimate.
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
              className="bg-white text-electric-blue hover:bg-gray-100 font-semibold text-lg"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
