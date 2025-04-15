import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import profileImage from '../assets/profile.webp'; // Import gambar dari src/assets

const Hero = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback((e) => {
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  }, [mouseX, mouseY]);

  const handleGoDeeper = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      navigate('/about', { state: { fromHero: true } });
      window.scrollTo(0, 0);
    }, 800);
  }, [navigate]);

  // Text animation variants
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

  // Parallax effects
  const textXTransform = useTransform(
    mouseX,
    [-window.innerWidth / 2, window.innerHeight / 2],
    [-30, 30]
  );
  const textYTransform = useTransform(
    mouseY,
    [-window.innerHeight / 2, window.innerHeight / 2],
    [-15, 15]
  );

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        background: darkMode
          ? 'linear-gradient(135deg, #111827 50%, #1f2937 50%)'
          : 'linear-gradient(135deg, #f0f9ff 50%, #4BD0EA 50%)'
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
      {/* Transition overlay */}
      <AnimatePresence>
        {isExiting && (
          <motion.div
            className={`absolute inset-0 z-50 ${darkMode
                ? 'bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700'
                : 'bg-gradient-to-br from-[#519BE0] to-[#3a7bb7]'
              }`}
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{
              clipPath: 'circle(150% at 50% 50%)',
              backgroundSize: darkMode ? '200% 200%' : '100% 100%',
              transition: {
                duration: 0.8,
                ease: [0.83, 0, 0.17, 1],
                ...(darkMode && {
                  backgroundPosition: ['0% 0%', '100% 100%']
                })
              }
            }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Left Marker Line */}
      <motion.div
        className="absolute left-0 md:left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-white-200 z-0"
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: 1,
          transition: { delay: 0.3, duration: 0.8 }
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-center">
        {/* Text Content (Left) */}
        <div className="relative z-10 pl-8 md:pl-12">
          <motion.p
            className={`text-lg md:text-xl mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}
            custom={0.2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            style={{
              x: useTransform(mouseX, [-200, 200], [-10, 10]),
              y: useTransform(mouseY, [-200, 200], [-5, 5])
            }}
          >
            Hello I am
          </motion.p>

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
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Albertus Sendhi
            </motion.span>
          </motion.h1>

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

          <motion.h2
            className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
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
                  ? '0 10px 25px -5px rgba(234, 88, 12, 0.4)' // Orange shadow
                  : '0 10px 25px -5px rgba(79, 70, 229, 0.4)', // Indigo shadow
                transition: { duration: 0.3 }
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.2 }
              }}
              onClick={handleGoDeeper}
              className={`px-8 py-4 text-white rounded-lg font-medium text-lg shadow-lg relative overflow-hidden ${darkMode
                ? 'bg-gradient-to-r from-orange-700 to-orange-600'
                : 'bg-gradient-to-r from-blue-500 to-purple-600'
                }`}
            >
              <span className="relative z-10">Go Deeper</span>
              <motion.span
                className={`absolute inset-0 ${darkMode
                  ? 'bg-gradient-to-r from-orange-600 to-orange-700'
                  : 'bg-gradient-to-r from-blue-600 to-purple-700'
                  } opacity-0`}
                whileHover={{
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut"
                  }
                }}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Photo (Right) */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5, type: 'spring' }
          }}
        >
          <div className="relative">
            {/* Avatar Image - Replace src with your image path */}
            <motion.img
              src={profileImage} // Update this path
              alt="Albertus Sendhi"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl"
              whileHover={{ scale: 1.05 }}
            />

            {/* Decorative Element */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-600 rounded-full mix-blend-multiply opacity-70"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;