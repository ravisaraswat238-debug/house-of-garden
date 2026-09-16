"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MdSearch,
  MdShoppingBag,
  MdAccountCircle,
  MdMenu,
  MdClose,
} from "react-icons/md";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Collections", href: "#catalog-blends" },
    { name: "About Us", href: "#about-us" },
    { name: "Contact Us", href: "#inquiry" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fffbe6]/95 backdrop-blur-md border-b border-[#4b6628]/15 transition-all shadow-xs">
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
                  className={`py-1 border-b-2 transition-all duration-200 cursor-pointer ${
                    isActive
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
              src="/Users/deepaksaraswat/Desktop/house-of-garden/public/logo/logo.png"
              alt="House of Gardens — Brewing Wellness"
              width={140}
              height={86}
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>
        </div>

        {/* Right: Search, Cart/Bag, Profile User Icons */}
        <div className="flex items-center justify-end gap-3 sm:gap-5 text-[#2b2b2a]">
          {/* Search Icon */}
          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search teas and botanicals"
            className="p-1.5 hover:text-[#4b6628] transition-colors cursor-pointer hover:scale-110 active:scale-95"
          >
            <MdSearch className="text-2xl sm:text-[26px]" />
          </button>

          {/* Shopping Bag Icon -> Online Store */}
          <a
            href="https://www.brewingwellness.store"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Online Store / Bag"
            className="p-1.5 hover:text-[#4b6628] transition-colors cursor-pointer hover:scale-110 active:scale-95 relative"
          >
            <MdShoppingBag className="text-2xl sm:text-[26px]" />
            <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-[#4b6628] rounded-full" />
          </a>

          {/* User Account / Profile Icon */}
          <a
            href="#inquiry"
            aria-label="Tea Consultation & Account"
            className="p-1.5 hover:text-[#4b6628] transition-colors cursor-pointer hover:scale-110 active:scale-95"
          >
            <MdAccountCircle className="text-2xl sm:text-[26px]" />
          </a>
        </div>
      </div>

      {/* Expandable Search Input */}
      {searchOpen && (
        <div className="border-t border-[#4b6628]/15 bg-[#fffbe6] px-6 py-3 transition-all">
          <div className="max-w-[600px] mx-auto flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-[#4b6628]/20 shadow-inner">
            <MdSearch className="text-xl text-[#4b6628]" />
            <input
              type="text"
              placeholder="Search botanical blends, matcha, wellness teas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-[#2b2b2a] focus:outline-none placeholder:text-gray-400"
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-gray-400 hover:text-gray-600 text-xs uppercase font-bold cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}

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
                className={`inline-block py-1.5 border-b-2 transition-all duration-200 cursor-pointer ${
                  isActive
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
