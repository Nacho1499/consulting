'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-gray-50 flex flex-col-reverse md:flex-row justify-center h-screen items-center gap-6 md:gap-12 px-6">
      
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center md:text-left max-w-lg"
      >
        <div className='  hidden lg:flex gap-2 justify-center'>
          <div>
            <h1 className='h-4 w-4 bg-green-800 rounded-full animate-bounce sahdow-lg'></h1>
          </div>
          <div>
            <h1 className='h-4 w-4 bg-green-800 rounded-full animate-bounce sahdow-lg'></h1>
           
          </div>
        </div>
    
        <h1 className="font-bold text-3xl md:text-5xl leading-tight">
          Elevate Your Image. Empower Your Brand
        </h1>
        <p className="mt-4 text-gray-700 text-base md:text-lg">
          We help entrepreneurs, public figures, and businesses create a powerful,
          consistent, and market-ready brand presence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-green-800 rounded-full text-white cursor-pointer py-3 px-5 hover:bg-green-700 transition"
          >
            Book a Consultation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border border-green-800 text-green-800 cursor-pointer py-3 px-5 rounded-full hover:bg-green-50 transition"
          >
            Get a Quote
          </motion.button>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <Image
          className="rounded-lg object-cover w-full max-w-[700px] shadow-lg"
          src="/hero.jpg"
          height={500}
          width={700}
          alt="hero-image"
        />
      </motion.div>

    </div>
  );
};

export default Hero;
