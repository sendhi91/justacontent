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
      title: "Presentation Design",
      description: "Desain presentasi profesional untuk berbagai tujuan dengan tata letak modern dan visual yang menarik.",
      image: "/presentation.jpg",
      placeholder: "/placeholder-design.jpg",
      path: "/presentation",
      tags: ["Canva", "PowerPoint", "Keynote"],
      buttonText: "Lihat Presentasi",
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
        "/presentation-slide10.jpg",
      ],
    },
    {
      id: 2,
      title: "Ebook Design",
      description: "Desain ebook yang indah dan dioptimalkan untuk pemasaran digital dan keterbacaan di berbagai perangkat.",
      image: "/ebook.jpg",
      placeholder: "/placeholder-design.jpg",
      path: "/ebook",
      tags: ["Adobe InDesign", "Canva", "Illustrator"],
      buttonText: "Lihat Ebook",
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
      title: "Planner Design",
      description: "Atur waktu dan tujuan Anda dengan tata letak planner yang bersih dan visual.",
      image: "/planner.jpg",
      placeholder: "/placeholder-design.jpg",
      path: "/planner",
      tags: ["Design", "Productivity", "Planner"],
      buttonText: "Lihat Planner",
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

  // 🔊 Ref untuk audio background
const audioRef = useRef(null);

// 🎵 Auto play background music saat component mount
useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = 0.1;
    audioRef.current.loop = true;
    audioRef.current.play().catch(() => {
      console.warn('Autoplay ditolak oleh browser.');
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

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [isPaused]);

  const handleMouseEnter = (projectId) => {
    setIsPaused(prev => ({ ...prev, [projectId]: true }));
  };

  const handleMouseLeave = (projectId) => {
    setIsPaused(prev => ({ ...prev, [projectId]: false }));
  };

  const handleNavigation = useCallback((path) => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const navigationState = {
      from: 'projects',
      timestamp: Date.now(),
      previousPath: window.location.pathname,
      preserveScroll: true
    };

    try {
      navigate(normalizedPath, { state: navigationState, replace: false });
    } catch (error) {
      console.error("Kesalahan navigasi:", error);
      if (normalizedPath.includes('presentation')) {
        navigate('/presentation', { replace: true, state: navigationState });
      } else if (normalizedPath.includes('ebook')) {
        navigate('/ebook', { replace: true, state: navigationState });
      } else {
        navigate('/', { replace: true });
      }
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

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`relative overflow-hidden px-4 sm:px-8 pt-28 pb-16 max-w-7xl mx-auto min-h-screen ${
        darkMode
          ? 'bg-gray-900'
          : 'bg-gradient-to-br from-[#f0f9ff] to-[#6D86E8]'
      }`}
    >
       {/* 🎵 Background Music */}
 <audio ref={audioRef} src="/audio/bg-music.mp3" />

 {/* ✨ Aurora Blurs */}
 <div className="fixed top-0 left-0 w-screen h-screen bg-purple-600 opacity-20 blur-[100px] z-0" />
 <div className="fixed top-0 right-0 w-screen h-screen bg-blue-500 opacity-25 blur-[80px] z-0" />


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
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            My
          </span> Projects
        </h2>
        <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Jelajahi koleksi proyek desain profesional saya
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
              ? 'bg-gray-800/80 hover:bg-gray-800 border-gray-700 hover:border-blue-500'
              : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-blue-400'
            }`}
            custom={index}
          >
            <div className="mb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] xl:h-[40rem] rounded-xl overflow-hidden mb-3"
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

              {project.slideshowImages && project.slideshowImages.length > 0 && (
                <div className="relative">
                {/* Tombol kiri */}
                <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    const container = slideshowRefs.current?.[project.id];
    if (container) container.scrollLeft -= 82;
  }}
  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 text-white p-3 rounded-full shadow-lg backdrop-blur-sm hover:bg-black/90 transition"
  aria-label="Geser kiri"
>
  <ChevronLeft className="w-6 h-6" />
</motion.button>
              
                {/* Slideshow */}
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
                      className={`relative h-48 w-64 flex-shrink-0 rounded-md overflow-hidden ${
                        idx % project.slideshowImages.length === (currentSlide[project.id] || 0) ? 'ring-2 ring-blue-500' : ''
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={img}
                        alt={`Slide ${(idx % project.slideshowImages.length) + 1} untuk ${project.title}`}
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
              
                {/* Tombol kanan */}
                <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    const container = slideshowRefs.current?.[project.id];
    if (container) container.scrollLeft += 82;
  }}
  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 text-white p-3 rounded-full shadow-lg backdrop-blur-sm hover:bg-black/90 transition"
  aria-label="Geser kanan"
>
  <ChevronRight className="w-6 h-6" />
</motion.button>
              </div>
              )}
            </div>

            <div className="px-2">
              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {project.title}
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 mt-4">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode 
                      ? 'bg-gray-700 text-gray-200 hover:bg-blue-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
                    } transition-colors`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(project.path);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleNavigation(project.path);
                  }
                }}
                whileHover={{ scale: 1.05, background: "linear-gradient(to right, #3b82f6, #2563eb)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-medium flex items-center justify-center gap-2 text-white relative overflow-hidden group"
                aria-label={`Lihat ${project.title}`}
                role="button"
              >
                <span className="relative z-10">{project.buttonText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
