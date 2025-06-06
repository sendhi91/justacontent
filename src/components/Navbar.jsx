
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isProjectsOpen) setIsProjectsOpen(false); // Close dropdown when toggling menu
  };

  // Toggle projects dropdown on click
  const toggleProjects = () => {
    setIsProjectsOpen((prev) => !prev);
    setIsHovering(false); // Reset hover state on click
  };

  // Handle mouse enter for dropdown
  const handleMouseEnter = () => {
    setIsProjectsOpen(true);
    setIsHovering(true);
  };

  // Handle mouse leave for dropdown
  const handleMouseLeave = () => {
    if (isHovering) {
      setIsProjectsOpen(false);
      setIsHovering(false);
    }
  };

  // Navigate to home and scroll to top
  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Animation variants for the toggle
  const toggleVariants = {
    light: {
      rotate: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 10 },
    },
    dark: {
      rotate: 90,
      scale: 1.1,
      transition: { type: 'spring', stiffness: 300, damping: 10 },
    },
  };

  // Sun/moon rays animation
  const rayVariants = {
    light: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { staggerChildren: 0.1 },
    },
    dark: {
      opacity: 0,
      rotate: 45,
      scale: 0.5,
      transition: { staggerChildren: 0.1 },
    },
  };

  // Dropdown animation
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  // Create 8 rays for the sun
  const rays = Array(8).fill(0);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-[#07A9F0]/80 shadow-md z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-white hover:text-blue-500 transition-colors"
          onClick={handleHomeClick}
        >
          AlbertusSendhi
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
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
          <button
            onClick={handleHomeClick}
            className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
          >
            Home
          </button>

          {/* Projects Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={toggleProjects}
              className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors flex items-center"
              aria-expanded={isProjectsOpen}
            >
              Projects
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <AnimatePresence>
              {isProjectsOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute top-8 left-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50"
                >
                  <Link
                    to="/projects/presentation"
                    className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      setIsProjectsOpen(false);
                      setIsMenuOpen(false);
                      setIsHovering(false);
                    }}
                  >
                    Presentation
                  </Link>
                  <Link
                    to="/projects/ebook"
                    className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      setIsProjectsOpen(false);
                      setIsMenuOpen(false);
                      setIsHovering(false);
                    }}
                  >
                    Ebook
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors relative"
            aria-label="Toggle dark mode"
            variants={toggleVariants}
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
                  <motion.div className="absolute inset-0" variants={rayVariants}>
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
                        variants={{
                          light: { opacity: 0.6, scale: 1 },
                          dark: { opacity: 0, scale: 0.5 },
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
