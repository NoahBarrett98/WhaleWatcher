import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { WaveDivider } from '@/components/ui/wave-divider';

export default function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const fullText = "Revolutionizing cetacean detection with model distillation and edge AI technology. Our customizable solution identifies multiple whale species while meeting energy constraints of deep-sea hardware.";
  
  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTerminalText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 30);
    
    return () => clearInterval(typing);
  }, []);

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
                <span className="block text-white">CetaDetect</span>
                <span className="block terminal-glow bg-clip-text text-transparent bg-gradient-to-r from-[#5eead4] to-[#38bdf8]">
                  {`>_`} detection_system.exe
                </span>
              </span>
            </motion.h1>
            <div className="mt-6 bg-black/30 border border-[#2dd4bf]/30 rounded-md p-4 font-mono">
              <p className="text-[#2dd4bf] text-sm sm:text-base">
                <span className="text-[#38bdf8]">root@cetadetect:~$</span> ./initialize_system<br />
                <span className="text-gray-300">[MODULE] Loading advanced cetacean detection module...</span><br />
                <span className="text-gray-300">[STATUS] Module loaded successfully</span><br />
                <span className="text-[#38bdf8]">root@cetadetect:~$</span> ./display_info<br />
                <span className="text-gray-300 terminal-cursor">{terminalText}</span>
              </p>
            </div>
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
                  className="w-full sm:w-auto bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-3 md:py-4 md:text-lg md:px-10 font-mono border border-[#2dd4bf]/50"
                >
                  <a href="#waitlist">{`>`} Join_Waitlist()</a>
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-[#14b8a6] text-[#14b8a6] hover:bg-[#14b8a6]/10 px-8 py-3 md:py-4 md:text-lg md:px-10 font-mono"
                >
                  <a href="#technology">{`>`} Learn_More()</a>
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
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md border border-[#2dd4bf]/20">
              <div className="relative block w-full bg-[#1e293b] rounded-lg overflow-hidden">
                {/* Terminal header */}
                <div className="bg-black/50 px-4 py-2 flex items-center border-b border-[#2dd4bf]/20">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs font-mono text-center w-full text-gray-300">cetadetect-scanner -- /dev/sonar0</div>
                </div>
                
                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="w-full opacity-90"
                  src="https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Whale swimming in ocean"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] opacity-60"></div>
                <div className="absolute bottom-0 p-4">
                  <div className="backdrop-blur-md bg-black/30 p-3 rounded font-mono border border-[#2dd4bf]/30">
                    <div className="text-xs text-gray-400 mb-1">[SYSTEM] Acoustic analysis complete</div>
                    <div className="inline-flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm text-[#2dd4bf] terminal-glow">DETECTED: Megaptera novaeangliae</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Confidence: 97.8%</div>
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