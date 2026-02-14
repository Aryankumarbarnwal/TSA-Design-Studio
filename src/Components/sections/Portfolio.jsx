import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiZoomIn, FiGrid, FiHome, FiBriefcase, FiStar, 
  FiX, FiChevronLeft, FiChevronRight, FiMaximize2,
  FiCalendar, FiMapPin, FiSquare, FiUsers
} from 'react-icons/fi';
import { TbArrowsLeftRight } from 'react-icons/tb';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBeforeAfter, setIsBeforeAfter] = useState(false);
  const containerRef = useRef(null);

  const filters = [
    { id: 'all', label: 'All Projects', icon: FiGrid, count: 24 },
    { id: 'residential', label: 'Residential', icon: FiHome, count: 12 },
    { id: 'commercial', label: 'Commercial', icon: FiBriefcase, count: 8 },
    { id: 'japandi', label: 'Japandi Style', icon: FiStar, count: 6 },
    { id: 'renovation', label: 'Renovation', icon: FiUsers, count: 4 },
  ];

  const projects = [
    {
      id: 1,
      title: 'The Japandi Home',
      type: 'residential',
      style: 'japandi',
      location: 'Agra',
      area: '2800 sq ft',
      duration: '12 weeks',
      year: '2023',
      budget: '₹45 Lakhs',
      description: 'A perfect blend of Japanese minimalism and Scandinavian functionality, creating a serene living space.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&w=1200&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&w=1600&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&w=1600&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=1600&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&w=1600&q=80',
      ],
      features: ['Open Floor Plan', 'Natural Materials', 'Minimalist Design', 'Smart Storage'],
      services: ['Interior Design', 'Custom Furniture', 'Lighting Design'],
      team: ['Lead Architect: Ar. Rohan', 'Interior Designer: Anjali', 'Project Manager: Vikram']
    },
    {
      id: 2,
      title: 'Modern Office Space',
      type: 'commercial',
      style: 'modern',
      location: 'Noida',
      area: '5000 sq ft',
      duration: '16 weeks',
      year: '2023',
      budget: '₹85 Lakhs',
      description: 'Corporate office with minimalist design and optimal space utilization.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&w=1200&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&w=1600&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&w=1600&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&w=1600&q=80',
      ],
      features: ['Open Workspaces', 'Meeting Pods', 'Recreation Area', 'Green Spaces'],
      services: ['Space Planning', 'Interior Design', 'Acoustic Solutions'],
      team: ['Lead Architect: Ar. Priya', 'Interior Designer: Raj', 'Project Manager: Sameer']
    },
    {
      id: 3,
      title: 'Heritage Villa Renovation',
      type: 'residential',
      style: 'fusion',
      location: 'Agra',
      area: '4500 sq ft',
      duration: '20 weeks',
      year: '2022',
      budget: '₹65 Lakhs',
      description: 'Restoring heritage elements with modern amenities for contemporary living.',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&w=1200&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&w=1600&q=80',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&w=1600&q=80',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&w=1600&q=80',
      ],
      features: ['Heritage Restoration', 'Modern Kitchen', 'Courtyard Design', 'Traditional Craftsmanship'],
      services: ['Renovation', 'Structural Work', 'Interior Design'],
      team: ['Lead Architect: Ar. Vikram', 'Heritage Expert: Dr. Sharma', 'Project Manager: Anil']
    },
    {
      id: 4,
      title: 'Fine Dining Restaurant',
      type: 'commercial',
      style: 'japandi',
      location: 'Mathura',
      area: '3200 sq ft',
      duration: '14 weeks',
      year: '2023',
      budget: '₹55 Lakhs',
      description: 'Fine dining restaurant with warm, minimalist aesthetics and perfect ambiance.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&w=1200&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&w=1600&q=80',
        'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&w=1600&q=80',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&w=1600&q=80',
      ],
      features: ['Ambient Lighting', 'Open Kitchen', 'Private Dining', 'Art Installations'],
      services: ['Interior Design', 'Kitchen Planning', 'Lighting Design'],
      team: ['Lead Architect: Ar. Mehta', 'Interior Designer: Simran', 'Project Manager: Rohit']
    },
    {
      id: 5,
      title: 'Luxury Penthouse',
      type: 'residential',
      style: 'modern',
      location: 'Delhi',
      area: '3500 sq ft',
      duration: '18 weeks',
      year: '2023',
      budget: '₹75 Lakhs',
      description: 'Luxury penthouse with panoramic city views and premium finishes.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&w=1200&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&w=1600&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&w=1600&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&w=1600&q=80',
      ],
      features: ['Panoramic Views', 'Premium Finishes', 'Smart Home', 'Private Terrace'],
      services: ['Interior Design', 'Custom Furniture', 'Landscape Design'],
      team: ['Lead Architect: Ar. Kapoor', 'Interior Designer: Neha', 'Project Manager: Arjun']
    },
    {
      id: 6,
      title: 'Boutique Hotel',
      type: 'commercial',
      style: 'japandi',
      location: 'Agra',
      area: '12000 sq ft',
      duration: '24 weeks',
      year: '2022',
      budget: '₹1.2 Crore',
      description: 'Boutique hotel blending local culture with minimalist design principles.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&w=1200&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&w=1200&q=80',
      afterImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&w=1600&q=80',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&w=1600&q=80',
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&w=1600&q=80',
      ],
      features: ['Cultural Elements', 'Lobby Design', 'Guest Rooms', 'Restaurant'],
      services: ['Complete Interior', 'Lighting Design', 'Furniture Design'],
      team: ['Lead Architect: Ar. Singh', 'Interior Designer: Priya', 'Project Manager: Rajesh']
    },
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === selectedFilter || p.style === selectedFilter);

  const nextImage = () => {
    if (selectedProject) {
      const images = isBeforeAfter ? [selectedProject.beforeImage, selectedProject.afterImage] : selectedProject.images;
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const images = isBeforeAfter ? [selectedProject.beforeImage, selectedProject.afterImage] : selectedProject.images;
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="portfolio" className="section-bg py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-japandi-paper via-white to-japandi-cream" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-japandi-bronze/20 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-32 h-32 border border-japandi-bronze/10 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-40 right-10 w-40 h-40 border border-japandi-terracotta/10 rounded-full animate-pulse-slow" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-japandi-bronze/10 text-japandi-bronze mb-4">
            <FiGrid className="text-lg" />
            <span className="text-sm font-medium">Our Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair text-japandi-charcoal mb-6">
            Design <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-japandi-taupe max-w-3xl mx-auto">
            A curated collection of our finest projects showcasing innovative design solutions 
            across Uttar Pradesh.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = selectedFilter === filter.id;
            
            return (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter.id)}
                className={`
                  group relative flex items-center gap-3 px-6 py-3 rounded-full border transition-all
                  ${isActive 
                    ? 'bg-gradient-to-r from-japandi-bronze to-japandi-terracotta text-white shadow-lg shadow-japandi-bronze/30' 
                    : 'bg-white/80 backdrop-blur-sm border-japandi-clay/30 text-japandi-charcoal hover:border-japandi-bronze/50 hover:shadow-md'
                  }
                `}
              >
                <Icon className={`text-lg ${isActive ? 'text-white' : 'text-japandi-bronze'}`} />
                <span className="font-medium">{filter.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  isActive ? 'bg-white/20' : 'bg-japandi-cream'
                }`}>
                  {filter.count}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-full border-2 border-white/20"
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Portfolio Grid - Masonry Layout */}
        <div 
          ref={containerRef}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <div 
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                  setIsBeforeAfter(false);
                }}
                className="group relative premium-card overflow-hidden cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover image-hover-zoom"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                      {project.type}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-japandi-bronze/90 to-japandi-terracotta/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center p-6">
                      <FiZoomIn className="text-white text-4xl mb-4 mx-auto" />
                      <span className="text-white font-medium">View Project</span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-japandi-charcoal mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-japandi-taupe text-sm">
                        <FiMapPin className="mr-1" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-japandi-cream text-japandi-bronze text-sm rounded-full">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-japandi-taupe text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <FiSquare className="text-japandi-bronze" />
                      <span className="text-japandi-charcoal">{project.area}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="text-japandi-bronze" />
                      <span className="text-japandi-charcoal">{project.duration}</span>
                    </div>
                  </div>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-japandi-cream text-japandi-taupe text-xs rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-12 h-12">
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[48px] border-l-transparent border-t-[48px] border-t-japandi-bronze/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium-secondary px-8 py-4"
          >
            Load More Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-4 md:inset-8 lg:inset-12 bg-white rounded-3xl z-50 overflow-hidden"
            >
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-japandi-clay/30 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-japandi-charcoal">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-japandi-taupe mt-1">
                      <span className="flex items-center">
                        <FiMapPin className="mr-1" />
                        {selectedProject.location}
                      </span>
                      <span className="flex items-center">
                        <FiSquare className="mr-1" />
                        {selectedProject.area}
                      </span>
                      <span className="flex items-center">
                        <FiCalendar className="mr-1" />
                        {selectedProject.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setIsBeforeAfter(!isBeforeAfter)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                        isBeforeAfter 
                          ? 'bg-japandi-bronze text-white' 
                          : 'bg-japandi-cream text-japandi-bronze'
                      }`}
                    >
                      <TbArrowsLeftRight />
                      <span className="text-sm">Before/After</span>
                    </button>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-10 h-10 rounded-full border border-japandi-clay/30 flex items-center justify-center hover:border-japandi-bronze hover:bg-japandi-bronze/5 transition-all"
                    >
                      <FiX className="text-xl" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-hidden">
                  <div className="grid lg:grid-cols-3 h-full">
                    {/* Image Gallery - Left 2/3 */}
                    <div className="lg:col-span-2 relative">
                      <div className="relative h-full">
                        {/* Main Image */}
                        <div className="relative h-full overflow-hidden">
                          <motion.img
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            src={
                              isBeforeAfter
                                ? currentImageIndex === 0
                                  ? selectedProject.beforeImage
                                  : selectedProject.afterImage
                                : selectedProject.images[currentImageIndex]
                            }
                            alt={selectedProject.title}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Before/After Labels */}
                          {isBeforeAfter && (
                            <div className="absolute inset-x-0 top-6 flex justify-between px-6">
                              <div className="px-4 py-2 bg-black/60 text-white rounded-lg">
                                Before
                              </div>
                              <div className="px-4 py-2 bg-black/60 text-white rounded-lg">
                                After
                              </div>
                            </div>
                          )}

                          {/* Navigation Buttons */}
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all"
                          >
                            <FiChevronLeft className="text-white text-xl" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all"
                          >
                            <FiChevronRight className="text-white text-xl" />
                          </button>

                          {/* Image Counter */}
                          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2">
                            {(isBeforeAfter ? [0, 1] : selectedProject.images).map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  idx === currentImageIndex 
                                    ? 'bg-white w-8' 
                                    : 'bg-white/50 hover:bg-white/70'
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <div className="flex space-x-2 overflow-x-auto pb-2">
                            {(isBeforeAfter 
                              ? [selectedProject.beforeImage, selectedProject.afterImage] 
                              : selectedProject.images
                            ).map((img, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                                  idx === currentImageIndex 
                                    ? 'border-white' 
                                    : 'border-transparent'
                                }`}
                              >
                                <img
                                  src={img}
                                  alt={`Thumbnail ${idx + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details - Right 1/3 */}
                    <div className="bg-japandi-paper p-6 overflow-y-auto">
                      <div className="space-y-6">
                        {/* Description */}
                        <div>
                          <h4 className="text-lg font-semibold text-japandi-charcoal mb-3">
                            Project Overview
                          </h4>
                          <p className="text-japandi-taupe leading-relaxed">
                            {selectedProject.description}
                          </p>
                        </div>

                        {/* Key Details */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-xl">
                            <div className="text-sm text-japandi-taupe mb-1">Duration</div>
                            <div className="text-lg font-semibold text-japandi-charcoal">
                              {selectedProject.duration}
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-xl">
                            <div className="text-sm text-japandi-taupe mb-1">Budget</div>
                            <div className="text-lg font-semibold text-japandi-charcoal">
                              {selectedProject.budget}
                            </div>
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="text-lg font-semibold text-japandi-charcoal mb-3">
                            Key Features
                          </h4>
                          <div className="space-y-2">
                            {selectedProject.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg bg-white">
                                <div className="w-2 h-2 rounded-full bg-japandi-bronze" />
                                <span className="text-japandi-taupe">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Services Used */}
                        <div>
                          <h4 className="text-lg font-semibold text-japandi-charcoal mb-3">
                            Services Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.services.map((service, idx) => (
                              <span 
                                key={idx} 
                                className="px-3 py-1 bg-japandi-cream text-japandi-bronze text-sm rounded-full"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Project Team */}
                        <div>
                          <h4 className="text-lg font-semibold text-japandi-charcoal mb-3">
                            Project Team
                          </h4>
                          <div className="space-y-2">
                            {selectedProject.team.map((member, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-japandi-bronze to-japandi-terracotta flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">
                                    {member.charAt(0)}
                                  </span>
                                </div>
                                <span className="text-japandi-taupe">{member}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full py-4 bg-gradient-to-r from-japandi-bronze to-japandi-terracotta text-white rounded-xl font-medium hover:shadow-xl transition-shadow">
                          Book Similar Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Design Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-16 h-16 border border-japandi-bronze/10 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-8 h-8 border border-japandi-terracotta/20 rounded-full"
      />
    </section>
  );
};

export default Portfolio;