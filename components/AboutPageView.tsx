"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowBack } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Leaf, Award, Coffee, Sprout, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const pillars = [
  {
    icon: Leaf,
    title: "100% Pure Botanicals",
    description:
      "Crafted exclusively from whole dried flowers and virgin tea leaves with zero artificial flavors, preservatives, or synthetic essences.",
  },
  {
    icon: Award,
    title: "Ethically Sourced",
    description:
      "Direct relationships with independent single-estate growers in the mist-covered foothills of Darjeeling and regional organic gardens.",
  },
  {
    icon: Coffee,
    title: "Small-Batch Blended",
    description:
      "Handcrafted in limited micro-batches by our master tea sommeliers to lock in delicate essential oils and vibrant natural aromas.",
  },
  {
    icon: Sprout,
    title: "Airtight Glass Jars",
    description:
      "Preserved in recyclable, eco-friendly glass jars that maintain garden freshness and prevent microplastic contamination.",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Dawn Harvest",
    description:
      "Delicate leaves and vibrant whole blossoms are hand-plucked at dawn when morning dew concentrates essential botanical oils.",
  },
  {
    number: "02",
    title: "Gentle Solar Withering",
    description:
      "Blossoms and leaves are carefully withered under natural mountain air to preserve their deep colors, antioxidants, and pure fragrance.",
  },
  {
    number: "03",
    title: "Artisanal Blending",
    description:
      "Measured in small artisanal batches with natural botanicals like ruby hibiscus, butterfly pea, elaichi, and lavender buds.",
  },
  {
    number: "04",
    title: "Glass Jar Sealing",
    description:
      "Hermetically sealed in reusable food-grade glass jars to deliver true garden freshness straight to your teacup.",
  },
];

