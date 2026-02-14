import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMessageSquare, FiLayout, FiCheckSquare, 
  FiTool, FiHome, FiChevronRight, FiClock,
  FiUsers, FiFileText, FiBarChart
} from 'react-icons/fi';
import { TbArrowsRightLeft } from 'react-icons/tb';

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      id: 1,
      icon: FiMessageSquare,
      title: 'Discovery & Consultation',
      subtitle: 'Understanding Your Vision',
      description: 'We begin by understanding your vision, requirements, budget, and timeline.',
      duration: '1-2 Days',
      color: 'from-japandi-bronze to-japandi-terracotta',
      details: [
        'Initial meeting at your site or virtual',
        'Requirements assessment & wishlist',
        'Budget discussion & allocation',
        'Timeline planning & milestones',
        'Design style preferences discussion',
        'Site measurements & analysis'
      ],
      deliverables: ['Requirement Document', 'Initial Mood Board', 'Budget Estimate']
    },
    {
      id: 2,
      icon: FiLayout,
      title: 'Concept Development',
      subtitle: 'Visualizing Your Space',
      description: 'Creating mood boards, layouts, and 3D visualizations that bring your vision to life.',
      duration: '3-7 Days',
      color: 'from-japandi-moss to-japandi-wood',
      details: [
        'Space planning & optimal layout',
        'Mood board creation',
        '3D renderings & VR walkthroughs',
        'Material selection & samples',
        'Color scheme finalization',
        'Furniture & fixture selection'
      ],
      deliverables: ['3D Visualizations', 'Material Samples', 'Layout Plans']
    },
    {
      id: 3,
      icon: FiCheckSquare,
      title: 'Design Finalization',
      subtitle: 'Perfecting Every Detail',
      description: 'Detailed drawings, approvals, and comprehensive project planning.',
      duration: '5-10 Days',
      color: 'from-japandi-charcoal to-japandi-taupe',
      details: [
        'Detailed technical drawings',
        'Material procurement list',
        'Vendor & contractor finalization',
        'Timeline confirmation',
        'Final budget approval',
        'Permit & compliance checks'
      ],
      deliverables: ['Technical Drawings', 'Final Budget', 'Project Schedule']
    },
    {
      id: 4,
      icon: FiTool,
      title: 'Execution',
      subtitle: 'Bringing Designs to Life',
      description: 'On-site construction with daily supervision and regular quality checks.',
      duration: '4-12 Weeks',
      color: 'from-japandi-terracotta to-japandi-bronze',
      details: [
        'Daily site supervision',
        'Quality control & assurance',
        'Material verification',
        'Weekly progress updates',
        'Issue resolution & adjustments',
        'Client walkthroughs'
      ],
      deliverables: ['Quality Reports', 'Progress Photos', 'Weekly Updates']
    },
    {
      id: 5,
      icon: FiHome,
      title: 'Reveal & Aftercare',
      subtitle: 'Your Dream Space Delivered',
      description: 'Final walkthrough, handover, and ongoing support for complete peace of mind.',
      duration: '2-3 Days',
      color: 'from-japandi-wood to-japandi-moss',
      details: [
        'Final inspection & snag list',
        'Defect rectification',
        'Maintenance guide handover',
        'Warranty information',
        'Follow-up support',
        'Client satisfaction survey'
      ],
      deliverables: ['Final Handover', 'Maintenance Guide', 'Warranty Documents']
    }
  ];

  const processStats = [
    { icon: FiClock, value: '95%', label: 'On-time Delivery', sublabel: 'Projects completed on schedule' },
    { icon: FiUsers, value: '200+', label: 'Happy Clients', sublabel: 'Across Uttar Pradesh' },
    { icon: FiFileText, value: '3', label: 'Design Revisions', sublabel: 'Included in every project' },
    { icon: FiBarChart, value: '98%', label: 'Satisfaction Rate', sublabel: 'Based on client feedback' },
  ];

  const currentStep = steps.find(step => step.id === activeStep);

  return (
    <section id="process" className="section-bg py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-japandi-cream to-japandi-stone" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-japandi-bronze/20 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 border border-japandi-bronze/5 rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 border border-japandi-terracotta/5 rounded-full" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-japandi-bronze/10 text-japandi-bronze mb-4">
            <TbArrowsRightLeft className="text-lg" />
            <span className="text-sm font-medium">Our Process</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair text-japandi-charcoal mb-6">
            Design <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-japandi-taupe max-w-3xl mx-auto">
            A systematic, transparent approach ensuring quality, timely delivery, and 
            complete satisfaction at every step.
          </p>
        </motion.div>

        {/* Process Timeline - Desktop */}
        <div className="hidden lg:block mb-20">
          <div className="relative">
            {/* Connecting Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute left-20 right-20 top-12 h-0.5 bg-gradient-to-r from-japandi-bronze/30 via-japandi-terracotta/50 to-japandi-bronze/30"
              style={{ transformOrigin: 'left' }}
            />
            
            {/* Steps */}
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: step.id * 0.1 }}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(step.id)}
                  className="relative cursor-pointer"
                >
                  {/* Step Circle */}
                  <motion.div
                    animate={{ 
                      scale: activeStep >= step.id || hoveredStep === step.id ? 1.1 : 1,
                      boxShadow: activeStep >= step.id 
                        ? '0 20px 40px rgba(139, 115, 85, 0.3)' 
                        : '0 10px 20px rgba(139, 115, 85, 0.1)'
                    }}
                    className={`relative w-24 h-24 rounded-full mx-auto mb-6 bg-gradient-to-br ${step.color} 
                      flex items-center justify-center group`}
                  >
                    <step.icon className="text-white text-3xl" />
                    
                    {/* Animated Ring */}
                    {activeStep >= step.id && (
                      <motion.div
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 border-2 border-white/30 rounded-full"
                      />
                    )}
                    
                    {/* Step Number */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-japandi-bronze flex items-center justify-center">
                      <span className="text-japandi-bronze font-bold text-sm">{step.id}</span>
                    </div>
                  </motion.div>
                  
                  {/* Step Title */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-japandi-charcoal mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-japandi-taupe">{step.duration}</p>
                    
                    {/* Active Indicator */}
                    {activeStep === step.id && (
                      <motion.div
                        layoutId="activeProcess"
                        className="mt-2 h-1 w-16 mx-auto bg-gradient-to-r from-japandi-bronze to-japandi-terracotta rounded-full"
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Timeline - Mobile */}
        <div className="lg:hidden mb-12">
          <div className="space-y-6">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onClick={() => setActiveStep(step.id === activeStep ? 0 : step.id)}
                className={`premium-card p-6 cursor-pointer ${
                  activeStep === step.id ? 'ring-2 ring-japandi-bronze/30' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-japandi-charcoal">
                          Step {step.id}: {step.title}
                        </h3>
                        <p className="text-sm text-japandi-taupe">{step.subtitle}</p>
                      </div>
                      <span className="text-sm text-japandi-bronze bg-japandi-bronze/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-japandi-taupe mb-4">{step.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-japandi-bronze font-medium">
                        {activeStep === step.id ? 'Hide Details' : 'View Details'}
                      </span>
                      <FiChevronRight className={`transition-transform ${
                        activeStep === step.id ? 'rotate-90' : ''
                      }`} />
                    </div>

                    {activeStep === step.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-6 pt-6 border-t border-japandi-clay/30"
                      >
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-japandi-charcoal mb-2">Key Activities</h4>
                            <ul className="space-y-2">
                              {step.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-japandi-taupe">
                                  <div className="w-1.5 h-1.5 rounded-full bg-japandi-bronze mt-1.5 flex-shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-japandi-charcoal mb-2">Deliverables</h4>
                            <div className="flex flex-wrap gap-2">
                              {step.deliverables.map((item, idx) => (
                                <span 
                                  key={idx} 
                                  className="px-3 py-1 bg-japandi-cream text-japandi-bronze text-sm rounded-full"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Active Step Details - Desktop */}
        {currentStep && (
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden lg:block mb-16"
          >
            <div className="premium-card p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column - Step Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentStep.color} flex items-center justify-center`}>
                      <currentStep.icon className="text-white text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-japandi-charcoal">
                        Step {currentStep.id}: {currentStep.title}
                      </h3>
                      <p className="text-japandi-taupe">{currentStep.subtitle}</p>
                      <div className="mt-2 inline-flex items-center gap-2 px-4 py-1 bg-japandi-cream rounded-full">
                        <FiClock className="text-japandi-bronze" />
                        <span className="text-sm text-japandi-bronze">{currentStep.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-japandi-taupe mb-6">
                    {currentStep.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-japandi-charcoal mb-3">Deliverables</h4>
                    <div className="space-y-2">
                      {currentStep.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-japandi-cream/50">
                          <div className="w-2 h-2 rounded-full bg-japandi-bronze" />
                          <span className="text-japandi-taupe">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle Column - Details */}
                <div>
                  <h4 className="text-xl font-semibold text-japandi-charcoal mb-6">
                    Key Activities
                  </h4>
                  <div className="space-y-4">
                    {currentStep.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white hover:shadow-md transition-shadow"
                      >
                        <div className="w-8 h-8 rounded-lg bg-japandi-bronze/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-japandi-bronze font-semibold">{idx + 1}</span>
                        </div>
                        <span className="text-japandi-taupe">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Visual */}
                <div className="relative">
                  <div className="sticky top-8">
                    <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                      <img
                        src={`https://images.unsplash.com/photo-15${
                          currentStep.id === 1 ? '860138312' :
                          currentStep.id === 2 ? '860140745' :
                          currentStep.id === 3 ? '860139406' :
                          currentStep.id === 4 ? '860136863' : '860137752'
                        }?auto=format&w=800&q=80`}
                        alt={currentStep.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="text-sm">Step {currentStep.id}</span>
                        <h4 className="text-lg font-semibold">{currentStep.title}</h4>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                        disabled={activeStep === 1}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                          activeStep === 1 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-japandi-cream'
                        }`}
                      >
                        <FiChevronRight className="rotate-180" />
                        <span>Previous</span>
                      </button>
                      
                      <div className="flex items-center gap-2">
                        {steps.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveStep(idx + 1)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx + 1 === activeStep 
                                ? 'bg-japandi-bronze w-6' 
                                : 'bg-japandi-clay hover:bg-japandi-taupe'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <button
                        onClick={() => setActiveStep(prev => Math.min(steps.length, prev + 1))}
                        disabled={activeStep === steps.length}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                          activeStep === steps.length 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-japandi-cream'
                        }`}
                      >
                        <span>Next</span>
                        <FiChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Process Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {processStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="premium-card p-6 text-center group hover:scale-[1.02] transition-transform"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-japandi-bronze/10 to-japandi-terracotta/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="text-2xl text-japandi-bronze" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-japandi-charcoal mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-japandi-taupe">{stat.sublabel}</div>
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
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center bg-gradient-to-r from-japandi-cream to-white p-8 rounded-3xl shadow-2xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-japandi-charcoal mb-2">
                Ready to Start Your Project?
              </h3>
              <p className="text-japandi-taupe">
                Book a free consultation and let's discuss your vision
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium-primary px-8 py-4"
            >
              Begin Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-40 w-20 h-20 border border-japandi-bronze/10 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-40 left-40 w-10 h-10 border border-japandi-terracotta/20 rounded-full"
      />
    </section>
  );
};

export default Process;