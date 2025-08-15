'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const Offer = () => {
  return (
    
    <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-20 px-4 lg:px-12">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="space-y-5 text-center lg:text-left"
      >
        <h1 className="font-bold text-3xl md:text-5xl leading-tight">
          What We Offer
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
          Our team of experts provide a range of services to enhance the image and 
          projection of your business — helping you stand out, build trust, 
          and grow with confidence.
        </p>

        {/* Highlights */}
        <div className="hidden lg:flex gap-5 mt-8">
          {[
            { id: 1, title: "Simplicity" },
            { id: 2, title: "Elegance" },
            { id: 3, title: "Professionality" }
          ].map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="shadow-lg p-4 rounded-lg bg-white flex flex-col items-center w-full"
            >
              <h2 className="font-bold text-2xl text-green-800">{item.id}</h2>
              <p className="mt-1 text-gray-700 text-sm">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center lg:justify-end"
      >
        <Image
          className="rounded-lg object-cover w-full max-w-[500px] shadow-lg"
          src="/offer.jpg"
          height={400}
          width={500}
          alt="Offer illustration"
          priority
        />
      </motion.div>

    </section>
    
  );
};

export default Offer;
