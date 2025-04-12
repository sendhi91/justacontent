import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { DarkModeProvider } from './context/DarkModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlitchTransition from './components/GlitchTransition';
import Presentation from './components/Presentation';
import Ebook from './components/Ebook';

// Main page components with consistent animation
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full"
  >
    {children}
  </motion.div>
);

const AboutPage = () => (
  <>
    <About />
    <GlitchTransition />
    <Skills />
    <Projects />
    <Contact />
  </>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname.split('/')[1] || 'home'}>
        <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/presentation" element={<PageWrapper><Presentation /></PageWrapper>} />
        <Route path="/ebook" element={<PageWrapper><Ebook /></PageWrapper>} />
        
        {/* Fallback route for 404 */}
        <Route path="*" element={<PageWrapper><div>Page Not Found</div></PageWrapper>} />
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