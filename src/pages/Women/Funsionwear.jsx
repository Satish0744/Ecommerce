import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/common/Card';
import { womenCategories } from '../../data/womenData';
import ScrollToTop from '../../components/ScrollToTop';

const Fusionwear = () => {
  const category = womenCategories.fusionwear;
  const products = category.products || [];

  return (
      <div><Navbar></Navbar>
    <div className="bg-white min-h-screen pl-5 pr-5">
      <ScrollToTop /> {/* ✅ Added */}
  
      
      <div className="container-custom py-8">
        {/* Back Button */}
       

        {/* Header */}
        <div className="mb-5">
          <h1 className="text-3xl font-bold text-black">{category.name}</h1>
        </div>

        {/* Subcategories Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            to="/women/fusionwear"
            className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-medium"
          >
            All
          </Link>
          {category.subcategories.map((sub) => (
            <Link
              key={sub.id}
              to={`/women/fusionwear/${sub.id}`}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-colors text-sm font-medium"
            >
              {sub.name}
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
          >
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No products available in this category yet.</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Fusionwear;