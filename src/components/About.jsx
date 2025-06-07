import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import sen from '../assets/sen.webp';
import { useCallback, useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import amongUsImage from '../assets/minions.png';

const About = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [init, setInit] = useState(false);

  // Initialize tsparticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Floating elements
  const floatingElements = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    size: 10 + Math.random() * 20,
    yStart: -50 - Math.random() * 100,
    yEnd: window.innerHeight + 50,
    shape: ['circle', 'star', 'triangle'][Math.floor(Math.random() * 3)],
  }));

  // Particle configuration
  const particlesOptions = {
    background: {
      color: { value: 'transparent' },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#ffffff' },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: { enable: true },
        value: 80,
      },
      opacity: {
        value: { min: 0.6, max: 0.9 },
        random: true,
      },
      shape: {
        type: 'image',
        image: {
          src: amongUsImage,
          width: 32,
          height: 32,
        },
      },
      size: {
        value: { min: 16, max: 24 },
        random: true,
      },
    },
    detectRetina: true,
  };

  const particlesLoaded = useCallback((container) => {
    console.log('Particles loaded:', container);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const navigateToSkills = useCallback(() => {
    navigate('/skills', { state: { fromAbout: true } });
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <motion.section
      id="about"
      className={`relative w-full px-4 py-16 md:px-10 md:py-20 mx-auto min-h-screen ${
        darkMode 
          ? 'bg-gradient-to-r from-[#1e3a8a] to-[#5b21b6]' 
          : 'bg-gradient-to-r from-[#e0f7fa] to-[#a5f3fc]'
      }`}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      {/* Particle Background */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
          className="absolute inset-0"
          style={{ zIndex: -1 }}
        />
      )}

      {/* Left Marker Line */}
      <motion.div
        className="absolute left-0 md:left-8 top-0 h-full w-1 animate-pulse"
        style={{
          background: darkMode
            ? 'linear-gradient(to bottom, #14b8a6, rgba(20,184,166,0.3))'
            : 'linear-gradient(to bottom, #3b82f6, rgba(59,130,246,0.3))',
        }}
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: 1,
          transition: { delay: 0.3, duration: 1.2, ease: 'easeOut' },
        }}
      />

      {/* Floating Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${darkMode ? 'text-teal-300' : 'text-blue-300'} z-0`}
          style={{
            left: `${element.x}%`,
            top: `${element.yStart}px`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: 0.3,
          }}
          animate={{
            y: [element.yStart, element.yEnd],
            opacity: [0.3, 0.7, 0.3],
            rotate: 360,
          }}
          transition={{
            delay: element.delay,
            duration: element.duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          {element.shape === 'circle' && (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="12" />
            </svg>
          )}
          {element.shape === 'star' && (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          )}
          {element.shape === 'triangle' && (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4L4 20h16L12 4z" />
            </svg>
          )}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-10" variants={itemVariants}>
          <h2 className="text-4xl md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 dark:from-teal-300 dark:to-blue-300 font-poppins">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 dark:from-teal-300 dark:to-blue-300">Me</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mx-auto w-1/2 max-w-xs mt-4"
          />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          <motion.div className="flex-1 backdrop-blur-sm" variants={containerVariants}>
            <motion.p 
              className={`text-[18px] max-w-3xl leading-[30px] mb-10 font-poppins ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
              variants={itemVariants}
            >
              I am Albertus Sendhi Satriawan, a Graphic Designer with experience in the creative industry. My specialties include branding design, digital illustration, and publication layout. I believe that good design should convey a message clearly while being visually stunning.
            </motion.p>
            
            <motion.div className="mt-10" variants={itemVariants}>
              <h3 className={`text-2xl md:text-[25px] font-bold mb-5 font-poppins ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Education</h3>
              <ul className={`list-disc pl-5 space-y-2 font-poppins ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                <motion.li variants={itemVariants}>
                  Akademi Teknologi Warga (2009-2012)
                </motion.li>
              </ul>
            </motion.div>
            
            {/* <motion.div className="mt-10" variants={itemVariants}>
              <h3 className={`text-2xl md:text-[25px] font-bold mb-5 font-poppins ${darkMode ? text-gray-200 : text-gray-800}`}>Experience</h3>
              <ul className={`list-disc pl-5 space-y-2 font-poppins ${darkMode ? text-gray-200 : text-gray-800}`}>
                <motion.li variants={itemVariants}>
                  unknown
                </motion.li>
                <motion.li variants={itemVariants}>
                  unknown
                </motion.li>
              </ul>
            </motion.div> */}

            {/* Enhanced Skills Button */}
            {/* <motion.div 
              className="mt-12 text-center"
              variants={itemVariants}
            >
              <motion.button
                onClick={navigateToSkills}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 25px rgba(20, 184, 166, 0.7)'
                }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 text-white rounded-lg font-medium text-lg shadow-lg relative overflow-hidden bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 font-poppins"
              >
                <span className="relative z-10">View My Skills ↓</span>
              </motion.button>
            </motion.div> */}
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center items-center"
            variants={itemVariants}
          >
            <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] relative">
              <motion.div 
                className="w-full h-full rounded-2xl border-2 border-teal-400 overflow-hidden backdrop-blur-sm"
                initial={{ scale: 0.95, opacity: 0, rotate: -2 }}
                animate={{ 
                  scale: [1, 1.02, 1, 1.03, 1],
                  opacity: 1, 
                  rotate: 0,
                  transition: { 
                    delay: 0.4, 
                    duration: 0.7,
                    type: "spring",
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
                  }
                }}
              >
                <img 
                  src={sen} 
                  alt="Albertus Sendhi Satriawan"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                style={{
                  boxShadow: darkMode
                    ? '0 0 30px rgba(20, 184, 166, 0.5)'
                    : '0 0 30px rgba(59, 130, 246, 0.5)',
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.6, 0.4],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;