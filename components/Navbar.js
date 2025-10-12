"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "होम", href: "/" },
    { name: "कलेक्शन", href: "/collections" },
    { name: "संपर्क", href: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-br from-rose-100 via-purple-100 to-amber-100 shadow-lg font-sans">
      {/* Row 1: Logo (Left), Title (Center) and Mobile Menu Button */}
      <div className="border-b border-purple-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Left: Logo */}
          <Link href="/">
            <Image src="/logo.jpeg" alt="Albelee Logo" width={50} height={50} />
          </Link>

          {/* Center: Title */}
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black tracking-wide text-purple-700">
                ALBELEE
              </span>
              <span className="text-lg font-black text-pink-600">अलबेली</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-purple-700 hover:text-pink-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Row 2: Desktop Menu */}
      <div className="hidden md:block bg-white/70 backdrop-blur-sm border-b border-purple-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-8 h-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:bg-clip-text text-sm font-bold transition-all duration-300 py-1 hover:scale-105"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-sm border-t border-purple-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-800 hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 hover:text-purple-700 px-3 py-2 rounded-md text-base font-semibold transition-all duration-300"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
