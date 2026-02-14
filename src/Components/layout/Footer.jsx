import React from 'react';
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="p-6 relative text-white overflow-hidden bg-gradient-to-b from-[#383531] via-[#383631] to-[#353331] ">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-bronze to-transparent" />

      {/* Soft Background Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-bronze/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/5 blur-3xl rounded-full" />

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-12 h-12 bg-bronze rounded-xl shadow-[0_0_25px_rgba(184,134,11,0.35)]" />
              <span className="text-2xl font-semibold tracking-wide">
                The Space Arch
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Creating harmonious spaces where Agra&apos;s heritage meets modern minimalism.
            </p>

            <div className="flex space-x-4">
              {[FiFacebook, FiInstagram, FiTwitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="
                    w-11 h-11 rounded-full
                    border border-white/10
                    flex items-center justify-center
                    bg-white/5 backdrop-blur-md
                    hover:bg-bronze hover:border-bronze
                    hover:scale-110
                    transition-all duration-300
                    shadow-md
                  "
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 relative inline-block">
              Quick Links
              <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-bronze" />
            </h3>
            <ul className="space-y-3">
              {['Services', 'Portfolio', 'Design Process', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="group text-gray-300 hover:text-bronze transition-all"
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-5 relative inline-block">
              Service Areas
              <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-bronze" />
            </h3>
            <ul className="space-y-3 text-gray-300">
              {['Agra', 'Mathura', 'Firozabad', 'Noida', 'Greater Noida', 'Delhi NCR'].map(
                (city) => (
                  <li key={city} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                    {city}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 relative inline-block">
              Contact Us
              <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-bronze" />
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <FiMapPin className="text-bronze text-lg" />
                <span>Agra, Uttar Pradesh</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <FiPhone className="text-bronze text-lg" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <FiMail className="text-bronze text-lg" />
                <span>contact@thespacearch.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <p>
            © {currentYear}{' '}
            <span className="text-white">The Space Arch</span>. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-bronze transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-bronze transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
