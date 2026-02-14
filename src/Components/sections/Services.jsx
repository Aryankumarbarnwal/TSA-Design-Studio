import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiHome, FiLayers, FiTool, FiRefreshCw,
  FiCheck, FiArrowRight, FiX, FiClock,
  FiUsers, FiDollarSign, FiGrid
} from 'react-icons/fi';
import { TbPlant } from 'react-icons/tb';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: FiHome,
      title: 'Interior Design',
      tagline: 'Transform Living Spaces',
      description: 'Create harmonious interiors that blend functionality with Japandi aesthetics.',
      features: [
        'Space Planning & Layout Design',
        'Custom Furniture Design',
        'Material & Color Selection',
        'Lighting Design Strategy',
        '3D Visualization & VR Walkthroughs',
        'Sustainable Material Sourcing'
      ],
      images: [
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=800&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&w=800&q=80'
      ],
      color: 'from-japandi-bronze to-japandi-terracotta',
      projects: 85,
      duration: '4-8 Weeks',
      startingPrice: '₹3,00,000'
    },
    {
      id: 2,
      icon: FiLayers,
      title: 'Exterior Design',
      tagline: 'Elevate Building Facades',
      description: 'Stunning exterior designs that make a lasting impression.',
      features: [
        'Facade Design & Elevation',
        'Landscape Integration',
        'Outdoor Living Spaces',
        'Entrance & Pathway Design',
        'Garden & Terrace Planning',
        'Sustainable Exterior Solutions'
      ],
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&w=800&q=80',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&w=800&q=80'
      ],
      color: 'from-japandi-moss to-japandi-wood',
      projects: 62,
      duration: '6-10 Weeks',
      startingPrice: '₹2,50,000'
    },
    {
      id: 3,
      icon: FiTool,
      title: 'Construction',
      tagline: 'Build from Ground Up',
      description: 'End-to-end construction with uncompromised quality.',
      features: [
        'Turnkey Construction Solutions',
        'Structural Planning & Engineering',
        'Premium Material Sourcing',
        'Timely Project Delivery',
        'Quality Control & Assurance',
        'Post-Construction Support'
      ],
      images: [
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&w=800&q=80',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&w=800&q=80',
        'https://images.unsplash.com/photo-1503387769-00b1123e8e6b?auto=format&w=800&q=80'
      ],
      color: 'from-japandi-charcoal to-japandi-taupe',
      projects: 120,
      duration: '12-24 Weeks',
      startingPrice: '₹25,00,000'
    },
    {
      id: 4,
      icon: FiRefreshCw,
      title: 'Renovation',
      tagline: 'Breathe New Life',
      description: 'Transform existing spaces with smart renovation solutions.',
      features: [
        'Structural Modifications',
        'Modernization Upgrades',
        'Space Optimization',
        'Vastu & Compliance',
        'Budget Planning',
        'Minimal Disruption Workflow'
      ],
      images: [
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&w=800&q=80',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&w=800&q=80',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&w=800&q=80'
      ],
      color: 'from-japandi-terracotta to-japandi-bronze',
      projects: 78,
      duration: '6-12 Weeks',
      startingPrice: '₹1,50,000'
    }
  ];

  const serviceStats = [
    { label: 'Total Projects', value: '345+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Design Awards', value: '15+' },
    { label: 'Cities Covered', value: '6+' },
  ];

  return (
    <section id="services" className="section-bg py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-japandi-cream via-white to-japandi-stone" />
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-japandi-bronze/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-japandi-bronze/10 text-japandi-bronze mb-4">
            <TbPlant className="text-lg" />
            <span className="text-sm font-medium">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair text-japandi-charcoal mb-6">
            Premium <span className="text-gradient">Design Services</span>
          </h2>
          <p className="text-xl text-japandi-taupe max-w-3xl mx-auto">
            Comprehensive design and construction solutions tailored for residential 
            and commercial spaces across Uttar Pradesh.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => setSelectedService(service)}
              className="group relative cursor-pointer"
            >
              {/* 3D Card Effect */}
              <div className="relative h-96 overflow-hidden rounded-3xl perspective-1000">
                {/* Background Image */}
                <motion.div
                  animate={hoveredService === service.id ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  {/* Icon & Title */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <service.icon className="text-white text-2xl" />
                      </div>
                      <motion.div
                        animate={hoveredService === service.id ? { rotate: 45 } : { rotate: 0 }}
                        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center"
                      >
                        <FiArrowRight className="text-white" />
                      </motion.div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/80 mb-4">{service.tagline}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="text-white/60">
                      <div className="text-sm">Starting From</div>
                      <div className="text-xl font-bold">{service.startingPrice}</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-white text-2xl font-bold">{service.projects}+</div>
                        <div className="text-white/60 text-xs">Projects</div>
                      </div>
                      <div className="h-8 w-px bg-white/20" />
                      <div className="text-center">
                        <div className="text-white text-lg font-bold">{service.duration}</div>
                        <div className="text-white/60 text-xs">Duration</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={hoveredService === service.id ? { opacity: 1 } : { opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-japandi-bronze/90 to-japandi-terracotta/90 p-8 flex flex-col justify-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/90 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-white/80">
                        <FiCheck className="text-green-300" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-white text-japandi-bronze rounded-lg font-medium hover:bg-japandi-cream transition-colors">
                    View Details
                  </button>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={hoveredService === service.id ? { scale: 1 } : { scale: 0 }}
                className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-r from-japandi-bronze to-japandi-terracotta"
              />
              <motion.div
                animate={hoveredService === service.id ? { scale: 1 } : { scale: 0 }}
                className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-gradient-to-r from-japandi-terracotta to-japandi-bronze"
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {serviceStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-japandi-taupe font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-gradient-to-r from-japandi-cream to-white p-8 rounded-3xl shadow-2xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-japandi-charcoal mb-2">
                Ready to Transform Your Space?
              </h3>
              <p className="text-japandi-taupe">
                Book a free design consultation with our experts
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium-primary px-8 py-4"
            >
              Book Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-4 md:inset-12 lg:inset-20 bg-white rounded-3xl z-50 overflow-hidden"
            >
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-japandi-clay/30 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center`}>
                      <selectedService.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-japandi-charcoal">
                        {selectedService.title}
                      </h3>
                      <p className="text-japandi-taupe">{selectedService.tagline}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-10 h-10 rounded-full border border-japandi-clay/30 flex items-center justify-center hover:border-japandi-bronze hover:bg-japandi-bronze/5 transition-all"
                  >
                    <FiX className="text-xl" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    {/* Left Column - Images */}
                    <div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {selectedService.images.map((img, idx) => (
                          <div key={idx} className="premium-card overflow-hidden">
                            <img
                              src={img}
                              alt={`${selectedService.title} ${idx + 1}`}
                              className="w-full h-48 object-cover image-hover-zoom"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div>
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-4">Service Overview</h4>
                        <p className="text-japandi-taupe leading-relaxed">
                          {selectedService.description}
                        </p>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedService.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 p-3 rounded-lg bg-japandi-cream/50">
                              <FiCheck className="text-japandi-bronze flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 rounded-xl bg-japandi-cream">
                          <div className="text-2xl font-bold text-japandi-bronze mb-1">
                            {selectedService.projects}+
                          </div>
                          <div className="text-sm text-japandi-taupe">Projects</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-japandi-cream">
                          <div className="text-xl font-bold text-japandi-bronze mb-1">
                            {selectedService.duration}
                          </div>
                          <div className="text-sm text-japandi-taupe">Duration</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-japandi-cream">
                          <div className="text-lg font-bold text-japandi-bronze mb-1">
                            {selectedService.startingPrice}
                          </div>
                          <div className="text-sm text-japandi-taupe">Starting Price</div>
                        </div>
                      </div>

                      <button className="w-full py-4 bg-gradient-to-r from-japandi-bronze to-japandi-terracotta text-white rounded-xl font-medium hover:shadow-xl transition-shadow">
                        Request Custom Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border border-japandi-bronze/10 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-japandi-terracotta/10 rounded-full animate-pulse-slow" />
    </section>
  );
};

export default Services;