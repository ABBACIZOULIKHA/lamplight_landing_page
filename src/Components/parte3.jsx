import React from 'react';
import { motion } from 'framer-motion';

function Parte3() {
  return (
    <motion.div
      className='flex flex-col px-4 md:px-52 mt-20'
      initial={{ opacity: 0, y: 50 }} // Animation de départ
      whileInView={{ opacity: 1, y: 0 }} // Animation quand visible
      transition={{ duration: 0.8 }} // Durée de l'animation
      viewport={{ once: true, amount: 0.3 }} // Active l'animation une seule fois quand 30% de l'élément est visible
    >
      <div className='text-3xl md:text-4xl'>
        <p>BuyBooster's</p>
        <p>Best Features</p>
      </div>
      
      <div className='flex flex-col md:flex-row text-white text-base md:text-2xl mt-10 md:mt-16'>
        {/* Première fonctionnalité */}
        <motion.div
          className='flex flex-col bg-bleu px-6 py-10 items-center gap-6'
          initial={{ opacity: 0, x: -50 }} // Animation de départ
          whileInView={{ opacity: 1, x: 0 }} // Animation quand visible
          transition={{ duration: 0.6, delay: 0.1 }} // Durée et délai
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='w-10 h-10 rounded-full bg-customCyan flex justify-center items-center'>
            1
          </div>
          <p className='text-center'>
            AI-Powered Shopping Assistant
            Enjoy intelligent recommendations tailored to your preferences.
          </p>
        </motion.div>

        {/* Deuxième fonctionnalité */}
        <motion.div
          className='flex flex-col bg-black px-6 py-10 items-center gap-6'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='w-10 h-10 rounded-full bg-customCyan flex justify-center items-center'>
            2
          </div>
          <p className='text-center'>
            Fast and Secure Checkout
            Save time with streamlined, secure payment options.
          </p>
        </motion.div>

        {/* Troisième fonctionnalité */}
        <motion.div
          className='flex flex-col bg-bleu px-6 py-10 items-center gap-6'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='w-10 h-10 rounded-full bg-customCyan flex justify-center items-center'>
            3
          </div>
          <p className='text-center'>
            Exclusive Deals and Rewards
            Unlock rewards and discounts only available through the app.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Parte3;
