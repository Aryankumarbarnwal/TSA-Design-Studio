import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container-custom px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-japandi-bronze to-japandi-terracotta rounded-2xl rotate-45 flex items-center justify-center">
                <span className="text-white text-lg font-bold -rotate-45">TSA</span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 border border-japandi-bronze/30 rounded-2xl"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-semibold transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-amber-200'
                  }`}
              >
                TSA Design Studio
              </span>
              <span className="text-xs text-japandi-taupe">Agra • Est. 2012</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative group px-3 py-2 font-medium transition-colors duration-300 ${scrolled
                  ? 'text-charcoal hover:text-bronze'
                  : 'text-amber-200 hover:text-bronze'}`}>
                <span className="absolute inset-0 rounded-full bg-white blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {item.label}
              </a>

            ))}
            <button
              className={`flex items-center space-x-2 transition-colors duration-300 ${scrolled ? 'btn-primary' : 'btn-secondary text-white border-white'
                }`}
            >
              <FiPhone />
              <span>Book Consultation</span>
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-2xl transition-colors ${scrolled ? 'text-charcoal' : 'text-white'
              }`}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-6"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-charcoal hover:text-bronze py-2 border-b border-gray-100"
                >
                  {item.label}
                </a>
              ))}
              <button className="btn-primary w-full mt-4">
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;