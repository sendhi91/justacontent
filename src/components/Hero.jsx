import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleGoDeeper = () => {
    // Smooth exit animation before navigation
    document.querySelector('.hero-content').style.opacity = '0';
    document.querySelector('.hero-content').style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      navigate('/about');
      // Scroll to top after navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500); // Match this duration with your transition
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 transition-colors duration-300"
      style={{
        background: darkMode 
          ? 'linear-gradient(to bottom right, #111827, #1f2937)'
          : 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)'
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="hero-content text-center max-w-4xl mx-auto transition-all duration-500">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Halo
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Albertus Sendhi
            </span>
          </motion.h1>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Satriawan
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Graphics Designer
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
  );
};

export default Hero;