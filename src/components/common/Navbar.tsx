import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BarChart2, Menu, X, Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm dark:bg-gray-900/95' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <BarChart2 className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">AnalystHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/data-cleaner"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                }`
              }
            >
              Data Cleaner
            </NavLink>
            <NavLink
              to="/eda-generator"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                }`
              }
            >
              EDA Generator
            </NavLink>
            <NavLink
              to="/explain-chart"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                }`
              }
            >
              Explain Chart
            </NavLink>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="#" className="btn btn-outline">
              Log in
            </Link>
            <Link to="#" className="btn btn-primary">
              Try for Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900"
          >
            <div className="container-custom py-4 space-y-4 flex flex-col">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `py-2 text-base font-medium ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/data-cleaner"
                className={({ isActive }) =>
                  `py-2 text-base font-medium ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Data Cleaner
              </NavLink>
              <NavLink
                to="/eda-generator"
                className={({ isActive }) =>
                  `py-2 text-base font-medium ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                EDA Generator
              </NavLink>
              <NavLink
                to="/explain-chart"
                className={({ isActive }) =>
                  `py-2 text-base font-medium ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Explain Chart
              </NavLink>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                <Link to="#" className="btn btn-outline w-full" onClick={() => setIsMenuOpen(false)}>
                  Log in
                </Link>
                <Link to="#" className="btn btn-primary w-full" onClick={() => setIsMenuOpen(false)}>
                  Try for Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;