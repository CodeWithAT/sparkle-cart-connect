
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  featured: boolean;
  new: boolean;
  rating: number;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Diamond Solitaire Pendant",
    description: "Elegant diamond solitaire pendant set in 18K white gold, perfect for any occasion.",
    price: 1299,
    imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
    category: "necklaces",
    featured: true,
    new: true,
    rating: 4.9
  },
  {
    id: "2",
    name: "Gold Hoop Earrings",
    description: "Classic 14K gold hoop earrings with a modern twist, lightweight and comfortable.",
    price: 499,
    imageUrl: "https://images.unsplash.com/photo-1620382543351-73aafc94ea85?q=80&w=1974&auto=format&fit=crop",
    category: "earrings",
    featured: true,
    new: false,
    rating: 4.7
  },
  {
    id: "3",
    name: "Pearl Bracelet",
    description: "Luxurious freshwater pearl bracelet with a 18K gold clasp, timeless elegance.",
    price: 349,
    imageUrl: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1964&auto=format&fit=crop",
    category: "bracelets",
    featured: true,
    new: false,
    rating: 4.8
  },
  {
    id: "4",
    name: "Sapphire Ring",
    description: "Stunning blue sapphire ring surrounded by diamonds, set in platinum.",
    price: 1899,
    imageUrl: "https://images.unsplash.com/photo-1587467512961-120b42581a9f?q=80&w=2070&auto=format&fit=crop",
    category: "rings",
    featured: true,
    new: true,
    rating: 5.0
  },
  {
    id: "5",
    name: "Diamond Tennis Bracelet",
    description: "Exquisite diamond tennis bracelet featuring 3 carats of brilliant-cut diamonds in 14K white gold.",
    price: 2599,
    imageUrl: "https://images.unsplash.com/photo-1515562159301-cbe6e2d6c8a8?q=80&w=2070&auto=format&fit=crop",
    category: "bracelets",
    featured: false,
    new: true,
    rating: 4.9
  },
  {
    id: "6",
    name: "Emerald Drop Earrings",
    description: "Gorgeous emerald drop earrings surrounded by diamonds, set in 18K white gold.",
    price: 1799,
    imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1974&auto=format&fit=crop",
    category: "earrings",
    featured: false,
    new: true,
    rating: 4.8
  },
  {
    id: "7",
    name: "Gold Chain Necklace",
    description: "Sleek 18K gold chain necklace with a modern design, versatile for everyday wear.",
    price: 899,
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop",
    category: "necklaces",
    featured: false,
    new: false,
    rating: 4.6
  },
  {
    id: "8",
    name: "Ruby Pendant",
    description: "Vibrant ruby pendant surrounded by diamonds, suspended on an 18K gold chain.",
    price: 1299,
    imageUrl: "https://images.unsplash.com/photo-1602749288568-9eeb164b4b21?q=80&w=2070&auto=format&fit=crop",
    category: "necklaces",
    featured: false,
    new: false,
    rating: 4.7
  }
];

export const categories = [
  { 
    id: "necklaces", 
    name: "Necklaces", 
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1974&auto=format&fit=crop"
  },
  { 
    id: "rings", 
    name: "Rings", 
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    id: "earrings", 
    name: "Earrings", 
    image: "https://images.unsplash.com/photo-1596944924616-7b38e4b80b08?q=80&w=1974&auto=format&fit=crop" 
  },
  { 
    id: "bracelets", 
    name: "Bracelets", 
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1974&auto=format&fit=crop" 
  }
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.new);
};
