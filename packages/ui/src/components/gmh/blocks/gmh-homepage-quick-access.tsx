import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { Card } from '@workspace/ui/components/ui/card';

interface QuickAccessCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  index: number;
  urgent?: boolean;
}

export function QuickAccessCard({ 
  title, 
  description, 
  icon: Icon, 
  href, 
  index, 
  urgent = false 
}: QuickAccessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className={`relative overflow-hidden backdrop-blur-sm border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group h-full ${
        urgent 
          ? 'bg-red-500/10 hover:bg-red-500/20 border-red-400/30' 
          : 'bg-white/5 hover:bg-white/10'
      }`}>
        {urgent && (
          <motion.div 
            animate={{ 
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full"
          />
        )}
        
        <div className="p-4">
          <div className={`inline-flex p-2 rounded-lg mb-3 ${
            urgent 
              ? 'bg-red-400/20 text-red-300' 
              : 'bg-[#AA9868]/20 text-[#AA9868]'
          } group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-5 h-5" />
          </div>
          
          <h4 className="font-semibold text-white mb-2 group-hover:text-[#AA9868] transition-colors duration-300">
            {title}
          </h4>
          
          <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
            {description}
          </p>
        </div>
        
        <motion.div 
          className={`absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
            urgent 
              ? 'bg-gradient-to-r from-red-400 to-red-600' 
              : 'bg-gradient-to-r from-[#AA9868] to-[#033C5A]'
          }`}
        />
      </Card>
    </motion.div>
  );
}