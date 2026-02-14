import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true,
  tagline,
  className = '' 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${centered ? 'text-center' : ''} mb-12 ${className}`}
    >
      {tagline && (
        <span className="inline-block text-bronze font-medium mb-2 uppercase tracking-wider text-sm">
          {tagline}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-charcoal mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;