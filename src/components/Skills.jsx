import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import { useCallback } from 'react';

const skills = [
  { name: "edited", level: 90 },
  { name: "edited", level: 85 },
  { name: "edited", level: 80 },
  { name: "edited", level: 75 },
  { name: "edited", level: 70 },
  { name: "edited", level: 65 },
];

const Skills = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  // Navigation to projects
  const navigateToProjects = useCallback(() => {
    navigate('/projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        type: "spring",
        damping: 15
      }
    })
  };

  return (
    <motion.section
      id="skills"
      className="relative w-full px-4 py-20 md:px-10 mx-auto min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        background: darkMode
  ? 'linear-gradient(to right, #111827 0%, #111827 40%, #1f2937 60%, #1f2937 100%)'
  : 'linear-gradient(to right, #ffffff 0%, #ffffff 40%, #6D86E8 60%, #6D86E8 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
      <motion.h2 
  className="text-4xl md:text-[50px] font-bold mb-10 text-center pl-4" // tambahkan pl-4 (padding-left)
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>My</span>{" "}
  <span className="text-white">Skills</span>
</motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="mb-8"
              variants={skillVariants}
              custom={index * 0.1}
            >
              <div className="flex justify-between mb-2">
                <motion.span 
                  className={`font-medium ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  {skill.name}
                </motion.span>
                <motion.span 
                  className={`text-sm ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className={`w-full rounded-full h-3 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <motion.div 
                  className={`h-3 rounded-full ${
                    darkMode ? 'bg-blue-500' : 'bg-blue-600'
                  }`}
                  variants={progressBarVariants}
                  custom={skill.level}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ 
                    scaleY: 1.2,
                    transition: { duration: 0.2 }
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation to Projects */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={navigateToProjects}
            whileHover={{ 
              scale: 1.05,
              boxShadow: darkMode
                  ? '0 10px 25px -5px rgba(234, 88, 12, 0.4)' // Orange shadow
                  : '0 10px 25px -5px rgba(79, 70, 229, 0.4)', // Indigo shadow
                transition: { duration: 0.3 }
              }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 text-white rounded-lg font-medium text-lg shadow-lg relative overflow-hidden ${darkMode
              ? 'bg-gradient-to-r from-orange-700 to-orange-600'
              : 'bg-gradient-to-r from-blue-900 to-purple-600'
              }`}
          >
            View My Projects →
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;