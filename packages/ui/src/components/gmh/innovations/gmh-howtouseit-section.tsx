import { motion } from 'motion/react';
import { Card } from '@workspace/ui/components/ui/card';
import { Circle, Square, Plus, Star, ArrowRight } from 'lucide-react';

const steps = [
  { 
    number: 1, 
    icon: Circle, 
    title: 'Initial Step',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Start your journey here.',
    color: 'bg-gray-300'
  },
  { 
    number: 2, 
    icon: Square, 
    title: 'Configuration',
    description: 'Configure your settings and preferences to match your needs perfectly.',
    color: 'bg-gray-400'
  },
  { 
    number: 3, 
    icon: Plus, 
    title: 'Add Components',
    description: 'Add the necessary components and integrate with your existing workflow.',
    color: 'bg-gray-300'
  },
  { 
    number: 4, 
    icon: Square, 
    title: 'Testing Phase',
    description: 'Test thoroughly to ensure everything works as expected before deployment.',
    color: 'bg-gray-400'
  },
  { 
    number: 5, 
    icon: Star, 
    title: 'Launch',
    description: 'Deploy and launch your innovation to start seeing real-world results.',
    color: 'bg-gray-300'
  }
];

export function HowToUseSection() {
  return (
    <div className="py-20 mt-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-center mb-12"
        >
          How do you use it?
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 bg-white/10 backdrop-blur-sm shadow-2xl relative border-white/20">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number}>
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-start gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-[#AA9868]">{step.number}.</span>
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`${step.color} w-20 h-20 rounded-lg flex items-center justify-center`}
                        >
                          <step.icon className="w-10 h-10 text-white" />
                        </motion.div>
                      </div>
                    </div>
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      <h4 className="text-white mb-2">{step.title}</h4>
                      <p className="text-white/80">{step.description}</p>
                    </div>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                      className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} my-4`}
                    >
                      <ArrowRight className="w-8 h-8 text-[#AA9868]" style={{ transform: index % 2 === 0 ? 'rotate(90deg)' : 'rotate(90deg) scaleX(-1)' }} />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
