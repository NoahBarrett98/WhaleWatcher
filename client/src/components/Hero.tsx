import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { WaveDivider } from '@/components/ui/wave-divider';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block mt-1 text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-white">Advanced Cetacean</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#5eead4] to-[#38bdf8]">
                  Detection System
                </span>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl"
            >
              Revolutionizing marine conservation with AI-powered whale detection technology. 
              Join our waitlist to be the first to implement our cutting-edge solution.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div className="rounded-md shadow">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-3 md:py-4 md:text-lg md:px-10"
                >
                  <a href="#waitlist">Join the Waitlist</a>
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-[#14b8a6] bg-white hover:bg-gray-50 px-8 py-3 md:py-4 md:text-lg md:px-10"
                >
                  <a href="#technology">Learn More</a>
                </Button>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-[#1e293b] rounded-lg overflow-hidden">
                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="w-full"
                  src="https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Whale swimming in ocean"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] opacity-60"></div>
                <div className="absolute bottom-0 p-4">
                  <div className="backdrop-blur-md bg-white/5 p-2 rounded-lg inline-flex items-center border border-white/10">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium">Cetacean detected</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0">
        <WaveDivider />
      </div>
    </section>
  );
}
