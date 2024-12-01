import React from 'react';
import { motion } from 'framer-motion';
import Design from "../images/design.png";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";

function Parte6() {
  return (
    <motion.div
      className='flex flex-col md:flex-row bg-bleu py-10 px-4 md:px-52 justify-around'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Informations de contact */}
      <motion.div
        className='flex flex-col gap-4 md:gap-2'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className='px-6 py-5 bg-black text-customCyan text-4xl md:text-6xl text-center'>
          <p>Contact</p>
        </div>

        <div className='text-xl md:text-2xl px-4 md:px-14 py-5 flex flex-col bg-white'>
          <p>Phone</p>
          <p>(123) 456-7890</p>
        </div>

        <div className='text-xl md:text-2xl px-4 md:px-14 py-5 flex flex-col bg-white'>
          <p>Email</p>
          <p>hello@reallygreatsite.com</p>
        </div>

        <div className='text-xl md:text-2xl px-4 md:px-14 py-5 flex flex-col bg-customCyan'>
          <p>Social</p>
          <div className='text-3xl flex gap-6 justify-center md:justify-start'>
            <CiFacebook size={40} />
            <CiTwitter size={40} />
            <CiInstagram size={40} />
          </div>
        </div>
      </motion.div>

      {/* Image (visible seulement sur les écrans medium et plus grands) */}
      <motion.img
        src={Design}
        alt="Design"
        className='w-full md:w-1/3 hidden md:block'
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      />
    </motion.div>
  );
}

export default Parte6;
