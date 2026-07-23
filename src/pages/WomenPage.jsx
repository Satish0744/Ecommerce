import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/common/Card';
import { categoryProducts } from '../data/categoryData';

const WomenPage = () => {
  const products = categoryProducts.women || [];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="container-custom py-12">
        <button 
          onClick={() => window.close()}
          className="mb-6 text-gray-600 hover:text-black transition-colors flex items-center space-x-2"
        >
          <span>←</span>
          <span>Close Tab</span>
        </button>

        <h1 className="text-3xl font-bold text-black mb-2">Women's Collection</h1>
        <p className="text-gray-600 mb-8">Discover our elegant women's fashion</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenPage;