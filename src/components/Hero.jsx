import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Hero = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleGoDeeper = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    })
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 transition-colors duration-300 relative overflow-hidden"
      style={{
        background: darkMode 
          ? 'linear-gradient(to bottom right, #111827, #1f2937)'
          : 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)'
      }}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Animated background overlay for transition */}
      <AnimatePresence>
        {isExiting && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 z-50"
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ clipPath: 'circle(150% at 50% 50%)' }}
            transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
          />
        )}
      </AnimatePresence>

      <div className="hero-content text-center max-w-4xl mx-auto relative z-10">
        {/* Hi, My Name is - with mouse parallax */}
        <motion.p 
          className={`text-lg md:text-xl mb-2 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
          custom={0.2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            x: useTransform(mouseX, [0, window.innerWidth], [-10, 10]),
            y: useTransform(mouseY, [0, window.innerHeight], [-5, 5])
          }}
        >
          Hi, My Name is
        </motion.p>
        
        {/* Albertus Sendhi - with stronger parallax */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-2"
          custom={0.3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            x: useTransform(mouseX, [0, window.innerWidth], [-20, 20]),
            y: useTransform(mouseY, [0, window.innerHeight], [-10, 10])
          }}
        >
          <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 block"
            whileHover={{ scale: 1.02 }}
          >
            Albertus Sendhi
          </motion.span>
        </motion.h1>
        
        {/* Satriawan - with strongest parallax */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          custom={0.4}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            x: useTransform(mouseX, [0, window.innerWidth], [-30, 30]),
            y: useTransform(mouseY, [0, window.innerHeight], [-15, 15])
          }}
        >
          <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 block"
            whileHover={{ scale: 1.02 }}
          >
            Satriawan
          </motion.span>
        </motion.h1>
        
        {/* Graphics Designer - subtle parallax */}
        <motion.h2 
          className={`text-xl md:text-2xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
          custom={0.5}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            x: useTransform(mouseX, [0, window.innerWidth], [-5, 5]),
            y: useTransform(mouseY, [0, window.innerHeight], [-3, 3])
          }}
        >
          Graphics Designer
        </motion.h2>

        {/* Go Deeper button */}
        <motion.div
          custom={0.6}
          variants={textVariants}
          initial="hidden"
          animate="visible"
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