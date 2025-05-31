import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import HeroPattern from '../common/HeroPattern';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const startMarqueeAnimation = async () => {
      await controls.start({
        x: [0, -1000],
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      });
    };
    startMarqueeAnimation();
  }, [controls]);

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden flex items-center">
      <HeroPattern />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Animated News Headline */}
          <motion.div 
            className="w-full overflow-hidden mb-8"
            style={{ opacity }}
          >
            <motion.div
              animate={controls}
              className="whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400"
            >
              🚀 Transforming Data Analysis • Automating Workflows • Saving Time • Increasing Productivity • AI-Powered Insights
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            style={{ y }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-center leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Supercharge Your{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                Data Workflow
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Automate repetitive data tasks and gain insights in seconds, not hours. 
              Built by analysts, for analysts.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                to="#" 
                className="btn-gradient-primary transform hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl"
              >
                Try for Free
              </Link>
              <Link 
                to="#" 
                className="btn-gradient-secondary transform hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl"
              >
                <Play size={16} className="mr-2" />
                Watch Demo
              </Link>
            </motion.div>
          </motion.div>

          {/* 3D Elements */}
          <motion.div 
            className="mt-16 relative w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative">
              <motion.div
                className="rounded-2xl shadow-2xl overflow-hidden border border-gray-200/20 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://images.pexels.com/photos/7947452/pexels-photo-7947452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="AnalystHub Dashboard" 
                  className="w-full h-auto transform perspective-1000"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 backdrop-blur-sm border border-gray-200/20"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold">Data Quality</h4>
                  <span className="text-xs font-medium text-green-600 bg-green-100 rounded-full px-2 py-0.5">+24%</span>
                </div>
                <div className="h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-md" />
              </motion.div>

              <motion.div 
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 backdrop-blur-sm border border-gray-200/20"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h4 className="text-sm font-semibold mb-2">Time Saved</h4>
                <div className="flex items-end space-x-1">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">248</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">hours/month</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;