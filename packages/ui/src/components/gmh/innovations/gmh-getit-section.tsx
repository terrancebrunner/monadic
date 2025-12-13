"use client"

import { motion } from 'motion/react';
import { Card } from '@workspace/ui/components/ui/card';
import { BookOpen, FileText, Video, Download } from 'lucide-react';

export function GetItSection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[#033C5A] text-center mb-12"
      >
        How do I get it?
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-8 bg-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-[#033C5A] mb-4">Training and Resources</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Access comprehensive training materials, 
                documentation, and support resources to get started quickly and efficiently.
              </p>
              
              <div className="space-y-3 mb-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg cursor-pointer"
                >
                  <BookOpen className="w-5 h-5 text-[#033C5A]" />
                  <span className="text-sm">Complete Documentation</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg cursor-pointer"
                >
                  <Video className="w-5 h-5 text-[#033C5A]" />
                  <span className="text-sm">Video Tutorials</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg cursor-pointer"
                >
                  <FileText className="w-5 h-5 text-[#033C5A]" />
                  <span className="text-sm">Quick Start Guide</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg cursor-pointer"
                >
                  <Download className="w-5 h-5 text-[#033C5A]" />
                  <span className="text-sm">Downloadable Resources</span>
                </motion.div>
              </div>

              <div className="bg-[#AA9868] text-white p-4 rounded-lg">
                <p className="text-sm">Get access to exclusive content and early updates</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-100 rounded-lg p-8 flex items-center justify-center relative overflow-hidden"
              style={{ minHeight: '350px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#033C5A]/10 to-[#AA9868]/10"></div>
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="w-32 h-32 bg-white rounded-lg shadow-xl mb-4 transform rotate-6 absolute top-0 left-0"></div>
                  <div className="w-32 h-32 bg-white rounded-lg shadow-xl mb-4 transform -rotate-6 absolute top-4 left-4"></div>
                  <div className="w-32 h-32 bg-gradient-to-br from-[#033C5A] to-[#AA9868] rounded-lg shadow-2xl relative flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                </motion.div>
                <p className="text-gray-600 mt-40 text-center">Access all materials</p>
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
