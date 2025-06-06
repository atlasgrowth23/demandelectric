import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import QuoteForm from "./quote-form";
import { Link } from "wouter";

export default function HeroSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      background: "https://lh3.googleusercontent.com/p/AF1QipPWJ9FJjqUGqEFl9uudrmG_LcaWxG1Kxg9ZuIvG=s680-w680-h510-rw",
      title: "Demand Electric LLC",
      description: "Serving Little Rock and nearby areas with reliable electrical solutions.",
      buttons: [
        {
          text: "Call (501) 693-6229",
          href: "tel:5016936229",
          className: "bg-gradient-to-r from-electric-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4",
          icon: Phone
        },
        {
          text: "Get Free Quote",
          onClick: () => setIsFormOpen(true),
          className: "bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg shadow-xl px-8 py-4"
        }
      ]
    },
    {
      id: 2,
      background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
      title: "Our Professional Work",
      description: "See examples of our quality electrical installations and repairs",
      buttons: [
        {
          text: "View Full Gallery",
          href: "/gallery",
          className: "bg-gradient-to-r from-electric-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4"
        }
      ],
      images: [
        "https://lh3.googleusercontent.com/p/AF1QipNIr9GoCcLZ0XpSJDM9QLP9ATSHiR72Cx3vfRtl=s680-w680-h510-rw",
        "https://lh3.googleusercontent.com/p/AF1QipOb7mBL-cLUn42l-cG0Aqg4Yw4bpQJJojgAvlGR=s680-w680-h510-rw"
      ]
    },
    {
      id: 3,
      background: "https://lh3.googleusercontent.com/p/AF1QipOb7mBL-cLUn42l-cG0Aqg4Yw4bpQJJojgAvlGR=s680-w680-h510-rw",
      title: "Quality Electrical Work",
      description: "Professional installations and repairs you can trust",
      buttons: [
        {
          text: "View Full Gallery",
          href: "/gallery",
          className: "bg-gradient-to-r from-electric-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-4"
        }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const currentSlideData = slides[currentSlide];

  return (
    <section className="pt-24 min-h-screen relative overflow-hidden text-white">
      {/* Background */}
      {currentSlideData.images ? (
        // Gallery slide with two images
        <div className="absolute inset-0 bg-gray-900">
          <div className="grid grid-cols-2 h-full">
            <div 
              className="bg-cover bg-center"
              style={{backgroundImage: `url('${currentSlideData.images[0]}')`}}
            ></div>
            <div 
              className="bg-cover bg-center"
              style={{backgroundImage: `url('${currentSlideData.images[1]}')`}}
            ></div>
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ) : (
        // Single background image
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url('${currentSlideData.background}')`}}
          ></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </>
      )}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-electric-orange' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {currentSlideData.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            {currentSlideData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {currentSlideData.buttons.map((button, index) => (
              <Button 
                key={index}
                size="lg" 
                className={button.className}
                asChild={!!button.href}
                onClick={button.onClick}
              >
                {button.href ? (
                  <Link href={button.href} className="flex items-center justify-center">
                    {button.icon && <button.icon className="mr-2 h-5 w-5" />}
                    {button.text}
                  </Link>
                ) : (
                  <>
                    {button.icon && <button.icon className="mr-2 h-5 w-5" />}
                    {button.text}
                  </>
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <QuoteForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}
