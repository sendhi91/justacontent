import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SiUpwork } from 'react-icons/si';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import profileImage from '../assets/profile.png';
import amongUsImage from '../assets/minions.png';

const Hero = () => {
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

  // Create 8 floating elements
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

  // Mouse tracking
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
    try {
      navigate('/about', { state: { from: 'Hero' } });
    } catch {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const handleUpworkClick = useCallback(() => {
    window.open(
      'https://www.upwork.com/freelancers/~01aedac6b2e2f60ad1',
      '_blank',
      'noopener,noreferrer'
    );
  }, []);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 12 },
    },
  };

  // Parallax
  const textXTransform = useTransform(
    mouseX,
    [-window.innerWidth / 2, window.innerWidth / 2],
    [-20, 20]
  );
  const textYTransform = useTransform(
    mouseY,
    [-window.innerHeight / 2, window.innerHeight / 2],
    [-10, 10]
  );

  // Particle config
  const particlesOptions = useMemo(
    () => ({
      background: { color: { value: 'transparent' } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: 'push' },
          onHover: { enable: true, mode: 'repulse' },
        },
        modes: { push: { quantity: 4 }, repulse: { distance: 200, duration: 0.4 } },
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
          enable: true,
          outModes: { default: 'bounce' },
          speed: 6,
        },
        number: { density: { enable: true }, value: 80 },
        opacity: { value: { min: 0.6, max: 0.9 }, random: true },
        shape: { type: 'image', image: { src: amongUsImage, width: 32, height: 32 } },
        size: { value: { min: 16, max: 24 }, random: true },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden"
      style={{
        background: darkMode
          ? 'linear-gradient(135deg, #1e3a8a, #5b21b6)'
          : 'linear-gradient(135deg, #e0f7fa, #a5f3fc)',
      }}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      {/* Particle Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0"
          style={{ zIndex: -1 }}
        />
      )}

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

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full items-center relative z-10">
        {/* Left Text */}
        <motion.div
          className="relative z-10 pl-8 md:pl-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className={`text-xl md:text-2xl mb-4 font-poppins font-bold ${
              darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}
            variants={textVariants}
            style={{
              x: useTransform(mouseX, [-200, 200], [-8, 8]),
              y: useTransform(mouseY, [-200, 200], [-4, 4]),
            }}
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 font-poppins"
            variants={textVariants}
            style={{ x: textXTransform, y: textYTransform }}
          >
            <motion.span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 dark:from-teal-300 dark:to-blue-300">
              Albertus Sendhi Satriawan
            </motion.span>
          </motion.h1>

          <motion.h2
            className={`text-2xl md:text-3xl font-bold mb-8 font-poppins ${
              darkMode ? 'text-gray-200' : 'text-gray-900'
            } relative inline-block px-4 py-2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg`}
            variants={textVariants}
          >
            GRAPHIC DESIGNER
          </motion.h2>

          <motion.div variants={textVariants} className="mt-12 flex flex-col sm:flex-row gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAboutMe}
              className="px-10 py-4 text-white font-semibold text-lg rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg"
            >
              About Me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUpworkClick}
              className="px-10 py-4 text-white font-semibold text-lg rounded-xl bg-gradient-to-r from-green-500 to-green-700 shadow-lg flex items-center gap-3"
            >
              <SiUpwork className="text-xl" />
              Hire Me on Upwork
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div className="flex justify-center md:justify-end" variants={textVariants}>
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-white/20">
            <motion.img
              src={profileImage}
              alt="Albertus Sendhi"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 20%' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: [1, 1.02, 1, 1.03, 1],
                transition: {
                  opacity: { duration: 1 },
                  scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
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
