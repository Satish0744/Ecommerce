import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShoppingBag } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import { womenCategories } from '../../data/womenData';
import ScrollToTop from '../../components/ScrollToTop';

const Women = () => {
  const categories = Object.values(womenCategories);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    },
    hover: {
      y: -8,
      boxShadow: "0 15px 40px rgba(128, 0, 128, 0.12)",
      transition: { duration: 0.25, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.06,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.25 }
    }
  };

  const subItemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="bg-gray-50 ">
 
      <ScrollToTop />
      
      <div className="container-custom py-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-1">
            Women's <span className="text-purple-600">Collection</span>
          </h1>
          <p className="text-gray-600">Explore our elegant women's fashion categories</p>
          <div className="w-16 h-0.5 bg-purple-600 mt-2 rounded-full"></div>
        </motion.div>

        {/* Category Cards - Compact Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group relative"
            >
              {/* IMAGE SECTION */}
              <Link 
                to={`/women/${category.id}`}
                className="block relative overflow-hidden bg-gray-100"
              >
                <motion.div 
                  variants={imageVariants}
                  className="h-48 md:h-52 w-full relative"
                >
                  <img 
                    src={category.image || '/images/categories/placeholder.jpg'} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  
                  <motion.div 
                    variants={overlayVariants}
                    initial="hidden"
                    whileHover="hover"
                    className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-800/30 to-transparent flex flex-col items-center justify-center"
                  >
                    <motion.span 
                      className="text-5xl opacity-90 drop-shadow-2xl"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {category.icon}
                    </motion.span>
                    <motion.p 
                      className="text-white text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      View Collection
                    </motion.p>
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaShoppingBag className="text-purple-600" size={14} />
                  </motion.div>
                </motion.div>
              </Link>

              {/* CONTENT SECTION */}
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h2 className="text-base font-bold text-black">{category.name}</h2>
                    <p className="text-xs text-gray-500">
                      {category.subcategories.length} subcategories
                    </p>
                  </div>
                  <motion.span 
                    className="text-[10px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    {category.subcategories.length}
                  </motion.span>
                </div>
                
                <motion.div 
                  className="grid grid-cols-2 gap-0.5 mt-2"
                  initial="hidden"
                  animate="visible"
                >
                  {category.subcategories.slice(0, 4).map((sub, idx) => (
                    <motion.div
                      key={sub.id}
                      variants={subItemVariants}
                    >
                      <Link
                        to={`/women/${category.id}/${sub.id}`}
                        className="block text-xs text-gray-600 hover:text-purple-600 transition-all duration-200 py-0.5 px-1.5 hover:bg-purple-50 rounded"
                      >
                        • {sub.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
                
                {category.subcategories.length > 4 && (
                  <p className="text-[10px] text-gray-400 mt-1">
                    +{category.subcategories.length - 4} more
                  </p>
                )}
              </div>

              {/* EXPLORE BUTTON */}
              <div className="px-4 pb-4 pt-1 border-t border-gray-100">
                <Link
                  to={`/women/${category.id}`}
                  className="group flex items-center justify-between text-purple-600 font-semibold hover:text-purple-700 transition-colors py-1.5 px-3 rounded-lg hover:bg-purple-50 text-sm"
                >
                  <span>Explore {category.name}</span>
                  <motion.span
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <FaArrowRight className="text-xs" />
                  </motion.span>
                </Link>
              </div>

              {/* Decorative Corner */}
              <motion.div 
                className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Women;
