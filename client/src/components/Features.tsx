import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, BarChart2, Lightbulb } from 'lucide-react';

const features = [
  {
    title: "Multi-Species Detection",
    description: "Unlike traditional PAM systems limited to specific calls, our technology identifies multiple whale species simultaneously with high accuracy.",
    icon: <ClipboardList className="h-6 w-6 text-white" />
  },
  {
    title: "Fully Customizable",
    description: "Our general-purpose detectors can be tailored to the specific needs of your organization, whether for research, conservation, or marine industry.",
    icon: <BarChart2 className="h-6 w-6 text-white" />
  },
  {
    title: "Energy-Efficient Solutions",
    description: "Distilled ML models and edge AI accelerators allow our system to operate in energy-constrained deep-sea environments for extended periods.",
    icon: <Lightbulb className="h-6 w-6 text-white" />
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-[#0c4a6e]/40 to-[#0f172a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Revolutionary Features
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Our adaptable, customizable cetacean detection systems overcome the limitations of current PAM technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-[#1e293b]/60 rounded-xl overflow-hidden shadow-xl transition-all duration-300 border border-gray-800 hover:border-[#0d9488]/50 p-6 h-full flex flex-col">
                <div className="p-2 bg-gradient-to-br from-[#0d9488] to-[#0284c7] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{feature.description}</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-sm font-medium text-[#2dd4bf]">
                    Learn more
                    <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
