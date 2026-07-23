import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaStore,
  FaUserTie
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(128, 0, 128, 0.12)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <ScrollToTop />
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-yellow-300">Touch</span>
            </h1>
            <p className="text-lg text-white/90">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <div className="container-custom py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* ===== LEFT: CONTACT INFO ===== */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg sticky top-24">
              <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>
              
              {/* Store Info */}
              <div className="space-y-4">
                <motion.div 
                  variants={cardVariants}
                  whileHover="hover"
                  className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm"
                >
                  <FaStore className="text-purple-600 mt-1 text-xl" />
                  <div>
                    <h4 className="font-semibold text-black">ShopVerse Store</h4>
                    <p className="text-sm text-gray-600">Premium Clothing Store</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={cardVariants}
                  whileHover="hover"
                  className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm"
                >
                  <FaMapMarkerAlt className="text-purple-600 mt-1 text-xl" />
                  <div>
                    <h4 className="font-semibold text-black">Address</h4>
                    <p className="text-sm text-gray-600">3rd Street, LA, California</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={cardVariants}
                  whileHover="hover"
                  className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm"
                >
                  <FaPhone className="text-purple-600 mt-1 text-xl" />
                  <div>
                    <h4 className="font-semibold text-black">Phone</h4>
                    <p className="text-sm text-gray-600">+1 (088) 456 888</p>
                    <p className="text-xs text-gray-400">24/7 Support</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={cardVariants}
                  whileHover="hover"
                  className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm"
                >
                  <FaEnvelope className="text-purple-600 mt-1 text-xl" />
                  <div>
                    <h4 className="font-semibold text-black">Email</h4>
                    <p className="text-sm text-gray-600">info@shopverse.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={cardVariants}
                  whileHover="hover"
                  className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm"
                >
                  <FaClock className="text-purple-600 mt-1 text-xl" />
                  <div>
                    <h4 className="font-semibold text-black">Working Hours</h4>
                    <p className="text-sm text-gray-600">Mon - Sat: 9:00 AM - 9:00 PM</p>
                    <p className="text-sm text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-black mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="#"
                    className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                  >
                    <FaFacebook size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="#"
                    className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                  >
                    <FaTwitter size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="#"
                    className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                  >
                    <FaInstagram size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="#"
                    className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                  >
                    <FaYoutube size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="#"
                    className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp size={18} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT: CONTACT FORM ===== */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-black mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">Fill in the form below and we'll get back to you soon.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                    isSubmitting ? 'bg-gray-400' : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <FaCheckCircle />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* ===== MAP SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Find Us Here</h2>
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-64 md:h-80 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <FaMapMarkerAlt className="text-4xl text-purple-600 mx-auto mb-2" />
              <p>Interactive Map Here</p>
              <p className="text-sm">3rd Street, LA, California</p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;