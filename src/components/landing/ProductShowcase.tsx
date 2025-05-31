import React from 'react';
import { motion } from 'framer-motion';

// Define animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200 mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Product Showcase
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            See AnalystHub in action
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how our intuitive interfaces and powerful features can transform your data workflow.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid gap-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Data Cleaner Showcase */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            variants={item}
          >
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Smart Data Cleaner</h3>
              <p className="text-gray-600 mb-6 dark:text-gray-300">
                Our intelligent data cleaning tool automatically identifies and fixes common issues in your datasets, 
                saving you hours of manual work.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  'One-click fixes for missing values, outliers, and duplicates',
                  'Smart type detection and conversion',
                  'Custom cleaning rules and transformations',
                  'Interactive data quality dashboard'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="order-1 md:order-2">
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://images.pexels.com/photos/5496462/pexels-photo-5496462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Data Cleaner Interface" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* EDA Generator Showcase */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            variants={item}
          >
            <div>
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="EDA Generator Interface" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">One-Click EDA Generator</h3>
              <p className="text-gray-600 mb-6 dark:text-gray-300">
                Generate comprehensive exploratory data analysis reports with just one click. 
                Get visualizations, summary statistics, and correlations instantly.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  'Automated distribution analysis for all variables',
                  'Correlation heatmaps and relationship plots',
                  'Outlier detection and visualization',
                  'Export to PDF, HTML, or Jupyter Notebook'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Explain Chart Showcase */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            variants={item}
          >
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Explain This Chart</h3>
              <p className="text-gray-600 mb-6 dark:text-gray-300">
                Upload any chart or visualization and get an AI-powered explanation in plain English. 
                Understand complex patterns and communicate insights effortlessly.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  'Natural language explanations of trends and patterns',
                  'Support for various chart types (bar, line, scatter, etc.)',
                  'Key insight extraction and highlighting',
                  'Suggestion for further analysis or visualization improvements'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="order-1 md:order-2">
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Chart Explanation Interface" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;