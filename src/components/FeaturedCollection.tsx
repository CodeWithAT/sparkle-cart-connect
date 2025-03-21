
import { useState, useRef, useEffect } from "react";
import { getFeaturedProducts, getNewArrivals, categories } from "@/lib/products";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedCollection = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const products = activeTab === "featured" 
    ? getFeaturedProducts() 
    : activeTab === "new" 
      ? getNewArrivals() 
      : getFeaturedProducts();

  const slidesPerView = 4; // This is for desktop, we'll handle responsive in CSS
  const totalSlides = Math.ceil(products.length / slidesPerView);
  
  const handlePrev = () => {
    setCurrentSlide(current => (current > 0 ? current - 1 : 0));
  };

  const handleNext = () => {
    setCurrentSlide(current => (current < totalSlides - 1 ? current + 1 : current));
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth;
      sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  }, [currentSlide]);

  return (
    <section id="collections" className="py-20 px-6 bg-jewel">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-sm text-gold uppercase tracking-wider font-medium mb-2">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-6">
            Exquisite Jewelry Pieces
          </h2>
          <p className="text-gray-600 text-center max-w-2xl">
            Each piece in our collection is crafted with exceptional attention to detail,
            using only the finest materials to create jewelry that transcends trends.
          </p>
        </div>

        {/* Collection tabs */}
        <div className="flex justify-center mb-8 space-x-6">
          <button
            className={`relative pb-1 text-sm font-medium transition-colors duration-300 ${
              activeTab === "featured" 
                ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold" 
                : "text-gray-400 hover:text-black"
            }`}
            onClick={() => setActiveTab("featured")}
          >
            Featured
          </button>
          <button
            className={`relative pb-1 text-sm font-medium transition-colors duration-300 ${
              activeTab === "new" 
                ? "text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold" 
                : "text-gray-400 hover:text-black"
            }`}
            onClick={() => setActiveTab("new")}
          >
            New Arrivals
          </button>
        </div>

        {/* Product slider with controls */}
        <div className="relative overflow-hidden">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="bg-white rounded-full p-3 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button
              onClick={handleNext}
              disabled={currentSlide === totalSlides - 1}
              className="bg-white rounded-full p-3 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Slider wrapper */}
          <div 
            ref={sliderRef} 
            className="flex transition-transform duration-500 ease-out"
            style={{ width: `${totalSlides * 100}%` }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
              {products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories section */}
        <div className="mt-20">
          <h2 className="text-3xl font-serif font-medium text-center mb-12">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <a 
                key={category.id} 
                href={`#${category.id}`}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-serif">{category.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
