import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdLocalFlorist, MdPublic, MdCheckCircle } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden text-[#fefef8] pt-20 pb-14 sm:pt-24 sm:pb-16 ">
      {/* Background Image with Light Atmospheric Overlay to showcase the tea landscape */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/banners/footer.png"
          alt="House of Gardens botanical footer background"
          fill
          className="object-cover object-[center_0%]"
          sizes="100vw"
        />
        {/* Light balanced overlay so the estate scenery is clearly visible while text pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/25" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/20">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col">
            <Link href="#" className="flex items-center gap-3.5 mb-5 group w-fit">
              <div className="w-12 h-12 rounded-full bg-[#fefef8] p-1 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <MdLocalFlorist className="text-[28px] text-[#4b6628]" />
              </div>
              <div>
                <span className="font-headline font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight block drop-shadow-md">
                  House of Gardens
                </span>
                <span className="text-xs tracking-[0.25em] text-[#fed488] uppercase font-bold drop-shadow">
                  Brewing Wellness
                </span>
              </div>
            </Link>
            <p className="text-sm sm:text-base text-white/95 leading-relaxed max-w-md mb-6 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              Started from our own house with a vision of catering holistic
              wellness, quality and authenticity. HOG curates the finest tea
              buds and crafts them into tea blends infused with health and
              warmth.
            </p>
          </div>

          {/* 8 Blends Directory */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#fed488] mb-5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              Botanical Tea Directory
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:text-[15px] font-medium text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              <a
                className="hover:text-[#fed488] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Hibiscus Flower Tea
              </a>
              <a
                className="hover:text-[#fed488] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Blue Butterfly Pea
              </a>
              <a
                className="hover:text-[#fed488] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Elaichi Green Tea
              </a>
              <a
                className="hover:text-[#fed488] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Rose Green Tea
              </a>
              <a
                className="hover:text-[#fed488] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Darjeeling Green
              </a>
              <a
                className="hover:text-[#fed488] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Lavender Green
              </a>
              <a
                className="hover:text-[#fed488] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Peach Green Tea
              </a>
              <a
                className="hover:text-[#fed488] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Silver Needle White
              </a>
            </div>
          </div>

          {/* Wellness Standards */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#fed488] mb-5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              Our Integrity Standard
            </h4>
            <ul className="text-sm sm:text-[15px] font-medium space-y-3.5 text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              <li className="flex items-center gap-2.5">
                <MdCheckCircle className="text-[18px] text-[#fed488] shrink-0" />
                <span>100% Organic certified leaves</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MdCheckCircle className="text-[18px] text-[#fed488] shrink-0" />
                <span>Zero Artificial Colorants</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MdCheckCircle className="text-[18px] text-[#fed488] shrink-0" />
                <span>Zero Chemical Preservatives</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MdCheckCircle className="text-[18px] text-[#fed488] shrink-0" />
                <span>Whole Flower &amp; Bud Cuts Only</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Domain Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          <p>
            © 2026 House of Gardens (HOG). Brewing Wellness. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
