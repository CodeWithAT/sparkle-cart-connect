
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !textRef.current || !imageRef.current) return;

      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const scrollPercentage = Math.min(scrollY / heroHeight, 1);

      // Parallax effect for text
      textRef.current.style.transform = `translateY(${scrollPercentage * 50}px)`;
      
      // Parallax effect for image - slower movement
      imageRef.current.style.transform = `translateY(${scrollPercentage * 30}px)`;
      
      // Opacity effect
      textRef.current.style.opacity = (1 - scrollPercentage * 1.5).toString();
      imageRef.current.style.opacity = (1 - scrollPercentage * 0.5).toString();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      {/* Background image */}
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1974&auto=format&fit=crop"
        alt="Luxury jewelry display"
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 scale-105"
      />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <div ref={textRef} className="transition-all duration-700">
          <div className="inline-block bg-gold px-3 py-1 mb-4 rounded-sm">
            <span className="text-white text-xs uppercase tracking-wider font-medium">Luxury Collection</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 tracking-tight">
            Timeless Elegance <br /> Extraordinary Craftsmanship
          </h1>
          
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Discover our collection of exquisite jewelry pieces designed to elevate your style with unparalleled sophistication.
          </p>
          
          <a 
            href="#collections" 
            className="inline-flex items-center bg-white text-black px-8 py-3 rounded hover:bg-gold hover:text-white transition-all duration-300 font-medium group"
          >
            Explore Collection
            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white flex flex-col items-center animate-float">
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-0.5 h-10 bg-white/50 rounded">
          <div className="w-full h-1/3 bg-white rounded animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
