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
import Presentation from './components/Presentation';
import Ebook from './components/Ebook';
import Planner from './components/Planner';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname.split('/')[1] || 'home'}>
        <Route path="/" element={
          <div>
            <Hero />
            <Projects />
          </div>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
          path="/presentation" 
          element={<Presentation />} 
          state={{ 
            from: 'projects',
            background: location
          }}
        />
        <Route 
          path="/ebook" 
          element={<Ebook />} 
          state={{ 
            from: 'projects',
            background: location
          }}
        />
        <Route 
          path="/planner" 
          element={<Planner />} 
          state={{ 
            from: 'projects',
            background: location
          }}
        />
        <Route path="*" element={<div><Hero /><Projects /></div>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#07A9F0] dark:bg-[#0F8BCC] transition-colors duration-300">
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
