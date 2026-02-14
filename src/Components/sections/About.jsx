import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiAward, FiUsers, FiMapPin, FiCheck, FiStar,
  FiCamera, FiHome, FiTool, FiHeart, FiGlobe,
  FiCoffee, FiTarget, FiShield, FiTrendingUp
} from 'react-icons/fi';
import { TbPlant2, TbHandClick } from 'react-icons/tb';

const About = () => {
  const founderStory = {
    name: 'Ar. Rajesh Verma',
    role: 'Founder & Principal Designer',
    experience: '12+ Years',
    education: 'B.Arch, IIT Roorkee',
    specialty: 'Japandi & Minimalist Design',
    quote: '"Good design is as little design as possible."',
    philosophy: 'Creating spaces that breathe, inspire, and stand the test of time through sustainable practices.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&w=800&q=80'
  };

  const teamMembers = [
    {
      name: 'Priya Sharma',
      role: 'Senior Interior Designer',
      experience: '8 Years',
      specialty: 'Residential Spaces',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&w=400&q=80'
    },
    {
      name: 'Vikram Singh',
      role: 'Project Manager',
      experience: '10 Years',
      specialty: 'Commercial Projects',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&w=400&q=80'
    },
    {
      name: 'Anjali Mehta',
      role: '3D Visualizer',
      experience: '6 Years',
      specialty: 'VR Walkthroughs',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&w=400&q=80'
    },
    {
      name: 'Rohit Kumar',
      role: 'Site Supervisor',
      experience: '15 Years',
      specialty: 'Quality Control',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=400&q=80'
    }
  ];

  const achievements = [
    { icon: FiAward, year: '2023', title: 'Best Interior Design Firm', organization: 'Design Awards India' },
    { icon: FiStar, year: '2022', title: 'Sustainable Design Excellence', organization: 'Green Building Council' },
    { icon: FiCamera, year: '2021', title: 'Featured in Architectural Digest', organization: 'AD India' },
    { icon: FiTrendingUp, year: '2020', title: 'Fastest Growing Design Studio', organization: 'Business Today' }
  ];

  const values = [
    {
      icon: FiHeart,
      title: 'Client-Centric',
      description: 'Your vision is our priority. We listen, understand, and deliver beyond expectations.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: TbPlant2,
      title: 'Sustainability',
      description: 'Using eco-friendly materials and practices for a greener future.',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: FiShield,
      title: 'Quality Assurance',
      description: 'Uncompromising quality at every stage of design and execution.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiTarget,
      title: 'Innovation',
      description: 'Blending traditional craftsmanship with cutting-edge technology.',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const stats = [
    { icon: FiHome, value: '345+', label: 'Projects Completed', sublabel: 'Across 6 cities' },
    { icon: FiUsers, value: '200+', label: 'Happy Clients', sublabel: '98% satisfaction rate' },
    { icon: FiMapPin, value: '6', label: 'Cities', sublabel: 'Across Uttar Pradesh' },
    { icon: FiTool, value: '8+', label: 'Years', sublabel: 'Of design excellence' }
  ];

  const timeline = [
    { year: '2015', event: 'Started as a solo designer studio in Agra' },
    { year: '2017', event: 'Expanded team and opened first office' },
    { year: '2019', event: 'Launched commercial design division' },
    { year: '2021', event: 'Won first national design award' },
    { year: '2023', event: 'Expanded to Delhi NCR region' }
  ];

  return (
    <section id="about" className="section-bg py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-japandi-paper via-white to-japandi-cream" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-japandi-bronze/20 to-transparent" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-48 h-48 border border-japandi-bronze/5 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-24 h-24 border border-japandi-terracotta/10 rounded-full"
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
            <TbHandClick className="text-lg" />
            <span className="text-sm font-medium">Our Story</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair text-japandi-charcoal mb-6">
            Crafting <span className="text-gradient">Dream Spaces</span>
          </h2>
          <p className="text-xl text-japandi-taupe max-w-3xl mx-auto">
            From a passionate designer's vision to a leading design studio in Uttar Pradesh, 
            our journey is defined by innovation, quality, and client satisfaction.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="premium-card overflow-hidden">
                  <img
                    src={founderStory.image}
                    alt={founderStory.name}
                    className="w-full h-96 object-cover image-hover-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Founder Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{founderStory.name}</h3>
                    <p className="text-white/80 mb-2">{founderStory.role}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center">
                        <FiAward className="mr-1" />
                        {founderStory.experience}
                      </span>
                      <span className="flex items-center">
                        <FiStar className="mr-1" />
                        {founderStory.specialty}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -left-6 w-32 h-32 premium-card overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&w=400&q=80"
                    alt="Project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-japandi-bronze/60 to-japandi-terracotta/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiHome className="text-white text-3xl" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 w-24 h-24 premium-card overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=400&q=80"
                    alt="Design"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-japandi-wood/60 to-japandi-moss/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiCheck className="text-white text-2xl" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Founder Story */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-japandi-bronze/10 text-japandi-bronze mb-4">
                  <FiCoffee className="text-lg" />
                  <span className="text-sm font-medium">Founder's Note</span>
                </div>
                <h3 className="text-3xl font-bold text-japandi-charcoal mb-4">
                  Meet Our Founder
                </h3>
              </div>

              {/* Quote */}
              <div className="relative mb-8">
                <div className="absolute -left-6 top-0 text-6xl text-japandi-bronze/20 font-playfair">"</div>
                <blockquote className="text-2xl italic text-japandi-charcoal pl-8 mb-4">
                  {founderStory.quote}
                </blockquote>
                <div className="text-right text-lg font-semibold text-japandi-bronze">
                  — {founderStory.name}
                </div>
              </div>

              {/* Philosophy */}
              <p className="text-lg text-japandi-taupe mb-8 leading-relaxed">
                {founderStory.philosophy} With {founderStory.experience} of experience and education 
                from {founderStory.education}, I founded The Space Arch with a vision to create 
                spaces that are not just beautiful, but also functional, sustainable, and deeply 
                personal to each client.
              </p>

              {/* Education & Specialties */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-japandi-cream">
                  <div className="text-sm text-japandi-taupe mb-1">Education</div>
                  <div className="font-semibold text-japandi-charcoal">{founderStory.education}</div>
                </div>
                <div className="p-4 rounded-xl bg-japandi-cream">
                  <div className="text-sm text-japandi-taupe mb-1">Specialization</div>
                  <div className="font-semibold text-japandi-charcoal">{founderStory.specialty}</div>
                </div>
              </div>

              {/* Signature */}
              <div className="flex items-center space-x-4 p-4 border-l-4 border-japandi-bronze bg-white/50 rounded-r-xl">
                <div className="text-3xl font-playfair text-japandi-bronze">@</div>
                <div>
                  <div className="font-bold text-japandi-charcoal">the_space_arch</div>
                  <div className="text-sm text-japandi-taupe">Connect on Instagram</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-playfair text-japandi-charcoal mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h3>
            <p className="text-xl text-japandi-taupe max-w-3xl mx-auto">
              The principles that guide every decision we make and every space we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="premium-card p-6 h-full hover:scale-[1.02] transition-transform">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <value.icon className="text-white text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-japandi-charcoal mb-3">
                    {value.title}
                  </h4>
                  <p className="text-japandi-taupe">
                    {value.description}
                  </p>
                  
                  {/* Animated Underline */}
                  <div className="mt-6 h-1 w-12 bg-gradient-to-r from-japandi-bronze to-japandi-terracotta rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats & Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-japandi-charcoal mb-8">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="premium-card p-6 text-center group hover:shadow-2xl transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-japandi-bronze/10 to-japandi-terracotta/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="text-2xl text-japandi-bronze" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-japandi-charcoal mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-japandi-taupe">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-japandi-charcoal mb-8">
              Our Journey
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-japandi-bronze via-japandi-terracotta to-japandi-wood" />
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Dot */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-japandi-bronze to-japandi-terracotta ring-4 ring-white" />
                    
                    {/* Content */}
                    <div className="premium-card p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl font-bold text-japandi-bronze">
                          {item.year}
                        </span>
                        <div className="text-sm px-3 py-1 bg-japandi-cream text-japandi-bronze rounded-full">
                          Milestone
                        </div>
                      </div>
                      <p className="text-japandi-taupe">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-playfair text-japandi-charcoal mb-4">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h3>
            <p className="text-xl text-japandi-taupe max-w-3xl mx-auto">
              A talented team of architects, designers, and craftsmen dedicated to 
              bringing your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="premium-card overflow-hidden h-full">
                  {/* Team Member Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Experience Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                      {member.experience}
                    </div>
                  </div>

                  {/* Team Member Info */}
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-japandi-charcoal mb-1">
                      {member.name}
                    </h4>
                    <p className="text-japandi-bronze font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-japandi-taupe mb-4">
                      Specializes in {member.specialty}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex space-x-3">
                      {['linkedin', 'instagram', 'portfolio'].map((platform) => (
                        <button
                          key={platform}
                          className="w-8 h-8 rounded-full border border-japandi-clay/30 flex items-center justify-center hover:border-japandi-bronze hover:bg-japandi-bronze/5 transition-all"
                        >
                          <span className="text-xs text-japandi-taupe">
                            {platform.charAt(0).toUpperCase()}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="premium-card p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-japandi-charcoal mb-4">
                Awards & Recognition
              </h3>
              <p className="text-japandi-taupe">
                Celebrating excellence in design and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-japandi-cream transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-japandi-bronze/10 to-japandi-terracotta/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <achievement.icon className="text-japandi-bronze text-xl" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-japandi-bronze mb-1">
                        {achievement.year}
                      </div>
                      <h4 className="font-semibold text-japandi-charcoal mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-japandi-taupe">
                        {achievement.organization}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&w=1200&q=80"
                alt="CTA Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-japandi-charcoal/80 via-japandi-charcoal/60 to-japandi-charcoal/80" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-12 text-white">
              <h3 className="text-4xl font-playfair mb-4">
                Ready to Create Your Dream Space?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join 200+ satisfied clients who have transformed their spaces with our expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-japandi-bronze to-japandi-terracotta text-white rounded-xl font-medium hover:shadow-xl transition-shadow"
                >
                  Book Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
                >
                  View Our Certifications
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-20 w-16 h-16 border border-japandi-bronze/10 rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-1/3 left-20 w-12 h-12 border border-japandi-terracotta/20 rounded-full"
      />
    </section>
  );
};

export default About;