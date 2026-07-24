export const menCategories = {
  topwear: {
    id: 'topwear',
    name: 'Topwear',
    image: 'https://i.pinimg.com/originals/c5/09/e4/c509e4ba4842c831aa60eb3a3b0aba50.jpg',
    subcategories: [
      { id: 'tshirts', name: 'T-Shirts' },
      { id: 'casual-shirts', name: 'Casual Shirts' },
      { id: 'formal-shirts', name: 'Formal Shirts' },
      { id: 'sweatshirts', name: 'Sweatshirts' },
      { id: 'sweaters', name: 'Sweaters' },
      { id: 'jackets', name: 'Jackets' },
      { id: 'blazers', name: 'Blazers & Coats' },
      { id: 'suits', name: 'Suits' },
    ],
    products: [
      {
        id: 101,
        name: 'Premium Cotton T-Shirt',
        price: '$29.99',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
        colors: ['#000000', '#FFFFFF', '#DC2626', '#3B82F6'],
        rating: 4.7,
        subcategory: 'tshirts'
      },
      {
        id: 102,
        name: 'Classic Casual Shirt',
        price: '$49.99',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#1E3A8A', '#4B5563'],
        rating: 4.5,
        subcategory: 'casual-shirts'
      },
      {
        id: 103,
        name: 'Formal Office Shirt',
        price: '$59.99',
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#1E3A8A', '#000000'],
        rating: 4.8,
        subcategory: 'formal-shirts'
      },
      {
        id: 104,
        name: 'Cozy Sweatshirt',
        price: '$39.99',
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop',
        colors: ['#4B5563', '#000000', '#DC2626'],
        rating: 4.3,
        subcategory: 'sweatshirts'
      },
      {
        id: 105,
        name: 'Wool Blend Sweater',
        price: '$69.99',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
        colors: ['#4B5563', '#8B4513', '#000000'],
        rating: 4.6,
        subcategory: 'sweaters'
      },
      {
        id: 106,
        name: 'Leather Jacket',
        price: '$129.99',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
        colors: ['#000000', '#4B3A1A', '#8B4513'],
        rating: 4.9,
        subcategory: 'jackets'
      },
      {
        id: 107,
        name: 'Elegant Blazer',
        price: '$149.99',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop',
        colors: ['#1E3A8A', '#000000', '#4B5563'],
        rating: 4.7,
        subcategory: 'blazers'
      },
      {
        id: 108,
        name: 'Premium Suit',
        price: '$249.99',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
        colors: ['#1E3A8A', '#000000', '#4B5563'],
        rating: 4.9,
        subcategory: 'suits'
      },
    ]
  },
  bottomwear: {
    id: 'bottomwear',
    name: 'Bottomwear',
    image: 'https://i.pinimg.com/originals/92/1e/93/921e93d7a9cf44af2c94cf79e263f91c.jpg',
    subcategories: [
      { id: 'jeans', name: 'Jeans' },
      { id: 'casual-trousers', name: 'Casual Trousers' },
      { id: 'formal-trousers', name: 'Formal Trousers' },
      { id: 'shorts', name: 'Shorts' },
      { id: 'track-pants', name: 'Track Pants & Joggers' },
    ],
    products: [
      {
        id: 201,
        name: 'Classic Blue Jeans',
        price: '$69.99',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop',
        colors: ['#1E3A8A', '#000000', '#4B5563'],
        rating: 4.5,
        subcategory: 'jeans'
      },
      {
        id: 202,
        name: 'Black Slim Jeans',
        price: '$74.99',
        image: 'https://images.unsplash.com/photo-1582552938357-589b37f1111e?w=400&h=400&fit=crop',
        colors: ['#000000', '#4B5563'],
        rating: 4.6,
        subcategory: 'jeans'
      },
      {
        id: 203,
        name: 'Casual Chinos',
        price: '$59.99',
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop',
        colors: ['#4B5563', '#8B4513', '#1E3A8A'],
        rating: 4.3,
        subcategory: 'casual-trousers'
      },
      {
        id: 204,
        name: 'Formal Trousers',
        price: '$79.99',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
        colors: ['#000000', '#4B5563', '#1E3A8A'],
        rating: 4.7,
        subcategory: 'formal-trousers'
      },
      {
        id: 205,
        name: 'Cargo Shorts',
        price: '$34.99',
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop',
        colors: ['#4B5563', '#000000', '#8B4513'],
        rating: 4.1,
        subcategory: 'shorts'
      },
      {
        id: 206,
        name: 'Track Pants',
        price: '$39.99',
        image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=400&fit=crop',
        colors: ['#000000', '#4B5563', '#1E3A8A'],
        rating: 4.4,
        subcategory: 'track-pants'
      },
    ]
  },
  festiveWear: {
    id: 'festive-wear',
    name: 'Indian & Festive Wear',
    image: 'https://i.pinimg.com/originals/0d/e9/7d/0de97d6ddf203ca2f1f9aee83ec18efc.jpg',
    subcategories: [
      { id: 'kurtas', name: 'Kurtas & Kurta Sets' },
      { id: 'sherwanis', name: 'Sherwanis' },
      { id: 'nehru-jackets', name: 'Nehru Jackets' },
      { id: 'dhotis', name: 'Dhotis' },
    ],
    products: [
      {
        id: 301,
        name: 'Embroidered Kurta',
        price: '$89.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#FCD34D', '#1E3A8A'],
        rating: 4.8,
        subcategory: 'kurtas'
      },
      {
        id: 302,
        name: 'Kurta Set with Dupatta',
        price: '$129.99',
        image: 'https://images.unsplash.com/photo-1603789943570-4dcb0e70e4cd?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#EC4899', '#FCD34D'],
        rating: 4.9,
        subcategory: 'kurtas'
      },
      {
        id: 303,
        name: 'Royal Sherwani',
        price: '$199.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FCD34D', '#FFFFFF', '#1E3A8A'],
        rating: 4.9,
        subcategory: 'sherwanis'
      },
      {
        id: 304,
        name: 'Designer Sherwani',
        price: '$249.99',
        image: 'https://images.unsplash.com/photo-1610030469640-a4b94c2c87a3?w=400&h=400&fit=crop',
        colors: ['#1E3A8A', '#FCD34D', '#FFFFFF'],
        rating: 4.8,
        subcategory: 'sherwanis'
      },
      {
        id: 305,
        name: 'Nehru Jacket',
        price: '$79.99',
        image: 'https://images.unsplash.com/photo-1617127365659-c47b864d8fb1?w=400&h=400&fit=crop',
        colors: ['#1E3A8A', '#000000', '#4B5563'],
        rating: 4.5,
        subcategory: 'nehru-jackets'
      },
      {
        id: 306,
        name: 'Traditional Dhoti',
        price: '$49.99',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=400&fit=crop',
        colors: ['#FFFFFF', '#FCD34D'],
        rating: 4.3,
        subcategory: 'dhotis'
      },
    ]
  }
};

// ============================================
// ✅ EXPORTS - MEN'S HELPERS
// ============================================

export const getProductsBySubcategory = (categoryId, subcategoryId) => {
  const category = menCategories[categoryId];
  if (!category) return [];
  return category.products.filter(p => p.subcategory === subcategoryId);
};

export const getProductsByCategory = (categoryId) => {
  const category = menCategories[categoryId];
  if (!category) return [];
  return category.products;
};

// ============================================
// ✅ DEFAULT EXPORT
// ============================================

const menData = {
  menCategories,
  getProductsBySubcategory,
  getProductsByCategory,
};

export default menData;
