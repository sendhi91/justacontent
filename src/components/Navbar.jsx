import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  // Animation variants for the toggle
  const toggleVariants = {
    light: { 
      rotate: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 10 }
    },
    dark: { 
      rotate: 90,
      scale: 1.1,
      transition: { type: 'spring', stiffness: 300, damping: 10 }
    }
  };

  // Sun/moon rays animation
  const rayVariants = {
    light: { 
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { staggerChildren: 0.1 }
    },
    dark: { 
      opacity: 0,
      rotate: 45,
      scale: 0.5,
      transition: { staggerChildren: 0.1 }
    }
  };

  // Create 8 rays for the sun
  const rays = Array(8).fill(0);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-[#07A9F0]/80 shadow-md z-50 backdrop-blur-sm">
  <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
    <Link 
      to="/" 
      className="text-xm font-bold text-blue-600 dark:text-white hover:text-blue-500 transition-colors"
    >
      PortfolioKu
    </Link>
    
    <div className="flex items-center space-x-4 sm:space-x-6 ml-2 sm:ml-0">
      <Link to="/" className="text-gray-800 dark:text-white hover:text-blue-500">Home</Link>
      <Link to="/projects" className="text-gray-800 dark:text-white hover:text-blue-500">Projects</Link>
      <Link to="/contact" className="text-gray-800 dark:text-white hover:text-blue-500">Contact</Link>
          {/* Enhanced Dark Mode Toggle */}
          <motion.button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors relative"
            aria-label="Toggle dark mode"
            variants={toggleVariants}
            animate={darkMode ? "dark" : "light"}
            style={{
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Sun/Moon Core */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
            >
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
                <motion.div 
                  className="relative"
                  key="sun"
                >
                  {/* Sun Rays */}
                  <motion.div
                    className="absolute inset-0"
                    variants={rayVariants}
                  >
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
                          rotate: i * 45
                        }}
                        variants={{
                          light: { opacity: 0.6, scale: 1 },
                          dark: { opacity: 0, scale: 0.5 }
                        }}
                      />
                    ))}
                  </motion.div>
                  {/* Sun Center */}
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