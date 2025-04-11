import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
        {/* Route untuk halaman utama */}
        <Route path="/" element={<Hero />} />

        {/* Route untuk halaman About dengan transisi glitch */}
        <Route path="/about" element={<AboutPage />} />

        {/* Route tambahan untuk navigasi langsung */}
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
