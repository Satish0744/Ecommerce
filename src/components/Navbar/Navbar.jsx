import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaShoppingCart, 
  FaUser, 
  FaUserPlus, 
  FaSearch,
  FaHeart,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [wishlistCount] = useState(2);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Men', path: '/men/topwear' },
    { name: 'Women', path: '/women/fusionwear' },
    { name: 'Kids', path: '/kids' },
    { name: 'Overview', path: '/footer' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50 pl-5 pr-5">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* LOGO */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigation('/')}
            >
             <img src="/src/assets/logo.png" alt="logo" 
               className="w-auto h-auto max-h-14 object-contain"
             />
            </motion.div>

            {/* NAV LINKS */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(link.path)}
                  className="px-3 py-2 text-black hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-all duration-200"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* RIGHT ICONS */}
            <div className="flex items-center space-x-2 md:space-x-4">
              
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-black hover:text-purple-600 rounded-full hover:bg-purple-50 transition-all"
              >
                <FaSearch size={20} />
              </motion.button>

             

              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleNavigation('/cart')}
                className="relative p-2 text-black hover:text-purple-600 rounded-full hover:bg-purple-50 transition-all"
              >
                <FaShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </motion.button>

              {/* Login/Signup */}
              <div className="hidden sm:flex items-center space-x-2 ml-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation('/login')}
                  className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200"
                >
                  <FaUser size={14} />
                  <span>Login</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation('/signup')}
                  className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-all duration-200"
                >
                  <FaUserPlus size={14} />
                  <span>Sign Up</span>
                </motion.button>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-black hover:text-purple-600 rounded-lg hover:bg-purple-50 transition-all"
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="py-4 border-t border-gray-200"
              >
                <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="flex-1 px-4 py-2 bg-transparent text-black outline-none"
                    autoFocus
                  />
                  <button className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                    <FaSearch />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden py-4 border-t border-gray-200"
              >
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavigation(link.path)}
                      className="text-left px-4 py-2 text-black hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all"
                    >
                      {link.name}
                    </button>
                  ))}
                  
                  <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                    <button 
                      onClick={() => handleNavigation('/login')}
                      className="flex items-center justify-center space-x-2 w-full px-4 py-2 text-sm font-medium text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all"
                    >
                      <FaUser size={14} />
                      <span>Login</span>
                    </button>
                    <button 
                      onClick={() => handleNavigation('/signup')}
                      className="flex items-center justify-center space-x-2 w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-all"
                    >
                      <FaUserPlus size={14} />
                      <span>Sign Up</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;