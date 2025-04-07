import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-[#020617] to-[#0f172a] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              About CetaDetect
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-300">
              Our revolutionary two-part solution harnesses artificial intelligence and edge computing to enable 
              power-efficient detectors that can identify multiple whale species simultaneously.
            </p>
            <p className="mt-3 max-w-3xl text-lg text-gray-300">
              First, we provide fully trainable, low-power deep learning models for PAM-based cetacean detection. 
              Second, we offer a suite of pre-trained models with software for annotating custom datasets and training 
              specialized models for specific research and conservation needs.
            </p>
            <div className="mt-8 space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#0d9488] text-white">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-white">Non-invasive monitoring</h3>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-center"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#0d9488] text-white">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-white">Accurate species identification</h3>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex items-center"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#0d9488] text-white">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-white">Conservation-focused research</h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 lg:mt-0 lg:col-span-7"
          >
            <div className="relative">
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    className="object-cover"
                    src="https://images.unsplash.com/photo-1570939274717-7eda259b50ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=960&q=80" 
                    alt="Whale breaching the ocean surface" 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
