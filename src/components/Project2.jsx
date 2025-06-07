import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCallback, useState, useEffect, useRef } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const slideshowRefs = useRef({});

  const projects = [
    {
      id: 1,
      title: "Ebook 1",
      description: "Simple Fitness For Busy People",
      image: "/ebook_a.jpg",
      placeholder: "/placeholder-design.jpg",
      tags: ["Health", "Canva", "Design"],
      slideshowImages: [
        "/ebook_a_1.jpg",
        "/ebook_a_2.jpg",
        "/ebook_a_3.jpg",
        "/ebook_a_4.jpg",
        "/ebook_a_5.jpg",
        "/ebook_a_6.jpg",
        "/ebook_a_7.jpg",
        "/ebook_a_8.jpg",
        "/ebook_a_9.jpg",
        "/ebook_a_10.jpg",
        "/ebook_a_11.jpg",
        "/ebook_a_12.jpg",
        "/ebook_a_13.jpg",
      ],
    },
    {
      id: 2,
      title: "Ebook 2",
      description: "Power Up With Protein",
      image: "/ebook_b.png",
      placeholder: "/placeholder-design.jpg",
      tags: ["Health", "Canva", "Design"],
      slideshowImages: [
        "/ebook_b_1.png",
        "/ebook_b_2.png",
        "/ebook_b_3.png",
        "/ebook_b_4.png",
        "/ebook_b_5.png",
        "/ebook_b_6.png",
        "/ebook_b_7.png",
        "/ebook_b_8.png",
        "/ebook_b_9.png",
        "/ebook_b_10.png",
        "/ebook_b_11.png",
      ],
    },
    {
      id: 3,
      title: "Ebook 3",
      description: "Work From Anywhere",
      image: "/ebook_c.jpg",
      placeholder: "/placeholder-design.jpg",
      tags: ["Design", "Productivity", "Planner"],
      slideshowImages: [
        "/ebook_c_1.jpg",
        "/ebook_c_2.jpg",
        "/ebook_c_3.jpg",
        "/ebook_c_4.jpg",
        "/ebook_c_5.jpg",
        "/ebook_c_6.jpg",
        "/ebook_c_7.jpg",
        "/ebook_c_8.jpg",
        "/ebook_c_9.jpg",
        "/ebook_c_10.jpg",
        "/ebook_c_11.jpg",
        "/ebook_c_12.jpg",
        "/ebook_c_13.jpg",
        "/ebook_c_14.jpg",
        "/ebook_c_15.jpg",
        "/ebook_c_16.jpg",
      ],
    }
  ];

  const [currentSlide, setCurrentSlide] = useState({});
  const [isPaused, setIsPaused] = useState({});
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.loop = true;
      audioRef.current.play().catch((error) => {
        console.warn('Autoplay blocked by browser:', error);
      });
    }
  }, []);

  useEffect(() => {
    const timers = projects.map((project) => {
      return setInterval(() => {
        if (!isPaused[project.id]) {
          setCurrentSlide((prev) => ({
            ...prev,
            [project.id]: ((prev[project.id] || 0) + 1) % project.slideshowImages.length,
          }));

          const container = slideshowRefs.current?.[project.id];
          if (container) {
            const scrollAmount = 96;
            container.scrollLeft += scrollAmount;

            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
              setTimeout(() => {
                container.scrollTo({ left: 0, behavior: 'smooth' });
              }, 300);
            }
          }
        }
      }, 2000);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, [isPaused]);

  const handleMouseEnter = (projectId) => {
    setIsPaused(prev => ({ ...prev, [projectId]: true }));
  };

  const handleMouseLeave = (projectId) => {
    setIsPaused(prev => ({ ...prev, [projectId]: false }));
  };

  const handleViewProject = useCallback(() => {
    console.log('Navigating to /projects/ebook');
    try {
      navigate('/projects/ebook', {
        state: { from: 'project2' },
      });
    } catch (error) {
      console.error("Navigation error:", error);
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.7
      }
    },
    hover: {
      y: -12,
      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)"
    }
  };

  const pageVariants = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-100%" },
  };

  const pageTransition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  // Floating elements for background effect
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

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className={`relative overflow-hidden px-6 sm:px-12 md:px-16 pt-32 pb-20 max-w-8xl mx-auto min-h-screen ${
        darkMode 
          ? 'bg-gradient-to-r from-[#1e3a8a] to-[#5b21b6]' 
          : 'bg-gradient-to-r from-[#e0f7fa] to-[#a5f3fc]'
      }`}
    >
      {/* <audio ref={audioRef} src="/audio/bg-music.mp3" /> */}

      {/* Left Marker Line
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
      /> */}

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

      <motion.div
        className="mb-16 text-center relative z-10"
        variants={{
          hidden: { y: -20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6
            }
          }
        }}
      >
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 dark:from-teal-300 dark:to-blue-300 tracking-tight font-poppins">
          My Ebook Design
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-1.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mx-auto w-1/2 max-w-xs"
        />
        <p className={`max-w-3xl mx-auto text-lg mt-6 font-poppins ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          Discover my curated collection of professional eBook designs
        </p>
      </motion.div>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12" variants={containerVariants}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover="hover"
            className={`p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden backdrop-blur-sm ${
              darkMode 
                ? 'bg-gray-800/95 hover:bg-gray-800/100 border-gray-700 hover:border-teal-400'
                : 'bg-white/95 hover:bg-white/100 border-gray-200 hover:border-blue-400'
            }`}
            custom={index}
          >
            <motion.div
              className="absolute inset-0 border-4 border-transparent rounded-3xl"
              whileHover={{
                borderColor: darkMode ? 'rgba(20, 184, 166, 0.5)' : 'rgba(59, 130, 246, 0.5)',
                transition: { duration: 0.3 }
              }}
            />
            <div className="mb-8 relative z-10">
              <motion.div
                whileHover={{ scale: 1.03 }}
                animate={{
                  scale: [1, 1.02, 1, 1.03, 1],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                className="relative w-full max-w-md mx-auto aspect-[148/210] rounded-2xl overflow-hidden mb-6 shadow-lg"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain bg-gray-100"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = project.placeholder;
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-black/70' : 'from-black/50'} to-transparent`} />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 bg-black/50"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-center p-4 text-sm font-medium font-poppins">
                    {project.description}
                  </p>
                </motion.div>
              </motion.div>

              {project.slideshowImages?.length > 0 && (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      const container = slideshowRefs.current?.[project.id];
                      if (container) container.scrollLeft -= 96;
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/80 text-white p-3 rounded-full shadow-xl backdrop-blur-md hover:bg-black/95 transition-all"
                    aria-label="Slide left"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  
                  <div
                    ref={el => (slideshowRefs.current[project.id] = el)}
                    className="flex gap-3 overflow-x-hidden py-3 scroll-smooth"
                    onMouseEnter={() => handleMouseEnter(project.id)}
                    onMouseLeave={() => handleMouseLeave(project.id)}
                    style={{
                      maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                      webkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                    }}
                  >
                    {[...project.slideshowImages, ...project.slideshowImages].map((img, idx) => (
                      <motion.div
                        key={`${project.id}-${idx}`}
                        className={`relative w-full max-w-xs aspect-[148/210] flex-shrink-0 rounded-lg overflow-hidden ${
                          idx % project.slideshowImages.length === (currentSlide[project.id] || 0) 
                            ? 'ring-2 ring-teal-400' 
                            : ''
                        }`}
                        whileHover={{ scale: 1.06 }}
                      >
                        <img
                          src={img}
                          alt={`Slide ${(idx % project.slideshowImages.length) + 1} of ${project.title}`}
                          className="w-full h-full object-contain bg-gray-100"
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = project.placeholder;
                          }}
                        />
                        {idx % project.slideshowImages.length === (currentSlide[project.id] || 0) && (
                          <div className="absolute inset-0 bg-black/25" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      const container = slideshowRefs.current?.[project.id];
                      if (container) container.scrollLeft += 96;
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/80 text-white p-3 rounded-full shadow-xl backdrop-blur-md hover:bg-black/95 transition-all"
                    aria-label="Slide right"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              )}
            </div>

            <div className="px-4 relative z-10">
              <h3 className={`text-3xl font-bold mb-4 font-poppins ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {project.title}
              </h3>
              <p className={`mb-6 text-lg font-poppins ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8 mt-6">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.12 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium font-poppins bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white transition-colors shadow-sm`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div 
          className="mt-12 col-span-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={handleViewProject}
            whileHover={{ 
              scale: 1.06,
              boxShadow: '0 0 20px rgba(20, 184, 166, 0.7)'
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 250, damping: 15 }}
            className="w-full max-w-lg mx-auto py-4 px-8 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg font-poppins"
            aria-label="View Ebook Project"
          >
            <span className="text-lg">View More Ebook Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
          <motion.div
            // initial={{ opacity: 0, scaleX: 0 }}
            // animate={{ opacity: 1, scaleX: 1 }}
            // transition={{ duration: 0.5, delay: 0.7 }}
            // className="mt-8 h-1.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mx-auto w-4/5 sm:w-2/3"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;