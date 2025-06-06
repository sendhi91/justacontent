
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const rays = Array(8).fill(0);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsProjectsOpen(false);
  };

  const handleLinkClick = (path) => {
    console.log(`Navigating to: ${path}`);
    closeAllMenus();
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-[#07A9F0]/80 shadow-md z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => handleLinkClick('/')}
          className="text-xl font-bold text-blue-600 dark:text-white hover:text-blue-500 transition-colors"
        >
          AlbertusSendhi
        </Link>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 dark:text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 absolute sm:static top-16 left-0 w-full sm:w-auto bg-white/80 dark:bg-[#07A9F0]/80 sm:bg-transparent dark:sm:bg-transparent p-4 sm:p-0 shadow-md sm:shadow-none z-40`}
        >
          {/* Home */}
          <Link
            to="/"
            onClick={() => handleLinkClick('/')}
            className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
          >
            Home
          </Link>

          {/* Projects Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors flex items-center"
            >
              Projects
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {isProjectsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50"
                >
                  <Link
                    to="/presentation"
                    onClick={() => handleLinkClick('/presentation')}
                    className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Presentation
                  </Link>
                  <Link
                    to="/ebook"
                    onClick={() => handleLinkClick('/ebook')}
                    className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Ebook
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact */}
          <Link
            to="/contact"
            onClick={() => handleLinkClick('/contact')}
            className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
          >
            Contact
          </Link>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors relative"
            aria-label="Toggle dark mode"
            variants={{
              light: { rotate: 0, scale: 1 },
              dark: { rotate: 90, scale: 1.1 },
            }}
            animate={darkMode ? 'dark' : 'light'}
            style={{
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div className="absolute inset-0 flex items-center justify-center">
              {darkMode ? (
                <motion.span
                  className="text-yellow-300 text-lg"
                  key="moon"
                  initial={{ scale: 0.5, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0.5, rotate: 90 }}
                >
                  🌙
                </motion.span>
              ) : (
                <motion.div className="relative" key="sun">
                  <motion.div className="absolute inset-0">
                    {rays.map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute bg-yellow-300 w-1 h-3 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          originX: 0.5,
                          originY: 0,
                          x: '-50%',
                          y: '-100%',
                          rotate: i * 45,
                        }}
                      />
                    ))}
                  </motion.div>
                  <span className="text-yellow-400 text-lg">☀️</span>
                </motion.div>
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}