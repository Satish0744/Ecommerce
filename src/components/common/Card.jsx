import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useCart } from '../../context/CartContext';

const Card = ({ product, className = '' }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`
        bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 
        overflow-hidden border border-gray-100
        ${className}
      `}
    >
      {/* Image - Reduced height */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden group">
        <div className="aspect-square overflow-hidden bg-gray-50">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
          
        </div>
      </Link>

      {/* Product Info - Compact */}
      <div className="p-3 space-y-1.5">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-black hover:text-purple-600 transition-colors line-clamp-1 text-sm">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-black">
            {product.price}
          </span>
          
          {product.rating && (
            <div className="flex items-center space-x-0.5">
              <span className="text-yellow-400 text-xs">★</span>
              <span className="text-xs font-medium text-gray-600">{product.rating}</span>
            </div>
          )}
        </div>

        {/* Colors - Compact */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center space-x-1 pt-0.5">
            <span className="text-[10px] text-gray-500 mr-0.5">Colors:</span>
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-3.5 h-3.5 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
                title={`Color ${index + 1}`}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-[10px] text-gray-400">+{product.colors.length - 3}</span>
            )}
          </div>
        )}

        {/* Add to Cart Button - Compact */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="w-full mt-1.5 bg-purple-600 hover:bg-purple-700 text-white font-medium py-1.5 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1.5 text-sm"
        >
          <FaShoppingCart size={12} />
          <span>Add to Cart</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Card;
