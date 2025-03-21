
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md py-4 px-6",
        {
          "bg-white/80 shadow-sm": scrolled,
          "bg-transparent": !scrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold font-serif tracking-tight text-black animate-fade-in"
        >
          DHWANI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Collections", "New Arrivals", "About", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="nav-link text-sm font-medium text-gray-800 transition-all duration-200 hover:text-gold animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 animate-fade-in"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4 py-6 px-6">
            {["Collections", "New Arrivals", "About", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-gray-800 transition-all duration-200 hover:text-gold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
