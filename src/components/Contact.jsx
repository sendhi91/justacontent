import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';
import { SiUpwork } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import { useCallback } from 'react';

const Contact = () => {
  const { darkMode } = useDarkMode();

  const contactMethods = [
    {
      name: 'Email',
      value: 'albertus.sendhi.s@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: 'mailto:albertus.sendhi.s@gmail.com',
      color: 'text-red-500',
    },
    {
      name: 'WhatsApp',
      value: 'Chat on WhatsApp',
      icon: <FaWhatsapp className="w-5 h-5" />,
      url: 'https://wa.me/+6285880567000',
      color: 'text-green-500',
    },
    {
      name: 'Instagram',
      value: 'DM on Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: 'https://instagram.com/albertus_sendhi',
      color: 'text-pink-500',
    },
  ];

  const handleUpworkClick = useCallback(() => {
    console.log('Hire Me on Upwork button clicked');
    window.open('https://www.upwork.com/freelancers/~01aedac6b2e2f60ad1', '_blank', 'noopener,noreferrer');
  }, []);

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="kontak"
      className={`relative w-full px-4 py-16 md:px-10 md:py-20 mx-auto ${
        darkMode
          ? 'bg-gradient-to-b from-gray-900 to-gray-800'
          : 'bg-gradient-to-b from-gray-100 to-gray-200'
      } transition-colors duration-300 overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-extrabold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Let's <span className="text-blue-500">Connect</span> & Create
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mx-auto w-1/2 max-w-xs mt-4"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row gap-12"
        >
          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="flex-1">
            <p
              className={`text-lg md:text-xl max-w-2xl leading-relaxed mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Ready to collaborate? Reach out via Email, WhatsApp, or Instagram for a quick chat!
            </p>

            <div className="space-y-4 mb-10">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 },
                  }}
                  className={`flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm ${
                    darkMode
                      ? 'bg-white/10 border border-gray-700'
                      : 'bg-white/50 border border-gray-200'
                  } group transition-all hover:shadow-lg ${method.color}`}
                >
                  <div
                    className={`w-12 h-12 rounded-full ${
                      darkMode ? 'bg-gray-800' : 'bg-gray-100'
                    } flex items-center justify-center shadow-md group-hover:shadow-xl transition-shadow`}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <p className={`font-semibold transition-colors ${
                      darkMode ? 'text-white group-hover:text-gray-100' : 'text-black group-hover:text-blue-500'
                    }`}>
                      {method.name}
                    </p>
                    <p className={`text-sm transition-colors ${
                      darkMode ? 'text-gray-400 group-hover:text-gray-200' : 'text-black group-hover:text-blue-500'
                    }`}>
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(34, 255, 102, 0.5)',
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUpworkClick}
              className="relative px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg overflow-hidden bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition-all duration-300 flex items-center gap-3"
            >
              <SiUpwork className="text-xl" />
              <span>Hire Me on Upwork</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-900 opacity-0"
                whileHover={{ opacity: 0.3, transition: { duration: 0.4 } }}
              />
              <motion.span
                className="absolute -right-2 -top-2 w-4 h-4 bg-green-300 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="flex-1">
            <form className="space-y-6 p-6 rounded-2xl backdrop-blur-sm bg-white/10 border border-gray-200 dark:border-gray-700">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/20 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 transition-all`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/20 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 transition-all`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-200'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/20 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 transition-all`}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;