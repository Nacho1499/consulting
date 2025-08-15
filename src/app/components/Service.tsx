'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    image: "/brand.jpg",
    title: "Brand Strategy Development",
    description: "Crafting a strong brand identity that aligns with your vision and market."
  },
  {
    id: 2,
    image: "/train.jpg",
    title: "Consultation & Training",
    description: "One-on-one sessions or workshops for brand growth."
  },
  {
    id: 3,
    image: "/design.jpg",
    title: "Visual Branding & Design",
    description: "Logos, color palettes, typography, and visual guidelines."
  },
  {
    id: 4,
    image: "/reps.jpg",
    title: "Image & Reputation Management",
    description: "Curating and maintaining a positive personal or business image online and offline."
  }
];

const Service = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
        <div className='  hidden lg:flex gap-2 justify-center'>
          <div>
            <h1 className='h-4 w-4 bg-green-800 rounded-full animate-bounce sahdow-lg'></h1>
          </div>
          <div>
            <h1 className='h-4 w-4 bg-green-800 rounded-full animate-bounce sahdow-lg'></h1>
           
          </div>
        </div>
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-4"
      >
        Our Services
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
      >
        View from our list of services and contact us for more details.
      </motion.p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((ser, index) => (
          <motion.div
            key={ser.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={ser.image}
                width={500}
                height={300}
                alt={ser.title}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text */}
            <div className="p-6">
              <h3 className="font-bold text-xl mb-3 group-hover:text-green-700 transition-colors duration-300">
                {ser.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {ser.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
