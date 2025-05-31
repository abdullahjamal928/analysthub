import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileQuestion } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <motion.div 
      className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center max-w-lg">
        <motion.div
          className="inline-block mb-8 p-6 bg-blue-50 rounded-full dark:bg-blue-900/20"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20 
          }}
        >
          <FileQuestion className="h-16 w-16 text-blue-600 dark:text-blue-400" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 dark:text-gray-400">
          Sorry, we couldn't find the page you're looking for. The page might have been moved or doesn't exist.
        </p>
        <Link 
          to="/" 
          className="btn btn-primary inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go back home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;