import { motion } from 'motion/react';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#AA9868]/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-3/4 right-1/4 w-48 h-48 bg-[#033C5A]/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl"
      />
      
      {/* Animated gradient overlay */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(170, 152, 104, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(170, 152, 104, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(170, 152, 104, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      {/* Corner gradients */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#AA9868]/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#033C5A]/10 to-transparent" />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, -100, -20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${20 + (i * 15)}%`,
            top: `${80 + (i % 2) * 10}%`,
          }}
        />
      ))}
    </div>
  );
}