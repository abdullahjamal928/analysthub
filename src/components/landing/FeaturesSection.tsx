import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, BarChart2, Lightbulb, Clock, Database, Shield, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const featureItems = [
  {
    id: 1,
    title: 'Smart Data Cleaner',
    description: 'Automatically detect and fix common data issues with one click. Handle missing values, outliers, and inconsistencies effortlessly.',
    icon: FileCheck,
    link: '/data-cleaner',
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400'
  },
  {
    id: 2,
    title: 'One-Click EDA Generator',
    description: 'Generate comprehensive exploratory data analysis reports with visualizations, summary statistics, and correlation analysis in seconds.',
    icon: BarChart2,
    link: '/eda-generator',
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400'
  },
  {
    id: 3,
    title: 'Explain This Chart',
    description: 'Upload any chart or visualization and get an AI-powered plain-English explanation of insights, trends, and anomalies.',
    icon: Lightbulb,
    link: '/explain-chart',
    color: 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400'
  },
  {
    id: 4,
    title: 'Time-Saving Automation',
    description: 'Automate repetitive data tasks with customizable workflows. Schedule data processing jobs and get notified when they complete.',
    icon: Clock,
    link: '#',
    color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400'
  },
  {
    id: 5,
    title: 'Data Integration',
    description: 'Connect to popular data sources and seamlessly import data from databases, spreadsheets, APIs, and cloud storage services.',
    icon: Database,
    link: '#',
    color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400'
  },
  {
    id: 6,
    title: 'Enterprise Security',
    description: 'Keep your data secure with enterprise-grade encryption, role-based access controls, and compliance with industry standards.',
    icon: Shield,
    link: '#',
    color: 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400'
  }
];

const FeaturesSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200 mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Features
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to <span className="text-blue-600 dark:text-blue-400">accelerate</span> your analysis
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our platform eliminates repetitive tasks and accelerates your data workflow, 
            so you can focus on extracting valuable insights.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {featureItems.map((feature) => (
            <motion.div 
              key={feature.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              variants={item}
            >
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon size={24} />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                
                <Link 
                  to={feature.link} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Learn more
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;