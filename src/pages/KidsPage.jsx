import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/common/Card';
import { categoryProducts } from '../data/categoryData';

const KidsPage = () => {
  const products = categoryProducts.kids || [];

  return (
      <div><Navbar></Navbar>
    <div className="bg-white min-h-screen pl-5 pr-5 ">
    
      <div className="container-custom ">
        <button 
          onClick={() => window.close()}
          className="mb-6 text-gray-600 hover:text-black transition-colors flex items-center space-x-2"
        >
        
          
        </button>

        <h1 className="text-3xl font-bold text-black mb-2">Kids' Collection</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default KidsPage;