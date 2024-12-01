import React from 'react';
import { motion } from 'framer-motion';
import photo1 from "../images/Photo1.png";

function Parte2() {
  return (
    <motion.div
      className='flex flex-col md:flex-row justify-between px-4 md:px-52 pt-10'
      initial={{ opacity: 0, y: 50 }} // Animation de départ
      whileInView={{ opacity: 1, y: 0 }} // Animation quand visible
      transition={{ duration: 0.8 }} // Durée de l'animation
      viewport={{ once: true, amount: 0.3 }} // Active l'animation une seule fois quand 30% de l'élément est visible
    >
      {/* Texte */}
      <div className='flex flex-col gap-10 w-full md:w-2/3'>
        <div className='text-4xl md:text-6xl'>
          <p>Say Hello to</p>
          <p>BuyBooster</p>
        </div>
        <div className='w-full md:w-2/3'>
          <p className='text-lg md:text-xl'>
            Discover a smarter, faster way to shop. BuyBooster simplifies your buying experience by blending cutting-edge technology with seamless functionality. Whether it's personalized recommendations, quick transactions, or exclusive offers, we've got you covered.
          </p>    
        </div>  
      </div>
      
      {/* Image (masquée sur mobile) */}
      <motion.img 
        src={photo1} 
        className='hidden md:block' 
        alt="photo" 
        initial={{ opacity: 0, x: -50 }} // Animation de départ
        whileInView={{ opacity: 1, x: 0 }} // Animation quand visible
        transition={{ duration: 0.8, delay: 0.2 }} // Durée et délai de l'animation
        viewport={{ once: true, amount: 0.3 }} // Active l'animation une seule fois quand 30% de l'élément est visible
      />
    </motion.div>
  );
}

export default Parte2;
