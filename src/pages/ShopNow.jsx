import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaFilter, FaTimes, FaSearch } from 'react-icons/fa';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Card from '../components/common/Card';
import ScrollToTop from '../components/ScrollToTop';
import { menCategories } from '../data/menData';
import { womenCategories } from '../data/womenData';

const ShopNow = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 300]);

  // Categories for filter
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'men', name: 'Men' },
    { id: 'women', name: 'Women' },
    { id: 'kids', name: 'Kids' },
  ];

  // Fetch all products from all categories
  useEffect(() => {
    const fetchAllProducts = () => {
      const products = [];
      
      // Get Men products
      Object.values(menCategories).forEach(category => {
        category.products?.forEach(product => {
          products.push({
            ...product,
            category: 'men',
            categoryName: 'Men'
          });
        });
      });

      // Get Women products
      Object.values(womenCategories).forEach(category => {
        category.products?.forEach(product => {
          products.push({
            ...product,
            category: 'women',
            categoryName: 'Women'
          });
        });
      });

      // Get Kids products (if available)
      // Add kids products here if you have a kidsData file

      setAllProducts(products);
      setFilteredProducts(products);
      setLoading(false);
    };

    setTimeout(fetchAllProducts, 500);
  }, []);

  // Filter products
  useEffect(() => {
    let result = allProducts;

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) ||
        p.categoryName?.toLowerCase().includes(term)
      );
    }

    // Filter by price range
    result = result.filter(p => {
      const price = parseFloat(p.price?.replace('$', '') || 0);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    setFilteredProducts(result);
  }, [allProducts, selectedCategory, searchTerm, priceRange]);

  // Reset filters
  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setPriceRange([0, 300]);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar></Navbar>
        <div className="container-custom py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-xl h-64"></div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
     <div><Navbar />
    <div className="bg-gray-50 pl-5 pr-5 ">
       
      <ScrollToTop />
      

      <div className="container-custom py-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          
          
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg mt-3 md:mt-0"
          >
            <FaFilter />
            <span>Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* ===== FILTERS SIDEBAR ===== */}
          <div className={`md:col-span-1 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-black">Filters</h2>
                <button
                  onClick={resetFilters}
                  className="text-xs text-purple-600 hover:text-purple-700"
                >
                  Reset All
                </button>
              </div>

              {/* Search */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 block mb-1">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                  <FaSearch className="absolute right-3 top-3 text-gray-400" size={14} />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 block mb-1">Category</label>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-purple-600 text-white'
                          : 'hover:bg-purple-50 text-gray-700'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-purple-600"
                />
              </div>

              {/* Active Filters */}
              {(selectedCategory !== 'all' || searchTerm) && (
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2">Active Filters:</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedCategory !== 'all' && (
                      <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        {selectedCategory}
                        <button onClick={() => setSelectedCategory('all')}>
                          <FaTimes size={10} />
                        </button>
                      </span>
                    )}
                    {searchTerm && (
                      <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        "{searchTerm}"
                        <button onClick={() => setSearchTerm('')}>
                          <FaTimes size={10} />
                        </button>
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ===== PRODUCTS GRID ===== */}
          <div className="md:col-span-3">
            {filteredProducts.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      variants={itemVariants}
                      layout
                      className="relative"
                    >
                      <Card product={product} />
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 z-10 bg-black/70 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                        {product.categoryName}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-black mb-2">No Products Found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Load More / View All */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-8">
                <p className="text-sm text-gray-500">
                  Showing {filteredProducts.length} of {allProducts.length} products
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
</div>
      <Footer />
    </div>
  );
};

export default ShopNow;