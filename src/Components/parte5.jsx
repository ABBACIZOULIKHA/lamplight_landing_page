import React from 'react';
import { motion } from 'framer-motion';
import photo2 from "../images/Photo2.png";

function Parte5() {
  return (
    <motion.div
      className='flex flex-col md:flex-row px-4 md:px-52 py-20 gap-10 md:gap-20'
      initial={{ opacity: 0, y: 50 }} // Animation de départ
      whileInView={{ opacity: 1, y: 0 }} // Animation quand visible
      transition={{ duration: 0.8 }} // Durée de l'animation
      viewport={{ once: true, amount: 0.3 }} // Active une seule fois quand 30% visible
    >
      {/* Image */}
      <motion.img
        src={photo2}
        className='w-full md:w-1/3'
        alt="LMS"
        initial={{ opacity: 0, x: -50 }} // Apparition par la gauche
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      />

      {/* Texte */}
      <motion.div
        className='flex flex-col'
        initial={{ opacity: 0, x: 50 }} // Apparition par la droite
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className='flex flex-col text-4xl md:text-6xl'>
          <p>A little</p>
          <p>about LMS</p>
        </div>
        
        <div className='mt-6 md:mt-10 text-lg md:text-2xl'>
          <p>
            Write a paragraph that talks about your company here. You can talk about your company's background, history, mission, vision, or philosophy. Anything that will introduce your brand's persona to your clients. This will help build a connection between you and them, that hopefully leads into a working relationship.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Parte5;
