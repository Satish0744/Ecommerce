import React, { useState } from 'react';
import { FaMapMarkerAlt, FaTruck, FaCalendarAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import Input from '../common/Input';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const DeliverySection = ({ deliveryInfo }) => {
  const [pincode, setPincode] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState(null);
  const [error, setError] = useState('');

  // Mock API call to check delivery availability
  const checkDeliveryAvailability = async (pincode) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock validation
    if (pincode.length !== 6 || !/^\d{6}$/.test(pincode)) {
      throw new Error('Please enter a valid 6-digit pincode');
    }

    // Check if pincode is in the list of available pincodes
    const isAvailable = deliveryInfo.pincodes.includes(pincode);
    
    if (isAvailable) {
      return {
        available: true,
        message: 'Delivery available to this location',
        estimatedDays: deliveryInfo.estimatedDays
      };
    } else {
      return {
        available: false,
        message: 'Sorry, delivery is not available to this pincode'
      };
    }
  };

  const handlePincodeCheck = async () => {
    if (!pincode) {
      setError('Please enter a pincode');
      return;
    }

    setIsChecking(true);
    setError('');
    setDeliveryStatus(null);

    try {
      const result = await checkDeliveryAvailability(pincode);
      setDeliveryStatus(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsChecking(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handlePincodeCheck();
    }
  };

  const getEstimatedDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Delivery Information
      </h3>

      {/* Pincode Checker */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex-1 w-full">
            <Input
              placeholder="Enter delivery pincode"
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value.replace(/\D/g, ''));
                setError('');
                setDeliveryStatus(null);
              }}
              onKeyPress={handleKeyPress}
              icon={FaMapMarkerAlt}
              error={error}
              maxLength={6}
            />
          </div>
          <Button
            onClick={handlePincodeCheck}
            disabled={isChecking}
            loading={isChecking}
            className="whitespace-nowrap"
          >
            {isChecking ? 'Checking...' : 'Check Availability'}
          </Button>
        </div>

        {/* Delivery Status */}
        {deliveryStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`
              p-4 rounded-lg border
              ${deliveryStatus.available 
                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
              }
            `}
          >
            <div className="flex items-start space-x-3">
              {deliveryStatus.available ? (
                <FaCheckCircle className="text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
              ) : (
                <FaTruck className="text-red-500 dark:text-red-400 mt-0.5 flex-shrink-0" />
              )}
              <div>
                <p className={`font-medium ${deliveryStatus.available ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                  {deliveryStatus.message}
                </p>
                {deliveryStatus.available && (
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      Estimated Delivery: {getEstimatedDate(deliveryStatus.estimatedDays)}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <FaTruck className="mr-2" />
                      Free shipping on orders above ₹999
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DeliverySection;