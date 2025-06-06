import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const presentationData = [
  {
    id: 1,
    title: "Explore The Wonders of Central Java",
    description: "Presentation to explore the Central Java from Indonesia",
    tags: ["Tourism", "Canva", "Design"],
    slides: 42,
    coverColor: "from-blue-500 to-indigo-600",
    icon: "📈",
    images: [
      "/presentation.jpg",
      "/presentation-slide1.jpg",
      "/presentation-slide2.jpg",
      "/presentation-slide3.jpg",
      "/presentation-slide4.jpg",
      "/presentation-slide5.jpg",
      "/presentation-slide6.jpg",
      "/presentation-slide7.jpg",
      "/presentation-slide8.jpg",
    ]
  },
  {
    id: 2,
    title: "Balancing, Body, Mind and Spirit Through YOGA",
    description: "Presentation to share how the Yoga works",
    tags: ["Sport", "Canva", "Design"],
    slides: 36,
    coverColor: "from-purple-500 to-pink-600",
    icon: "🚀",
    images: [
      "/presentation-slideB.jpg",
      "/presentation-slideB_1.jpg",
      "/presentation-slideB_2.jpg",
      "/presentation-slideB_3.jpg",
      "/presentation-slideB_4.jpg",
      "/presentation-slideB_5.jpg",
      "/presentation-slideB_6.jpg",
      "/presentation-slideB_7.jpg",
      "/presentation-slideB_8.jpg",
    ]
  },
  {
    id: 3,
    title: "Healthy Eating Fuel Your Body Energize Your Life",
    description: "Presentation about healthy food for the body",
    tags: ["Healthy", "Canva", "Design"],
    slides: 58,
    coverColor: "from-green-500 to-teal-600",
    icon: "🎓",
    images: [
      "/presentation-slideC.jpg",
      "/presentation-slideC_1.jpg",
      "/presentation-slideC_2.jpg",
      "/presentation-slideC_3.jpg",
      "/presentation-slideC_4.jpg",
      "/presentation-slideC_5.jpg",
      "/presentation-slideC_6.jpg",
      "/presentation-slideC_7.jpg",
      "/presentation-slideC_8.jpg",
    ]
  },
  {
    id: 4,
    title: "nutrition & Fitness Secrets of Elite Athletes",
    description: "Presentation about secrets of Elite Athletes",
    tags: ["Healthy", "Canva", "Design"],
    slides: 27,
    coverColor: "from-red-500 to-amber-600",
    icon: "📊",
    images: [
      "/presentation-slideD.jpg",
      "/presentation-slideD_1.jpg",
      "/presentation-slideD_2.jpg",
      "/presentation-slideD_3.jpg",
      "/presentation-slideD_4.jpg",
      "/presentation-slideD_5.jpg",
      "/presentation-slideD_6.jpg",
    ]
  },
  {
    id: 5,
    title: "The Business Blueprint Keys to Success & Growth",
    description: "Presentation about Keys to Success for Business",
    tags: ["Business", "Canva", "Design"],
    slides: 64,
    coverColor: "from-gray-500 to-gray-800",
    icon: "💻",
    images: [
      "/presentation-slideE.jpg",
      "/presentation-slideE_2.jpg",
      "/presentation-slideE_3.jpg",
      "/presentation-slideE_4.jpg",
      "/presentation-slideE_5.jpg",
      "/presentation-slideE_6.jpg",
      "/presentation-slideE_7.jpg",
      "/presentation-slideE_8.jpg",
      "/presentation-slideE_9.jpg",
      "/presentation-slideE_10.jpg",
      "/presentation-slideE_11.jpg",
      "/presentation-slideE_12.jpg",
    ]
  },
  {
    id: 6,
    title: "The Impact of Artificial Inteligence On Our Daily Lives",
    description: "Presentation about using AI and history of AI",
    tags: ["Artificial Inteligence", "Canva", "Design"],
    slides: 22,
    coverColor: "from-yellow-500 to-orange-600",
    icon: "💡",
    images: [
      "/presentation-slideF.jpg",
      "/presentation-slideF_1.jpg",
      "/presentation-slideF_2.jpg",
      "/presentation-slideF_3.jpg",
      "/presentation-slideF_4.jpg",
      "/presentation-slideF_5.jpg",
      "/presentation-slideF_6.jpg",
      "/presentation-slideF_7.jpg",
      "/presentation-slideF_8.jpg",
    ]
  },
  {
    id: 7,
    title: "Join The Fight Against Tuberculosis",
    description: "Presentation about kind of Tuberculosis and How to Prevent",
    tags: ["Healthy", "Canva", "Design"],
    slides: 22,
    coverColor: "from-yellow-500 to-orange-600",
    icon: "💡",
    images: [
      "/presentation-slideG.jpg",
      "/presentation-slideG_1.jpg",
      "/presentation-slideG_2.jpg",
      "/presentation-slideG_3.jpg",
      "/presentation-slideG_4.jpg",
      "/presentation-slideG_5.jpg",
      "/presentation-slideG_6.jpg",
      "/presentation-slideG_7.jpg",
      "/presentation-slideG_8.jpg",
      "/presentation-slideG_9.jpg",
    ]
  },
  {
    id: 8,
    title: "My Home Made Volcano",
    description: "Presentation about child experiment",
    tags: ["Child Experiment", "Canva", "Design"],
    slides: 22,
    coverColor: "from-yellow-500 to-orange-600",
    icon: "💡",
    images: [
      "/presentation-slideH.jpg",
      "/presentation-slideH_1.jpg",
      "/presentation-slideH_2.jpg",
      "/presentation-slideH_3.jpg",
      "/presentation-slideH_4.jpg",
      "/presentation-slideH_5.jpg",
      "/presentation-slideH_6.jpg",
      "/presentation-slideH_7.jpg",
    ]
  },
  {
    id: 9,
    title: "Happy Plate Happy Kids, Building Healthy Eating Habits",
    description: "Investor pitch presentation with financial projections",
    tags: ["Healthy", "Canva", "Design"],
    slides: 22,
    coverColor: "from-yellow-500 to-orange-600",
    icon: "💡",
    images: [
      "/presentation-slideI.jpg",
      "/presentation-slideI_1.jpg",
      "/presentation-slideI_2.jpg",
      "/presentation-slideI_3.jpg",
      "/presentation-slideI_4.jpg",
      "/presentation-slideI_5.jpg",
      "/presentation-slideI_6.jpg",
      "/presentation-slideI_7.jpg",
      "/presentation-slideI_8.jpg",
      "/presentation-slideI_9.jpg",
    ]
  },
  {
    id: 10,
    title: "Wonderful Indonesia Discover the Beauty of Indonesian Tourism",
    description: "Presentation about Indonesia Tourism",
    tags: ["Tourism", "Canva", "Design"],
    slides: 22,
    coverColor: "from-yellow-500 to-orange-600",
    icon: "💡",
    images: [
      "/presentation-slideJ.jpg",
      "/presentation-slideJ_2.jpg",
      "/presentation-slideJ_3.jpg",
      "/presentation-slideJ_4.jpg",
      "/presentation-slideJ_5.jpg",
      "/presentation-slideJ_6.jpg",
      "/presentation-slideJ_7.jpg",
      "/presentation-slideJ_8.jpg",
      "/presentation-slideJ_9.jpg",
      "/presentation-slideJ_10.jpg",
    ]
  }
];

