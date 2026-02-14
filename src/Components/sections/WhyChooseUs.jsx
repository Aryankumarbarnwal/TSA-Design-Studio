import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiAward, FiClock, FiDollarSign, FiUsers, 
  FiCheckCircle, FiShield 
} from 'react-icons/fi';
import Container from '../layout/Container';
import SectionHeader from '../layout/SectionHeader';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FiAward,
      title: 'Award-Winning Designs',
      description: 'Recognition for innovative and sustainable design solutions.',
      stat: '5+ Awards'
    },
    {
      icon: FiClock,
      title: 'Timely Delivery',
      description: '95% projects completed on or before schedule.',
      stat: '95% On-time'
    },
    {
      icon: FiDollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden costs with detailed breakdowns.',
      stat: '0 Hidden Costs'
    },
    {
      icon: FiUsers,
      title: 'Expert Team',
      description: 'Certified architects, designers, and craftsmen.',
      stat: '15+ Experts'
    },
    {
      icon: FiCheckCircle,
      title: 'End-to-End Service',
      description: 'From concept to completion under one roof.',
      stat: 'One Roof'
    },
    {
      icon: FiShield,
      title: 'Quality Assurance',
      description: 'Premium materials with 2-year workmanship warranty.',
      stat: '2-Year Warranty'
    }
  ];

  const processComparison = [
    {
      aspect: 'Design Process',
      competitors: '2-3 revisions',
      spaceArch: 'Unlimited revisions until satisfaction'
    },
    {
      aspect: 'Material Quality',
      competitors: 'Standard materials',
      spaceArch: 'Premium sustainable materials'
    },
    {
      aspect: 'Project Management',
      competitors: 'External contractors',
      spaceArch: 'In-house expert team'
    },
    {
      aspect: 'Communication',
      competitors: 'Delayed responses',
      spaceArch: 'Dedicated project manager'
    },
    {
      aspect: 'After-Sales Support',
      competitors: 'Limited warranty',
      spaceArch: '2-year comprehensive support'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeader
          title="Why The Space Arch?"
          subtitle="Discover what sets us apart in the world of design and construction"
          tagline="Our Advantages"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 border border-gray-200 rounded-xl hover:border-bronze hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bronze/10 rounded-lg group-hover:bg-bronze group-hover:text-white transition-colors">
                  <feature.icon className="text-2xl text-bronze group-hover:text-white" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <span className="text-sm font-semibold text-bronze bg-bronze/10 px-2 py-1 rounded">
                      {feature.stat}
                    </span>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            How We Compare
          </h3>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <div className="grid grid-cols-3 bg-charcoal text-white">
              <div className="p-4 font-semibold">Aspect</div>
              <div className="p-4 font-semibold text-center">Typical Competitors</div>
              <div className="p-4 font-semibold text-center bg-bronze">The Space Arch</div>
            </div>
            {processComparison.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-3 ${
                  idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="p-4 font-medium border-r">{item.aspect}</div>
                <div className="p-4 text-gray-600 text-center border-r">
                  {item.competitors}
                </div>
                <div className="p-4 text-bronze font-medium text-center bg-bronze/5">
                  {item.spaceArch}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-charcoal to-bronze rounded-2xl p-8 md:p-12 "
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '200+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '₹50Cr+', label: 'Total Project Value' },
              { value: '15+', label: 'Industry Awards' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-bronze rounded-lg bg-blue-200 hover:bg-[#756048] transition-colors font-semibold text-lg">
            Start Your Project Today
          </button>
          <p className="text-gray-600 mt-4">
            Schedule a free consultation with our design experts
          </p>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;