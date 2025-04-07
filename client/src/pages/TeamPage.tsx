import React from 'react';
import Navbar from '../components/Navbar';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />
      
      {/* Header */}
      <div className="pt-20 pb-10 bg-gradient-to-b from-[#0f172a] to-[#020617]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#5eead4] to-[#38bdf8]">
                Meet Our Team
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              The innovative minds behind CetaDetect, combining expertise in AI, conservation, and marine science.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Team Section */}
      <Team />
      
      <Footer />
    </div>
  );
}