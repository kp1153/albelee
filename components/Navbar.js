"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  // मोबाइल मेन्यू के खुलने/बंद होने की स्थिति (state)
  const [isOpen, setIsOpen] = useState(false);

  // मेन्यू टॉगल फंक्शन
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
    <nav className="bg-white shadow-lg sticky top-0 z-50 font-sans">
      {/* पंक्ति 1: लोगो, सर्च और कार्ट */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          {/* ब्रांड लोगो/नाम */}
          <Link
            href="/"
            className="text-3xl font-extrabold text-gray-900 tracking-wider"
          >
            <span className="text-yellow-600">अलबेली</span>
          </Link>

          {/* डेस्कटॉप यूटिलिटी आइकन्स (Search, Cart) */}
          <div className="flex items-center space-x-6">
            {/* सर्च आइकॉन प्लेसहोल्डर */}
            <button
              className="text-gray-700 hover:text-yellow-600 hidden sm:block"
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

            {/* कार्ट आइकॉन */}
            <Link
              href="/cart"
              className="text-gray-700 hover:text-yellow-600"
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

            {/* मोबाइल मेन्यू बटन */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-yellow-600 focus:outline-none"
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

      {/* पंक्ति 2: मुख्य मेन्यू लिंक्स (केवल डेस्कटॉप पर) */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-8 h-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-yellow-600 text-sm font-semibold transition duration-150 py-1"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* मोबाइल ड्रॉपडाउन मेन्यू (मोबाइल के लिए) */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:bg-yellow-100 hover:text-yellow-600 px-3 py-2 rounded-md text-base font-medium transition duration-150"
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
