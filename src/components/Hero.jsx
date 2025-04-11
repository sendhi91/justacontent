import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Hero = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const handleGoDeeper = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000); // Match with transition duration
  };

  // Transition animation variants
  const pageVariants = {
    hidden: { 
      opacity: 0,
      clipPath: 'circle(0% at 50% 100%)',
      transition: { duration: 1, ease: [0.87, 0, 0.13, 1] }
    },
    visible: { 
      opacity: 1,
      clipPath: 'circle(150% at 50% 100%)',
      transition: { duration: 1, ease: [0.87, 0, 0.13, 1] }
    }
  };

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence>
        {isExiting && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-600 z-50"
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ clipPath: 'circle(150% at 50% 50%)' }}
            transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
          />
        )}
      </AnimatePresence>

      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 transition-colors duration-300"
        style={{
          background: darkMode 
            ? 'linear-gradient(to bottom right, #111827, #1f2937)'
            : 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)'
        }}
        initial="visible"
        animate={isExiting ? "hidden" : "visible"}
        variants={pageVariants}
      >
        {/* Keep all your existing content exactly as is */}
        <div className="hero-content text-center max-w-4xl mx-auto">
          {/* ... (all your existing motion.div and other elements remain unchanged) ... */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              type: 'spring',
              stiffness: 100,
              damping: 10
            }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: darkMode 
                  ? '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
                  : '0 10px 25px -5px rgba(29, 78, 216, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoDeeper}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium text-lg transition-all shadow-lg"
            >
              Go Deeper
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;