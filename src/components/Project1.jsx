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
      title: "Presentation 1",
      description: "Professional presentation designs 1",
      image: "/presentation.jpg",
      placeholder: "/placeholder-design.jpg",
      tags: ["Design", "Canva", "Presentation"],
      slideshowImages: [
        "/presentation-slide1.jpg",
        "/presentation-slide2.jpg",
        "/presentation-slide3.jpg",
        "/presentation-slide4.jpg",
        "/presentation-slide5.jpg",
        "/presentation-slide6.jpg",
        "/presentation-slide7.jpg",
        "/presentation-slide8.jpg",
        "/presentation-slide9.jpg",
      ],
    },
    {
      id: 2,
      title: "Presentation 2",
      description: "Professional presentation designs 2",
      image: "/presentation-slideB.jpg",
      placeholder: "/placeholder-design.jpg",
      tags: ["Design", "Canva", "Presentation"],
      slideshowImages: [
        "/presentation-slideB_1.jpg",
        "/presentation-slideB_2.jpg",
        "/presentation-slideB_3.jpg",
        "/presentation-slideB_4.jpg",
        "/presentation-slideB_5.jpg",
        "/presentation-slideB_6.jpg",
        "/presentation-slideB_7.jpg",
        "/presentation-slideB_8.jpg",
        "/presentation-slideB_9.jpg",
      ],
    },
    {
      id: 3,
      title: "Presentation 3",
      description: "Professional presentation designs 3",
      image: "/presentation-slideC.jpg",
      placeholder: "/placeholder-design.jpg",
      tags: ["Design", "Canva", "Presentation"],
      slideshowImages: [
        "/presentation-slideC_1.jpg",
        "/presentation-slideC_2.jpg",
        "/presentation-slideC_3.jpg",
        "/presentation-slideC_4.jpg",
        "/presentation-slideC_5.jpg",
        "/presentation-slideC_6.jpg",
        "/presentation-slideC_7.jpg",
        "/presentation-slideC_8.jpg",
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
      audioRef.current.play().catch(() => {
        console.warn('Autoplay blocked by browser.');
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
    try {
      navigate('/presentation', {
        state: { from: 'project1' },
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

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`relative overflow-hidden px-6 sm:px-12 md:px-16 pt-32 pb-20 max-w-8xl mx-auto min-h-screen ${
        darkMode ? 'bg-[#0F8BCC]' : 'bg-[#07A9F0]'
      }`}
    >
      {/* <audio ref={audioRef} src="/audio/bg-music.mp3" /> */}

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
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 text-white tracking-tight">
          My Presentation Design
        </h2>
        <p className={`max-w-3xl mx-auto text-lg ${darkMode ? 'text-gray-100' : 'text-gray-200'}`}>
          Explore my curated collection of professional design projects
        </p>
      </motion.div>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12" variants={containerVariants}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover="hover"
            className={`p-8 rounded-3xl border transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800/95 hover:bg-gray-800/100 border-gray-700 hover:border-blue-400'
                : 'bg-white/95 hover:bg-white/100 border-gray-200 hover:border-blue-400'
            }`}
            custom={index}
          >
            <div className="mb-8">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 shadow-lg"
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
                        className={`relative aspect-[16/9] w-96 flex-shrink-0 rounded-lg overflow-hidden ${
                          idx % project.slideshowImages.length === (currentSlide[project.id] || 0) 
                            ? 'ring-2 ring-blue-400' 
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

            <div className="px-4">
              <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {project.title}
              </h3>
              <p className={`mb-6 text-lg ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8 mt-6">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.12 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      darkMode 
                        ? 'bg-orange-500 text-white hover:bg-blue-500 hover:text-white'
                        : 'bg-orange-500 text-white hover:bg-blue-500 hover:text-white'
                    } transition-colors shadow-sm`}
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
              boxShadow: '0 0 20px rgba(72, 187, 120, 0.7)'
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 250, damping: 15 }}
            className="w-full max-w-lg mx-auto py-4 px-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg"
            aria-label="View Presentation Project"
          >
            <span className="text-lg">View More Presentation Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 h-1.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto w-4/5 sm:w-2/3"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;