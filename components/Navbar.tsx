"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MdOpenInNew,
  MdMenuBook,
  MdSpa,
  MdMenu,
  MdClose,
} from "react-icons/md";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#8ca865]/95 backdrop-blur-md border-b border-white/20 transition-all shadow-sm">
      <div className="max-w-[1320px] mx-auto px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo / Emblem */}
        <Link href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-[#fefef8] p-1.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            {/* Emblem tea twig circle from catalog */}
            <svg
              className="w-full h-full fill-[#4b6628]"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="House of Gardens Emblem"
            >
              <path d="M50 15 C30 15 15 32 15 52 C15 72 32 87 52 87 C72 87 87 70 87 50 C87 35 75 22 62 18 C65 26 63 35 57 41 C51 47 42 49 35 46 C37 38 43 31 50 28 C45 28 40 31 36 35 C32 40 30 46 31 52 C32 58 37 63 43 65 C52 68 62 63 67 55 C71 49 71 41 68 34 C63 40 55 43 47 41 C43 40 40 37 39 33 C41 28 46 24 51 22 Z" />
              <circle cx="73" cy="28" fill="#835427" r="4" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-extrabold text-lg tracking-tight text-[#fefef8] uppercase leading-none">
              House of Gardens
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#fefef8]/85 uppercase font-semibold mt-1">
              Brewing Wellness
            </span>
          </div>
        </Link>

        {/* Informational Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#fefef8]">
          <a
            className="hover:text-[#edecca] transition-colors py-1"
            href="#about-us"
          >
            About Our Story
          </a>
          <a
            className="hover:text-[#edecca] transition-colors py-1"
            href="#catalog-blends"
          >
            Tea Blends &amp; Catalog
          </a>
          <a
            className="hover:text-[#edecca] transition-colors py-1"
            href="#wellness-pillars"
          >
            Wellness Benefits
          </a>
          <a
            className="hover:text-[#edecca] transition-colors py-1"
            href="#brewing-guide"
          >
            Brewing Guide
          </a>
          <a
            className="inline-flex items-center gap-1.5 hover:text-[#edecca] transition-colors py-1"
            href="https://www.brewingwellness.store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Visit Store</span>
            <MdOpenInNew className="text-[14px]" />
          </a>
        </nav>

        {/* Right CTA (Catalog Inquiry / Consultation - NO CART) */}
        <div className="flex items-center gap-3">
          <a
            className="hidden sm:inline-flex items-center gap-2 bg-[#fefef8] text-[#4b6628] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-[#f6f5ea] shadow-sm hover:shadow transition-all"
            href="#catalog-blends"
          >
            <MdMenuBook className="text-[16px]" />
            <span>View Catalog</span>
          </a>
          <a
            className="inline-flex items-center gap-2 bg-[#486323] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-[#3d541c] shadow-sm transition-all border border-white/20"
            href="#inquiry"
          >
            <MdSpa className="text-[16px]" />
            <span>Brewing Consultation</span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white hover:text-[#edecca] rounded-lg focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <MdClose className="text-2xl" />
            ) : (
              <MdMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#7d9b56] border-t border-white/15 px-6 py-4 space-y-3">
          <a
            className="block text-[#fefef8] font-medium py-1.5 hover:text-[#edecca]"
            href="#about-us"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Our Story
          </a>
          <a
            className="block text-[#fefef8] font-medium py-1.5 hover:text-[#edecca]"
            href="#catalog-blends"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tea Blends &amp; Catalog
          </a>
          <a
            className="block text-[#fefef8] font-medium py-1.5 hover:text-[#edecca]"
            href="#wellness-pillars"
            onClick={() => setMobileMenuOpen(false)}
          >
            Wellness Benefits
          </a>
          <a
            className="block text-[#fefef8] font-medium py-1.5 hover:text-[#edecca]"
            href="#brewing-guide"
            onClick={() => setMobileMenuOpen(false)}
          >
            Brewing Guide
          </a>
          <a
            className="flex items-center gap-1.5 text-[#fefef8] font-medium py-1.5 hover:text-[#edecca]"
            href="https://www.brewingwellness.store"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Visit Store</span>
            <MdOpenInNew className="text-[14px]" />
          </a>
        </div>
      )}
    </header>
  );
}
