"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  const navLinks = [
    { name: "होम", href: "/" },
    { name: "कलेक्शन", href: "/collections" },
    { name: "संपर्क", href: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-br from-rose-100 via-purple-100 to-amber-100 shadow-lg font-sans">
      {/* Row 1: Logo (Left), Title (Center), Cart (Right) */}
      <div className="border-b border-purple-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Left: Logo */}
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dfiyoj9yj/image/upload/v1760340132/logo_ywh1zh.png"
              alt="Albelee Logo"
              width={50}
              height={50}
              style={{ width: "auto", height: "auto" }}
            />
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

          {/* Right: Cart */}
          <Link
            href="/cart"
            className="text-purple-700 hover:text-pink-600 font-bold text-sm transition-all duration-300"
          >
            कार्ट ({cartCount})
          </Link>
        </div>
      </div>

      {/* Row 2: Menu */}
      <div className="bg-white/70 backdrop-blur-sm border-b border-purple-200">
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
    </nav>
  );
};

export default Navbar;
