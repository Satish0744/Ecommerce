import React from 'react';

const Skeleton = ({ variant = 'rect', className = '', width, height }) => {
  const baseStyles = 'animate-pulse bg-gray-200 dark:bg-gray-700 rounded';
  
  const variants = {
    rect: 'rounded',
    circle: 'rounded-full',
    text: 'rounded',
  };

  const styles = {
    width: width || '100%',
    height: height || 'auto',
  };

  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={styles}
    />
  );
};

export default Skeleton;