
import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and about */}
          <div className="md:col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-serif mb-4">DHWANI</h2>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Exquisite jewelry crafted with passion and precision, bringing elegance to every moment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4 font-medium">Collections</h3>
            <ul className="space-y-2">
              {["Necklaces", "Rings", "Earrings", "Bracelets", "Wedding Jewelry"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4 font-medium">Information</h3>
            <ul className="space-y-2">
              {["About Us", "Contact", "Terms & Conditions", "Privacy Policy", "Shipping & Returns"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4 font-medium">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 text-sm rounded-l outline-none focus:ring-1 focus:ring-gold w-full"
              />
              <button
                type="submit"
                className="bg-gold px-4 py-2 rounded-r text-white text-sm font-medium hover:bg-gold-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Dhwani Jewelry. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Made with <Heart size={14} className="mx-1 text-gold" /> for elegant jewelry lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
