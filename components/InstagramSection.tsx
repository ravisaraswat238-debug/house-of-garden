"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";

const instaImages = [
  "/insta/769175902_1378085024514454_6185433258486304315_n.jpg",
  "/insta/769345652_18615625405043251_2312042153814223421_n.jpg",
  "/insta/772465892_18616681606043251_1765408666684825147_n.jpg",
  "/insta/774407306_18618200482043251_3422425223975984992_n.jpg",
  "/insta/778928608_18619317010043251_6459983172047833396_n.jpg",
  "/insta/780187350_18620156116043251_374605806891641562_n.jpg",
  "/insta/783240997_18621327217043251_6375504708174840386_n.jpg",
  "/insta/784075062_18621885907043251_8162741893719342167_n.jpg",
  "/insta/784732457_18622501339043251_634638122174478040_n.jpg",
  "/insta/788839009_18623111239043251_1498610771842851394_n.jpg",
  "/insta/790667906_18624245026043251_4395069052872311968_n.jpg",
  "/insta/793000403_18625557709043251_8102484250783877075_n.jpg",
];

const Track = ({ ariaHidden }: { ariaHidden?: boolean }) => (
  <div
    className="flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4"
    aria-hidden={ariaHidden ? "true" : undefined}
  >
    {instaImages.map((src, idx) => (
      <a
        key={idx}
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-[160px] sm:w-[195px] md:w-[225px] aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shrink-0 shadow-md hover:shadow-xl transition-all duration-300 border border-black/5"
      >
        <Image
          src={src}
          alt={`House of Gardens Instagram post ${idx + 1}`}
          fill
          className="object-cover object-center group-hover:scale-108 transition-transform duration-500 select-none"
          sizes="(max-width: 640px) 160px, (max-width: 768px) 195px, 225px"
        />

        {/* Reel indicator icon */}
        <div className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white/90 group-hover:bg-[#c29d59] group-hover:text-white transition-colors">
          <MdPlayArrow className="text-base ml-0.5" />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 text-white">
          <div className="flex items-center gap-1.5 text-xs font-bold">
            <FaInstagram className="text-sm text-[#fed488]" />
            <span>@houseofgardens_teas</span>
          </div>
          <span className="text-[10px] text-white/80 mt-0.5">Watch on Instagram</span>
        </div>
      </a>
    ))}
  </div>
);

export default function InstagramSection() {
  return (
    <section
      className="w-full bg-[#ffff] py-12 sm:py-16 md:py-20 overflow-hidden border-y border-[#4b6628]/10"
      aria-label="Instagram Community & Reels"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          {/* Left Title Block (matching reference layout) */}
          <div className="shrink-0 text-center lg:text-left lg:min-w-[280px] xl:min-w-[320px]">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1f2615] leading-[1.05] tracking-tight">
              Find us
              <br />
              today on
              <br />
              <span className="text-[#c29d59] font-normal italic">
                Instagram
              </span>
            </h2>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-xs uppercase font-extrabold tracking-widest text-[#4b6628] hover:text-[#835427] transition-colors py-1 border-b border-[#4b6628]/30 hover:border-[#835427]"
            >
              <FaInstagram className="text-base text-[#c29d59]" />
              <span>@houseofgardens_teas</span>
            </a>
          </div>

          {/* Right Infinite Auto-Scrolling Reels Track */}
          <div className="flex-1 w-full overflow-hidden select-none">
            <div className="animate-marquee-reels">
              <Track />
              <Track ariaHidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
