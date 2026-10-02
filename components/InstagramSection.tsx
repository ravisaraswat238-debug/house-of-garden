"use client";

import React from "react";
import Image from "next/image";
import Script from "next/script";
import { FaInstagram } from "react-icons/fa";
import { MdPlayArrow, MdArrowOutward } from "react-icons/md";
import Reveal from "@/components/Reveal";

export interface InstagramSectionProps {
  elfsightWidgetId?: string;
  beholdWidgetId?: string;
}

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/house_of_gardens_/";
const INSTAGRAM_HANDLE = "@house_of_gardens_";

interface InstagramPost {
  src: string;
  title: string;
  caption: string;
  url: string;
  isReel?: boolean;
}

const houseOfGardensPosts: InstagramPost[] = [
  {
    src: "/insta/insta1.png",
    title: "Hibiscus Flower Tea",
    caption: "READY TO DISPATCH! ORDER YOU CUP OF WELLNESS TODAY!",
    url: "https://www.instagram.com/reel/C-cjnkFypnf/",
    isReel: true,
  },
  {
    src: "/insta/insta2.png",
    title: "Blue Butterfly Pea",
    caption: "This vibrant hibiscus cooler with chia seeds ft. HOG is the perfect summer refresh.",
    url: "https://www.instagram.com/reel/C8lxI3SSmG4/",
    isReel: true,
  },
  {
    src: "/insta/insta3.png",
    title: "Silver Needle White Tea",
    caption: "House of Gardens tea range offers various Health and Beauty benefits.",
    url: "https://www.instagram.com/reel/C37iZODP_Id/",
    isReel: true,
  },
  {
    src: "/insta/insta4.png",
    title: "Rose Green Tea",
    caption: "From delicate White Tea to vibrant Buttertly Pea Flower Tea.",
    url: "https://www.instagram.com/p/Da-oICBTiMd/",
    isReel: true,
  },
  {
    src: "/insta/insta5.png",
    title: "Mountain Harvest",
    caption: "Morning mist over terraced tea gardens 🌿⛰️",
    url: "https://www.instagram.com/reel/DHJNWMYT0Nw/",
    isReel: true,
  },
  {
    src: "/insta/insta6.png",
    title: "Elaichi Green Tea",
    caption: "Crushed green cardamom with antioxidant leaves ☕",
    url: "https://www.instagram.com/reel/C45M3A8v11s/",
    isReel: true,
  },
];

const Track = ({ ariaHidden }: { ariaHidden?: boolean }) => (
  <div
    className="flex shrink-0 items-center gap-3.5 sm:gap-4 pr-3.5 sm:pr-4"
    aria-hidden={ariaHidden ? "true" : undefined}
  >
    {houseOfGardensPosts.map((post, idx) => (
      <a
        key={idx}
        href={post.url || INSTAGRAM_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View House of Gardens ${post.title} post on Instagram`}
        className="group relative block w-[170px] sm:w-[205px] md:w-[235px] aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shrink-0 shadow-md hover:shadow-2xl transition-all duration-500 border border-[#334B18]/10 bg-[#f4ede2]"
      >
        <Image
          src={post.src}
          alt={post.title}
          fill
          className="object-cover object-center group-hover:scale-108 transition-transform duration-700 select-none"
          sizes="(max-width: 640px) 170px, (max-width: 768px) 205px, 235px"
        />

        {/* Top Badges: Reel Play Indicator */}
        {post.isReel && (
          <div className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-black/45 backdrop-blur-xs flex items-center justify-center text-white/90 group-hover:bg-[#c29d59] group-hover:text-white transition-colors duration-300 pointer-events-none">
            <MdPlayArrow className="text-base ml-0.5" />
          </div>
        )}

        {/* Hover Gradient Overlay with Post Info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white z-10">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#fed488] mb-1">
            <FaInstagram className="text-sm shrink-0" />
            <span className="truncate">{INSTAGRAM_HANDLE}</span>
          </div>

          <p className="text-[12px] font-medium text-white/95 leading-snug line-clamp-2">
            {post.caption}
          </p>

          <div className="mt-2.5 pt-2 border-t border-white/20 flex items-center justify-between text-[11px] text-white/80 font-medium">
            <span>{post.isReel ? "Watch Reel" : "View Post"}</span>
            <MdArrowOutward className="text-sm text-[#fed488] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </a>
    ))}
  </div>
);

export default function InstagramSection({
  elfsightWidgetId,
  beholdWidgetId,
}: InstagramSectionProps) {
  const elfsightId =
    elfsightWidgetId ||
    process.env.NEXT_PUBLIC_ELFSIGHT_INSTAGRAM_WIDGET_ID ||
    "";

  const beholdId =
    beholdWidgetId ||
    process.env.NEXT_PUBLIC_BEHOLD_INSTAGRAM_WIDGET_ID ||
    "";

  const hasLiveWidget = Boolean(elfsightId || beholdId);

  return (
    <section
      className="w-full bg-[#fdfbf7] py-14 sm:py-18 md:py-24 overflow-hidden border-y border-[#4b6628]/15"
      aria-label="Instagram Community & Reels"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          {/* Left Title Block */}
          <Reveal
            className="shrink-0 text-center lg:text-left lg:min-w-[290px] xl:min-w-[340px]"
            y={25}
            duration={0.8}
          >
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-[#c29d59] bg-[#c29d59]/10 px-3 py-1 rounded-full mb-3">
              <FaInstagram className="text-xs" />
              Community &amp; Stories
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#1f2615] leading-[1.08] tracking-tight">
              Find us
              <br className="hidden md:block" />
              today on
              <br />
              <span className="text-[#c29d59] font-normal italic">
                Instagram
              </span>
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-[#59644a] max-w-xs mx-auto lg:mx-0 font-medium leading-relaxed">
              Explore daily herbal brewing rituals, tea harvest glimpses, and botanical stories.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-3">
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full bg-[#334B18] hover:bg-[#243511] text-[#fefefe] text-xs font-bold tracking-wide uppercase shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <FaInstagram className="text-base text-[#fed488] group-hover:scale-110 transition-transform" />
                <span>Follow {INSTAGRAM_HANDLE}</span>
                <MdArrowOutward className="text-sm text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-[11px] text-[#7a866b] font-semibold">
                2,200+ Tea Lovers Community
              </span>
            </div>
          </Reveal>

          {/* Right Live Widget OR Infinite Auto-Scrolling Reels Track */}
          <div className="flex-1 w-full overflow-hidden select-none">
            {elfsightId ? (
              <div className="w-full">
                <Script
                  src="https://static.elfsight.com/platform/platform.js"
                  strategy="lazyOnload"
                />
                <div
                  className={`elfsight-app-${elfsightId}`}
                  data-elfsight-app-lazy
                />
              </div>
            ) : beholdId ? (
              <div className="w-full">
                <Script
                  src="https://w.behold.so/widget.js"
                  type="module"
                  strategy="lazyOnload"
                />
                <figure data-behold-id={beholdId} />
              </div>
            ) : (
              <div className="animate-marquee-reels">
                <Track />
                <Track ariaHidden />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
