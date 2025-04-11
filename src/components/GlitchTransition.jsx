import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './glitch.css'; // bikin file CSS khusus glitch effect

const GlitchTransition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.4 });

  return (
    <motion.div
      ref={ref}
      className="glitch-container"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="glitch-text" data-text="My Skill">My Skill</h2>
    </motion.div>
  );
};

export default GlitchTransition;
