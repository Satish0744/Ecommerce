import React from 'react';
import { FaShoppingCart, FaBolt, FaHeart, FaShare } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ActionButtons = ({ onAddToCart, onBuyNow, onWishlist, onShare }) => {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onAddToCart}
          className="flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
        >
          <FaShoppingCart />
          <span>Add to Cart</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBuyNow}
          className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
        >
          <FaBolt />
          <span>Buy Now</span>
        </motion.button>
      </div>

      <div className="flex items-center space-x-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onWishlist}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
        >
          <FaHeart />
          <span className="text-sm">Add to Wishlist</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onShare}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
        >
          <FaShare />
          <span className="text-sm">Share</span>
        </motion.button>
      </div>
    </div>
  );
};

export default ActionButtons;