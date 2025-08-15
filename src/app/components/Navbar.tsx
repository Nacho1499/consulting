"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Inter } from 'next/font/google';


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white/20 backdrop-blur-lg text-[#1B264F] p-2 sticky top-0 z-50 ">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
                <h1 className="font-bold"><span className="font-bold text-3xl text-green-800">BI</span>Consulting-firm</h1>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8 font-medium ">
                    <Link href="/" className="">
                        Home
                    </Link>
                    <Link href="/about" className="">
                        About Us
                    </Link>
                    <Link href="/contact" className="">
                        Contact
                    </Link>
                    <Link href="" className="">
                        Services
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-[#1B264F] focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-60 mt-2" : "max-h-0"}`}
            >
                <div className="bg-gray-50/70 backdrop-blur-md rounded p-4 space-y-4 font-medium text-black">
                    <Link
                        href="/"
                        onClick={toggleMenu}
                        className="block "
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        onClick={toggleMenu}
                        className="block "
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        onClick={toggleMenu}
                        className="block"
                    >
                        Contact
                    </Link>
                    <Link
                        href=""
                        onClick={toggleMenu}
                        className="block"
                    >
                        Services
                    </Link>


                </div>
            </div>
        </nav>
    );
};

export default Navbar;
