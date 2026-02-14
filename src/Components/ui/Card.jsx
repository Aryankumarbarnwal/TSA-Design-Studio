import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '',
  hover = true,
  padding = 'p-6',
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`
        bg-white rounded-xl shadow-lg overflow-hidden
        ${hover ? 'hover:shadow-2xl transition-shadow duration-300' : ''}
        ${padding} ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;