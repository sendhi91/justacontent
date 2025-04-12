import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import sen from '../assets/sen.webp';
import { useCallback } from 'react';

const About = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  // Optimized animation variants
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

  // Improved navigation to skills
  const navigateToSkills = useCallback(() => {
    navigate('/skills', { state: { fromAbout: true } });
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <motion.section
      id="about"
      className="relative w-full px-4 py-16 md:px-10 md:py-20 mx-auto min-h-screen"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      style={{
        background: darkMode
          ? 'linear-gradient(to bottom right, #111827, #1f2937)'
          : 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-white text-4xl md:text-[50px] font-bold mb-10"
          variants={itemVariants}
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div className="flex-1" variants={containerVariants}>
            <motion.p 
              className="text-blue-400 text-[18px] max-w-3xl leading-[30px] mb-10"
              variants={itemVariants}
            >
              I am Albertus Sendhi Satriawan,
              a Graphics Designer with 5 years of experience in the creative industry.
              My specialties include branding design, digital illustration, 
              and publication layout. I believe that good design should convey 
              a message clearly while being visually stunning.
            </motion.p>
            
            <motion.div className="mt-10" variants={itemVariants}>
              <h3 className="text-white text-2xl md:text-[25px] font-bold mb-5">Education</h3>
              <ul className="text-blue-400 list-disc pl-5 space-y-2">
                <motion.li variants={itemVariants}>
                  Akademi Teknologi Warga (2009-2012)
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div className="mt-10" variants={itemVariants}>
              <h3 className="text-white text-2xl md:text-[25px] font-bold mb-5">Experience</h3>
              <ul className="text-blue-400 list-disc pl-5 space-y-2">
                <motion.li variants={itemVariants}>
                  Senior Designer at Creative Studio (2021-present)
                </motion.li>
                <motion.li variants={itemVariants}>
                  Graphic Designer at Design Agency (2019-2021)
                </motion.li>
              </ul>
            </motion.div>

            {/* Enhanced Skills Button */}
            <motion.div 
              className="mt-12 text-center"
              variants={itemVariants}
            >
              <motion.button
                onClick={navigateToSkills}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 8px 20px -5px rgba(37, 99, 235, 0.4)'
                }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">View My Skills ↓</span>
                <motion.span
                  className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center items-center"
            variants={itemVariants}
          >
            <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] relative">
              <motion.div 
                className="w-full h-full rounded-2xl border-2 border-blue-400 overflow-hidden"
                initial={{ scale: 0.95, opacity: 0, rotate: -2 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  rotate: 0,
                  transition: { 
                    delay: 0.4, 
                    duration: 0.7,
                    type: "spring"
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
                className="absolute inset-0 rounded-2xl border-2 border-transparent bg-black/20"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 0.6, duration: 0.5 }
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