import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Card from '../common/Card';
import { categoryProducts } from '../../data/categoryData';
import ScrollToTop from '../ScrollToTop';

const Section1 = () => {
  const [activeCategory, setActiveCategory] = useState('men');

  // Category tabs configuration
  const categories = [
    { id: 'men', label: 'Men', path: '/men' },
    { id: 'women', label: 'Women', path: '/women' },
    { id: 'kids', label: 'Kids', path: '/kids' },
  ];

  // Get products for active category
  const products = categoryProducts[activeCategory] || [];

  // Handle View All click - opens in new tab
  const handleViewAllClick = (path) => {
    window.open(path, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 bg-cream-200">
      <div className="container-custom">
        <ScrollToTop></ScrollToTop>
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 md:space-x-3 bg-gray-100 p-1.5 rounded-full">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300
                  ${activeCategory === category.id 
                    ? 'bg-white text-black shadow-md' 
                    : 'text-gray-600 hover:text-black'
                  }
                `}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* View All Button - Opens in New Tab */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleViewAllClick(`/${activeCategory}`)}
            className="group flex items-center space-x-2 mt-4 sm:mt-0 text-black font-semibold hover:text-purple-600 transition-colors cursor-pointer"
          >
            <span>View All</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
          >
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Section1;
