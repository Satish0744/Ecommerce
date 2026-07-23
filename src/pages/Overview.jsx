import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaTshirt, 
  FaFemale, 
  FaMale, 
  FaChild, 
  FaGem,
  FaShippingFast,
  FaShieldAlt,
  FaUndo,
  FaHeadset,
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Overview = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardHover = {
    hover: {
      scale: 1.03,
      boxShadow: "0 20px 40px rgba(128, 0, 128, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  // Data
  const categories = [
    { id: 'men', name: 'Men', icon: <FaMale className="text-4xl" />, color: 'from-blue-500 to-indigo-600', desc: 'Premium men\'s fashion' },
    { id: 'women', name: 'Women', icon: <FaFemale className="text-4xl" />, color: 'from-pink-500 to-rose-600', desc: 'Elegant women\'s collection' },
    { id: 'kids', name: 'Kids', icon: <FaChild className="text-4xl" />, color: 'from-green-500 to-emerald-600', desc: 'Adorable kids\' fashion' },
    { id: 'jewellery', name: 'Jewellery', icon: <FaGem className="text-4xl" />, color: 'from-yellow-500 to-amber-600', desc: 'Stunning jewellery' },
  ];

  const features = [
    { icon: <FaShippingFast className="text-3xl" />, title: 'Free Shipping', desc: 'Free delivery on orders above $99' },
    { icon: <FaShieldAlt className="text-3xl" />, title: 'Secure Payment', desc: '100% secure payment methods' },
    { icon: <FaUndo className="text-3xl" />, title: 'Easy Returns', desc: '30-day return policy' },
    { icon: <FaHeadset className="text-3xl" />, title: '24/7 Support', desc: 'Dedicated customer support' },
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '100+', label: 'Premium Brands' },
    { number: '500+', label: 'Products' },
    { number: '4.9/5', label: 'Average Rating' },
  ];

  return (
    <div className="bg-white min-h-screen pl-8 pr-8">
      <ScrollToTop />
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 overflow-hidden ">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to <span className="text-yellow-300">ShopVerse</span>
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Your premium destination for fashion, style, and elegance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Start Shopping
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-purple-600">{stat.number}</h3>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT US ===== */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                About <span className="text-purple-600">ShopVerse</span>
              </h2>
              <div className="w-20 h-1 bg-purple-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                ShopVerse is a premium clothing store dedicated to bringing you the latest fashion trends 
                with unmatched quality and style. We believe that everyone deserves to look and feel their best.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our carefully curated collection features a wide range of apparel and accessories for men, 
                women, and kids. We work with the best brands and designers to ensure you get nothing but 
                the finest products.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-purple-600" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-purple-600" />
                  <span>Latest Trends</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-purple-600" />
                  <span>Affordable Prices</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">👔</div>
                  <h3 className="text-2xl font-bold text-purple-600">Fashion For Everyone</h3>
                  <p className="text-gray-600">Quality clothing that defines your style</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-600 rounded-full opacity-10 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-500 rounded-full opacity-10 blur-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-black">
              Our <span className="text-purple-600">Categories</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 mt-2">
              Explore our wide range of fashion categories
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                whileHover="hover"
                variants={cardHover}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <Link to={`/${category.id}`} className="block">
                  <div className={`h-40 bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-black">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.desc}</p>
                    <span className="inline-block mt-2 text-purple-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Shop Now →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-black">
              Why Choose <span className="text-purple-600">ShopVerse</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 mt-2">
              We provide the best shopping experience with these features
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-purple-600 mb-3 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <FaQuoteLeft className="text-4xl text-yellow-300 mx-auto mb-4" />
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              "ShopVerse has completely transformed my wardrobe. The quality is exceptional, 
              and their customer service is unmatched. I can't recommend them enough!"
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                JD
              </div>
              <div className="text-left">
                <h4 className="font-semibold">John Doe</h4>
                <div className="flex text-yellow-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Elevate Your Style?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Discover our latest collection and find the perfect outfit for any occasion.
            </p>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <span>Shop Now</span>
                <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Overview;