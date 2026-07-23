import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/common/Card';
import { womenCategories, getWomenProductsBySubcategory } from '../../data/womenData';

const SubcategoryWomen = () => {
  const { categoryId, subcategoryId } = useParams();
  
  // Find the category and subcategory
  const category = Object.values(womenCategories).find(c => c.id === categoryId);
  const subcategory = category?.subcategories.find(s => s.id === subcategoryId);
  
  if (!category || !subcategory) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="container-custom py-12 text-center">
          <h2 className="text-2xl font-bold text-black">Subcategory not found</h2>
          <Link to="/women" className="text-purple-600 hover:text-purple-700 mt-4 inline-block">
            Back to Women's Collection
          </Link>
        </div>
      </div>
    );
  }

  const products = getWomenProductsBySubcategory(categoryId, subcategoryId);

  // Get category name for display
  const categoryNames = {
    'fusionwear': 'Fusion Wear',
    'jewellery': 'Jewellery',
    'westernwear': 'Western Wear'
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <div className="container-custom py-8">
        {/* Back Button */}
        <Link
          to={`/women/${categoryId}`}
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

export default SubcategoryWomen;