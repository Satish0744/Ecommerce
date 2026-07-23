// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../components/Navbar/Navbar'; 
import Hero from '../components/Hero/Hero';
import Section1 from '../components/Sections/Section1';
import { Men } from './Men';
import { Women } from './Women';
import CustomerReviews from '../components/CustomerReviews/CustomerReviews';
import Footer from '../components/Footer/Footer';

// Scroll Animation Wrapper
const AnimatedSection = ({ children, direction = 'left', delay = 0, className = '' }) => {
  const { ref, controls } = useScrollAnimation(0.15);

  const directions = {
    left: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
    bottom: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={directions[direction]}
      transition={{ duration: 0.7, ease: "easeOut", delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
     <div className="sticky top-0 z-50">
        <Navbar />
     
    <div className="overflow-x-hidden">
      {/* ✅ Navbar with sticky wrapper */}
     
      
      {/* Hero - Fade In */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Hero />
      </motion.div>
      
      <div className="min-h-screen bg-white pl-5 pr-5">
        <AnimatedSection direction="left" delay={0.1}>
          <Section1 />
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.2}>
          <Men />
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.3}>
          <Women />
        </AnimatedSection>

        <AnimatedSection direction="scale" delay={0.4}>
          <CustomerReviews />
        </AnimatedSection>
      </div>
 </div>
      <Footer />
    </div>
  );
};

export default Home;