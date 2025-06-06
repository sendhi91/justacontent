
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
    title: "Nutrition & Fitness Secrets of Elite Athletes",
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
    title: "The Impact of Artificial Intelligence On Our Daily Lives",
    description: "Presentation about using AI and history of AI",
    tags: ["Artificial Intelligence", "Canva", "Design"],
    slides: 22,
    coverColor: "from-yellow-400 to-orange-500",
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
    tags: ["Health", "Canva", "Design"],
    slides: 22,
    coverColor: "from-blue-400 to-cyan-500",
    icon: "💉",
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
    coverColor: "from-red-400 to-orange-500",
    icon: "🌋",
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
    description: "Presentation about building healthy eating habits for kids",
    tags: ["Health", "Canva", "Design"],
    slides: 22,
    coverColor: "from-green-400 to-lime-500",
    icon: "🍎",
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
    coverColor: "from-cyan-400 to-blue-500",
    icon: "🌴",
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
  const [lightboxPresentationId, setLightboxPresentationId] = useState(null);
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
    setLightboxPresentationId(presentationId);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxPresentationId(null);
  };

  const handleMouseEnter = (presentationId) => {
    setIsHovering(prev => ({ ...prev, [presentationId]: true }));
  };

  const handleMouseLeave = (presentationId) => {
    setIsHovering(prev => ({ ...prev, [presentationId]: false }));
  };

  const nextLightboxImage = (e) => {
    e.stopPropagation();
    const presentation = presentationData.find(p => p.id === lightboxPresentationId);
    const currentIndex = presentation.images.indexOf(lightboxImage);
    const nextIndex = (currentIndex + 1) % presentation.images.length;
    setLightboxImage(presentation.images[nextIndex]);
    setCurrentSlide(prev => ({
      ...prev,
      [lightboxPresentationId]: nextIndex,
    }));
  };

  const prevLightboxImage = (e) => {
    e.stopPropagation();
    const presentation = presentationData.find(p => p.id === lightboxPresentationId);
    const currentIndex = presentation.images.indexOf(lightboxImage);
    const prevIndex = (currentIndex - 1 + presentation.images.length) % presentation.images.length;
    setLightboxImage(presentation.images[prevIndex]);
    setCurrentSlide(prev => ({
      ...prev,
      [lightboxPresentationId]: prevIndex,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`pt-32 px-6 sm:px-12 md:px-16 max-w-8xl mx-auto min-h-screen bg-gradient-to-b ${
        document.documentElement.classList.contains('dark')
          ? 'from-blue-900 to-purple-900'
          : 'from-blue-100 to-teal-100'
      }`}
    >
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-6xl aspect-[16/9]"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={lightboxImage}
                src={lightboxImage}
                alt="Presentation Slide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain rounded-lg border border-teal-500/50"
              />
              <motion.button
                onClick={prevLightboxImage}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-teal-500/50 text-white p-3 rounded-full hover:bg-teal-500/70 transition-all z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                onClick={nextLightboxImage}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-teal-500/50 text-white p-3 rounded-full hover:bg-teal-500/70 transition-all z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
              <motion.button
                onClick={closeLightbox}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-10 right-0 text-teal-300 text-3xl hover:text-teal-400 transition-colors"
              >
                ✕
              </motion.button>
              <span className="absolute bottom-4 right-4 text-sm bg-teal-500/70 text-white px-3 py-1 rounded-full z-10">
                Slide {presentationData.find((p) => p.id === lightboxPresentationId).images.indexOf(lightboxImage) + 1}/
                {presentationData.find((p) => p.id === lightboxPresentationId).images.length}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <motion.header
        className="text-center px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={`text-6xl md:text-8xl font-extrabold mb-4 tracking-tight font-poppins ${
          document.documentElement.classList.contains('dark') ? 'text-teal-300' : 'text-teal-400'
        }`}>
          Presentation Design Portfolio
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-1.5 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mx-auto w-1/2 max-w-sm"
        />
        <p className={`text-base md:text-lg max-w-4xl mx-auto mt-6 font-poppins ${
          document.documentElement.classList.contains('dark') ? 'text-gray-200' : 'text-gray-800'
        }`}>
          Professionally designed presentations that communicate effectively
        </p>
      </motion.header>

      {/* Presentations Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 mb-16">
        {presentationData.map((presentation, index) => (
          <motion.div
            key={presentation.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15)"
            }}
            className="bg-white/10 dark:bg-gray-900/10 p-6 rounded-3xl backdrop-blur-sm border border-transparent hover:border-teal-500/50 transition-all relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 border-4 border-transparent rounded-3xl"
              whileHover={{
                borderColor: 'rgba(45, 212, 191, 0.5)',
                transition: { duration: 0.3 }
              }}
            />
            {/* Slideshow Presentation Cover */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-full max-w-md mx-auto aspect-[16/9] mb-6 rounded-2xl overflow-hidden cursor-pointer shadow-md"
              onClick={() => openLightbox(presentation.id)}
              onMouseEnter={() => handleMouseEnter(presentation.id)}
              onMouseLeave={() => handleMouseLeave(presentation.id)}
            >
              {/* Slideshow */}
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide[presentation.id]}
                    src={presentation.images[currentSlide[presentation.id]]}
                    alt={`Slide ${currentSlide[presentation.id] + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </AnimatePresence>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 bg-black/50 backdrop-blur-sm"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-center p-4 text-sm font-medium font-poppins">
                    {presentation.description}
                  </p>
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              <motion.button
                onClick={(e) => prevSlide(presentation.id, e)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-teal-500/50 text-white p-2 rounded-full hover:bg-teal-500/70 transition-all z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                onClick={(e) => nextSlide(presentation.id, e)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-teal-500/50 text-white p-2 rounded-full hover:bg-teal-500/70 transition-all z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Slide Indicator */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
                {presentation.images.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide(prev => ({ ...prev, [presentation.id]: idx }));
                    }}
                    whileHover={{ scale: 1.2 }}
                    className={`h-1.5 rounded-full transition-all ${
                      currentSlide[presentation.id] === idx ? 'bg-teal-400 w-6' : 'bg-gray-400/50 w-2 hover:bg-gray-400/70'
                    }`}
                  />
                ))}
              </div>

              {/* Slide Count */}
              <span className="absolute bottom-3 right-3 text-sm bg-teal-500/70 text-white px-2 py-1 rounded-full z-10">
                Slide {currentSlide[presentation.id] + 1}/{presentation.images.length}
              </span>
            </motion.div>

            {/* Presentation Content */}
            <div className="px-4">
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 font-poppins ${
                document.documentElement.classList.contains('dark') ? 'text-teal-300' : 'text-teal-400'
              }`}>
                {presentation.title}
              </h3>
              <p className={`text-base md:text-lg mb-6 font-poppins ${
                document.documentElement.classList.contains('dark') ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {presentation.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {presentation.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm font-medium font-poppins"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center mb-12"
      >
        <motion.button
          onClick={handleBackNavigation}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 10px 25px rgba(59, 130, 246, 0.5)',
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 text-white font-semibold text-lg rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 backdrop-blur-sm bg-white/10 shadow-lg flex items-center justify-center gap-3 mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-lg font-poppins">Return to Projects</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Presentation;
