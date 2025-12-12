"use client"

import { motion } from 'motion/react';
import { InnovationHeader } from '@workspace/ui/components/gmh/innovations/gmh-innovation-header';
import { WhatIsItSection } from '@workspace/ui/components/gmh/innovations/gmh-whatisit-section';
import { HowToUseSection } from '@workspace/ui/components/gmh/innovations/gmh-howtouseit-section';
import { TestingSection } from '@workspace/ui/components/gmh/innovations/gmh-testing-section';
import { UserStorySection } from '@workspace/ui/components/gmh/innovations/gmh-userstory-section';
import { GetItSection } from '@workspace/ui/components/gmh/innovations/gmh-getit-section';
import { NavigationFooter } from '@workspace/ui/components/gmh/innovations/gmh-navigation-footer';
import { Download } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#033C5A]">
      <InnovationHeader />
      <WhatIsItSection />
      <HowToUseSection />
      <TestingSection />
      <UserStorySection />
      <GetItSection />
      
      {/* Large CTA Button */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-16"
      >
        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(3, 60, 90, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full max-w-2xl mx-auto block bg-gradient-to-r from-[#033C5A] to-[#024D75] text-white py-8 px-12 rounded-2xl shadow-2xl transition-all relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#AA9868] to-[#D4C5A0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex items-center justify-center gap-4">
            <Download className="w-8 h-8" />
            <span className="text-2xl">Get Innovation Materials</span>
          </div>
          <motion.div
            className="absolute inset-0 bg-white opacity-0"
            animate={{
              opacity: [0, 0.1, 0],
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          ></motion.div>
        </motion.button>
      </motion.div>
      
      <NavigationFooter />
    </div>
  );
}
