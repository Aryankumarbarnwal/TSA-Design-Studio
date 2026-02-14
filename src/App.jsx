import React from 'react';
import { useEffect } from 'react';
import Navbar from './Components/layout/Navbar.jsx'
import Footer from './Components/layout/Footer.jsx'
import Hero from './Components/sections/Hero.jsx'
import About from './Components/sections/About';
import Services from './Components/sections/Services';
import Portfolio from './Components/sections/Portfolio';
import Process from './Components/sections/Process';
import Testimonials from './Components/sections/Testimonials';
import WhyChooseUs from './Components/sections/WhyChooseUs';
import Contact from './Components/sections/Contact';

function App() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <Testimonials />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;