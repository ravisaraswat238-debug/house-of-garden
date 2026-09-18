"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdMenu, MdClose } from "react-icons/md";
import { ArrowRight } from "lucide-react";

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
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#3e5924] px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#2e431a] hover:shadow-lg hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>View More</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
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
            <span>Online Store</span>
            <a
              href="https://www.brewingwellness.store"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#3e5924] px-4 py-2 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#2e431a] hover:shadow-lg hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>View More</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
