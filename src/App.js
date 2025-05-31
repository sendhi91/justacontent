import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { DarkModeProvider } from './context/DarkModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project1 from './components/Project1'; // presentation
import Project2 from './components/Project2'; // ebook
import Project3 from './components/Project3'; // planner
import Presentation from './components/Presentation'; // presentation page
import Ebook from './components/Ebook'; // ebook page
import Planner from './components/Planner'; // planner page
import About from './components/About'; // about page
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#07A9F0] dark:bg-[#0F8BCC] transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route
                  path="/"
                  element={
                    <div>
                      <Hero />
                      <Project1 />
                      <Project2 />
                      <Project3 />
                      <Contact />
                    </div>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/presentation" element={<Presentation />} />
                <Route path="/ebook" element={<Ebook />} />
                <Route path="/planner" element={<Planner />} />
                <Route path="*" element={<div><Hero /><Project1 /><Project2 /><Project3 /></div>} />
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