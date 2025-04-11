import React from 'react';
import { Link } from 'react-router-dom'; // Ganti dari <a> ke <Link>
import { useDarkMode } from '../context/DarkModeContext';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500"
        >
          PortfolioKu
        </Link>
        <div className="flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Contact
          </Link>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <span className="text-yellow-300">☀️</span>
            ) : (
              <span className="text-gray-600">🌙</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}