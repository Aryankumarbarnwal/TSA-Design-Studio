import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseClasses =
    'relative overflow-hidden group font-medium rounded-md transition-all duration-300 flex items-center justify-center gap-2';

  const variants = {
    primary:
      'bg-bronze text-black hover:bg-[#756048] shadow-md hover:shadow-lg',
    secondary:
      'border-2 border-bronze text-bronze hover:bg-bronze hover:text-white',
    outline:
      'border border-gray-300 text-charcoal hover:border-bronze hover:text-bronze',
    ghost:
      'text-charcoal hover:bg-gray-100',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Glow layer */}
      <span
        className="
          absolute inset-0
          rounded-full
          bg-white/25
          blur-2xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
        "
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {Icon && iconPosition === 'left' && <Icon />}
        {children}
        {Icon && iconPosition === 'right' && <Icon />}
      </span>
    </motion.button>
  );
};

export default Button;
