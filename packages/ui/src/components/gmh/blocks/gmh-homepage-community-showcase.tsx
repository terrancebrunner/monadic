import { motion } from 'motion/react';
import { ImageWithFallback } from '@workspace/ui/components/blocks/shared/image-with-fallback';

export function CommunityShowcase() {
  const communityImages = [
    {
      src: "https://images.unsplash.com/photo-1551801746-ce367c4c5d91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwY29sbGFib3JhdGlvbiUyMHN1cHBvcnR8ZW58MXx8fHwxNzU5MDQwMjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Students collaborating and supporting each other",
      caption: "Student peer support sessions"
    },
    {
      src: "https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzcyUyMGNvbW11bml0eSUyMHN1cHBvcnR8ZW58MXx8fHwxNzU5MDQwMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Community wellness and mental health support",
      caption: "Wellness workshops & community events"
    },
    {
      src: "https://images.unsplash.com/photo-1631039302217-5a6c56371e86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdGFmZiUyMG1lZXRpbmclMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1OTA0MDI2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Professional staff meeting",
      caption: "Expert care & professional support"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="relative max-w-6xl mx-auto mb-12"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#AA9868]/5 via-transparent to-[#033C5A]/5 rounded-2xl blur-3xl" />
      
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-3xl font-bold text-white text-center mb-3"
        >
          Our Community
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-[#AA9868] text-center mb-8 text-lg"
        >
          Supporting mental wellness across our diverse university community
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 + (index * 0.2) }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#033C5A]/80 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium leading-relaxed">
                    {image.caption}
                  </p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-[#AA9868]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom accent line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 2.0 }}
          className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#AA9868] to-transparent mt-8 origin-center"
        />
      </div>
    </motion.section>
  );
}