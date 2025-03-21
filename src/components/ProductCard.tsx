
import { useState } from "react";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div 
      className="product-card bg-white rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container relative pb-[125%]">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
        )}
        
        <img
          src={product.imageUrl}
          alt={product.name}
          className={cn(
            "product-image absolute inset-0 w-full h-full object-cover",
            !isImageLoaded && "opacity-0"
          )}
          onLoad={() => setIsImageLoaded(true)}
        />
        
        {/* New tag */}
        {product.new && (
          <div className="absolute top-4 left-4 bg-black text-white text-xs py-1 px-2 rounded">
            NEW
          </div>
        )}
        
        {/* Add to cart overlay */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <button
            onClick={() => addToCart(product)}
            className="bg-white text-black hover:bg-gold hover:text-white px-4 py-2 rounded transition-colors duration-300 flex items-center text-sm font-medium animate-scale-in"
          >
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star size={16} className="text-gold fill-gold" />
            <span className="text-xs ml-1">{product.rating.toFixed(1)}</span>
          </div>
          <span className="text-xs ml-auto font-medium">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
        </div>
        
        <h3 className="font-serif text-lg font-medium mb-1">{product.name}</h3>
        
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {product.description}
        </p>
        
        <div className="font-medium">${product.price.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default ProductCard;
