import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

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
      color: 'text-red-500'
    },
    {
      name: 'WhatsApp',
      value: 'Chat on WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.03c.545-1.5.887-2.458.887-2.458-.177-.273-.353-.407-.57-.41-.173-.003-.344.005-.531.027-.05.006-.106.016-.17.027-.177.04-.344.07-.5.112-.236.062-.408.1-.413.106-.297.124-.396.388-.3.742.06.223.306 1.047.474 1.428.18.41.39.804.618 1.176l-.003.002.003.002c.146.25.387.562.653.9.445.555.97 1.176 1.595 1.63.067.05.137.095.207.136.373.222.765.4 1.172.532.394.127.787.188 1.173.188.274 0 .54-.024.79-.068.222-.038.462-.116.72-.236.075-.036.188-.09.188-.09s-.34-1.033-.886-2.533l-.004.001z"/>
        </svg>
      ),
      url: 'https://wa.me/yourphonenumber',
      color: 'text-green-500'
    },
    {
      name: 'Instagram',
      value: 'DM on Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: 'https://instagram.com/yourusername',
      color: 'text-pink-500'
    }
  ];

  return (
    <section 
      id="kontak" 
      className={`relative w-full px-4 py-16 md:px-10 md:py-20 mx-auto ${
        darkMode ? 'bg-gray-900' : 'bg-gray-100'
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-[50px] font-bold mb-10 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Contact <span className="text-blue-500">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <p className={`text-[18px] max-w-3xl leading-[30px] mb-10 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              If you're interested in collaborating with me or have any questions,
              please feel free to contact me via email, WhatsApp, or Instagram DM.
            </p>
            
            <div className="space-y-5">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-5 group transition-colors ${
                    darkMode ? 'hover:text-white' : 'hover:text-gray-900'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow ${method.color}`}>
                    {method.icon}
                  </div>
                  <span className={`${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>{method.value}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex-1">
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className={`block mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-800'
                  } border transition-colors`}
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-800'
                  } border transition-colors`}
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>Your Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-800'
                  } border transition-colors`}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;