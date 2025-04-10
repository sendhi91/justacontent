import React from 'react';
import { useDarkMode } from '../context/DarkModeContext'; // Add this import

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">PortfolioKu</h1>
        <div className="flex items-center space-x-6">
          <a href="#home" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">Home</a>
          <a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">Projects</a>
          <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">Contact</a>
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