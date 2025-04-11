import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { DarkModeProvider } from './context/DarkModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlitchTransition from './components/GlitchTransition';

// Tambahkan halaman Presentasi dan Ebook
const Presentation = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="text-white p-10"
    >
      <h1 className="text-3xl font-bold mb-4">Presentation Design</h1>
      <p className="mb-6">Berisi detail dan contoh desain presentasi profesional.</p>
      <button onClick={() => navigate('/projects')} className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Back to Projects</button>
    </motion.div>
  );
};

const Ebook = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="text-white p-10"
    >
      <h1 className="text-3xl font-bold mb-4">Ebook Design</h1>
      <p className="mb-6">Berisi detail dan contoh desain eBook kreatif dan menarik.</p>
      <button onClick={() => navigate('/projects')} className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Back to Projects</button>
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <About />
      <GlitchTransition />
      <Skills />
      <Projects />
      <Contact />
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route 
          path="/projects" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Projects />
            </motion.div>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          } 
        />

        {/* Halaman baru dengan animasi masuk */}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/ebook" element={<Ebook />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </DarkModeProvider>
  );
};

export default App;
