
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SiUpwork } from 'react-icons/si';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import profileImage from '../assets/profile.webp';
import amongUsImage from '../assets/minions.png'; // Ensure this file exists in src/assets/

const Hero = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [init, setInit] = useState(false);

  // Initialize tsparticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log('tsparticles initializing');
      await loadSlim(engine);
    }).then(() => {
      console.log('tsparticles initialized');
      setInit(true);
    });
  }, []);

  // Create 8 floating elements (moons/suns)
  const floatingElements = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    size: 10 + Math.random() * 20,
    yStart: -50 - Math.random() * 100,
    yEnd: window.innerHeight + 50,
  }));

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    },
    [mouseX, mouseY]
  );

  const handleAboutMe = useCallback(() => {
    console.log('About Me button clicked, navigating to /about');
    try {
      navigate('/about', { state: { from: 'hero' } });
    } catch (error) {
      console.error('Navigation error:', error);
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const handleUpworkClick = useCallback(() => {
    console.log('Hire Me on Upwork button clicked');
    window.open(
      'https://www.upwork.com/freelancers/~01aedac6b2e2f60ad1',
      '_blank',
      'noopener,noreferrer'
    );
  }, []);

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
        damping: 12,
      },
    }),
  };

  // Parallax effects
  const textXTransform = useTransform(
    mouseX,
    [-window.innerWidth / 2, window.innerWidth / 2],
    [-30, 30]
  );
  const textYTransform = useTransform(
    mouseY,
    [-window.innerHeight / 2, window.innerHeight / 2],
    [-15, 15]
  );

  // Particle loaded callback
  const particlesLoaded = useCallback((container) => {
    console.log('Particles loaded:', container);
  }, []);

  // Particle configuration inspired by particles.js.org with minions.png
  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent', // Transparent to show section's linear-gradient
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff', // White for visibility
        },
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
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: { min: 0.4, max: 0.8 },
          random: true,
        },
        shape: {
          type: 'image',
          image: {
            src: amongUsImage, // Use minions.png
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
    }),
    []
  );

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        background: darkMode
          ? 'linear-gradient(135deg, #07A9F0 50%, #0F8BCC 50%)'
          : 'linear-gradient(135deg, #ffffff 50%, #07A9F0 50%)',
      }}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
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

      {/* Floating elements (moons/suns) */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${darkMode ? 'text-gray-300' : 'text-yellow-300'} z-0`}
          style={{
            left: `${element.x}%`,
            top: `${element.yStart}px`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: 0,
          }}
          animate={{
            y: [element.yStart, element.yEnd],
            opacity: [0, 0.8, 0],
            rotate: 360,
          }}
          transition={{
            delay: element.delay,
            duration: element.duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        >
          {darkMode ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12-2e-16zm0 18c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8 1.8 0 3.5.6 4.9 1.7-1.3 1.1-2.1 2.7-2.1 4.3 0 3.3 2.7 6 6 6 1.6 0 3.2-.8 4.3-2.1 1.1 1.4 1.7 3.1 1.7 4.9 0 4.4-3.6 8-8 8z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0-5l-3 3 2 2-3-3-3 3 2-2-3-3h5v-2h2v2h5zm0 20l-3-3 2-2-3 3-3-3 2 2-3 3h5v2h2v-2h5z" />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Left Marker Line */}
      <motion.div
        className="absolute left-0 md:left-8 top-0 h-full w-1 z-0"
        style={{
          background: darkMode
            ? 'linear-gradient(to bottom, #FFFFFF, rgba(255,255,255,0.3))'
            : 'linear-gradient(to bottom, #07A9F0, rgba(7,169,240,0.3))',
        }}
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: 1,
          transition: { delay: 0.3, duration: 0.8 },
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-center relative z-10">
        {/* Text Content (Left) */}
        <div className="relative z-10 pl-8 md:pl-12">
          <motion.p
            className={`text-lg md:text-xl mb-3 ${
              darkMode ? 'text-white' : 'text-gray-800'
            } font-nunito font-bold`}
            custom={0.2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            style={{
              x: useTransform(mouseX, [-200, 200], [-10, 10]),
              y: useTransform(mouseY, [-200, 200], [-5, 5]),
            }}
          >
            HELLO I AM
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-2"
            custom={0.3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            style={{
              x: textXTransform,
              y: textYTransform,
            }}
          >
            <motion.span
              className="bg-clip-text font-dancing-script text-transparent bg-gradient-to-r from-blue-500 to-blue-700 dark:text-white"
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
              y: useTransform(textYTransform, [-15, 15], [-20, 20]),
            }}
          >
            <motion.span
              className="bg-clip-text font-dancing-script text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:text-white block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Satriawan
            </motion.span>
          </motion.h1>

          <motion.div className="inline-block relative">
            <motion.h2
              className={`text-xl md:text-2xl mb-8 ${
                darkMode ? 'text-white' : 'text-gray-900'
              } font-nunito font-bold px-3 py-1 relative z-10`}
              custom={0.5}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              style={{
                x: useTransform(mouseX, [-200, 200], [-5, 5]),
                y: useTransform(mouseY, [-200, 200], [-3, 3]),
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              GRAPHIC DESIGNER
              <motion.span
                className="absolute -inset-1 bg-purple-500/20 dark:bg-indigo-500/20 rounded-md blur-md z-0"
                initial={{
                  opacity: 0,
                  scale: 0.98,
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.h2>
          </motion.div>

          <motion.div
            custom={0.6}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: darkMode
                  ? '0 10px 25px -5px rgba(234, 88, 12, 0.4)'
                  : '0 10px 25px -5px rgba(79, 70, 229, 0.4)',
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.2 },
              }}
              onClick={handleAboutMe}
              className={`px-8 py-4 text-white rounded-lg font-medium text-lg shadow-lg relative overflow-hidden ${
                darkMode
                  ? 'bg-gradient-to-r from-orange-700 to-orange-600'
                  : 'bg-gradient-to-r from-orange-700 to-orange-600'
              }`}
            >
              <span className="relative z-10">About Me</span>
              <motion.span
                className={`absolute inset-0 ${
                  darkMode
                    ? 'bg-gradient-to-r from-orange-600 to-orange-700'
                    : 'bg-gradient-to-r from-blue-600 to-purple-700'
                } opacity-0`}
                whileHover={{
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: 'easeOut',
                  },
                }}
              />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(37, 207, 108, 0.4)',
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.2 },
              }}
              onClick={handleUpworkClick}
              className={`px-8 py-4 text-white rounded-lg font-medium text-lg shadow-lg relative overflow-hidden flex items-center justify-center gap-2 ${
                darkMode
                  ? 'bg-gradient-to-r from-[#14a800] to-[#0d7400]'
                  : 'bg-gradient-to-r from-[#14a800] to-[#0d7400]'
              }`}
            >
              <SiUpwork className="text-xl" />
              <span className="relative z-10">Hire Me on Upwork</span>
              <motion.span
                className={`absolute inset-0 ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#0d7400] to-[#14a800]'
                    : 'bg-gradient-to-r from-[#0d7400] to-[#14a800]'
                } opacity-0`}
                whileHover={{
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: 'easeOut',
                  },
                }}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Photo (Right) with Heartbeat Effect */}
        <motion.div className="flex justify-center md:justify-end">
          <div className="relative">
            <motion.img
              src={profileImage}
              alt="Albertus Sendhi"
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white"
              animate={{
                scale: [1, 1.02, 1, 1.05, 1],
                transition: {
                  duration: 3.0,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                  times: [0, 0.4, 0.6, 0.8, 1],
                },
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full blur-xl z-0 bg-teal-200/50 dark:bg-purple-200/50"
              animate={{
                scale: [1, 1.03, 1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5, 0.7, 0.5],
                transition: {
                  duration: 3.0,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                },
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
