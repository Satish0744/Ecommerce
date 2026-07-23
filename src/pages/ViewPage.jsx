import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaHeart, 
  FaShoppingBag, 
  FaStar, 
  FaStarHalfAlt, 
  FaRegStar,
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaCopy,
  FaCheck,
  FaMinus,
  FaPlus,
  FaShare,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useCart } from '../context/CartContext';
// ✅ Import from separate files
import { menCategories } from '../data/menData';
import { womenCategories } from '../data/womenData';

const ViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // State
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [pincode, setPincode] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState(null);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [activeTab, setActiveTab] = useState('details');

  // Coupons data
  const coupons = [
    { code: 'NFPINK20', discount: 20, description: 'Extra 20% off', minOrder: 500 },
    { code: 'NFNEW15', discount: 15, description: 'Extra 15% off', minOrder: 300 },
  ];

  // Find product from all categories
  useEffect(() => {
    const findProduct = () => {
      // Combine both categories
      const allCategories = { ...menCategories, ...womenCategories };
      for (const category of Object.values(allCategories)) {
        const found = category.products?.find(p => p.id === parseInt(id));
        if (found) return found;
      }
      return null;
    };

    setTimeout(() => {
      const found = findProduct();
      if (found) {
        setProduct(found);
        setSelectedSize(found.sizes?.[0] || null);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  // Images array (using product image + duplicates for demo)
  const images = product ? [
    product.image,
    product.image,
    product.image,
    product.image,
    product.image,
    product.image
  ] : [];

  // Handle add to cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.warning('Please select a size');
      return;
    }
    addToCart({ ...product, quantity, size: selectedSize });
    toast.success(`${product.name} added to cart!`);
  };

  // Handle buy now
  const handleBuyNow = () => {
    if (!selectedSize) {
      toast.warning('Please select a size');
      return;
    }
    navigate('/buy', { state: { product, quantity, size: selectedSize } });
  };

  // Handle wishlist
  const handleWishlist = () => {
    setIsWishlist(!isWishlist);
    toast.success(isWishlist ? 'Removed from wishlist' : 'Added to wishlist');
  };

  // Handle quantity change
  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  // Handle pincode check
  const handlePincodeCheck = () => {
    if (pincode.length !== 6) {
      toast.error('Please enter a valid 6-digit pincode');
      return;
    }
    setDeliveryInfo({
      available: true,
      cod: true,
      return: true,
      deliveryDate: 'Sun, 26 July'
    });
    toast.success('Delivery available at this location');
  };

  // Handle coupon apply
  const handleApplyCoupon = (coupon) => {
    if (appliedCoupon?.code === coupon.code) {
      setAppliedCoupon(null);
      toast.info('Coupon removed');
      return;
    }
    setAppliedCoupon(coupon);
    toast.success(`Coupon ${coupon.code} applied! ${coupon.discount}% off`);
  };

  // Handle copy coupon
  const handleCopyCoupon = (code) => {
    navigator.clipboard.writeText(code);
    toast.success('Coupon code copied!');
  };

  // Loading state
  if (loading) {
    return (
        <div>    <Navbar />
      <div className="bg-white min-h-screen ">
    
        <div className="container-custom py-12">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-200 h-80 rounded-lg"></div>
              <div className="space-y-4">
                <div className="bg-gray-200 h-8 w-3/4 rounded"></div>
                <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                <div className="bg-gray-200 h-12 w-1/3 rounded"></div>
                <div className="bg-gray-200 h-24 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-white min-h-screen ">
        <Navbar />
        <div className="container-custom py-20 text-center">
          <h2 className="text-2xl font-bold text-black">Product not found</h2>
          
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div> 
        <Navbar/>
    <div className="bg-white min-h-screen pl-5 pr-5">
      
      <ScrollToTop />

      <div className="container-custom py-4">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-3 group text-sm"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ===== LEFT: IMAGE GALLERY - REDUCED SIZE ===== */}
          <div>
            {/* 2 Main Images Stacked - Reduced Height */}
            <div className="grid grid-cols-2 gap-1">
              <motion.div 
                className="relative bg-gray-50 rounded-xl overflow-hidden aspect-[3/4] "
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Badge */}
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {product.discount || 40}% OFF
                </div>
                {/* Wishlist Button */}
                <button 
                  onClick={handleWishlist}
                  className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <FaHeart className={isWishlist ? 'text-red-500' : 'text-gray-400'} size={14} />
                </button>
              </motion.div>

              <motion.div 
                className="relative bg-gray-50 rounded-xl overflow-hidden aspect-[3/4] "
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={images[1] || images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* 4 Thumbnails Below - Reduced Size */}
            <div className="grid grid-cols-4 gap-1.5 mt-1.5">
              {images.slice(2, 6).map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(index + 2)}
                  className={`rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedImage === index + 2 ? 'border-purple-600' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`View ${index + 3}`} className="w-full h-14 object-cover" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* ===== RIGHT: PRODUCT INFO - COMPACT ===== */}
          <div className="space-y-3">
            {/* Title & Rating */}
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-black">{product.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-xs text-gray-600">4.5 (200 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-black">
                  ₹{product.price || 1999}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.originalPrice || 3999}
                </span>
                <span className="text-green-600 font-semibold text-sm">
                  {product.discount || 40}% OFF
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">Inclusive of all taxes</p>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-black text-sm">Select Size</h3>
                <button 
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-xs text-purple-600 hover:text-purple-700"
                >
                  Size Guide
                </button>
              </div>
              <div className="flex gap-1.5 mt-1">
                {['S', 'M', 'L', 'XL', '2XL'].map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded-lg border-2 transition-all text-sm ${
                      selectedSize === size 
                        ? 'border-purple-600 bg-purple-600 text-white' 
                        : 'border-gray-300 text-black hover:border-purple-300'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-black text-sm mb-1">Quantity</h3>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  <FaMinus size={10} />
                </button>
                <span className="w-10 text-center font-semibold text-sm">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  <FaPlus size={10} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <FaShoppingBag size={14} />
                  <span>Add to Bag</span>
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-2 rounded-lg transition-all text-sm"
                >
                  Buy Now
                </button>
              </div>
              <button 
                onClick={handleWishlist}
                className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-1.5 rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
              >
                <FaHeart className={isWishlist ? 'text-red-500' : ''} size={14} />
                <span>{isWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}</span>
              </button>
            </div>

            {/* Delivery */}
            <div className="border-t border-gray-200 pt-3">
              <h3 className="font-semibold text-black text-sm mb-1">Select Delivery Location</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                  maxLength={6}
                  className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
                <button 
                  onClick={handlePincodeCheck}
                  className="px-4 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all text-sm"
                >
                  Apply
                </button>
              </div>
              {deliveryInfo && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 space-y-0.5 text-xs"
                >
                  <p className="text-green-600">✓ COD available</p>
                  <p className="text-green-600">✓ 7-day return & size exchange</p>
                  <p className="text-gray-600">Delivery by <span className="font-semibold">{deliveryInfo.deliveryDate}</span></p>
                </motion.div>
              )}
            </div>

            {/* Share */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs text-gray-500">Share:</span>
              <button className="text-gray-400 hover:text-purple-600 transition-colors">
                <FaWhatsapp size={16} />
              </button>
              <button className="text-gray-400 hover:text-purple-600 transition-colors">
                <FaFacebook size={16} />
              </button>
              <button className="text-gray-400 hover:text-purple-600 transition-colors">
                <FaTwitter size={16} />
              </button>
              <button className="text-gray-400 hover:text-purple-600 transition-colors">
                <FaCopy size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ===== COUPONS SECTION - COMPACT ===== */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-bold text-black mb-3">Coupons · {coupons.length} available</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {coupons.map((coupon) => (
              <motion.div
                key={coupon.code}
                whileHover={{ scale: 1.02 }}
                className={`border rounded-xl p-3 transition-all ${
                  appliedCoupon?.code === coupon.code 
                    ? 'border-purple-600 bg-purple-50' 
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-black text-sm">{coupon.description}</p>
                    <p className="text-xs text-gray-500">{coupon.discount}% off upto ₹500</p>
                  </div>
                  <button
                    onClick={() => handleApplyCoupon(coupon)}
                    className={`px-2 py-0.5 rounded-lg text-xs font-medium transition-all ${
                      appliedCoupon?.code === coupon.code
                        ? 'bg-purple-600 text-white'
                        : 'border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                    }`}
                  >
                    {appliedCoupon?.code === coupon.code ? 'Applied ✓' : 'Apply'}
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <code className="bg-gray-100 px-2 py-0.5 rounded text-xs font-mono">{coupon.code}</code>
                  <button 
                    onClick={() => handleCopyCoupon(coupon.code)}
                    className="text-purple-600 hover:text-purple-700 text-xs"
                  >
                    Copy Code
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== PRODUCT INFORMATION - COMPACT ===== */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-bold text-black mb-3">Product Information</h2>
          
          <div className="space-y-1.5">
            {/* Product Details */}
            <button
              onClick={() => setActiveTab(activeTab === 'details' ? '' : 'details')}
              className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="font-semibold text-black text-sm">Product details</span>
              <span className="text-gray-500 text-sm">{activeTab === 'details' ? '−' : '+'}</span>
            </button>
            {activeTab === 'details' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-3 text-gray-600 space-y-1 text-sm"
              >
                <p>• Premium quality fabric</p>
                <p>• Care instructions: Machine wash cold</p>
                <p>• Pack contains: 1 piece</p>
              </motion.div>
            )}

            {/* Know Your Product */}
            <button
              onClick={() => setActiveTab(activeTab === 'know' ? '' : 'know')}
              className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="font-semibold text-black text-sm">Know your product</span>
              <span className="text-gray-500 text-sm">{activeTab === 'know' ? '−' : '+'}</span>
            </button>
            {activeTab === 'know' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-3 text-gray-600 text-sm"
              >
                <p>{product.description || 'Premium quality product with stylish design.'}</p>
              </motion.div>
            )}

            {/* Vendor Details */}
            <button
              onClick={() => setActiveTab(activeTab === 'vendor' ? '' : 'vendor')}
              className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="font-semibold text-black text-sm">Vendor details</span>
              <span className="text-gray-500 text-sm">{activeTab === 'vendor' ? '−' : '+'}</span>
            </button>
            {activeTab === 'vendor' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-3 text-gray-600 space-y-1 text-sm"
              >
                <p>• Country of origin: India</p>
                <p>• Manufacturer: Premium Fashion Co.</p>
              </motion.div>
            )}

            {/* Return Policy */}
            <button
              onClick={() => setActiveTab(activeTab === 'return' ? '' : 'return')}
              className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="font-semibold text-black text-sm">Return and exchange policy</span>
              <span className="text-gray-500 text-sm">{activeTab === 'return' ? '−' : '+'}</span>
            </button>
            {activeTab === 'return' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-3 text-gray-600 text-sm"
              >
                <p>• 7-day return & size exchange policy</p>
                <p>• Easy returns with free pickup</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* ===== SIZE GUIDE MODAL ===== */}
        {showSizeGuide && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl max-w-md w-full p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-black">Size Guide</h3>
                <button onClick={() => setShowSizeGuide(false)} className="text-gray-500 hover:text-black">
                  ✕
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between p-2 border-b">
                  <span className="font-semibold">Size</span>
                  <span className="font-semibold">Chest (cm)</span>
                  <span className="font-semibold">Waist (cm)</span>
                </div>
                <div className="flex justify-between p-2 border-b">
                  <span>S</span>
                  <span>91-96</span>
                  <span>71-76</span>
                </div>
                <div className="flex justify-between p-2 border-b">
                  <span>M</span>
                  <span>96-101</span>
                  <span>76-81</span>
                </div>
                <div className="flex justify-between p-2 border-b">
                  <span>L</span>
                  <span>101-106</span>
                  <span>81-86</span>
                </div>
                <div className="flex justify-between p-2">
                  <span>XL</span>
                  <span>106-111</span>
                  <span>86-91</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
 </div>
      <Footer />
    </div>
  
  );
};

export default ViewPage;