const Presentation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [isHovering, setIsHovering] = useState({});

  // Initialize current slides
  useEffect(() => {
    const initialSlides = {};
    presentationData.forEach(pres => {
      initialSlides[pres.id] = 0;
    });
    setCurrentSlide(initialSlides);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const intervals = {};
    presentationData.forEach(pres => {
      intervals[pres.id] = setInterval(() => {
        if (!isHovering[pres.id]) {
          setCurrentSlide(prev => ({
            ...prev,
            [pres.id]: (prev[pres.id] + 1) % pres.images.length
          }));
        }
      }, 3000);
    });

    return () => {
      presentationData.forEach(pres => {
        clearInterval(intervals[pres.id]);
      });
    };
  }, [isHovering]);

  const handleBackNavigation = () => {
    navigate('/', {
      state: {
        from: 'presentation',
        scrollToProjects: true,
      },
    });
  };

  const nextSlide = (presentationId, e) => {
    e?.stopPropagation();
    setCurrentSlide(prev => {
      const presentation = presentationData.find(p => p.id === presentationId);
      return {
        ...prev,
        [presentationId]: (prev[presentationId] + 1) % presentation.images.length
      };
    });
  };

  const prevSlide = (presentationId, e) => {
    e?.stopPropagation();
    setCurrentSlide(prev => {
      const presentation = presentationData.find(p => p.id === presentationId);
      return {
        ...prev,
        [presentationId]: (prev[presentationId] - 1 + presentation.images.length) % presentation.images.length
      };
    });
  };

  const openLightbox = (presentationId) => {
    const presentation = presentationData.find(p => p.id === presentationId);
    setLightboxImage(presentation.images[currentSlide[presentationId]]);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleMouseEnter = (presentationId) => {
    setIsHovering(prev => ({ ...prev, [presentationId]: true }));
  };

  const handleMouseLeave = (presentationId) => {
    setIsHovering(prev => ({ ...prev, [presentationId]: false }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white pt-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen"
    >
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Presentation Slide"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-cyan-400 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <motion.header
        className="text-center px-4 py-6 overflow-visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-3 tracking-tight text-white leading-[1.1] pb-1">
          Presentation Design Portofolio
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mt-4">
          Professionally designed presentations that communicate effectively
        </p>
      </motion.header>

      {/* Presentations Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {presentationData.map((presentation, index) => (
          <motion.div
            key={presentation.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
            }}
            className="bg-white hover:bg-gray-100 p-6 rounded-2xl border border-gray-300 hover:border-cyan-500 transition-all"
          >
            {/* Slideshow Presentation Cover */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative h-56 sm:h-64 mb-6 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(presentation.id)}
              onMouseEnter={() => handleMouseEnter(presentation.id)}
              onMouseLeave={() => handleMouseLeave(presentation.id)}
            >
              {/* Slideshow */}
              <div className="relative h-full w-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide[presentation.id]}
                    src={presentation.images[currentSlide[presentation.id]]}
                    alt={`Slide ${currentSlide[presentation.id] + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={(e) => prevSlide(presentation.id, e)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 text-black p-2 rounded-full hover:bg-white/70 transition-colors z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={(e) => nextSlide(presentation.id, e)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 text-black p-2 rounded-full hover:bg-white/70 transition-colors z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slide Indicator */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                {presentation.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide(prev => ({ ...prev, [presentation.id]: idx }));
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${currentSlide[presentation.id] === idx ? 'bg-cyan-400 w-4' : 'bg-gray-800/50 hover:bg-gray-800/70'}`}
                  />
                ))}
              </div>

              {/* Slide Count */}
              <span className="absolute bottom-3 right-3 text-sm bg-white/70 text-black px-3 py-1 rounded-full z-10">
                Slide {currentSlide[presentation.id] + 1}/{presentation.images.length}
              </span>
            </motion.div>

            {/* Presentation Content */}
            <div className="px-2">
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">{presentation.title}</h3>
              <p className="text-gray-600 mb-5">{presentation.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {presentation.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gray-200 rounded-full text-xs sm:text-sm text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <motion.button
          onClick={handleBackNavigation}
          whileHover={{
            scale: 1.05,
            background: "linear-gradient(to right,rgb(8, 178, 14),rgb(9, 248, 1))"
          }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3.5 bg-gradient-to-r from-orange-600 to-orange-800 rounded-xl font-medium shadow-lg transition-all flex items-center justify-center gap-2 mx-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Projects
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Presentation;