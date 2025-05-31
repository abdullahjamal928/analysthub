import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8 dark:bg-gray-900 dark:border-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BarChart2 className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">AnalystHub</span>
            </Link>
            <p className="text-gray-600 mb-4 dark:text-gray-400">
              Supercharge your data workflow with powerful automation tools designed specifically for data analysts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-900 dark:text-white">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/data-cleaner" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Data Cleaner
                </Link>
              </li>
              <li>
                <Link to="/eda-generator" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  EDA Generator
                </Link>
              </li>
              <li>
                <Link to="/explain-chart" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Explain Chart
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-900 dark:text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-900 dark:text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Community
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm dark:text-gray-400">
              © {currentYear} AnalystHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-500 hover:text-blue-600 text-sm dark:text-gray-400 dark:hover:text-blue-400">
                Privacy
              </Link>
              <Link to="#" className="text-gray-500 hover:text-blue-600 text-sm dark:text-gray-400 dark:hover:text-blue-400">
                Terms
              </Link>
              <Link to="#" className="text-gray-500 hover:text-blue-600 text-sm dark:text-gray-400 dark:hover:text-blue-400">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;