export default function AboutPageView() {
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

          startTimer = setTimeout(() => {
            setAutoHover(true);
            endTimer = setTimeout(() => {
              setAutoHover(false);
            }, 1300);
          }, 350);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, []);

  return (
    <div className="w-full bg-[#fbfaf5] text-[#1e392a] min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 pt-6 pb-2">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#5c7263]"
        >
          <Link
            href="/"
            className="hover:text-[#1e392a] transition-colors flex items-center gap-1.5"
          >
            <MdArrowBack className="text-base" />
            <span>Home</span>
          </Link>
          <span className="text-[#a0b0a5]">/</span>
          <span className="text-[#1e392a] font-semibold">About Us</span>
        </nav>
      </div>

      {/* About Us Heading Section (matching Products page heading) */}
      <section className="relative w-full pt-6 pb-2">
        <motion.div
          className="max-w-[1360px] mx-auto px-6 sm:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-headline text-2xl sm:text-3xl lg:text-5xl text-[#1b3425] font-medium tracking-tight">
            About Us
          </h1>
        </motion.div>
      </section>

      {/* Main Story Hero Section */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-8 pt-6 pb-16 sm:pb-20">
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-[#d8e2c7] bg-[#eff3e5]/90 backdrop-blur-xs px-6 py-10 shadow-[0_10px_35px_rgba(40,65,20,0.05)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14 xl:gap-16">
            {/* Left Column: Brand Story Narrative */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <div className="mb-4 flex items-center gap-3.5">
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#557335] uppercase">
                  OUR PHILOSOPHY
                </span>
                <span className="h-[1.5px] w-14 bg-[#b5c79e]" />
              </div>

              {/* Headline */}
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-[44px] font-medium leading-[1.18] tracking-tight text-[#1b3425]">
                From Our Gardens
                <br />
                to Your Perfect Cup
              </h2>

              {/* Narrative Text */}
              <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-[#4d6353]">
                <p>
                  At <strong className="text-[#1b3425] font-semibold">House of Gardens</strong>, we believe that great tea is not a mass-manufactured commodity — it is a living botanical ritual.
                </p>
                <p>
                  Founded with a reverence for nature, our journeys take us to the mist-covered slopes of Darjeeling and certified organic gardens across India. Here, cold mountain breezes and fertile soil nurture tea bushes that grow slowly, concentrating their volatile aromatic oils and rich antioxidants.
                </p>
                <p>
                  We reject the standard commercial practice of crushing leaves into fine dust and mixing them with artificial flavorings. Instead, we select whole vibrant blossoms, uncut leaves, and fragrant spices, sealing them inside airtight glass jars so that every steep releases the true, uncompromised soul of the garden.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#233d2f] hover:bg-[#1a2f24] px-7 py-3.5 text-sm sm:text-base font-semibold text-[#FAF8F3] shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                >
                  <span>Explore Products</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    "Hello House of Gardens, I would like to learn more about your botanical tea blends and story."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 hover:bg-white border border-[#cad5be] px-6 py-3.5 text-sm sm:text-base font-semibold text-[#233d2f] transition-all duration-200 cursor-pointer"
                >
                  <FaWhatsapp className="text-xl text-[#25D366]" />
                  <span>Chat with Sommelier</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Visual Composition */}
            <motion.div
              className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:ml-auto"
              initial={{ opacity: 0, x: -25, scale: 1.02 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Tagline Badge at Top Right */}
              <div className="absolute -top-8 right-2 z-20 flex items-center gap-2 select-none sm:-top-10 sm:right-4">
                <div className="text-right">
                  <span className="block font-display italic text-2xl sm:text-3xl font-semibold leading-[1.0] text-[#1b3425] tracking-tight">
                    Real Tea
                  </span>
                  <span className="block font-display italic text-2xl sm:text-3xl font-semibold leading-[1.0] text-[#c29d59] tracking-tight">
                    Real Stories
                  </span>
                </div>
                <div className="relative -mt-1 text-[#4d6b2b]">
                  <svg
                    width="38"
                    height="38"
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

              {/* Main Image: Hand-plucking tea leaves */}
              <div className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] border-[6px] sm:border-[8px] border-white shadow-[0_16px_40px_rgba(40,60,20,0.14)]">
                <Image
                  src="/banners/about-tea-harvest.png"
                  alt="Hand harvesting fresh tea leaves in morning mist tea gardens"
                  width={1550}
                  height={1014}
                  className="h-[280px] sm:h-[350px] lg:h-[380px] w-full object-cover"
                />
              </div>

              {/* Floating Overlapping Photo: Brewed tea cup */}
              <div
                ref={imageRef}
                onMouseEnter={() => {
                  setAutoHover(false);
                  hasTriggeredRef.current = true;
                }}
                className={`absolute -bottom-7 -right-2 sm:-bottom-9 sm:-right-2 z-10 w-[150px] sm:w-[205px] lg:w-[220px] aspect-square overflow-hidden rounded-[20px] sm:rounded-[24px] border-[5px] sm:border-[6px] border-white bg-white transition-all duration-700 ease-out hover:rotate-0 hover:scale-105 hover:shadow-[0_25px_50px_rgba(30,45,15,0.28)] ${
                  autoHover
                    ? "rotate-0 scale-105 shadow-[0_25px_50px_rgba(30,45,15,0.28)]"
                    : "rotate-[4deg] scale-100 shadow-[0_20px_45px_rgba(30,45,15,0.22)]"
                }`}
              >
                <Image
                  src="/banners/about-tea-cup.png"
                  alt="Freshly brewed cup of botanical tea with whole leaves"
                  width={1550}
                  height={1014}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 4 Core Botanical Pillars */}
      <section className="w-full bg-[#f4eee4] border-y border-[#dad3c4] py-16 sm:py-20">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-headline text-xs font-bold uppercase tracking-[0.25em] text-[#4b6628] mb-2 block">
              OUR INTEGRITY STANDARDS
            </span>
            <h2 className="font-headline text-xl sm:text-2xl lg:text-4xl text-[#1b3425] font-medium tracking-tight">
              Purity Without Compromise
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#526a5b] leading-relaxed">
              Every blend at House of Gardens conforms to our strict four-point botanical standard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#FAF8F3] rounded-3xl p-8 border border-[#e2dcce] shadow-xs flex flex-col items-start hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e3ebd4] text-[#3c5722] mb-6">
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <h3 className="font-headline font-semibold text-lg text-[#1b3425] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#546b5d] leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Journey: Soil to Teacup */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-headline text-xs font-bold uppercase tracking-[0.25em] text-[#4b6628] mb-2 block">
            HOW WE CRAFT OUR TEAS
          </span>
          <h2 className="font-headline text-xl sm:text-2xl lg:text-4xl text-[#1b3425] font-medium tracking-tight">
            The Botanical Craft Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#526a5b] leading-relaxed">
            From misty Himalayan valleys to your teacup, discover the careful steps behind every batch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {journeySteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white/70 backdrop-blur-xs rounded-3xl p-7 border border-[#e0d9cb] flex flex-col justify-between hover:border-[#4b6628]/40 transition-all duration-300"
            >
              <div>
                <span className="font-headline font-extrabold text-3xl sm:text-4xl text-[#4b6628]/30 mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-headline font-semibold text-lg text-[#1b3425] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#5a7165] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0ebd9] flex items-center gap-2 text-xs font-semibold text-[#4b6628]">
                <CheckCircle2 size={16} />
                <span>Quality Inspected</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder's Botanical Creed / Nature Quote */}
      <section className="relative w-full text-[#FAF8F3] py-20 sm:py-28 overflow-hidden bg-[#16291d]">
        {/* Botanical Background Image */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/banners/watermark-removed-Gemini_Generated_Image_4gvi9e4gvi9e4gvi.png"
            alt="House of Gardens botanical background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
          {/* Subtle gradient overlay to enhance depth while keeping decorative corner leaves vivid */}
          <div className="absolute inset-0 bg-[#0d1a12]/20" />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-headline text-xs font-bold uppercase tracking-[0.25em] text-[#fed488] mb-4 block drop-shadow-xs">
            THE GARDEN PROMISE
          </span>
          <blockquote className="font-headline text-lg sm:text-xl lg:text-3xl font-light leading-relaxed tracking-tight text-[#FAF8F3] mb-8 drop-shadow-sm">
            &ldquo;We started House of Gardens to bring back the lost art of real botanical tea — pure, slow, and unhurried. When you unseal our glass jar, you are breathing in the sacred essence of living earth.&rdquo;
          </blockquote>
          <div className="flex flex-col items-center">
            <span className="font-headline font-semibold text-base text-[#fed488] drop-shadow-xs">
              House of Gardens
            </span>
            <span className="text-xs text-[#d1dfd6] mt-0.5 font-medium tracking-wide">
              Brewing Wellness, Naturally
            </span>
          </div>
        </motion.div>
      </section>

      {/* Value Pillars Strip (Consistent with Products Page) */}
      <section className="w-full bg-[#eae5db] border-b border-[#dad3c4] py-12">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.0, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start lg:px-6 lg:border-r lg:border-[#d5cebf]"
            >
              <span className="font-headline font-semibold text-lg text-[#1e392a] mb-1">
                100% Pure &amp; Natural
              </span>
              <p className="text-sm text-[#546b5d] leading-relaxed">
                Whole botanical flowers and tender leaves with zero artificial flavors.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start lg:px-6 lg:border-r lg:border-[#d5cebf]"
            >
              <span className="font-headline font-semibold text-lg text-[#1e392a] mb-1">
                Sustainably Sourced
              </span>
              <p className="text-sm text-[#546b5d] leading-relaxed">
                Direct single-estate harvest from the mist-covered slopes of Darjeeling.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start lg:px-6 lg:border-r lg:border-[#d5cebf]"
            >
              <span className="font-headline font-semibold text-lg text-[#1e392a] mb-1">
                Small-Batch Blended
              </span>
              <p className="text-sm text-[#546b5d] leading-relaxed">
                Handcrafted in micro-batches to preserve essential botanical oils.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start lg:px-6"
            >
              <span className="font-headline font-semibold text-lg text-[#1e392a] mb-1">
                Airtight Glass Jars
              </span>
              <p className="text-sm text-[#546b5d] leading-relaxed">
                Packed in recyclable glass jars to preserve ultimate freshness and aroma.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Guidance CTA Banner */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <motion.div
          className="bg-[#f2ece1] rounded-3xl p-8 sm:p-12 border border-[#ded5c2] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative z-10 max-w-xl">
            <span className="font-headline text-xs font-bold uppercase tracking-[0.25em] text-[#4b6628] mb-2.5 block">
              EXPERIENCE OUR BLENDS
            </span>
            <h2 className="font-headline text-xl sm:text-2xl lg:text-4xl text-[#1e392a] font-medium tracking-tight mb-3">
              Ready to Explore Our Teas?
            </h2>
            <p className="text-[#475f50] text-sm sm:text-base leading-relaxed">
              Explore our artisanal archive of 8 signature whole-flower and single-origin green teas, or reach out directly for tailored recommendations.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-[#233d2f] hover:bg-[#1a2f24] text-[#FAF8F3] px-7 py-4 font-semibold text-base shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>View All Products</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                "Hello House of Gardens, I would like to learn more about your tea blends."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white hover:bg-[#FAF8F3] text-[#233d2f] border border-[#d8d0c0] px-6 py-4 font-semibold text-base shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer group"
            >
              <FaWhatsapp className="text-2xl text-[#25D366] group-hover:scale-110 transition-transform duration-200" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
