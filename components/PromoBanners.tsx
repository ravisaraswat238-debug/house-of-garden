import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PromoBanners() {
  return (
    <section
      className="w-full py-6 sm:py-10 md:py-16 bg-[#ffffff]"
      aria-label="Featured Promotion"
    >
      <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="#catalog-blends"
          className="group relative block w-full aspect-[1904/560] overflow-hidden rounded-[8px] sm:rounded-[12px] shadow-md hover:shadow-xl transition-all duration-500 border border-black/5 cursor-pointer bg-[#fafaf7]"
          style={{ aspectRatio: "1904 / 560" }}
        >
          {/* Smooth Zoom In / Zoom Out Image Container */}
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/banners/promo-banner.png"
              alt="House of Gardens Brewing Wellness Promotional Offer"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1760px"
              priority
            />
            {/* Subtle shine overlay on hover */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 pointer-events-none" />
          </div>
        </Link>
      </div>
    </section>
  );
}
