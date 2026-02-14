import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, FiPhone, FiMapPin, FiClock, 
  FiSend, FiCheckCircle 
} from 'react-icons/fi';
import Container from '../layout/Container';
import SectionHeader from '../layout/SectionHeader'
import Button from '../ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Our Location',
      details: ['Agra, Uttar Pradesh', 'Service across UP & Delhi NCR'],
      color: 'bg-stone'
    },
    {
      icon: FiPhone,
      title: 'Contact Number',
      details: ['+91 98765 43210', 'Mon-Sat: 9AM-7PM'],
      color: 'bg-taupe'
    },
    {
      icon: FiMail,
      title: 'Email Address',
      details: ['contact@thespacearch.com', 'response within 24 hours'],
      color: 'bg-dark-taupe'
    },
    {
      icon: FiClock,
      title: 'Working Hours',
      details: ['Monday - Saturday', '9:00 AM - 7:00 PM'],
      color: 'bg-bronze'
    }
  ];

  const projectTypes = [
    'Interior Design',
    'Exterior Design',
    'Complete Construction',
    'Renovation',
    'Consultation',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹5 Lakhs',
    '₹5-10 Lakhs',
    '₹10-25 Lakhs',
    '₹25-50 Lakhs',
    '₹50 Lakhs - ₹1 Crore',
    'Above ₹1 Crore'
  ];

  return (
    <section id="contact" className="py-20 bg-primary">
      <Container>
        <SectionHeader
          title="Let's Create Your Dream Space"
          subtitle="Schedule a free consultation with our design experts"
          tagline="Contact Us"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${info.color}`}>
                        <info.icon className="text-white" />
                      </div>
                      <h4 className="font-semibold">{info.title}</h4>
                    </div>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-4">Our Service Areas</h4>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                {/* Simple map representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-charcoal font-semibold mb-2">
                      Serving Across Uttar Pradesh
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {['Agra', 'Mathura', 'Noida', 'Delhi', 'Firozabad'].map((city) => (
                        <span
                          key={city}
                          className="px-3 py-1 bg-secondary rounded-full text-sm"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">WA</span>
                </div>
                <div>
                  <h4 className="font-semibold">Quick Response on WhatsApp</h4>
                  <p className="text-gray-600 text-sm">
                    Get instant answers to your queries
                  </p>
                </div>
              </div>
              <button className="w-full mt-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium">
                Chat on WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <FiCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your consultation request has been received. 
                    Our team will contact you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold mb-2">
                    Free Design Consultation
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Fill the form below and we'll get back to you within 24 hours
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-bronze focus:ring-2 focus:ring-bronze/20 outline-none transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-bronze focus:ring-2 focus:ring-bronze/20 outline-none transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-bronze focus:ring-2 focus:ring-bronze/20 outline-none transition-all"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-bronze focus:ring-2 focus:ring-bronze/20 outline-none transition-all"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Approximate Budget *
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-bronze focus:ring-2 focus:ring-bronze/20 outline-none transition-all"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Project Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-bronze focus:ring-2 focus:ring-bronze/20 outline-none transition-all"
                        placeholder="Tell us about your project requirements, location, timeline, etc."
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Upload Inspiration Images (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-bronze transition-colors cursor-pointer">
                        <div className="text-gray-500">
                          Click to upload or drag and drop
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                          PNG, JPG, PDF up to 10MB
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      className="w-full"
                      disabled={isSubmitting}
                      icon={FiSend}
                      iconPosition="right"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Consultation Request'}
                    </Button>

                    <p className="text-gray-500 text-sm text-center">
                      By submitting, you agree to our Privacy Policy and consent to contact.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Consultation Benefits */}
            <div className="mt-6 bg-bronze/10 rounded-xl p-6">
              <h4 className="font-semibold mb-3">What to expect in consultation:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-bronze"></div>
                  <span>Free initial design advice</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-bronze"></div>
                  <span>Rough budget estimation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-bronze"></div>
                  <span>Timeline discussion</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-bronze"></div>
                  <span>Portfolio showcase</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-bronze"></div>
                  <span>No obligation to proceed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;