import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaStar, FaTruck, FaShieldAlt, FaTag, FaGem } from 'react-icons/fa';
import Button from '../common/Button';
import { trustBadges } from '../../data/heroData';

const Hero = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const floatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Handle navigation to ShopNow
  const handleShopNow = () => {
    navigate('/shopnow');
  };

  return (
    <section className="relative overflow-hidden py-4 px-4 md:px-6">
      {/* ===== BACKGROUND IMAGE ===== */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/bg-main.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-50 rounded-full opacity-10 blur-3xl"></div>
      
      {/* Animated Floating Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-10 h-10 bg-purple-200 rounded-full opacity-30"
        animate={floatAnimation}
      />
      <motion.div 
        className="absolute bottom-28 left-20 w-8 h-8 bg-pink-200 rounded-full opacity-30"
        animate={{
          y: [0, -12, 0],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
      />
      <motion.div 
        className="absolute top-1/3 left-10 w-6 h-6 bg-purple-300 rounded-full opacity-20"
        animate={{
          y: [0, -15, 0],
          transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-130px)]"
        >
          
          {/* ===== LEFT COLUMN - Content ===== */}
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Badge */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-200"
            >
              <motion.span 
                className="w-2 h-2 bg-purple-600 rounded-full mr-2"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              ✨ New Collection 2026
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight"
            >
              Elevate Your{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Style
              </span>
              <br />
              <span className="text-black">With Our Exclusive Collection</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg"
            >
              Discover the latest trends in fashion. From casual wear to formal attire, 
              we bring you premium quality clothing that defines elegance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              {/* Shop Now Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={handleShopNow}
                  className="bg-purple-600 hover:bg-gray-200 hover:text-purple-600 text-white transition-all duration-300 px-6 py-2.5"
                >
                  Shop Now <FaArrowRight className="ml-2" size={16} />
                </Button>
              </motion.div>
              
              {/* Explore Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={handleShopNow}
                  className="bg-purple-600 hover:bg-gray-200 hover:text-purple-600 text-white transition-all duration-300 px-6 py-2.5"
                >
                  Explore <FaArrowRight className="ml-2" size={16} />
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              variants={itemVariants}
              className="pt-3"
            >
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.2, zIndex: 10 }}
                        className="w-8 h-8 rounded-full border-2 border-white bg-cover shadow-sm" 
                        style={{ backgroundImage: `url(https://i.pravatar.cc/150?img=${i+10})` }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Trusted by {trustBadges.customers}</span>
                </motion.div>
                
                <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-1"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <FaStar className="text-yellow-400 text-sm" />
                    </motion.span>
                  ))}
                  <span className="text-sm font-semibold text-gray-800 ml-1">{trustBadges.rating}</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-6 pt-2"
            >
              {trustBadges.benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05, color: "#7C3AED" }}
                  className="flex items-center space-x-2 text-sm text-gray-700"
                >
                  {i === 0 && <FaTruck className="text-purple-600" />}
                  {i === 1 && <FaShieldAlt className="text-purple-600" />}
                  {i === 2 && <FaTag className="text-purple-600" />}
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium Badge */}
            <motion.div 
              variants={itemVariants}
              className="pt-1"
            >
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <FaGem className="text-purple-600" />
                <span>Premium Quality • Free Shipping • 30-Day Returns</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ===== RIGHT COLUMN - Image ===== */}
          <motion.div 
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            <motion.div 
              className="relative w-full max-w-lg mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/main-img.jpg" 
                  alt="Premium Clothing Collection"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                
                {/* Decorative Border Effect */}
                <div className="absolute inset-0 border-2 border-purple-500/20 rounded-2xl pointer-events-none"></div>
                
                {/* Discount Badge */}
                <motion.div 
                  className="absolute top-4 right-4 bg-purple-600 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                >
                  UP TO 40% OFF
                </motion.div>

                {/* Bottom Gradient Overlay with Text */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-white text-base font-medium">Premium Collection</p>
                  <p className="text-white/80 text-sm">New arrivals this season</p>
                </motion.div>
              </div>

              {/* Floating Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-purple-400 rounded-full opacity-10 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  transition: { duration: 4, repeat: Infinity }
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-400 rounded-full opacity-10 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  transition: { duration: 5, repeat: Infinity, delay: 1 }
                }}
              />

              {/* Subtle Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl blur-2xl -z-10"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;