import React from 'react';

const Container = ({ children, className = '', size = 'normal' }) => {
  const sizes = {
    normal: 'max-w-7xl',
    wide: 'max-w-8xl',
    narrow: 'max-w-5xl',
    full: 'max-w-full',
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;