import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const types = {
    success: {
      icon: FaCheckCircle,
      className: 'bg-green-50 dark:bg-green-900/20 border-green-400 text-green-800 dark:text-green-300'
    },
    error: {
      icon: FaExclamationCircle,
      className: 'bg-red-50 dark:bg-red-900/20 border-red-400 text-red-800 dark:text-red-300'
    },
    info: {
      icon: FaInfoCircle,
      className: 'bg-blue-50 dark:bg-blue-900/20 border-blue-400 text-blue-800 dark:text-blue-300'
    }
  };

  const Icon = types[type].icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        className={`
          flex items-center justify-between p-4 rounded-lg border shadow-lg
          ${types[type].className}
        `}
      >
        <div className="flex items-center space-x-3">
          <Icon className="text-xl" />
          <p className="font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          <FaTimes />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;