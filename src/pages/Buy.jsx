import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCreditCard, FaPaypal } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useCart } from '../context/CartContext';

const Buy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();
  
  // Get data from location state (from ViewPage or CartPage)
  const { product, quantity, size, cartItems, totalPrice: cartTotal, fromCart } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Determine what to display
  const isFromCart = fromCart || (cartItems && cartItems.length > 0);
  const displayItems = isFromCart ? cartItems : (product ? [product] : []);
  const displayTotal = isFromCart ? cartTotal : (product ? (product.price || 1999) * (quantity || 1) : 0);

  if (!displayItems || displayItems.length === 0) {
    navigate('/');
    return null;
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('Order placed successfully!');
      // Clear cart if it was from cart
      if (isFromCart) {
        clearCart();
      }
      setTimeout(() => navigate('/'), 3000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="container-custom py-20 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-black mb-2">Order Placed Successfully!</h2>
            <p className="text-gray-600">Thank you for your purchase. We'll deliver your order soon.</p>
            <Link to="/" className="inline-block mt-6 bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-all">
              Continue Shopping
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <ScrollToTop />
      
      <div className="container-custom py-6 px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Summary - Left Side (Reduced) */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-gray-50 rounded-xl p-5 sticky top-24">
              <h2 className="text-lg font-bold text-black mb-3">Order Summary</h2>
              {displayItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3 pb-3 border-b border-gray-200 mb-3">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 rounded-lg object-cover" 
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-black truncate">{item.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>Size: {size || item.size || 'M'}</span>
                      <span>•</span>
                      <span>Qty: {quantity || item.quantity || 1}</span>
                    </div>
                    <p className="text-sm font-semibold text-black">
                      ${((item.price || 1999) * (quantity || item.quantity || 1)).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              <div className="space-y-1.5 mt-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-black font-medium">${displayTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-black font-medium">${(displayTotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-base pt-2 border-t border-gray-200">
                  <span className="text-black">Total</span>
                  <span className="text-black">${(displayTotal + displayTotal * 0.1).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Form - Right Side (Reduced Size) */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <h2 className="text-xl font-bold text-black mb-4">Shipping Details</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-0.5">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-0.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-0.5">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="10-digit phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-0.5">Address</label>
                <textarea
                  name="address"
                  required
                  rows="2"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  placeholder="Enter your full address"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-0.5">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-0.5">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    maxLength="6"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="6-digit pincode"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Payment Method</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className={`flex items-center justify-center gap-2 p-2.5 text-sm border-2 rounded-lg transition-all ${
                      formData.paymentMethod === 'cod' 
                        ? 'border-purple-600 bg-purple-50' 
                        : 'border-gray-300 hover:border-purple-300'
                    }`}
                  >
                    <FaCreditCard className="text-base" />
                    <span>Cash on Delivery</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'online' })}
                    className={`flex items-center justify-center gap-2 p-2.5 text-sm border-2 rounded-lg transition-all ${
                      formData.paymentMethod === 'online' 
                        ? 'border-purple-600 bg-purple-50' 
                        : 'border-gray-300 hover:border-purple-300'
                    }`}
                  >
                    <FaPaypal className="text-base" />
                    <span>Online Payment</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-72 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-lg transition-all disabled:opacity-50 text-sm"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Placing Order...
                    </span>
                  ) : (
                    'Place Order'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Buy;