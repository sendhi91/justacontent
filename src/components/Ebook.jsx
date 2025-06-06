
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ebookData = [
  {
    id: 1,
    title: "Simple Fitness For Busy People",
    description: "Ebook for how to move in a busy day",
    tags: ["Health", "Canva", "Design"],
    slides: 42,
    coverColor: "from-blue-500 to-indigo-600",
    icon: "📈",
    images: [
      "/ebook_a.jpg",
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
    title: "Power Up With Protein and Reduce Inflammation",
    description: "Ebook for share food for reduce inflammation",
    tags: ["Food", "Canva", "Design"],
    slides: 36,
    coverColor: "from-purple-500 to-pink-600",
    icon: "🚀",
    images: [
      "/ebook_b.png",
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
    title: "Work From Anywhere Build Your Online Career Without a Boss",
    description: "Ebook for build online career and work from anywhere",
    tags: ["Career", "Canva", "Design"],
    slides: 58,
    coverColor: "from-green-500 to-teal-600",
    icon: "🎓",
    images: [
      "/ebook_c.jpg",
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
  },
];

const Ebook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxEbookId, setLightboxEbookId] = useState(null);
  const [isHovering, setIsHovering] = useState({});

  // Initialize current slides
  useEffect(() => {
    const initialSlides = {};
    ebookData.forEach((pres) => {
      initialSlides[pres.id] = 0;
    });
    setCurrentSlide(initialSlides);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const intervals = {};
    ebookData.forEach((pres) => {
      intervals[pres.id] = setInterval(() => {
        if (!isHovering[pres.id]) {
          setCurrentSlide((prev) => ({
            ...prev,
            [pres.id]: (prev[pres.id] + 1) % pres.images.length,
          }));
        }
      }, 3000);
    });

    return () => {
      ebookData.forEach((pres) => {
        clearInterval(intervals[pres.id]);
      });
    };
  }, [isHovering]);

  const handleBackNavigation = () => {
    navigate('/', {
      state: {
        from: 'ebook',
        scrollToProjects: true,
      },
    });
  };

  const nextSlide = (ebookId, e) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => {
      const ebook = ebookData.find((p) => p.id === ebookId);
      return {
        ...prev,
        [ebookId]: (prev[ebookId] + 1) % ebook.images.length,
      };
    });
  };

  const prevSlide = (ebookId, e) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => {
      const ebook = ebookData.find((p) => p.id === ebookId);
      return {
        ...prev,
        [ebookId]: (prev[ebookId] - 1 + ebook.images.length) % ebook.images.length,
      };
    });
  };

  const openLightbox = (ebookId) => {
    const ebook = ebookData.find((p) => p.id === ebookId);
    setLightboxImage(ebook.images[currentSlide[ebookId]]);
    setLightboxEbookId(ebookId);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxEbookId(null);
  };

  const handleMouseEnter = (ebookId) => {
    setIsHovering((prev) => ({ ...prev, [ebookId]: true }));
  };

  const handleMouseLeave = (ebookId) => {
    setIsHovering((prev) => ({ ...prev, [ebookId]: false }));
  };

  const nextLightboxImage = (e) => {
    e.stopPropagation();
    const ebook = ebookData.find((p) => p.id === lightboxEbookId);
    const currentIndex = ebook.images.indexOf(lightboxImage);
    const nextIndex = (currentIndex + 1) % ebook.images.length;
    setLightboxImage(ebook.images[nextIndex]);
    setCurrentSlide((prev) => ({
      ...prev,
      [lightboxEbookId]: nextIndex,
    }));
  };

  const prevLightboxImage = (e) => {
    e.stopPropagation();
    const ebook = ebookData.find((p) => p.id === lightboxEbookId);
    const currentIndex = ebook.images.indexOf(lightboxImage);
    const prevIndex = (currentIndex - 1 + ebook.images.length) % ebook.images.length;
    setLightboxImage(ebook.images[prevIndex]);
    setCurrentSlide((prev) => ({
      ...prev,
      [lightboxEbookId]: prevIndex,
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
          ? 'from-[#0F8BCC] to-[#0A5A8A]'
          : 'from-[#07A9F0] to-[#0582B8]'
      }`}
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
              className="relative w-full max-w-2xl aspect-[3/4]"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={lightboxImage}
                src={lightboxImage}
                alt="Ebook Slide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain rounded-lg"
              />
              <motion.button
                onClick={prevLightboxImage}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 text-black dark:text-white p-3 rounded-full hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all z-10"
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
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 text-black dark:text-white p-3 rounded-full hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all z-10"
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
                className="absolute -top-12 right-0 text-white text-3xl hover:text-cyan-400 transition-colors"
              >
                ✕
              </motion.button>
              <span className="absolute bottom-3 right-3 text-sm bg-white/70 dark:bg-gray-800/70 text-black dark:text-white px-3 py-1 rounded-full z-10">
                Slide {ebookData.find((p) => p.id === lightboxEbookId).images.indexOf(lightboxImage) + 1}/
                {ebookData.find((p) => p.id === lightboxEbookId).images.length}
              </span>
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
          Ebook Design Portfolio
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-1.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mx-auto w-1/2 max-w-xs"
        />
        <p className="text-gray-200 text-lg sm:text-xl max-w-3xl mx-auto mt-6">
          Professionally designed eBooks for a new reading experience
        </p>
      </motion.header>

      {/* Ebooks Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 mb-16">
        {ebookData.map((ebook, index) => (
          <motion.div
            key={ebook.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100,
            }}
            whileHover={{
              y: -10,
              boxShadow: '0 20px 25px rgba(0, 0, 0, 0.2)',
            }}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-300 dark:border-gray-600 hover:border-cyan-500 transition-all relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 border-4 border-transparent rounded-3xl"
              whileHover={{
                borderColor: document.documentElement.classList.contains('dark') ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.7)',
                transition: { duration: 0.3 }
              }}
            />
            {/* Slideshow Ebook */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-full max-w-md mx-auto aspect-[3/4] mb-6 rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(ebook.id)}
              onMouseEnter={() => handleMouseEnter(ebook.id)}
              onMouseLeave={() => handleMouseLeave(ebook.id)}
            >
              {/* Slideshow */}
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide[ebook.id]}
                    src={ebook.images[currentSlide[ebook.id]]}
                    alt={`Slide ${currentSlide[ebook.id] + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-contain bg-gray-100"
                  />
                </AnimatePresence>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 bg-black/50"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-center p-4 text-sm font-medium">
                    {ebook.description}
                  </p>
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              <motion.button
                onClick={(e) => prevSlide(ebook.id, e)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 text-black dark:text-white p-3 rounded-full hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all z-10"
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
                onClick={(e) => nextSlide(ebook.id, e)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 text-black dark:text-white p-3 rounded-full hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all z-10"
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
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                {ebook.images.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide((prev) => ({ ...prev, [ebook.id]: idx }));
                    }}
                    whileHover={{ scale: 1.2 }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide[ebook.id] === idx ? 'bg-cyan-400 w-4' : 'bg-gray-800/50 hover:bg-gray-800/70'
                    }`}
                  />
                ))}
              </div>

              {/* Slide Count */}
              <span className="absolute bottom-3 right-3 text-sm bg-white/70 dark:bg-gray-800/70 text-black dark:text-white px-3 py-1 rounded-full z-10">
                Slide {currentSlide[ebook.id] + 1}/{ebook.images.length}
              </span>
            </motion.div>

            {/* Ebook Content */}
            <div className="px-4">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">{ebook.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">{ebook.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {ebook.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.12 }}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200"
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
        className="text-center"
      >
        <motion.button
          onClick={handleBackNavigation}
          whileHover={{
            scale: 1.06,
            boxShadow: '0 0 20px rgba(72, 187, 120, 0.7)',
            background: 'linear-gradient(to right, rgb(234, 88, 12), rgb(249, 115, 22))',
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 250, damping: 15 }}
          className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-800 rounded-xl font-semibold text-white shadow-lg transition-all flex items-center justify-center gap-3 mx-auto"
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
          <span className="text-lg">Return to Projects</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Ebook;
