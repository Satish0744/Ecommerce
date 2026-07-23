import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Review Data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      product: "Premium Cotton T-Shirt",
      rating: 5,
      date: "July 15, 2026",
      comment: "Absolutely love this t-shirt! The fabric is incredibly soft and the fit is perfect. I've received so many compliments. Definitely my new favorite casual wear!",
      category: "T-Shirt"
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?img=2",
      product: "Classic Denim Jeans",
      rating: 4.5,
      date: "July 12, 2026",
      comment: "These jeans are amazing! The quality is top-notch and they look great with everything. The fit is true to size and very comfortable for all-day wear.",
      category: "Pants"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=3",
      product: "Wool Blend Sweater",
      rating: 5,
      date: "July 8, 2026",
      comment: "This sweater is a game-changer! So warm and cozy, perfect for chilly evenings. The material is premium quality and it doesn't lose its shape after washing.",
      category: "Sweater"
    },
    {
      id: 4,
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/150?img=4",
      product: "Gold Plated Necklace",
      rating: 4.5,
      date: "July 5, 2026",
      comment: "Stunning piece of jewelry! The craftsmanship is exceptional and it adds the perfect touch to any outfit. I've been wearing it daily and it still looks brand new.",
      category: "Jewelry"
    }
  ];

  // Rating stars component
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }
    return stars;
  };

  // Get category emoji
  const getCategoryEmoji = (category) => {
    switch(category) {
      case 'T-Shirt': return '👕';
      case 'Pants': return '👖';
      case 'Sweater': return '🧥';
      case 'Jewelry': return '💎';
      default: return '🛍️';
    }
  };

  // Navigation handlers
  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(128, 0, 128, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.4,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    }
  };

  const avatarVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real reviews from real customers who love our products
          </p>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Reviews Grid - Desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative Background */}
              <motion.div 
                className="absolute -top-10 -right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20"
                animate={{
                  scale: hoveredCard === index ? 1.5 : 1,
                  transition: { duration: 0.5 }
                }}
              />

              {/* Category Badge */}
              <motion.div 
                className="inline-flex items-center gap-1 bg-purple-50 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                whileHover={{ scale: 1.05 }}
              >
                <span>{getCategoryEmoji(review.category)}</span>
                <span>{review.category}</span>
              </motion.div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex gap-0.5 text-sm">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm font-medium text-gray-700 ml-2">
                  {review.rating}
                </span>
              </div>

              {/* Quote Icon */}
              <motion.div
                variants={quoteVariants}
                initial="hidden"
                animate="visible"
                className="text-purple-300 mb-2"
              >
                <FaQuoteLeft size={20} />
              </motion.div>

              {/* Comment */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                {review.comment}
              </p>

              <motion.div
                variants={quoteVariants}
                initial="hidden"
                animate="visible"
                className="text-purple-300 text-right"
              >
                <FaQuoteRight size={20} />
              </motion.div>

              {/* User Info */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <motion.div
                  variants={avatarVariants}
                  whileHover="hover"
                  className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-200 flex-shrink-0"
                >
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-black text-sm truncate">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-500 truncate">
                    {review.product}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {review.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mx-2"
            >
              {/* Category Badge */}
              <motion.div 
                className="inline-flex items-center gap-1 bg-purple-50 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                whileHover={{ scale: 1.05 }}
              >
                <span>{getCategoryEmoji(reviews[currentIndex].category)}</span>
                <span>{reviews[currentIndex].category}</span>
              </motion.div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex gap-0.5 text-sm">
                  {renderStars(reviews[currentIndex].rating)}
                </div>
                <span className="text-sm font-medium text-gray-700 ml-2">
                  {reviews[currentIndex].rating}
                </span>
              </div>

              {/* Comment */}
              <FaQuoteLeft className="text-purple-300 mb-2" size={16} />
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                {reviews[currentIndex].comment}
              </p>
              <FaQuoteRight className="text-purple-300 text-right ml-auto" size={16} />

              {/* User Info */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-200 flex-shrink-0">
                  <img 
                    src={reviews[currentIndex].avatar} 
                    alt={reviews[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-black text-sm truncate">
                    {reviews[currentIndex].name}
                  </h4>
                  <p className="text-xs text-gray-500 truncate">
                    {reviews[currentIndex].product}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {reviews[currentIndex].date}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-purple-50 transition-colors"
          >
            <FiChevronLeft size={20} className="text-purple-600" />
          </button>
          <button
            onClick={nextReview}
            className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-purple-50 transition-colors"
          >
            <FiChevronRight size={20} className="text-purple-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-purple-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Reviews Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Reviews
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;