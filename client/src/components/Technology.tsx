import React from 'react';
import { motion } from 'framer-motion';
import { FlaskRound, Music, Code, Settings } from 'lucide-react';

export default function Technology() {
  return (
    <section id="technology" className="py-16 bg-gradient-to-b from-[#0f172a] to-[#020617] relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#0d9488]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#0284c7]/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Technology
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            CetaDetect overcomes limitations of current PAM statistical libraries by leveraging state-of-the-art deep learning and edge computing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#1e293b]/80 rounded-xl p-6 border border-gray-800 hover:border-[#14b8a6]/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#0d9488] to-[#0284c7] text-white">
                      <FlaskRound className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Model Distillation</h3>
                    <p className="mt-2 text-gray-300">
                      We leverage state-of-the-art ML techniques to distill large neural networks into fully trainable, 
                      low-power models optimized for specific edge AI accelerators to meet computational and energy demands.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#1e293b]/80 rounded-xl p-6 border border-gray-800 hover:border-[#14b8a6]/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#0d9488] to-[#0284c7] text-white">
                      <Music className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Passive Acoustic Monitoring</h3>
                    <p className="mt-2 text-gray-300">
                      Our initial approach leverages spectrogram-based computer vision models, with potential for 
                      other AI models such as Mel-frequency Cepstral Coefficients based or complex valued models for enhanced detection.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#1e293b]/80 rounded-xl p-6 border border-gray-800 hover:border-[#14b8a6]/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#0d9488] to-[#0284c7] text-white">
                      <Code className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Edge AI Accelerators</h3>
                    <p className="mt-2 text-gray-300">
                      Emerging edge AI accelerators enable our ML models to run in energy-constrained environments, making our solution adaptable and cost-effective for long-term ocean deployments.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#1e293b]/80 rounded-xl p-6 border border-gray-800 hover:border-[#14b8a6]/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#0d9488] to-[#0284c7] text-white">
                      <Settings className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Pre-trained Model Suite</h3>
                    <p className="mt-2 text-gray-300">
                      We provide a suite of pre-trained models to suit individual needs, along with software to help users annotate 
                      their own data sets and train custom models for specific cetacean species and environments.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0d9488] to-[#0284c7] rounded-lg blur opacity-30"></div>
              <div className="relative bg-[#1e293b] rounded-lg overflow-hidden border border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1568029728390-79e0f7101e87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Ocean monitoring equipment" 
                  className="w-full h-96 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="backdrop-blur-md bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center mb-2">
                      <div className="h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                      <div className="text-xs text-gray-300">LIVE MONITORING</div>
                    </div>
                    <div className="font-mono text-sm text-gray-200 flex justify-between">
                      <span>Species: Humpback Whale</span>
                      <span>Conf: 98.2%</span>
                    </div>
                    <div className="mt-2 w-full bg-[#020617]/50 rounded-full h-1">
                      <motion.div 
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="bg-[#2dd4bf] h-1 rounded-full w-[98%]"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
