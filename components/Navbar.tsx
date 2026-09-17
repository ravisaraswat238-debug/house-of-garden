"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdMenu, MdClose } from "react-icons/md";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Collections", href: "#catalog-blends" },
    { name: "About Us", href: "#about-us" },
    { name: "Contact Us", href: "#inquiry" },
  ];

  return (
    <header className="py-2 sticky top-0 z-50 bg-[#fffbe6]/95 backdrop-blur-md border-b border-[#4b6628]/15 transition-all shadow-xs">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-20 grid grid-cols-3 items-center">
        {/* Left: Navigation Menu Links (Desktop) & Mobile Hamburger Button */}
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#2b2b2a] hover:text-[#4b6628] rounded-lg focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <MdClose className="text-2xl" />
            ) : (
              <MdMenu className="text-2xl" />
            )}
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`py-1 border-b-2 transition-all duration-200 cursor-pointer ${isActive
                    ? "font-semibold border-[#4b6628] text-[#1b2b09]"
                    : "border-transparent text-[#333e25] hover:text-[#1b2b09] hover:border-[#4b6628]"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Center: Brand Logo from public folder */}
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="flex items-center justify-center group py-1"
            aria-label="House of Gardens Home"
          >
            <Image
              src="/logo/logo.png"
              alt="House of Gardens — Brewing Wellness"
              width={140}
              height={86}
              className="h-12 sm:h-18 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right: Single Action Button 'View More' */}
        <div className="flex items-center justify-end">
          <a
            href="https://www.brewingwellness.store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full bg-[#4b6628] hover:bg-[#3b5220] text-[#fefef8] font-bold text-xs sm:text-sm tracking-wide uppercase shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            View More
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fffbe6] border-t border-[#4b6628]/15 px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`inline-block py-1.5 border-b-2 transition-all duration-200 cursor-pointer ${isActive
                  ? "font-semibold border-[#4b6628] text-[#1b2b09]"
                  : "border-transparent text-[#2b2b2a] hover:text-[#4b6628] hover:border-[#4b6628]"
                  }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 border-t border-[#4b6628]/15 flex items-center justify-between text-xs text-[#4b6628] font-bold uppercase tracking-wider">
            <a
              href="https://www.brewingwellness.store"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Visit Online Store →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
