import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar/Navbar';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    getTotalPrice 
  } = useCart();

  const totalPrice = getTotalPrice();

  const handleUpdateQuantity = (id, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id, name) => {
    removeFromCart(id);
    toast.info(`${name} removed from cart`);
  };

  const handleClearCart = () => {
    if (cartItems.length === 0) return;
    clearCart();
    toast.info('Cart cleared');
  };

  // ✅ Handle Proceed to Checkout
  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast.warning('Your cart is empty');
      return;
    }
    // Navigate to Buy page with cart items
    navigate('/buy', { 
      state: { 
        cartItems: cartItems,
        totalPrice: totalPrice,
        fromCart: true 
      } 
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="container-custom py-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="text-3xl font-bold text-black mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link 
              to="/"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div><Navbar />
    <div className="bg-white min-h-screen pl-5 pr-5">
      
      <div className="container-custom py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-black">
            Shopping Cart
          </h1>
          <button
            onClick={handleClearCart}
            className="text-red-500 hover:text-red-600 font-medium text-sm transition-colors flex items-center space-x-1"
          >
            <FaTrash size={14} />
            <span>Clear Cart</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 border border-gray-100"
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-black">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Price: {item.price}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity, -1)}
                          className="px-3 py-1 hover:bg-purple-50 transition-colors"
                        >
                          <FaMinus size={12} />
                        </button>
                        <span className="px-4 py-1 text-black min-w-[40px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity, 1)}
                          className="px-3 py-1 hover:bg-purple-50 transition-colors"
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => handleRemoveItem(item.id, item.name)}
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        <FaTrash size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold text-black">
                      ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.quantity} × {item.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24 border border-gray-100">
              <h2 className="text-xl font-bold text-black mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-3 border-b border-gray-200 pb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Items ({cartItems.length})</span>
                  <span className="text-black">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-black">${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex justify-between text-lg font-bold mt-4">
                <span className="text-black">Total</span>
                <span className="text-black">
                  ${(totalPrice + totalPrice * 0.1).toFixed(2)}
                </span>
              </div>
              
              {/* ✅ Proceed to Checkout Button */}
              <button 
                onClick={handleProceedToCheckout}
                className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <FaShoppingCart size={18} />
                <span>Proceed to Checkout</span>
              </button>
              
              <Link 
                to="/"
                className="block text-center mt-4 text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors"
              >
                Continue Shopping →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CartPage;