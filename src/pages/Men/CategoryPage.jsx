import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/common/Card';
import { menCategories, getProductsByCategory } from '../../data/menData';

const CategoryPage = () => {
  const { categoryId } = useParams();
  
  // Find the category
  const category = Object.values(menCategories).find(c => c.id === categoryId);
  
  if (!category) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="container-custom py-12 text-center">
          <h2 className="text-2xl font-bold text-black">Category not found</h2>
          <Link to="/men" className="text-purple-600 hover:text-purple-700 mt-4 inline-block">
            Back to Men's Collection
          </Link>
        </div>
      </div>
    );
  }

  const products = getProductsByCategory(categoryId);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <div className="container-custom py-8">
        {/* Back Button */}
        <Link
          to="/men"
          className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-6 group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Men's Collection</span>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="text-4xl mb-2">{category.icon}</div>
          <h1 className="text-3xl font-bold text-black">{category.name}</h1>
          <p className="text-gray-600">{category.subcategories.length} subcategories</p>
        </div>

        {/* Subcategories Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            to={`/men/${categoryId}`}
            className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-medium"
          >
            All
          </Link>
          {category.subcategories.map((sub) => (
            <Link
              key={sub.id}
              to={`/men/${categoryId}/${sub.id}`}
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
  );
};

export default CategoryPage;