import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10 dark:opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 items-center">
            {/* Image Side */}
            <div className="p-8 md:p-12 lg:p-16">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Data analyst working" 
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            
            {/* Content Side */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Ready to transform your data workflow?
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Join thousands of data professionals who are saving hours every week with AnalystHub.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Reduce data cleaning time by up to 80%',
                  'Generate comprehensive EDA reports in seconds',
                  'Understand complex visualizations with AI-powered explanations',
                  'Collaborate seamlessly with your team'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="#" className="btn btn-primary">
                  Start Free Trial
                </Link>
                <Link to="#" className="btn btn-outline">
                  Schedule a Demo
                </Link>
              </div>
              
              <p className="text-sm text-gray-500 mt-4 dark:text-gray-400">
                No credit card required. Free 14-day trial.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;