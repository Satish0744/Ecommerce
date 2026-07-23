import React, { useState } from 'react';
import { FaCreditCard, FaTag, FaShippingFast, FaCopy, FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const OffersSection = ({ offers }) => {
  const [copiedCoupon, setCopiedCoupon] = useState(null);

  const handleCopyCoupon = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCoupon(code);
      setTimeout(() => setCopiedCoupon(null), 2000);
    });
  };

  return (
    <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Offers & Benefits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bank Offers */}
        {offers.bankOffers && offers.bankOffers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <FaCreditCard className="text-blue-600 dark:text-blue-400 text-xl" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Bank Offers
              </h3>
            </div>
            <ul className="space-y-3">
              {offers.bankOffers.map((offer) => (
                <li key={offer.id} className="text-sm">
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {offer.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {offer.description}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Coupon Offers */}
        {offers.coupons && offers.coupons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <FaTag className="text-purple-600 dark:text-purple-400 text-xl" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Coupon Codes
              </h3>
            </div>
            <ul className="space-y-3">
              {offers.coupons.map((coupon) => (
                <li key={coupon.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {coupon.description}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Use code: 
                      <span className="ml-1 font-mono font-bold text-purple-600 dark:text-purple-400">
                        {coupon.code}
                      </span>
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopyCoupon(coupon.code)}
                    className="ml-2"
                  >
                    {copiedCoupon === coupon.code ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaCopy />
                    )}
                  </Button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Free Shipping & Cashback */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6"
        >
          <div className="flex items-center space-x-2 mb-4">
            <FaShippingFast className="text-green-600 dark:text-green-400 text-xl" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Shipping & Cashback
            </h3>
          </div>
          <div className="space-y-3">
            {offers.freeShipping && (
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Free Shipping
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  On orders above ₹999
                </p>
              </div>
            )}
            {offers.cashback && (
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Cashback
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {offers.cashback}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OffersSection;