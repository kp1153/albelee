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
    { name: "संग्रह", href: "/collections" },
    { name: "कुंदन", href: "/shop-by-style/kundan" },
    { name: "मीनाकारी", href: "/shop-by-style/meenakari" },
    { name: "ऑक्सीडाइज्ड", href: "/shop-by-style/oxidised" },
    { name: "हमारी कहानी", href: "/about" },
    { name: "संपर्क", href: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-br from-rose-100 via-purple-100 to-amber-100 shadow-lg sticky top-0 z-50 font-sans">
      {/* पंक्ति 1: लोगो, नाम (center) और आइकन्स */}
      <div className="border-b border-purple-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          {/* बायीं तरफ: लोगो */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="Albelee Logo"
              width={55}
              height={55}
              className="rounded-lg shadow-md"
            />
          </Link>

          {/* बीच में: नाम */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-3xl font-black tracking-wide flex">
              <span className="text-pink-600">अ</span>
              <span className="text-green-700">ल</span>
              <span className="text-blue-600">बे</span>
              <span className="text-orange-600">ली</span>
            </span>
            <span className="text-2xl font-black flex -mt-1">
              <span className="text-violet-600">A</span>
              <span className="text-indigo-600">L</span>
              <span className="text-blue-600">B</span>
              <span className="text-green-500">E</span>
              <span className="text-yellow-500">L</span>
              <span className="text-orange-500">E</span>
              <span className="text-red-600">E</span>
            </span>
          </div>

          {/* दायीं तरफ: आइकन्स */}
          <div className="flex items-center space-x-6">
            <button
              className="text-purple-700 hover:text-pink-600 hover:scale-110 transition-all hidden sm:block"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>

            <Link
              href="/cart"
              className="text-purple-700 hover:text-pink-600 hover:scale-110 transition-all"
              aria-label="Shopping Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.72a2 2 0 0 0 2-1.58L23 6H6" />
              </svg>
            </Link>

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
      </div>

      {/* पंक्ति 2: टैगलाइन */}
      <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-200 border-b border-purple-200 py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm italic font-semibold">
            <span className="text-pink-700">तू अब निकल, </span>
            <span className="text-purple-700">चल बदल, </span>
            <span className="text-blue-600">रोज़ नया रूप धर, </span>
            <span className="text-green-600">बन सँवर, </span>
            <span className="text-yellow-700">कर गुज़र </span>
            <span className="text-orange-600">नित नई अठखेली... </span>
            <span className="text-red-600">कि जान ले अब हर कोई, </span>
            <span className="text-violet-700">तू है कोई अलबेली।</span>
          </p>
        </div>
      </div>

      {/* पंक्ति 3: डेस्कटॉप मेन्यू */}
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

      {/* मोबाइल मेन्यू */}
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
