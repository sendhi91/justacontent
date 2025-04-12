import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';

const Hero = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  
  // Optimized mouse position tracking with useMemo
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = useCallback((e) => {
    mouseX.set(e.clientX - window.innerWidth/2);
    mouseY.set(e.clientY - window.innerHeight/2);
  }, [mouseX, mouseY]);

  // Smoother navigation with transition completion check
  const handleGoDeeper = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      navigate('/about', { state: { fromHero: true } });
      window.scrollTo(0, 0);
    }, 800); // Matches animation duration
  }, [navigate]);

  // Optimized text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 120,
        damping: 12
      }
    })
  };

  // Memoized transforms for better performance
  const textXTransform = useTransform(
    mouseX, 
    [-window.innerWidth/2, window.innerHeight/2], 
    [-30, 30]
  );
  const textYTransform = useTransform(
    mouseY,
    [-window.innerHeight/2, window.innerHeight/2],
    [-15, 15]
  );

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        background: darkMode 
          ? 'linear-gradient(to bottom right, #111827, #1f2937)'
          : 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)'
      }}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        transition: { 
          duration: 0.5,
          when: "afterChildren" 
        } 
      }}
    >
      {/* Enhanced transition overlay with better performance */}
      <AnimatePresence>
        {isExiting && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 z-50"
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ 
              clipPath: 'circle(150% at 50% 50%)',
              transition: { 
                duration: 0.8, 
                ease: [0.83, 0, 0.17, 1] 
              }
            }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <div className="hero-content text-center max-w-4xl mx-auto relative z-10">
        {/* Name introduction with optimized parallax */}
        <motion.p 
          className={`text-lg md:text-xl mb-2 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
          custom={0.2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            x: useTransform(mouseX, [-200, 200], [-10, 10]),
            y: useTransform(mouseY, [-200, 200], [-5, 5])
          }}
        >
          Hi, My Name is
        </motion.p>
        
        {/* Main name with stronger parallax effect */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-2"
          custom={0.3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            x: textXTransform,
            y: textYTransform
          }}
        >
          <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 block"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Albertus Sendhi
          </motion.span>
        </motion.h1>
        
        {/* Last name with strongest parallax */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          custom={0.4}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            x: useTransform(textXTransform, [-30, 30], [-40, 40]),
            y: useTransform(textYTransform, [-15, 15], [-20, 20])
          }}
        >
          <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 block"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Satriawan
          </motion.span>
        </motion.h1>
        
        {/* Title with subtle parallax */}
        <motion.h2 
          className={`text-xl md:text-2xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
          custom={0.5}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            x: useTransform(mouseX, [-200, 200], [-5, 5]),
            y: useTransform(mouseY, [-200, 200], [-3, 3])
          }}
        >
          Graphics Designer
        </motion.h2>

        {/* Enhanced CTA button */}
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
                : '0 10px 25px -5px rgba(29, 78, 216, 0.4)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.2 }
            }}
            onClick={handleGoDeeper}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium text-lg shadow-lg relative overflow-hidden"
          >
            <span className="relative z-10">Go Deeper</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;