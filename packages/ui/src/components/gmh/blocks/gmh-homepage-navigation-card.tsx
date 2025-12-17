import { motion } from 'motion/react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Card } from '@workspace/ui/components/ui/card';
import { ImageWithFallback } from '@workspace/ui/components/blocks/shared/image-with-fallback';

interface NavigationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  href: string;
  features: string[];
  index: number;
  backgroundImage?: string;
}

export function NavigationCard({ 
  title, 
  description, 
  icon: Icon, 
  gradient, 
  href, 
  features, 
  index,
  backgroundImage 
}: NavigationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="relative overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group h-full">
        {/* Background Image */}
        {backgroundImage && (
          <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
            <ImageWithFallback
              src={backgroundImage}
              alt={`${title} background`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#033C5A]/60" />
          </div>
        )}
        
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
        
        <div className="relative z-10 p-6 h-full flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-[#AA9868]/20 group-hover:bg-[#AA9868]/30 transition-colors duration-300">
              <Icon className="w-8 h-8 text-[#AA9868]" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <ArrowRight className="w-5 h-5 text-[#AA9868] group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
          
          <p className="text-white/80 mb-6 flex-1">
            {description}
          </p>
          
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#AA9868] mb-3">Key Features:</p>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#AA9868]" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#AA9868] to-[#033C5A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          />
        </div>
      </Card>
    </motion.div>
  );
}