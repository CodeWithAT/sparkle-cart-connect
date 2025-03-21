
import { useEffect } from "react";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        
        if (href?.startsWith('#')) {
          e.preventDefault();
          const element = document.getElementById(href.substring(1));
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80, // Adjust for navbar height
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <FeaturedCollection />
        
        {/* About section */}
        <section id="about" className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <span className="text-sm text-gold uppercase tracking-wider font-medium mb-2 inline-block">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                  Creating Jewelry With Love & Precision
                </h2>
                <p className="text-gray-600 mb-4">
                  At Dhwani, we believe that jewelry is more than an accessory—it's an expression of individuality, a celebration of milestones, and a legacy to be passed down through generations.
                </p>
                <p className="text-gray-600 mb-4">
                  Each piece in our collection is meticulously crafted by skilled artisans who combine traditional techniques with contemporary design sensibilities to create jewelry that transcends trends.
                </p>
                <p className="text-gray-600">
                  Our commitment to quality ensures that every diamond, gemstone, and precious metal meets the highest standards, resulting in jewelry that's not just beautiful but built to last.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?q=80&w=1974&auto=format&fit=crop" 
                    alt="Jewelry craftsmanship" 
                    className="rounded-lg w-full"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl max-w-xs">
                    <p className="font-serif text-xl mb-2">"Elegance is the only beauty that never fades."</p>
                    <p className="text-sm text-gray-500">— Our Design Philosophy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact section */}
        <section id="contact" className="py-20 px-6 bg-jewel">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-sm text-gold uppercase tracking-wider font-medium mb-2 inline-block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Let's Find Your Perfect Piece
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Have questions about our collection or need assistance with a purchase? Our jewelry experts are here to help you find the perfect piece.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Contact</h3>
                <p className="text-gray-600 text-sm">
                  +91 9999 999 999<br />
                  info@dhwanijewelry.com
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm">
                  123 Jewelry Street<br />
                  Mumbai, India 400001
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Hours</h3>
                <p className="text-gray-600 text-sm">
                  Monday - Saturday<br />
                  10:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Index;
