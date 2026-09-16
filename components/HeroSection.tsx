"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroBanners } from "@/data/heroBanners";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = heroBanners.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-slide effect (advances automatically every 5 seconds)
  useEffect(() => {
    if (totalSlides <= 1) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, totalSlides, currentIndex]);

  // Handle touch gestures for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  if (totalSlides === 0) return null;

  return (
    <section
      className="relative w-full overflow-hidden group"
      aria-label="Hero Banner Slider"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full-bleed edge-to-edge banner frame */}
      <div className="relative w-full aspect-[1024/415] min-h-[190px] sm:min-h-[260px] md:min-h-[380px] lg:min-h-[460px] overflow-hidden">
        {/* Banner Slides Carousel Track */}
        <div
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroBanners.map((banner, index) => {
            const isExternal = banner.link?.startsWith("http");

            return (
              <div
                key={banner.id}
                className="relative w-full h-full shrink-0 flex-none"
                aria-hidden={currentIndex !== index}
              >
                <Link
                  href={banner.link || "#"}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="block relative w-full h-full cursor-pointer focus:outline-none"
                  tabIndex={currentIndex === index ? 0 : -1}
                >
                  <Image
                    src={banner.imageSrc}
                    alt={banner.alt}
                    fill
                    priority={index === 0}
                    className="object-cover object-center select-none"
                    sizes="100vw"
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Manual Left Navigation Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous banner"
          className="absolute left-0 sm:left-1 md:left-2 top-1/2 -translate-y-1/2 z-20 text-[#e4e2c9] hover:text-white/80 transition-all hover:scale-110 active:scale-95 focus:outline-none cursor-pointer p-2"
        >
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Manual Right Navigation Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next banner"
          className="absolute right-0 sm:right-1 md:right-2 top-1/2 -translate-y-1/2 z-20 text-[#e4e2c9] hover:text-white/80 transition-all hover:scale-110 active:scale-95 focus:outline-none cursor-pointer p-2"
        >
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 drop-shadow-[0_3px_8px_rgba(0,0,0,0.45)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
