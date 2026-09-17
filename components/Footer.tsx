import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdCheckCircle } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden text-[#334B18] pt-14 pb-10 sm:pt-16 sm:pb-10">
      {/* Background Image vividly showcased */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/banners/footer copy.png"
          alt="House of Gardens botanical footer background"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Subtle translucent tint ensuring background artwork is prominently visible while text remains legible */}
        <div className="absolute inset-0 bg-[#faf8f2]/20" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#334B18]/15">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col">
            <Link
              href="#"
              className="inline-block mb-4 group w-fit"
              aria-label="House of Gardens Home"
            >
              <Image
                src="/logo/logo.png"
                alt="House of Gardens — Brewing Wellness"
                width={160}
                height={102}
                className="h-24 sm:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm sm:text-base text-[#334B18] leading-relaxed max-w-md mb-6 font-medium">
From Nature’s Finest Leaves to Your Cup, We Brew Wellness with Care.            </p>
          </div>

          {/* 8 Blends Directory */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#C58B32] mb-5">
              Botanical Tea Directory
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:text-[15px] font-medium text-[#334B18]">
              <a
                className="hover:text-[#C58B32] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Hibiscus Flower Tea
              </a>
              <a
                className="hover:text-[#C58B32] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Blue Butterfly Pea
              </a>
              <a
                className="hover:text-[#C58B32] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Elaichi Green Tea
              </a>
              <a
                className="hover:text-[#C58B32] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Rose Green Tea
              </a>
              <a
                className="hover:text-[#C58B32] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Darjeeling Green
              </a>
              <a
                className="hover:text-[#C58B32] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Lavender Green
              </a>
              <a
                className="hover:text-[#C58B32] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Peach Green Tea
              </a>
              <a
                className="hover:text-[#C58B32] hover:translate-x-0.5 transition-all"
                href="#catalog-blends"
              >
                • Silver Needle White
              </a>
            </div>
          </div>

          {/* Wellness Standards */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#C58B32] mb-5">
              Our Integrity Standard
            </h4>
            <ul className="text-sm sm:text-[15px] font-medium space-y-3.5 text-[#334B18]">
              <li className="flex items-center gap-2.5">
                <MdCheckCircle className="text-[18px] text-[#D9A441] shrink-0" />
                <span>100% Organic certified leaves</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MdCheckCircle className="text-[18px] text-[#D9A441] shrink-0" />
                <span>Zero Artificial Colorants</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MdCheckCircle className="text-[18px] text-[#D9A441] shrink-0" />
                <span>Zero Chemical Preservatives</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MdCheckCircle className="text-[18px] text-[#D9A441] shrink-0" />
                <span>Whole Flower &amp; Bud Cuts Only</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Domain Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#59644A] font-medium">
          <p>
            © 2026 House of Gardens (HOG). Brewing Wellness. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
