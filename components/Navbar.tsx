"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdMenu, MdClose } from "react-icons/md";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close sidebar on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#fffbe6]/95 backdrop-blur-md border-b border-[#4b6628]/15 transition-all shadow-xs">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-20 sm:h-24 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left: Navigation Menu Links (Desktop) & Mobile Hamburger Button */}
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#2b2b2a] hover:text-[#4b6628] rounded-lg focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation sidebar"
          >
            <MdMenu className="text-2xl" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href) && !link.href.includes("#"));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-1 border-b-2 transition-all duration-200 cursor-pointer ${isActive
                    ? "font-semibold border-[#4b6628] text-[#1b2b09]"
                    : "border-transparent text-[#333e25] hover:text-[#1b2b09] hover:border-[#4b6628]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Center: Brand Logo from public folder */}
        <div className="flex items-center justify-center px-2">
          <Link
            href="/"
            className="flex items-center justify-center group py-0.5"
            aria-label="House of Gardens Home"
          >
            <Image
              src="/logo/logo.png"
              alt="House of Gardens — Brewing Wellness"
              width={180}
              height={115}
              className="h-[68px] sm:h-[82px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </Link>
        </div>

        {/* Right: Single Action Button 'Explore Teas' */}
        <div className="flex items-center justify-end">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-[#3e5924] px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#2e431a] hover:shadow-lg hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>Explore</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar Navigation Drawer (Portaled directly to document.body to avoid header stacking context / backdrop-blur clipping) */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-[9999] lg:hidden">
              {/* Dark Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer z-[9998]"
                aria-hidden="true"
              />

              {/* Slide-out Sidebar Panel */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 26, stiffness: 220 }}
                className="fixed top-0 left-0 bottom-0 w-[300px] max-w-[85vw] h-[100dvh] bg-[#fffbe6] shadow-[0_0_50px_rgba(0,0,0,0.35)] flex flex-col justify-between z-[9999] border-r border-[#4b6628]/20 overflow-y-auto"
              >
                {/* Sidebar Header: Logo & Close Button */}
                <div>
                  <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#4b6628]/15">
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 group"
                    >
                      <Image
                        src="/logo/logo.png"
                        alt="House of Gardens"
                        width={140}
                        height={90}
                        className="h-12 w-auto object-contain"
                      />
                    </Link>

                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 -mr-2 text-[#2b2b2a] hover:text-[#4b6628] rounded-full hover:bg-[#4b6628]/10 transition-colors focus:outline-none cursor-pointer"
                      aria-label="Close navigation sidebar"
                    >
                      <MdClose className="text-2xl" />
                    </button>
                  </div>

                  {/* Sidebar Navigation Links */}
                  <nav className="p-4 space-y-1.5">
                    {navLinks.map((link) => {
                      const isActive =
                        link.href === "/"
                          ? pathname === "/"
                          : pathname === link.href ||
                            (link.href !== "/" &&
                              pathname.startsWith(link.href) &&
                              !link.href.includes("#"));

                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "bg-[#3e5924] text-white font-semibold shadow-xs"
                              : "text-[#2b3a1d] hover:bg-[#4b6628]/10 hover:text-[#1b2b09]"
                          }`}
                        >
                          <span>{link.name}</span>
                          {isActive ? (
                            <span className="w-2 h-2 rounded-full bg-[#e3ecb9]" />
                          ) : (
                            <ArrowRight
                              size={16}
                              className="text-[#4b6628]/40"
                            />
                          )}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Sidebar Bottom Actions & Brand Note */}
                <div className="p-6 border-t border-[#4b6628]/15 bg-[#faf6de]/80 space-y-4">
                  <Link
                    href="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#3e5924] hover:bg-[#2e431a] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 active:scale-95 text-center cursor-pointer"
                  >
                    <span>Explore All Products</span>
                    <ArrowRight size={16} />
                  </Link>

                  <p className="text-xs text-[#526344] text-center leading-relaxed font-medium">
                    House of Gardens — Brewing Wellness
                    <br />
                    <span className="text-[#728562]">100% Pure Botanical Infusions</span>
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
}
