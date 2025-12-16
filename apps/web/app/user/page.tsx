import { motion } from 'motion/react';
import { Users, GraduationCap, Heart, BookOpen, Calendar, MessageCircle, Shield, Settings } from 'lucide-react';
import centerLogo from 'figma:asset/512bda7ab81cb1facff865c5c2444a76bc3e84a5.png';
import { NavigationCard } from './components/NavigationCard';
import { QuickAccessCard } from './components/QuickAccessCard';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CommunityShowcase } from './components/CommunityShowcase';

export default function App() {
  const userTypes = [
    {
      title: "Staff Portal",
      description: "Access staff resources, administrative tools, and internal communications",
      icon: Users,
      gradient: "from-[#033C5A] via-[#045577] to-[#066B94]",
      href: "/staff",
      features: ["Administrative Dashboard", "Staff Directory", "Resource Management", "Training Materials"],
      backgroundImage: "https://images.unsplash.com/photo-1631039302217-5a6c56371e86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdGFmZiUyMG1lZXRpbmclMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1OTA0MDI2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Affiliate Network",
      description: "Connect with partner organizations and collaborative resources",
      icon: Heart,
      gradient: "from-[#AA9868] via-[#B8A575] to-[#C6B282]",
      href: "/affiliates",
      features: ["Partner Directory", "Collaboration Tools", "Shared Resources", "Network Updates"],
      backgroundImage: "https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzcyUyMGNvbW11bml0eSUyMHN1cHBvcnR8ZW58MXx8fHwxNzU5MDQwMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Student Hub",
      description: "Mental health resources, support, and academic wellness tools",
      icon: GraduationCap,
      gradient: "from-[#033C5A] via-[#5A6B33] to-[#AA9868]",
      href: "/students",
      features: ["Wellness Resources", "Peer Support", "Academic Support", "Crisis Resources"],
      backgroundImage: "https://images.unsplash.com/photo-1551801746-ce367c4c5d91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwY29sbGFib3JhdGlvbiUyMHN1cHBvcnR8ZW58MXx8fHwxNzU5MDQwMjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Alumni Community",
      description: "Stay connected with ongoing support and professional development",
      icon: BookOpen,
      gradient: "from-[#5A5033] via-[#7A6B45] to-[#AA9868]",
      href: "/alumni",
      features: ["Alumni Network", "Professional Development", "Continued Support", "Events & Meetups"],
      backgroundImage: "https://images.unsplash.com/photo-1736066330693-0dace873c30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwcGVhY2VmdWwlMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NTkwNDAyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const quickAccessItems = [
    {
      title: "Emergency Resources",
      description: "24/7 crisis support and emergency contacts",
      icon: Shield,
      href: "/emergency",
      urgent: true
    },
    {
      title: "Events Calendar",
      description: "Upcoming workshops, seminars, and community events",
      icon: Calendar,
      href: "/events"
    },
    {
      title: "Support Chat",
      description: "Connect with our support team",
      icon: MessageCircle,
      href: "/chat"
    },
    {
      title: "Settings",
      description: "Manage your account and preferences",
      icon: Settings,
      href: "/settings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#033C5A] via-[#044066] to-[#055573] relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Header Section */}
      <div className="relative z-10">
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-8 pb-6 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <img 
              src={centerLogo} 
              alt="Global Mental Health Center Logo"
              className="w-32 h-32 mx-auto drop-shadow-2xl"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Global Mental Health Center
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-[#AA9868] max-w-2xl mx-auto px-4"
          >
            Your gateway to comprehensive mental health resources and support services
          </motion.p>
        </motion.header>

        {/* Main Navigation Grid */}
        <motion.main 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="container mx-auto px-4 pb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 max-w-6xl mx-auto">
            {userTypes.map((userType, index) => (
              <NavigationCard
                key={userType.title}
                {...userType}
                index={index}
              />
            ))}
          </div>

          {/* Community Showcase */}
          <CommunityShowcase />

          {/* Quick Access Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickAccessItems.map((item, index) => (
                <QuickAccessCard
                  key={item.title}
                  {...item}
                  index={index}
                />
              ))}
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mt-12 pb-6"
          >
            <p className="text-[#AA9868]/70 text-sm">
              © 2025 Global Mental Health Center | Supporting Wellbeing Worldwide
            </p>
          </motion.footer>
        </motion.main>
      </div>
    </div>
  );
}