import React from 'react';
import { motion } from 'framer-motion';
import Virgule from "../images/virgule.png";
import background2 from "../images/background2.png";

function Parte4() {
  return (
    <motion.div
      className="bg-cover bg-center mt-20 py-20 px-4 md:px-52"
      style={{ backgroundImage: `url(${background2})` }}
      initial={{ opacity: 0, y: 50 }} // Animation de départ
      whileInView={{ opacity: 1, y: 0 }} // Animation quand visible
      transition={{ duration: 0.8 }} // Durée de l'animation
      viewport={{ once: true, amount: 0.3 }} // Active une seule fois quand 30% visible
    >
      <h1 className='text-4xl md:text-5xl flex justify-center mb-10 text-white'>
        Read the reviews
      </h1>
      <div className='flex flex-col md:flex-row gap-10'>
        {/* Premier témoignage */}
        <motion.div
          className='flex flex-col text-customCyan text-base md:text-xl'
          initial={{ opacity: 0, x: -50 }} // Apparition par la gauche
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={Virgule} className='w-10 h-10 mb-4'/>
          <p className='mb-6'>
            BuyBooster has revolutionized the way I shop. It’s quick, convenient, and feels tailored just for me.
          </p>
          <p className='text-xl font-semibold'>Ingrid Correa</p>
        </motion.div>

        {/* Deuxième témoignage */}
        <motion.div
          className='flex flex-col text-customCyan text-base md:text-xl'
          initial={{ opacity: 0, y: 50 }} // Apparition par le bas
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={Virgule} className='w-10 h-10 mb-4'/>
          <p className='mb-6'>
            Finally, an app that makes shopping stress-free and fun. Highly recommend!
          </p>
          <p className='text-xl font-semibold'>Alex Jordan</p>
        </motion.div>

        {/* Troisième témoignage */}
        <motion.div
          className='flex flex-col text-customCyan text-base md:text-xl'
          initial={{ opacity: 0, x: 50 }} // Apparition par la droite
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={Virgule} className='w-10 h-10 mb-4'/>
          <p className='mb-6'>
            The exclusive deals alone make this app worth it. A must-have for every shopper!
          </p>
          <p className='text-xl font-semibold'>Samantha Lee</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Parte4;
