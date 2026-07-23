import React from 'react';
import { FaStar } from 'react-icons/fa';

const TrustBadges = ({ customers, rating }) => (
  <div className="flex flex-wrap items-center gap-4 md:gap-6">
    <div className="flex items-center space-x-2">
      <div className="flex -space-x-2">
        {[1,2,3,4].map(i => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-cover" 
               style={{ backgroundImage: `url(https://i.pravatar.cc/150?img=${i+10})` }} />
        ))}
      </div>
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Trusted by {customers} Customers</span>
    </div>
    <div className="hidden sm:block h-8 w-px bg-gray-300 dark:bg-gray-600" />
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">{rating}</span>
    </div>
  </div>
);

export default TrustBadges;