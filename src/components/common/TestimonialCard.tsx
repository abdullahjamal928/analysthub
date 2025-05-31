import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatarUrl: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  content,
  rating,
  avatarUrl,
  index,
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1 
      }}
    >
      <div className="flex items-center mb-4">
        {/* Avatar */}
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        
        {/* Name and Role */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}, {company}</p>
        </div>
      </div>
      
      {/* Rating */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <p className="text-gray-700 dark:text-gray-300 flex-grow">"{content}"</p>
    </motion.div>
  );
};

export default TestimonialCard;