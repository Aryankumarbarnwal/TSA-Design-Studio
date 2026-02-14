import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiStar, FiChevronLeft, FiChevronRight, FiMessageSquare, 
  FiPlay, FiPause, FiVolume2, FiMaximize2,
  FiHome, FiBriefcase, FiCalendar, FiMapPin
} from 'react-icons/fi';
import { TbMessage2 } from 'react-icons/tb';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh & Priya Sharma',
      role: 'Home Owners, Agra',
      project: 'Heritage Villa Renovation',
      rating: 5,
      content: 'The Space Arch transformed our 50-year-old villa into a modern marvel while preserving its heritage. Their attention to detail and commitment to quality is unmatched. Every corner of our home now tells a story of perfect craftsmanship.',
      image: 'https://images.unsplash.com/photo-1589156191108-0c22e6d9e8f0?auto=format&w=400&q=80',
      projectImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&w=800&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-architect-working-on-a-3d-model-of-a-house-41560-large.mp4',
      duration: '20 weeks',
      budget: '₹65 Lakhs',
      features: ['Heritage Restoration', 'Modern Kitchen', 'Courtyard Design'],
      location: 'Agra',
      type: 'Residential'
    },
    {
      id: 2,
      name: 'Mehta Family',
      role: 'Restaurant Owners, Mathura',
      project: 'Fine Dining Restaurant',
      rating: 5,
      content: 'Our restaurant\'s Japandi design has become the talk of the town. The team delivered beyond our expectations within budget and timeline. The ambiance and functionality are perfectly balanced.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&w=400&q=80',
      projectImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&w=800&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-living-room-41558-large.mp4',
      duration: '14 weeks',
      budget: '₹55 Lakhs',
      features: ['Ambient Lighting', 'Open Kitchen', 'Private Dining'],
      location: 'Mathura',
      type: 'Commercial'
    },
    {
      id: 3,
      name: 'Vikram Singh',
      role: 'Office Director, Noida',
      project: 'Corporate Office Design',
      rating: 4,
      content: 'Professional, punctual, and creative. The office space they designed has improved our team\'s productivity and client impressions significantly. The attention to acoustics and lighting was exceptional.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=400&q=80',
      projectImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&w=800&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-office-interior-41559-large.mp4',
      duration: '16 weeks',
      budget: '₹85 Lakhs',
      features: ['Open Workspaces', 'Meeting Pods', 'Recreation Area'],
      location: 'Noida',
      type: 'Commercial'
    },
    {
      id: 4,
      name: 'Anjali Kapoor',
      role: 'Apartment Owner, Delhi',
      project: 'Luxury Penthouse',
      rating: 5,
      content: 'Working with The Space Arch was a delightful experience. They understood our vision perfectly and executed it flawlessly. The panoramic views are now complemented by interior elegance.',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&w=400&q=80',
      projectImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&w=800&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-architect-reviewing-blueprints-41561-large.mp4',
      duration: '18 weeks',
      budget: '₹75 Lakhs',
      features: ['Panoramic Views', 'Smart Home', 'Private Terrace'],
      location: 'Delhi',
      type: 'Residential'
    },
    {
      id: 5,
      name: 'Hotel Grand Agra',
      role: 'Hotel Management',
      project: 'Boutique Hotel Renovation',
      rating: 5,
      content: 'The transformation of our 30-room boutique hotel exceeded all expectations. The blend of local culture with minimalist design has significantly increased our bookings and guest satisfaction.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&w=400&q=80',
      projectImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&w=800&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hotel-lobby-41562-large.mp4',
      duration: '24 weeks',
      budget: '₹1.2 Crore',
      features: ['Cultural Elements', 'Lobby Design', 'Guest Rooms'],
      location: 'Agra',
      type: 'Hospitality'
    }
  ];

  const stats = [
    { value: '98%', label: 'Client Satisfaction', change: '+2%' },
    { value: '95%', label: 'On-time Delivery', change: '+5%' },
    { value: '4.9/5', label: 'Average Rating', change: 'Across 200+ reviews' },
    { value: '40%', label: 'Referral Business', change: 'From happy clients' },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-bg py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-japandi-cream via-white to-japandi-stone" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-japandi-bronze/20 to-transparent" />
      
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-40 h-40 border border-japandi-bronze/10 rounded-full"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-japandi-bronze/10 text-japandi-bronze mb-4">
            <TbMessage2 className="text-lg" />
            <span className="text-sm font-medium">Client Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair text-japandi-charcoal mb-6">
            Voices of <span className="text-gradient">Satisfaction</span>
          </h2>
          <p className="text-xl text-japandi-taupe max-w-3xl mx-auto">
            Hear from our clients about their experience working with The Space Arch 
            and see their spaces transformed.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-6xl mx-auto mb-20">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="premium-card overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left Column - Video/Project Image */}
              <div className="relative h-96 lg:h-auto">
                {/* Video/Image Display */}
                <div className="relative h-full">
                  {activeVideo === currentTestimonial.id ? (
                    <div className="relative h-full">
                      <video
                        ref={videoRef}
                        src={currentTestimonial.videoUrl}
                        className="w-full h-full object-cover"
                        loop
                        muted
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      
                      {/* Video Controls */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={toggleVideoPlayback}
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all"
                          >
                            {isPlaying ? <FiPause className="text-white" /> : <FiPlay className="text-white" />}
                          </button>
                          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all">
                            <FiVolume2 className="text-white" />
                          </button>
                        </div>
                        <button
                          onClick={() => setActiveVideo(null)}
                          className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all"
                        >
                          Show Images
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img
                        src={currentTestimonial.projectImage}
                        alt={currentTestimonial.project}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Play Button */}
                      <button
                        onClick={() => setActiveVideo(currentTestimonial.id)}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:scale-110 transition-transform group"
                      >
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <FiPlay className="text-japandi-bronze text-xl ml-1" />
                        </div>
                      </button>
                    </>
                  )}

                  {/* Project Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                        {currentTestimonial.type}
                      </span>
                      <span className="px-3 py-1 bg-japandi-bronze text-white text-sm rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="grid grid-cols-3 gap-4 text-white">
                    <div>
                      <div className="text-sm opacity-80">Duration</div>
                      <div className="text-lg font-semibold">{currentTestimonial.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Budget</div>
                      <div className="text-lg font-semibold">{currentTestimonial.budget}</div>
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Location</div>
                      <div className="text-lg font-semibold">{currentTestimonial.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Testimonial Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                {/* Quote Icon */}
                <div className="mb-6">
                  <FiMessageSquare className="text-4xl text-japandi-bronze/30" />
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <p className="text-xl italic text-japandi-taupe mb-8 leading-relaxed">
                    "{currentTestimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-japandi-bronze/20"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-japandi-charcoal">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-japandi-taupe">{currentTestimonial.role}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`w-4 h-4 ${
                              i < currentTestimonial.rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-japandi-taupe">
                          {currentTestimonial.rating}.0 Rating
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="bg-japandi-cream/50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-japandi-charcoal">
                        {currentTestimonial.project}
                      </span>
                      <span className="text-sm text-japandi-bronze bg-japandi-bronze/10 px-3 py-1 rounded-full">
                        Completed
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentTestimonial.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white text-japandi-taupe text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentIndex 
                            ? 'bg-japandi-bronze w-6' 
                            : 'bg-japandi-clay hover:bg-japandi-taupe'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-japandi-taupe">
                      {currentIndex + 1} / {testimonials.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-2xl border border-japandi-clay/30 flex items-center justify-center hover:bg-japandi-cream hover:scale-110 transition-all"
          >
            <FiChevronLeft className="text-xl text-japandi-charcoal" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-2xl border border-japandi-clay/30 flex items-center justify-center hover:bg-japandi-cream hover:scale-110 transition-all"
          >
            <FiChevronRight className="text-xl text-japandi-charcoal" />
          </button>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card p-6 text-center group hover:shadow-2xl transition-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-japandi-charcoal mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-japandi-taupe">
                  {stat.change}
                </div>
                <div className="mt-4 h-1 w-12 mx-auto bg-gradient-to-r from-japandi-bronze to-japandi-terracotta rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-japandi-charcoal text-center mb-8">
            More Happy Clients
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials
              .filter((_, idx) => idx !== currentIndex)
              .slice(0, 3)
              .map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="premium-card p-6 hover:scale-[1.02] transition-transform cursor-pointer"
                  onClick={() => setCurrentIndex(testimonials.indexOf(testimonial))}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-japandi-charcoal">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-japandi-taupe">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-japandi-taupe text-sm mb-4 line-clamp-3">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-japandi-bronze font-medium">
                      {testimonial.project}
                    </span>
                    <span className="text-japandi-taupe">{testimonial.location}</span>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center bg-gradient-to-r from-japandi-cream to-white p-8 rounded-3xl shadow-2xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-japandi-charcoal mb-2">
                Join Our Family of Happy Clients
              </h3>
              <p className="text-japandi-taupe">
                Let us transform your space and add your story to our collection
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium-primary px-8 py-4"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-40 left-40 w-8 h-8 border border-japandi-terracotta/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-60 right-60 w-24 h-24 border border-japandi-bronze/10 rounded-full"
      />
    </section>
  );
};

export default Testimonials;