
import { useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag, CornerUpRight } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const { 
    items, 
    totalPrice, 
    removeFromCart, 
    updateQuantity, 
    isCartOpen, 
    setIsCartOpen,
    clearCart
  } = useCart();
  
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen, setIsCartOpen]);

  const handleCheckout = () => {
    // Format the WhatsApp message with cart items
    const cartItemsList = items.map(item => 
      `• ${item.quantity}x ${item.product.name} - $${(item.product.price * item.quantity).toLocaleString()}`
    ).join('%0A'); // %0A is the URL encoded version of a new line
    
    const message = `Hello, I would like to purchase:%0A${cartItemsList}%0A%0ATotal: $${totalPrice.toLocaleString()}`;
    
    // Create the WhatsApp URL with the message
    const whatsappUrl = `https://wa.me/+919999999999?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message and clear cart
    toast.success("Redirecting you to WhatsApp to complete your purchase!");
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex justify-end ${
        isCartOpen ? "visible" : "invisible"
      }`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isCartOpen ? "opacity-50" : "opacity-0"
        }`}
      />
      
      {/* Cart panel */}
      <div 
        ref={cartRef}
        className={`relative w-full max-w-md bg-white h-full shadow-xl flex flex-col transform transition-transform duration-300 ease-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif font-medium">Shopping Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4 pulse-animation">
                <ShoppingBag size={30} className="text-gray-400" />
              </div>
              <p className="text-lg font-serif mb-2">Your cart is empty</p>
              <p className="text-sm text-gray-500 mb-4">
                Add some beautiful jewelry to start your collection.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="inline-flex items-center text-sm text-gold"
              >
                <CornerUpRight size={16} className="mr-1" />
                Continue shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex border-b pb-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between">
                      <h3 className="font-serif text-base">
                        {item.product.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-black transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      {item.product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <p className="font-medium">
                        ${(item.product.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-6">
            <div className="flex justify-between text-base font-medium mb-2">
              <p>Subtotal</p>
              <p>${totalPrice.toLocaleString()}</p>
            </div>
            
            <p className="text-sm text-gray-500 mb-6">
              Shipping and taxes calculated at checkout.
            </p>
            
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white py-3 rounded hover:bg-gold transition-colors duration-300"
            >
              Checkout with WhatsApp
            </button>
            
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full text-sm text-gray-500 mt-4 hover:text-black transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
