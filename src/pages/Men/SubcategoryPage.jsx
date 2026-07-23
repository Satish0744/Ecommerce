import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/common/Card';
import { menCategories, getProductsBySubcategory } from '../../data/menData';
import ScrollToTop from '../../components/ScrollToTop';

const SubcategoryView = () => {
  const { categoryId, subcategoryId } = useParams();
  
  // Find the category and subcategory
  const category = Object.values(menCategories).find(c => c.id === categoryId);
  const subcategory = category?.subcategories.find(s => s.id === subcategoryId);
  
  // Get products for this subcategory
  const products = getProductsBySubcategory(categoryId, subcategoryId);

  // Category name mapping
  const categoryNames = {
    'topwear': 'Topwear',
    'bottomwear': 'Bottomwear',
    'festive-wear': 'Festive Wear'
  };

  if (!category || !subcategory) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="container-custom py-12 text-center">
          <h2 className="text-2xl font-bold text-black">Subcategory not found</h2>
          <Link to="/men" className="text-purple-600 hover:text-purple-700 mt-4 inline-block">
            Back to Men's Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <ScrollToTop />
      <Navbar />
      
      <div className="container-custom py-8">
        {/* Back Button */}
        <Link
          to={`/men/${categoryId}`}
          className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-6 group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to {categoryNames[categoryId] || category.name}</span>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">{subcategory.name}</h1>
          <p className="text-gray-600">
            {categoryNames[categoryId] || category.name} › {subcategory.name}
          </p>
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
            <p className="text-gray-500">No products available in this subcategory yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubcategoryView;