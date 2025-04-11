import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  // Helper to determine active link
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 shadow-md z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
        >
          PortfolioKu
        </Link>
        
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link 
            to="/" 
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive('/') 
                ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                : 'text-gray-800 dark:text-gray-200 hover:text-blue-500'
            }`}
          >
            Home
          </Link>
          
          <Link 
            to="/projects" 
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive('/projects') 
                ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                : 'text-gray-800 dark:text-gray-200 hover:text-blue-500'
            }`}
          >
            Projects
          </Link>
          
          <Link 
            to="/contact" 
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive('/contact') 
                ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                : 'text-gray-800 dark:text-gray-200 hover:text-blue-500'
            }`}
          >
            Contact
          </Link>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <span className="text-yellow-300 text-lg">☀️</span>
            ) : (
              <span className="text-gray-600 text-lg">🌙</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}