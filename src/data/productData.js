export const productData = {
  id: 1,
  title: "Premium Wireless Noise-Cancelling Headphones",
  brand: "SoundMaster Pro",
  rating: 4.7,
  reviewCount: 284,
  price: 2999,
  originalPrice: 4999,
  discount: 40,
  description: "Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise-cancellation technology, these headphones deliver studio-quality sound with deep bass and crisp treble. Perfect for music lovers, gamers, and professionals.",
  specifications: {
    "Connectivity": "Bluetooth 5.0",
    "Battery Life": "Up to 30 hours",
    "Weight": "250g",
    "Driver Size": "40mm",
    "Frequency Response": "20Hz - 20kHz",
    "Impedance": "32Ω",
    "Compatibility": "iOS, Android, Windows, macOS",
    "Warranty": "1 Year"
  },
  images: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      alt: "Headphones main view"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800",
      alt: "Headphones side view"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1530908295418-a18b2c4aff8a?w=800",
      alt: "Headphones top view"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800",
      alt: "Headphones with case"
    }
  ],
  colors: [
    { id: 1, name: "Black", hex: "#000000", available: true },
    { id: 2, name: "White", hex: "#FFFFFF", available: true },
    { id: 3, name: "Blue", hex: "#3B82F6", available: true },
    { id: 4, name: "Red", hex: "#EF4444", available: false },
    { id: 5, name: "Green", hex: "#22C55E", available: false }
  ],
  sizes: [
    { id: 'XS', name: 'XS', available: false },
    { id: 'S', name: 'S', available: true },
    { id: 'M', name: 'M', available: true },
    { id: 'L', name: 'L', available: true },
    { id: 'XL', name: 'XL', available: false }
  ],
  deliveryInfo: {
    pincodes: ['110001', '110002', '110003', '400001', '400002', '500001'],
    estimatedDays: 3
  },
  offers: {
    bankOffers: [
      { id: 1, name: "SBI Credit Card", description: "10% instant discount up to ₹1500" },
      { id: 2, name: "HDFC Credit Card", description: "5% cashback up to ₹1000" },
      { id: 3, name: "ICICI Credit Card", description: "7% instant discount up to ₹1200" }
    ],
    coupons: [
      { id: 1, code: "SAVE20", description: "20% off on first order", discount: 20 },
      { id: 2, code: "NEWUSER", description: "₹200 off for new users", discount: 200 },
      { id: 3, code: "FREESHIP", description: "Free shipping on orders above ₹999" }
    ],
    freeShipping: true,
    cashback: "Get 5% cashback on prepaid orders"
  },
  reviews: [
    {
      id: 1,
      user: "Rahul Sharma",
      avatar: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=0ea5e9&color=fff&size=50",
      rating: 5,
      comment: "Absolutely love these headphones! The sound quality is amazing and the noise cancellation works perfectly. Best investment I've made.",
      date: "2024-01-15"
    },
    {
      id: 2,
      user: "Priya Patel",
      avatar: "https://ui-avatars.com/api/?name=Priya+Patel&background=ec4899&color=fff&size=50",
      rating: 4,
      comment: "Great product but the battery life could be better. Still, the sound quality makes up for it.",
      date: "2024-01-10"
    },
    {
      id: 3,
      user: "Amit Kumar",
      avatar: "https://ui-avatars.com/api/?name=Amit+Kumar&background=f59e0b&color=fff&size=50",
      rating: 5,
      comment: "Unbelievable value for money. The build quality is premium and it's very comfortable for long listening sessions.",
      date: "2024-01-05"
    },
    {
      id: 4,
      user: "Sneha Reddy",
      avatar: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=8b5cf6&color=fff&size=50",
      rating: 4.5,
      comment: "Excellent product! The design is sleek and the sound quality is top-notch. Highly recommend!",
      date: "2023-12-28"
    }
  ],
  relatedProducts: [
    {
      id: 2,
      title: "Wireless Bluetooth Speaker",
      brand: "SoundMaster Pro",
      price: 1999,
      originalPrice: 2999,
      discount: 33,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      reviewCount: 156
    },
    {
      id: 3,
      title: "USB-C Fast Charger",
      brand: "ChargeMaster",
      price: 999,
      originalPrice: 1499,
      discount: 33,
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1586810724476-b294b565c5dc?w=400",
      reviewCount: 89
    },
    {
      id: 4,
      title: "Laptop Stand Pro",
      brand: "DeskMate",
      price: 1499,
      originalPrice: 1999,
      discount: 25,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
      reviewCount: 203
    },
    {
      id: 5,
      title: "Mechanical Keyboard",
      brand: "TypeMaster",
      price: 2499,
      originalPrice: 3499,
      discount: 29,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
      reviewCount: 312
    },
    {
      id: 6,
      title: "Wireless Mouse",
      brand: "ClickTech",
      price: 799,
      originalPrice: 1299,
      discount: 38,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
      reviewCount: 178
    }
  ],
  stockStatus: "In Stock",
  sku: "SM-HP-2024-001",
  category: "Electronics > Audio > Headphones"
};