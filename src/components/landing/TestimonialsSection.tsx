import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '../common/TestimonialCard';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Data Scientist',
    company: 'TechCorp',
    content: 'AnalystHub saved me countless hours of data cleaning. What used to take days now takes minutes. The EDA generator is incredibly detailed and has become an essential part of my workflow.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Analyst',
    company: 'GlobalFinance',
    content: 'The chart explanation feature is a game-changer. I can quickly understand complex visualizations and communicate insights to stakeholders without being a visualization expert.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Data Engineer',
    company: 'InnovateTech',
    content: 'The data cleaning capabilities are robust and intuitive. Automatically detecting and fixing issues has dramatically improved our data pipeline reliability.',
    rating: 4,
    avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Product Manager',
    company: 'StartupX',
    content: 'As someone who isn\'t a data specialist, AnalystHub has made data analysis accessible to me. I can now derive meaningful insights without depending on our data team for every question.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 5,
    name: 'Olivia Wilson',
    role: 'Marketing Analyst',
    company: 'BrandBoost',
    content: 'The automated EDA reports have revolutionized how our marketing team understands campaign performance. We get deeper insights in a fraction of the time.',
    rating: 4,
    avatarUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 6,
    name: 'James Thompson',
    role: 'Research Scientist',
    company: 'SciLabs',
    content: 'AnalystHub has streamlined our research data processing workflow. The time savings allow us to focus more on analysis and discovery rather than data preparation.',
    rating: 5,
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  // Handle autoplay
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, totalPages]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);
  
  // Navigation handlers
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  // Get current testimonials
  const getCurrentTestimonials = () => {
    const startIndex = currentPage * itemsPerPage;
    return testimonials.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200 mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Trusted by data professionals worldwide
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            See how AnalystHub is transforming data workflows for analysts across industries.
          </motion.p>
        </div>
        
        <div 
          className="relative" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="grid md:grid-cols-3 gap-6"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {getCurrentTestimonials().map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial.id}
                    name={testimonial.name}
                    role={testimonial.role}
                    company={testimonial.company}
                    content={testimonial.content}
                    rating={testimonial.rating}
                    avatarUrl={testimonial.avatarUrl}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentPage === index
                    ? 'bg-blue-600 dark:bg-blue-400'
                    : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrow Controls */}
          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            onClick={goToPrevPage}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            onClick={goToNextPage}
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;