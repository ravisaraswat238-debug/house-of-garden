"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Leaf,
  Award,
  Coffee,
  Sprout,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Leaf,
    title: "Carefully Sourced",
    description:
      "We select the finest tea leaves from renowned gardens.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Every leaf is processed with care to preserve its natural flavour and aroma.",
  },
  {
    icon: Coffee,
    title: "Rich Experience",
    description:
      "From the first sip to the last, we bring you a truly refreshing experience.",
  },
  {
    icon: Sprout,
    title: "Sustainable Practices",
    description:
      "Good tea grows a better tomorrow. We support eco-friendly and ethical farming.",
  },
];

export default function AboutSection() {
  const [autoHover, setAutoHover] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const element = imageRef.current;
    if (!element) return;

    let startTimer: NodeJS.Timeout;
    let endTimer: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          observer.disconnect();

          // Delay slightly after entering viewport for a natural visual entrance
          startTimer = setTimeout(() => {
            setAutoHover(true);

            // Hold hover state for 1.3s then return to default tilt
            endTimer = setTimeout(() => {
              setAutoHover(false);
            }, 1300);
          }, 350);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, []);
  return (
    <section
      id="about-us"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10"
    >
      {/* Botanical Background Image */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/banners/about-bg.png"
          alt="House of Gardens botanical background"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =========================
            MAIN ABOUT CARD
        ========================== */}
        <div className="relative overflow-hidden rounded-[36px] sm:rounded-[42px] border border-[#d8e2c7] bg-[#eff3e5]/90 backdrop-blur-xs px-6 py-10 shadow-[0_10px_35px_rgba(40,65,20,0.05)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-16">
            {/* LEFT CONTENT */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <div className="mb-4 flex items-center gap-3.5">
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#557335] uppercase">
                  ABOUT US
                </span>
                <span className="h-[1.5px] w-14 bg-[#b5c79e]" />
              </div>

              {/* Main Heading */}
              <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl lg:text-[54px] font-light leading-[1.15] tracking-tight text-[#223514]">
                From Our Gardens
                <br />
                to Your Perfect Cup
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#56654b]">
                At House of Gardens, we believe that great tea is more than just
                a drink — it&apos;s a journey. Our teas are carefully sourced
                from the finest gardens, blended with tradition and crafted
                with care, so you can experience the purest taste of nature in
                every sip.
              </p>

              {/* CTA Button */}
              <a
                href="#catalog-blends"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#3e5924] px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#2e431a] hover:shadow-lg hover:scale-[1.02]"
              >
                <span>Our Story</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </a>
            </motion.div>

            {/* RIGHT IMAGE COMPOSITION */}
            <motion.div
              className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:ml-auto"
              initial={{ opacity: 0, x: -30, scale: 1.02 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Tagline Badge with Tea Leaves at Top Right (matching Instagram section font) */}
              <div className="absolute -top-10 right-2 z-20 flex items-center gap-2 select-none sm:-top-12 sm:right-4">
                <div className="text-right">
                  <span className="block font-display italic text-2xl sm:text-3xl font-semibold leading-[1.0] text-[#223514] tracking-tight">
                    Real Tea
                  </span>
                  <span className="block font-display italic text-2xl sm:text-3xl font-semibold leading-[1.0] text-[#c29d59] tracking-tight">
                    Real Stories
                  </span>
                </div>
                {/* Botanical sprig illustration */}
                <div className="relative -mt-1 text-[#4d6b2b]">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-[18deg]"
                  >
                    <path
                      d="M6 42C12 30 20 22 38 12"
                      stroke="#4d6b2b"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M38 12C36 4 28 2 24 6C20 10 24 16 38 12Z"
                      fill="#688c3e"
                      stroke="#4d6b2b"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M26 20C28 14 24 8 18 10C12 12 16 18 26 20Z"
                      fill="#81a552"
                      stroke="#4d6b2b"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Main Image: Hand harvesting fresh tea leaves over terrace hills */}
              <div className="relative overflow-hidden rounded-[26px] sm:rounded-[32px] border-[6px] sm:border-[8px] border-white shadow-[0_16px_40px_rgba(40,60,20,0.14)]">
                <Image
                  src="/banners/about-tea-harvest.png"
                  alt="Carefully hand-plucking tea leaves in morning mist tea gardens"
                  width={1550}
                  height={1014}
                  priority={false}
                  className="h-[280px] sm:h-[350px] lg:h-[380px] w-full object-cover"
                />
              </div>

              {/* Overlapping Floating Photo: Freshly brewed tea cup, whole leaves & wooden bowl */}
              <div
                ref={imageRef}
                onMouseEnter={() => {
                  setAutoHover(false);
                  hasTriggeredRef.current = true;
                }}
                className={`absolute -bottom-8 -right-3 sm:-bottom-10 sm:-right-2 z-10 w-[160px] sm:w-[215px] lg:w-[235px] aspect-square overflow-hidden rounded-[22px] sm:rounded-[26px] border-[5px] sm:border-[7px] border-white bg-white transition-all duration-700 ease-out hover:rotate-0 hover:scale-105 hover:shadow-[0_25px_50px_rgba(30,45,15,0.28)] ${
                  autoHover
                    ? "rotate-0 scale-105 shadow-[0_25px_50px_rgba(30,45,15,0.28)]"
                    : "rotate-[4deg] scale-100 shadow-[0_20px_45px_rgba(30,45,15,0.22)]"
                }`}
              >
                <Image
                  src="/banners/about-tea-cup.png"
                  alt="Freshly brewed cup of tea with whole loose leaves and wooden bowl"
                  width={1550}
                  height={1014}
                  priority={false}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Decorative botanical branch peeking behind the floating image */}
              <div className="pointer-events-none absolute -bottom-5 right-36 sm:right-48 -z-0 opacity-40">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 50 50"
                  fill="none"
                  className="text-[#64843d] rotate-[-20deg]"
                >
                  <path
                    d="M5 45C15 35 25 25 45 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M45 10C42 4 34 3 30 7C26 11 31 16 45 10Z"
                    fill="currentColor"
                  />
                  <path
                    d="M30 22C32 16 27 12 21 14C15 16 19 22 30 22Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =========================
            4 VALUE PILLARS / FEATURES
        ========================== */}
        <div className="relative mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#d4dfc3]">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                className="group px-6 py-4 text-center lg:px-8"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Round Sage Icon Badge */}
                <div className="mx-auto flex h-18 w-18 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#e3ebd4] shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:bg-[#dae5c8] group-hover:shadow-md">
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    className="text-[#3c5722]"
                  />
                </div>

                {/* Pillar Title */}
                <h3 className="mt-5 font-headline text-base sm:text-lg font-bold text-[#233814]">
                  {feature.title}
                </h3>

                {/* Pillar Description */}
                <p className="mx-auto mt-2.5 max-w-[240px] text-xs sm:text-sm leading-relaxed text-[#617351]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}