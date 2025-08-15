"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="bg-[#F5F5F5] text-[#2C1F02] font-sans">
            {/* Hero Section */}
            <div
                className="relative bg-cover bg-center h-[300px] flex items-center justify-center bg-fixed"
                style={{
                    backgroundImage: "url('/hero.jpg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                <motion.div
                    className="relative text-center text-white px-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">
                        Get in Touch With Us
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        We’d love to hear from you! Let’s start a conversation today.
                    </p>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-12">
                {/* Vision & Mission */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                    <hr className='w-[50px]' />
                    <p className="mb-8 leading-relaxed">
                        Our vision is to be a trusted partner in shaping brands and individuals into powerful forces that
                        inspire and connect with their audiences. We aim to create timeless strategies, captivating designs, and impactful experiences that
                        not only tell your story but also leave a lasting mark on the world. Through creativity,
                    </p>

                    <h2 className="text-3xl font-bold mb-6">Our Why</h2>
                    <hr className='w-[50px]' />
                    <p className="mb-8 leading-relaxed">
                        We exist because we believe every brand and individual has a unique story worth telling — and telling well. In a world crowded with
                        noise, we help you stand out, connect meaningfully, and build trust that lasts. Our purpose
                        is to transform visions into realities, ensuring your image, reputation, and message reflect the best of who you are.
                    </p>


                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="bg-white rounded-lg shadow p-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2C1F02]"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2C1F02]"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2C1F02]"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-green-800 text-white px-6 py-3 cursor-pointer rounded-lg shadow hover:bg-[#4A3510] transition"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
