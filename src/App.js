import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { DarkModeProvider } from './context/DarkModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Presentation from './components/Presentation';
import Ebook from './components/Ebook';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/presentation" element={<Presentation />} />
                <Route path="/ebook" element={<Ebook />} />
                {/* Add other routes as needed */}
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </DarkModeProvider>
  );
};

export default App;