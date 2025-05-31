import React from 'react';
import { motion } from 'framer-motion';

const HeroPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="dots-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect width="100%" height="100%" fill="transparent" />
            <circle cx="3" cy="3" r="1.5" fill="currentColor" className="text-gray-200 dark:text-gray-800" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-pattern)" />
      </svg>
      
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 dark:opacity-20 animate-blob"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-24 right-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
      
      <motion.div 
        className="absolute bottom-0 right-0 w-1/2 h-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path 
            fill="rgba(59, 130, 246, 0.1)" 
            d="M46.3,-57.5C58.4,-47.3,65.6,-31.6,69,-14.7C72.4,2.2,72.1,20.4,64,33.1C56,45.8,40.3,53.2,23.9,58.6C7.5,64,-9.6,67.4,-25.1,63.3C-40.6,59.1,-54.6,47.4,-62.4,32.1C-70.2,16.9,-71.9,-2,-67.7,-19.7C-63.4,-37.4,-53.3,-54,-39.4,-63.8C-25.6,-73.5,-7.9,-76.6,7.8,-75.1C23.6,-73.5,47.2,-67.4,57.4,-56.7Z" 
            transform="translate(100 100) scale(1.2)" 
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default HeroPattern;