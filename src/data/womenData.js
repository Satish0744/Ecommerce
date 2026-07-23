export const womenCategories = {
  fusionwear: {
    id: 'fusionwear',
    name: 'Fusion Wear',
    image: '/src/assets/fusionimg.png',
    subcategories: [
      { id: 'kurtas-suits', name: 'Kurtas & Suits' },
      { id: 'kurtis-tunics', name: 'Kurtis, Tunics & Tops' },
      { id: 'sarees', name: 'Sarees' },
      { id: 'ethnic-wear', name: 'Ethnic Wear' },
      { id: 'leggings-salwars', name: 'Leggings, Salwars & Churidars' },
      { id: 'skirts-palazzos', name: 'Skirts & Palazzos' },
      { id: 'dress-materials', name: 'Dress Materials' },
      { id: 'lehenga-cholis', name: 'Lehenga Cholis' },
      { id: 'dupattas-shawls', name: 'Dupattas & Shawls' },
      { id: 'jackets', name: 'Jackets' },
    ],
    products: [
      {
        id: 401,
        name: 'Embroidered Kurta Suit',
        price: '$89.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#FCD34D', '#EC4899'],
        rating: 4.8,
        subcategory: 'kurtas-suits'
      },
      {
        id: 402,
        name: 'Designer Kurta Set',
        price: '$129.99',
        image: 'https://images.unsplash.com/photo-1603789943570-4dcb0e70e4cd?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#1E3A8A', '#FCD34D'],
        rating: 4.9,
        subcategory: 'kurtas-suits'
      },
      {
        id: 403,
        name: 'Cotton Kurta',
        price: '$59.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#4B5563', '#EC4899'],
        rating: 4.5,
        subcategory: 'kurtas-suits'
      },
      {
        id: 404,
        name: 'Printed Kurti',
        price: '$34.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#FCD34D', '#DC2626'],
        rating: 4.3,
        subcategory: 'kurtis-tunics'
      },
      {
        id: 405,
        name: 'Tunic Top',
        price: '$39.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#000000', '#FFFFFF', '#3B82F6'],
        rating: 4.4,
        subcategory: 'kurtis-tunics'
      },
      {
        id: 406,
        name: 'Banarasi Saree',
        price: '$149.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FCD34D', '#EC4899', '#1E3A8A'],
        rating: 4.9,
        subcategory: 'sarees'
      },
      {
        id: 407,
        name: 'Silk Saree',
        price: '$199.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#EC4899', '#FCD34D', '#1E3A8A'],
        rating: 4.8,
        subcategory: 'sarees'
      },
      {
        id: 408,
        name: 'Designer Lehenga',
        price: '$249.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FCD34D', '#EC4899', '#FFFFFF'],
        rating: 4.9,
        subcategory: 'lehenga-cholis'
      },
      {
        id: 409,
        name: 'Ethnic Wear Set',
        price: '$99.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#1E3A8A', '#FCD34D'],
        rating: 4.6,
        subcategory: 'ethnic-wear'
      },
      {
        id: 410,
        name: 'Palazzo Set',
        price: '$69.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#000000', '#4B5563', '#EC4899'],
        rating: 4.5,
        subcategory: 'skirts-palazzos'
      },
      {
        id: 411,
        name: 'Dupatta',
        price: '$29.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FCD34D', '#EC4899', '#FFFFFF'],
        rating: 4.2,
        subcategory: 'dupattas-shawls'
      },
      {
        id: 412,
        name: 'Ethnic Jacket',
        price: '$79.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#1E3A8A', '#000000', '#FCD34D'],
        rating: 4.7,
        subcategory: 'jackets'
      },
    ]
  },
  jewellery: {
    id: 'jewellery',
    name: 'Jewellery',
    image: '/src/assets/jewelryimg.jpg',
    subcategories: [
      { id: 'fashion-jewellery', name: 'Fashion Jewellery' },
      { id: 'fine-jewellery', name: 'Fine Jewellery' },
      { id: 'earrings', name: 'Earrings' },
      { id: 'nose', name: 'Nose' },
      { id: 'neckchain', name: 'Neckchain' },
    ],
    products: [
      {
        id: 501,
        name: 'Fashion Necklace Set',
        price: '$39.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FCD34D', '#FFFFFF', '#EC4899'],
        rating: 4.5,
        subcategory: 'fashion-jewellery'
      },
      {
        id: 502,
        name: 'Designer Earrings',
        price: '$24.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FCD34D', '#FFFFFF', '#1E3A8A'],
        rating: 4.3,
        subcategory: 'earrings'
      },
      {
        id: 503,
        name: 'Gold Plated Necklace',
        price: '$59.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FCD34D', '#FFFFFF'],
        rating: 4.7,
        subcategory: 'fine-jewellery'
      },
      {
        id: 504,
        name: 'Bridal Earrings',
        price: '$49.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FCD34D', '#EC4899', '#FFFFFF'],
        rating: 4.8,
        subcategory: 'earrings'
      },
      {
        id: 505,
        name: 'Fashion Ring Set',
        price: '$19.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FCD34D', '#FFFFFF', '#EC4899'],
        rating: 4.2,
        subcategory: 'fashion-jewellery'
      },
      {
        id: 506,
        name: 'Gold Earrings',
        price: '$89.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FCD34D', '#FFFFFF'],
        rating: 4.9,
        subcategory: 'fine-jewellery'
      },
    ]
  },
  westernwear: {
    id: 'westernwear',
    name: 'Western Wear',
    image: '/src/assets/westernimg.png',
    subcategories: [
      { id: 'dresses', name: 'Dresses' },
      { id: 'tops', name: 'Tops' },
      { id: 'tshirts', name: 'Tshirts' },
      { id: 'jeans', name: 'Jeans' },
      { id: 'trousers-capris', name: 'Trousers & Capris' },
      { id: 'shorts-skirts', name: 'Shorts & Skirts' },
      { id: 'co-ords', name: 'Co-ords' },
      { id: 'playsuits', name: 'Playsuits' },
    ],
    products: [
      {
        id: 601,
        name: 'Floral Maxi Dress',
        price: '$59.99',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#EC4899', '#3B82F6'],
        rating: 4.7,
        subcategory: 'dresses'
      },
      {
        id: 602,
        name: 'Summer Dress',
        price: '$49.99',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#FCD34D', '#EC4899'],
        rating: 4.5,
        subcategory: 'dresses'
      },
      {
        id: 603,
        name: 'Crop Top',
        price: '$29.99',
        image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=400&fit=crop',
        colors: ['#000000', '#FFFFFF', '#DC2626'],
        rating: 4.3,
        subcategory: 'tops'
      },
      {
        id: 604,
        name: 'Silk Blouse',
        price: '$39.99',
        image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#EC4899', '#1E3A8A'],
        rating: 4.6,
        subcategory: 'tops'
      },
      {
        id: 605,
        name: 'Graphic T-Shirt',
        price: '$24.99',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
        colors: ['#000000', '#FFFFFF', '#DC2626'],
        rating: 4.2,
        subcategory: 'tshirts'
      },
      {
        id: 606,
        name: 'High-Waist Jeans',
        price: '$69.99',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop',
        colors: ['#1E3A8A', '#000000', '#4B5563'],
        rating: 4.6,
        subcategory: 'jeans'
      },
      {
        id: 607,
        name: 'Skinny Jeans',
        price: '$59.99',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop',
        colors: ['#000000', '#1E3A8A', '#4B5563'],
        rating: 4.5,
        subcategory: 'jeans'
      },
      {
        id: 608,
        name: 'Casual Trousers',
        price: '$49.99',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
        colors: ['#4B5563', '#000000', '#8B4513'],
        rating: 4.4,
        subcategory: 'trousers-capris'
      },
      {
        id: 609,
        name: 'Denim Shorts',
        price: '$34.99',
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop',
        colors: ['#1E3A8A', '#000000', '#4B5563'],
        rating: 4.2,
        subcategory: 'shorts-skirts'
      },
      {
        id: 610,
        name: 'Co-ord Set',
        price: '$89.99',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#EC4899', '#1E3A8A'],
        rating: 4.8,
        subcategory: 'co-ords'
      },
      {
        id: 611,
        name: 'Playsuit',
        price: '$44.99',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#DC2626', '#3B82F6'],
        rating: 4.4,
        subcategory: 'playsuits'
      },
    ]
  }
};

// ============================================
// ✅ EXPORTS - WOMEN'S HELPERS
// ============================================

export const getWomenProductsBySubcategory = (categoryId, subcategoryId) => {
  const category = womenCategories[categoryId];
  if (!category) return [];
  return category.products.filter(p => p.subcategory === subcategoryId);
};

export const getWomenProductsByCategory = (categoryId) => {
  const category = womenCategories[categoryId];
  if (!category) return [];
  return category.products;
};

// ============================================
// ✅ DEFAULT EXPORT
// ============================================

const womenData = {
  womenCategories,
  getWomenProductsBySubcategory,
  getWomenProductsByCategory,
};

export default womenData;