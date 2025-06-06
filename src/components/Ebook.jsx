
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
    title: "Work From Anywhere Build Your Online Career Without a Boss ",
    description: "Ebook for bild online career an work from anywhere",
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
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleMouseEnter = (ebookId) => {
    setIsHovering((prev) => ({ ...prev, [ebookId]: true }));
  };

  const handleMouseLeave = (ebookId) => {
    setIsHovering((prev) => ({ ...prev, [ebookId]: false }));
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
              className="relative w-full max-w-md aspect-[3/4]" // Portrait aspect ratio for lightbox
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Ebook Slide"
                className="w-full h-full object-contain rounded-lg"
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
          Ebook Design Portofolio
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mt-4">
          Professionally designed ebooks for a new experience feel to read
        </p>
      </motion.header>

      {/* Ebooks Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-300 dark:border-gray-600 hover:border-cyan-500 transition-all"
          >
            {/* Slideshow Ebook */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-full aspect-[3/4] mb-4 rounded-xl overflow-hidden cursor-pointer" // Portrait aspect ratio
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
                    className="w-full h-full object-contain" // Contain to preserve aspect ratio
                  />
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => prevSlide(ebook.id, e)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 text-black dark:text-white p-2 rounded-full hover:bg-white/70 dark:hover:bg-gray-900/70 transition-colors z-10"
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
              </button>
              <button
                onClick={(e) => nextSlide(ebook.id, e)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 text-black dark:text-white p-2 rounded-full hover:bg-white/70 dark:hover:bg-gray-900/70 transition-colors z-10"
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
              </button>

              {/* Slide Indicator */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                {ebook.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide((prev) => ({ ...prev, [ebook.id]: idx }));
                    }}
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
            <div className="px-2">
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">{ebook.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-5">{ebook.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {ebook.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700 rounded-full text-xs sm:text-sm text-gray-800 dark:text-gray-200"
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
            background: 'linear-gradient(to right, rgb(8, 178, 14), rgb(9, 248, 1))',
          }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3.5 bg-gradient-to-r from-orange-600 to-orange-800 rounded-xl font-medium shadow-lg transition-all flex items-center justify-center gap-2 mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Projects
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Ebook;
