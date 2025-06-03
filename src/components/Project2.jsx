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
      description: "Ebook Desain Contain Simple Fitness For Busy People",
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
      description: "edited",
      image: "/ebook.jpg",
      placeholder: "/placeholder-design.jpg",
      tags: ["Health", "Canva", "Design"],
      slideshowImages: [
        "/ebook-slide1.jpg",
        "/ebook-slide2.jpg",
        "/ebook-slide3.jpg",
        "/ebook-slide4.jpg",
        "/ebook-slide5.jpg",
        "/ebook-slide6.jpg",
        "/ebook-slide7.jpg",
        "/ebook-slide8.jpg",
        "/ebook-slide9.jpg",
        "/ebook-slide10.jpg",
      ],
    },
    {
      id: 3,
      title: "Ebook 3",
      description: "Organize your time and goals with clean and visual planner layouts.",
      image: "/planner.jpg",
      placeholder: "/placeholder-design.jpg",
      tags: ["Design", "Productivity", "Planner"],
      slideshowImages: [
        "/planner_1.jpeg",
        "/planner-slide2.jpg",
        "/planner-slide3.jpg",
        "/planner-slide4.jpg",
        "/planner-slide5.jpg",
        "/planner-slide6.jpg",
        "/planner-slide7.jpg",
        "/planner-slide8.jpg",
        "/planner-slide9.jpg",
        "/planner-slide10.jpg",
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
            const scrollAmount = 82;
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
    console.log('Navigating to /ebook'); // Debug log
    try {
      navigate('/ebook', {
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
      y: -8,
      boxShadow: "0 15px 30px -10px rgba(0,0,0,0.25)"
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

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className={`relative overflow-hidden px-4 sm:px-8 pt-28 pb-16 max-w-7xl mx-auto min-h-screen ${
        darkMode ? 'bg-[#0F8BCC]' : 'bg-[#07A9F0]'
      }`}
    >
      {/* <audio ref={audioRef} src="/audio/bg-music.mp3" /> */}

      <motion.div
        className="mb-12 text-center relative z-10"
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
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
          Ebook Design Project
        </h2>
        <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-100' : 'text-gray-200'}`}>
          Explore my collection of professional design projects
        </p>
      </motion.div>

      <motion.div className="flex flex-col gap-8 lg:gap-10" variants={containerVariants}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover="hover"
            className={`p-6 rounded-2xl border transition-all ${
              darkMode 
                ? 'bg-gray-800/90 hover:bg-gray-800 border-gray-700 hover:border-blue-400'
                : 'bg-white/95 hover:bg-white border-gray-200 hover:border-blue-400'
            }`}
            custom={index}
          >
            <div className="mb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full max-w-md mx-auto aspect-[148/210] rounded-xl overflow-hidden mb-3"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = project.placeholder;
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-black/60' : 'from-black/40'} to-transparent`} />
              </motion.div>

              {project.slideshowImages?.length > 0 && (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const container = slideshowRefs.current?.[project.id];
                      if (container) container.scrollLeft -= 82;
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 text-white p-3 rounded-full shadow-lg backdrop-blur-sm hover:bg-black/90 transition"
                    aria-label="Slide left"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  
                  <div
                    ref={el => (slideshowRefs.current[project.id] = el)}
                    className="flex gap-2 overflow-x-hidden py-2 scroll-smooth"
                    onMouseEnter={() => handleMouseEnter(project.id)}
                    onMouseLeave={() => handleMouseLeave(project.id)}
                    style={{
                      maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                    }}
                  >
                    {[...project.slideshowImages, ...project.slideshowImages].map((img, idx) => (
                      <motion.div
                        key={`${project.id}-${idx}`}
                        className={`relative w-full max-w-xs aspect-[148/210] flex-shrink-0 rounded-md overflow-hidden ${
                          idx % project.slideshowImages.length === (currentSlide[project.id] || 0) 
                            ? 'ring-2 ring-blue-500' 
                            : ''
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src={img}
                          alt={`Slide ${(idx % project.slideshowImages.length) + 1} of ${project.title}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = project.placeholder;
                          }}
                        />
                        {idx % project.slideshowImages.length === (currentSlide[project.id] || 0) && (
                          <div className="absolute inset-0 bg-black/30" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const container = slideshowRefs.current?.[project.id];
                      if (container) container.scrollLeft += 82;
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 text-white p-3 rounded-full shadow-lg backdrop-blur-sm hover:bg-black/90 transition"
                    aria-label="Slide right"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </div>
              )}
            </div>

            <div className="px-2">
              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 mt-4">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode 
                        ? 'bg-white/20 text-white hover:bg-blue-400'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white'
                    } transition-colors`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={handleViewProject}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 15px rgba(72, 187, 120, 0.6)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 250, damping: 15 }}
            className="w-full max-w-md mx-auto py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-green-500 hover:to-green-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
            aria-label="View Ebook Project"
          >
            <span>View More Ebook Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;