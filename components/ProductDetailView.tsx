"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TEA_BLENDS } from "@/data/teaBlends";
import { motion, AnimatePresence } from "motion/react";
import {
  MdStar,
  MdShare,
  MdVerified,
  MdArrowBack,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import TeaCard from "@/components/TeaCard";

const BOTANICAL_CUTOUT_IMAGES: Record<string, string> = {
  "hibiscus-flower-tea": "/productsImg/Hibiscus.png",
  "elaichi-green-tea": "/productsImg/elaichi.png",
  "darjeeling-green-tea": "/productsImg/darjeeling.png",
  "peach-green-tea": "/productsImg/peach green tea.png",
  "blue-tea": "/productsImg/blue teas.png",
  "rose-green-tea": "/productsImg/rose.png",
  "lavender-green-tea": "/productsImg/lavendar.png",
  "white-tea": "/productsImg/silver.png",
};

const BOTANICAL_STORIES: Record<
  string,
  {
    story: string;
    badges: [string, string, string];
  }
> = {
  "hibiscus-flower-tea": {
    story:
      "Hibiscus tea is an herbal infusion made by steeping the dried calyces (petals) of the hibiscus plant (Hibiscus sabdariffa). Known for its deep ruby-red color and distinct tart, cranberry-like flavor profile, it has been enjoyed across cultures for generations. Completely free of artificial additives, preservatives, and caffeine, House of Gardens Hibiscus Flower Tea delivers a pure and unadulterated botanical experience in every cup.",
    badges: ["Deep Ruby Red", "Tart & Refreshing", "Naturally Caffeine-Free"],
  },
  "elaichi-green-tea": {
    story:
      "Elaichi Green Tea is an Ayurvedic-inspired botanical formulation marrying tender high-grown green tea leaves with whole aromatic green cardamom pods. Known for its warming spices and soothing digestive properties, it has been savored across the subcontinent for revitalizing balance. Crafted with zero artificial essences, House of Gardens Elaichi Green Tea delivers gentle energy with every wholesome steep.",
    badges: ["Warm Spiced Amber", "Aromatic & Uplifting", "Gentle Energy"],
  },
  "darjeeling-green-tea": {
    story:
      "Darjeeling Green Tea is harvested from the high-elevation slopes of the misty Himalayas, capturing tender, unoxidized first flush shoots. Celebrated for its delicate muscatel aroma and crisp vegetal sweetness, this single-estate tea preserves maximum catechins and natural antioxidants. Completely unadulterated, House of Gardens Darjeeling Green Tea offers a pure, refreshing mountain clarity.",
    badges: ["Pale Jade Green", "Muscatel & Vegetal", "Antioxidant Rich"],
  },
  "peach-green-tea": {
    story:
      "Peach Green Tea is a refreshing orchard-inspired infusion blending antioxidant-rich spring green tea leaves with natural sun-ripened peach essence and golden calendula petals. Naturally hydrating and soothingly fruity, it provides a guilt-free wellness alternative that rejuvenates the senses both hot and over ice.",
    badges: ["Sunlit Amber", "Juicy Stone Fruit", "Refreshing Hydration"],
  },
  "blue-tea": {
    story:
      "Blue Tea is an enchanting caffeine-free herbal infusion made from whole dried Butterfly Pea flowers (Clitoria ternatea). Celebrated for its vivid cobalt-blue liquor and rich concentration of anthocyanins, it miraculously transitions to royal violet with a squeeze of fresh lemon, delivering an uplifting and visual ritual steeped in heritage.",
    badges: ["Vibrant Cobalt Blue", "Earthy & Smooth", "Naturally Caffeine-Free"],
  },
  "rose-green-tea": {
    story:
      "Rose Green Tea is a sensual botanical union of organic Damask rose petals and tender, uncrushed emerald green tea leaves. The gentle steam distillation of natural rose aromatics promotes mood elevation and skin hydration, offering a fragrant, stress-melting experience in every calming cup.",
    badges: ["Soft Blossom Tint", "Sensual Floral Notes", "Mood Elevating"],
  },
  "lavender-green-tea": {
    story:
      "Lavender Green Tea combines the tranquil blossoms of French lavender with soothing whole-leaf green tea. Designed for twilight wind-downs and restful mindfulness, it calms nervous tension while delivering a clean, herbaceous finish without bitter aftertaste.",
    badges: ["Gentle Lavender Hue", "Calming Aromatics", "Evening Wind-Down"],
  },
  "white-tea": {
    story:
      "Silver Needle White Tea is the crown jewel of botanical teas, hand-harvested exclusively at dawn before the morning dew vanishes. Made purely of unopened downy silver buds and dried naturally under the sun, it provides highest polyphenol density and a heavenly melon-sweet liquor with cellular purity.",
    badges: ["Silvery Champagne", "Melon & Wildflower", "Cellular Guard"],
  },
};

interface ProductDetailViewProps {
  blendId: string;
}

export default function ProductDetailView({
  blendId,
}: ProductDetailViewProps) {
  const blend = TEA_BLENDS.find((b) => b.id === blendId) || TEA_BLENDS[0];
  const allBlends = TEA_BLENDS;
  const storyData = BOTANICAL_STORIES[blend.id] || {
    story: blend.description || "A pure, handpicked botanical tea blend curated for mindful wellness moments.",
    badges: ["100% Botanical", "Pure Whole Cuts", blend.caffeineLevel || "Natural Refreshment"],
  };
  const botanicalCutoutImage =
    BOTANICAL_CUTOUT_IMAGES[blend.id] ||
    "/banners/Gemini_Generated_Image_4lmzg94lmzg94lmz-Photoroom.png";

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${blend.name} — House of Gardens`,
          text: blend.description || `Handcrafted botanical tea blend: ${blend.name}`,
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed silently
      }
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  // Filter other blends for recommendation section:
  // All other blends for mobile horizontal slider, capped to 4 for desktop 4-column grid
  const allOtherBlends = allBlends.filter((b) => b.id !== blend.id);
  const desktopRelatedBlends = allOtherBlends.slice(0, 4);

  // Mobile horizontal slider state & controls
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const card = container.firstElementChild as HTMLElement | null;
    const scrollDistance = card ? card.offsetWidth + 16 : 300;
    container.scrollBy({
      left: direction === "right" ? scrollDistance : -scrollDistance,
      behavior: "smooth",
    });
  };

  const handleSliderScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const card = container.firstElementChild as HTMLElement | null;
    const scrollDistance = card ? card.offsetWidth + 16 : 300;
    const index = Math.round(container.scrollLeft / scrollDistance);
    setActiveSlide(Math.min(Math.max(index, 0), allOtherBlends.length - 1));
  };

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const isCaffeineFree =
    blend.caffeineLevel?.toLowerCase().includes("free") ||
    blend.tag?.toLowerCase().includes("caffeine-free");

  const faqs = [
    {
      question: "Does this tea contain caffeine?",
      answer: isCaffeineFree
        ? `No, ${blend.name} is 100% naturally caffeine-free. It is an herbal infusion crafted solely from pure botanical blossoms, making it ideal for evening relaxation or any mindful moment throughout the day.`
        : `${blend.name} contains natural ${blend.caffeineLevel?.toLowerCase() || "low to moderate caffeine"} inherent to unoxidized tea leaves, delivering gentle mental clarity without nervousness or midday crashes.`,
    },
    {
      question: "Can I drink this tea cold or iced?",
      answer: `Yes, absolutely! ${blend.name} is exceptionally versatile. Simply brew with hot water as directed, allow it to cool, and pour over a glass of ice. You can complement it with a drizzle of pure honey or fresh citrus.`,
    },
    {
      question: "Are there any artificial flavors or preservatives added?",
      answer:
        "Never. House of Gardens adheres to strict botanical purity. Every jar contains 100% whole, sun-dried ingredients with zero synthetic flavors, chemical additives, artificial colors, or preservatives.",
    },
    {
      question: "How should I store the 50g pack?",
      answer:
        "Store the glass jar in a cool, dry place away from direct sunlight, excess heat, and moisture. Always ensure the airtight gold lid is firmly sealed after each use to protect the delicate essential oils and fresh botanical aromas.",
    },
  ];

  return (
    <div className="w-full bg-[#fbfaf5] text-[#1e392a]">

      {/* Breadcrumb Navigation Bar */}
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
          <Link
            href="/products"
            className="hover:text-[#1e392a] transition-colors"
          >
            Products
          </Link>
          <span className="text-[#a0b0a5]">/</span>
          <span className="text-[#1e392a] font-semibold truncate max-w-[200px] sm:max-w-none">
            {blend.name}
          </span>
        </nav>
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO PRODUCT SECTION (Matches provided reference screenshot) */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Product Image Artwork Container */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#faf8f2] shadow-sm border border-[#e5dfd2]/80 group"
            >
              <Image
                src={blend.imageSrc}
                alt={blend.imageAlt}
                fill
                priority
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
              />


              {/* Share button overlay */}
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share this blend"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#1e392a] backdrop-blur-md flex items-center justify-center shadow-xs transition-all hover:scale-105 cursor-pointer"
              >
                <MdShare className="text-base" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Editorial Details & Purchasing Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Product Title (Manrope - font-headline) */}
            <h1 className="font-headline text-2xl sm:text-3xl lg:text-[44px] text-[#1b3425] font-medium leading-[1.18] tracking-tight mb-4">
              {blend.name}
            </h1>

            {/* Short Poetic Description */}
            <p className="text-[#3c5445] text-base sm:text-lg font-normal leading-relaxed mb-7 max-w-xl">
              {blend.description ||
                "A vibrant floral infusion crafted from whole botanical blossoms, handpicked for mindful moments of tranquility."}
            </p>

            {/* Net Weight */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#2d4637] bg-[#eff3e5] px-4 py-1.5 rounded-full border border-[#d8e2c7]">
                <span>Net Weight:</span>
                <span>{blend.weight || "50gm"}</span>
              </span>
            </div>

            {/* Inquiry Action Button with WhatsApp */}
            <div className="flex items-center mb-8">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Hello House of Gardens, I would like to inquire about ${blend.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#233d2f] hover:bg-[#1a2f24] text-[#FAF8F3] px-8 py-3.5 sm:py-4 font-semibold text-base shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer text-center group"
                aria-label={`Inquire about ${blend.name} on WhatsApp`}
              >
                <FaWhatsapp className="text-2xl text-[#25D366] group-hover:scale-110 transition-transform duration-200" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>

            {/* 3 Circular Outline Badges */}
            <div className="pt-6 border-t border-[#ded8cb]/80 flex items-center justify-between sm:justify-start sm:gap-7 text-sm sm:text-base font-medium text-[#2d4637]">
              {/* Badge 1: 100% Organic */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#2d4637]/35 flex items-center justify-center text-[#233d2f] shrink-0">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a9.96 9.96 0 0 0-7.07 2.93A10 10 0 0 0 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-2.65-1.05-5.2-2.93-7.07A9.96 9.96 0 0 0 12 2Z" />
                    <path d="m14 12-4-4" />
                    <path d="M10 12c2.5 0 4-1.5 4-4" />
                    <path d="M8 14c0 2.5 1.5 4 4 4" />
                  </svg>
                </div>
                <span>100% Organic</span>
              </div>

              {/* Vertical Divider */}
              <div className="h-6 w-px bg-[#d2dbd2]" />

              {/* Badge 2: Whole Flowers / Blend Badge */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#2d4637]/35 flex items-center justify-center text-[#233d2f] shrink-0">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2a4 4 0 0 0 0 7" />
                    <path d="M12 15a4 4 0 0 0 0 7" />
                    <path d="M22 12a4 4 0 0 0-7 0" />
                    <path d="M9 12a4 4 0 0 0-7 0" />
                  </svg>
                </div>
                <span>{blend.badgeText || "Whole Flowers"}</span>
              </div>

              {/* Vertical Divider */}
              <div className="h-6 w-px bg-[#d2dbd2]" />

              {/* Badge 3: Small Batch */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#2d4637]/35 flex items-center justify-center text-[#233d2f] shrink-0">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="14" height="12" x="5" y="8" rx="2" />
                    <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                    <path d="M10 13h4" />
                  </svg>
                </div>
                <span>Small Batch</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE BOTANICAL STORY (Matches User Image Top Block) */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#fbfaf5] overflow-hidden py-14 lg:py-20 border-t border-[#ded8cb]">
        {/* Botanical Story Background Image */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/banners/watermark-removed-Gemini_Generated_Image_cmy5rccmy5rccmy5.png"
            alt="Botanical story background texture"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
        </motion.div>

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Editorial Story & Badges */}
            <motion.div
              className="lg:col-span-7 flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-headline text-base font-medium uppercase tracking-[0.25em] text-[#344d3d] mb-2.5 block">
                THE BOTANICAL STORY
              </span>

              <h2 className="font-headline text-2xl sm:text-3xl lg:text-[42px] text-[#1b3425] font-light leading-[1.2] tracking-tight mb-5">
                What is {blend.name}?
              </h2>

              <p className="text-[#3c5445] text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-2xl text-justify sm:text-left">
                {storyData.story}
              </p>

              {/* 3 Pills under story with leaf icons */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-sm sm:text-base font-medium text-[#2d4637]">
                {storyData.badges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <svg
                      className="w-5 h-5 text-[#4b6628] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Transparent Cutout Image of Dried Flowers in Wooden Bowl */}
            <motion.div
              className="lg:col-span-5 relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-full max-w-[500px] aspect-[16/9] sm:aspect-[16/10]">
                <Image
                  src={botanicalCutoutImage}
                  alt={`Authentic pure botanicals of ${blend.name}`}
                  fill
                  className="object-contain object-center drop-shadow-md hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. KEY FEATURES (Matches User Image Middle 4-Column Block) */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#eae5db] border-y border-[#dad3c4] overflow-hidden py-10 sm:py-14">
        {/* Decorative botanical watermark sketch on right edge */}
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-48 h-48 opacity-20 pointer-events-none">
          <svg viewBox="0 0 120 120" fill="none" stroke="#2b4334" strokeWidth="1" strokeLinecap="round">
            <path d="M110 10 C80 40, 50 70, 10 110" />
            <path d="M70 50 C65 70, 50 80, 35 75 C40 65, 55 55, 70 50" />
            <path d="M50 70 C45 90, 30 100, 15 95 C20 85, 35 75, 50 70" />
          </svg>
        </div>

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 relative z-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {/* Feature 1: 100% Pure & Natural */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.0, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start lg:px-6 lg:border-r lg:border-[#d5cebf]"
            >
              <div className="w-10 h-10 mb-3 flex items-center justify-center text-[#233d2f]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 0-7 3 10 10 0 0 0-3 7c0 5.5 4.5 10 10 10s10-4.5 10-10a10 10 0 0 0-3-7 10 10 0 0 0-7-3Z" />
                  <path d="M12 8v8" />
                  <path d="M8.5 10.5 12 14l3.5-3.5" />
                </svg>
              </div>
              <h3 className="font-headline font-semibold text-lg sm:text-xl text-[#1e392a] mb-2 leading-tight">
                100% Pure &amp; Natural
              </h3>
              <p className="text-sm sm:text-base text-[#546b5d] leading-relaxed">
                Crafted purely from dried botanical flowers with no added flavors, colors, or artificial ingredients.
              </p>
            </motion.div>

            {/* Feature 2: Naturally Caffeine-Free */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start lg:px-6 lg:border-r lg:border-[#d5cebf]"
            >
              <div className="w-10 h-10 mb-3 flex items-center justify-center text-[#233d2f]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                  <path d="M3 8h14v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                  <line x1="6" x2="6" y1="2" y2="4" />
                  <line x1="10" x2="10" y1="2" y2="4" />
                  <line x1="14" x2="14" y1="2" y2="4" />
                </svg>
              </div>
              <h3 className="font-headline font-semibold text-lg sm:text-xl text-[#1e392a] mb-2 leading-tight">
                {blend.caffeineLevel?.toLowerCase().includes("free") ? "Naturally Caffeine-Free" : blend.caffeineLevel || "Naturally Caffeine-Free"}
              </h3>
              <p className="text-sm sm:text-base text-[#546b5d] leading-relaxed">
                A soothing, restorative alternative to traditional processed teas with zero jitters.
              </p>
            </motion.div>

            {/* Feature 3: Hand-Selected Quality */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start lg:px-6 lg:border-r lg:border-[#d5cebf]"
            >
              <div className="w-10 h-10 mb-3 flex items-center justify-center text-[#233d2f]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M12 17v2a3 3 0 0 0 6 0v-2a3 3 0 0 0-6 0Z" />
                  <path d="M22 12a3 3 0 0 0-3-3h-2a3 3 0 0 0 0 6h2a3 3 0 0 0 3-3Z" />
                  <path d="M7 12a3 3 0 0 0-3-3H2a3 3 0 0 0 0 6h2a3 3 0 0 0 3-3Z" />
                </svg>
              </div>
              <h3 className="font-headline font-semibold text-lg sm:text-xl text-[#1e392a] mb-2 leading-tight">
                Hand-Selected Quality
              </h3>
              <p className="text-sm sm:text-base text-[#546b5d] leading-relaxed">
                Sourced and packed with care to retain natural vibrancy, deep color and exquisite botanical taste.
              </p>
            </motion.div>

            {/* Feature 4: Versatile Brew */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start lg:px-6"
            >
              <div className="w-10 h-10 mb-3 flex items-center justify-center text-[#233d2f]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h12l-1.5 18h-9L6 3Z" />
                  <path d="M6 8h12" />
                  <line x1="15" x2="16" y1="1" y2="4" />
                </svg>
              </div>
              <h3 className="font-headline font-semibold text-lg sm:text-xl text-[#1e392a] mb-2 leading-tight">
                Versatile Brew
              </h3>
              <p className="text-sm sm:text-base text-[#546b5d] leading-relaxed">
                Enjoyed steaming hot for mindful calm or freshly poured over ice with honey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PRODUCT SPECIFICATIONS & CALLOUT CARD (Matches User Image Bottom Block) */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#fbfaf5] overflow-hidden py-12 lg:py-16">
        {/* Subtle decorative botanical watermark sketch on left corner */}
        <div className="absolute -left-4 bottom-2 w-44 h-44 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="#243e2b" strokeWidth="1" strokeLinecap="round">
            <path d="M10 90 C30 70, 50 50, 80 20" />
            <path d="M40 60 C50 50, 60 45, 55 30 C45 35, 40 50, 40 60" />
            <path d="M60 40 C75 30, 85 25, 80 10 C70 15, 60 30, 60 40" />
          </svg>
        </div>

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Product Specifications Table */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="block font-headline text-2xl sm:text-3xl lg:text-[42px] text-[#1b3425] font-light leading-[1.2] tracking-tight mb-6 sm:mb-8">
                PRODUCT SPECIFICATIONS
              </h2>

              <div className="border-t border-[#e5dfd2]">
                <div className="grid grid-cols-12 py-3.5 border-b border-[#e5dfd2] text-sm sm:text-base">
                  <span className="col-span-5 sm:col-span-4 font-semibold text-[#1e392a]">Brand</span>
                  <span className="col-span-7 sm:col-span-8 text-[#475f50]">House of Gardens</span>
                </div>
                <div className="grid grid-cols-12 py-3.5 border-b border-[#e5dfd2] text-sm sm:text-base">
                  <span className="col-span-5 sm:col-span-4 font-semibold text-[#1e392a]">Product Name</span>
                  <span className="col-span-7 sm:col-span-8 text-[#475f50]">{blend.name}</span>
                </div>
                <div className="grid grid-cols-12 py-3.5 border-b border-[#e5dfd2] text-sm sm:text-base">
                  <span className="col-span-5 sm:col-span-4 font-semibold text-[#1e392a]">Pack Size</span>
                  <span className="col-span-7 sm:col-span-8 text-[#475f50]">{blend.weight || "50g"}</span>
                </div>

                <div className="grid grid-cols-12 py-3.5 border-b border-[#e5dfd2] text-sm sm:text-base">
                  <span className="col-span-5 sm:col-span-4 font-semibold text-[#1e392a]">Ingredients</span>
                  <span className="col-span-7 sm:col-span-8 text-[#475f50]">
                    {blend.ingredients ? blend.ingredients.join(", ") : "100% Dried Botanical Flowers"}
                  </span>
                </div>
                <div className="grid grid-cols-12 py-3.5 border-b border-[#e5dfd2] text-sm sm:text-base">
                  <span className="col-span-5 sm:col-span-4 font-semibold text-[#1e392a]">Caffeine Status</span>
                  <span className="col-span-7 sm:col-span-8 text-[#475f50]">
                    {blend.caffeineLevel || blend.tag || "Caffeine-Free"}
                  </span>
                </div>
                <div className="grid grid-cols-12 py-3.5 border-b border-[#e5dfd2] text-sm sm:text-base">
                  <span className="col-span-5 sm:col-span-4 font-semibold text-[#1e392a]">Dietary Info</span>
                  <span className="col-span-7 sm:col-span-8 text-[#475f50]">100% Vegetarian / Plant-Based</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Nature Callout Box with Hibiscus Flower Illustration */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-[#f7f4ec] rounded-2xl sm:rounded-3xl border border-[#e4ded0] p-7 sm:p-9 flex items-center justify-between gap-4 relative overflow-hidden shadow-xs">
                <div className="relative z-10">
                  <p className="font-headline italic text-xl sm:text-2xl text-[#2a4533] font-light leading-relaxed">
                    Pure botanicals.<br />
                    No additives.<br />
                    Just nature.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#8ca865]">
                    <svg className="w-16 h-3" viewBox="0 0 80 12" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M0 6h28c4 0 6-4 12-4s8 4 12 4h28" />
                      <circle cx="40" cy="6" r="2" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                <div className="relative w-44 sm:w-56 h-36 sm:h-44 shrink-0 overflow-hidden">
                  <Image
                    src={botanicalCutoutImage}
                    alt={`Pure botanicals of ${blend.name}`}
                    fill
                    sizes="(max-width: 640px) 176px, 224px"
                    className="object-contain object-right"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. VERIFIED CUSTOMER REVIEWS SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-8 py-12 border-t border-[#ded8cb]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Reviews Score Card */}
          <motion.div
            className="lg:col-span-4 bg-white rounded-3xl p-8 border border-[#e5dfd2] shadow-sm flex flex-col justify-between"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#5a7165]">
                Customer Consensus
              </span>
              <div className="flex items-baseline gap-3 my-3">
                <span className="font-headline text-5xl font-extrabold text-[#1e392a]">
                  {blend.rating || 4.9}
                </span>
                <span className="text-sm text-[#5a7165]">out of 5.0</span>
              </div>
              <div className="flex items-center text-[#1b3425] text-lg mb-2">
                {[...Array(5)].map((_, i) => (
                  <MdStar key={i} />
                ))}
              </div>
              <p className="text-xs text-[#5a7165]">
                Based on {blend.reviewsCount || 28} verified botanical enthusiasts
              </p>
            </div>

            <div className="pt-6 border-t border-[#f0ece2] space-y-2 text-xs text-[#3c5445]">
              <div className="flex items-center justify-between">
                <span>5 Stars</span>
                <div className="w-32 bg-[#f0ece2] rounded-full h-2 overflow-hidden">
                  <div className="bg-[#233d2f] h-full w-[92%]" />
                </div>
                <span>92%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>4 Stars</span>
                <div className="w-32 bg-[#f0ece2] rounded-full h-2 overflow-hidden">
                  <div className="bg-[#233d2f] h-full w-[8%]" />
                </div>
                <span>8%</span>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-6 border border-[#e5dfd2] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#1b3425] text-sm mb-3">
                  {[...Array(5)].map((_, i) => (
                    <MdStar key={i} />
                  ))}
                </div>
                <p className="text-sm text-[#2d4637] leading-relaxed mb-4">
                  “The color and fresh aroma from this jar was unforgettable. You can clearly see the whole, uncrushed petals—feels truly artisanal and calming.”
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#f0ece2] text-xs">
                <span className="font-semibold text-[#1e392a]">Ananya Sharma</span>
                <span className="inline-flex items-center gap-1 text-[#4b6628] font-medium">
                  <MdVerified className="text-sm" /> Verified Buyer
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-6 border border-[#e5dfd2] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#1b3425] text-sm mb-3">
                  {[...Array(5)].map((_, i) => (
                    <MdStar key={i} />
                  ))}
                </div>
                <p className="text-sm text-[#2d4637] leading-relaxed mb-4">
                  “I steep this every evening. The freshness of the blend is incomparable to supermarket tea bags. Pure, uplifting botanical goodness.”
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#f0ece2] text-xs">
                <span className="font-semibold text-[#1e392a]">Vikram Malhotra</span>
                <span className="inline-flex items-center gap-1 text-[#4b6628] font-medium">
                  <MdVerified className="text-sm" /> Verified Buyer
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-8 py-12 lg:py-16 border-t border-[#ded8cb]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4b6628] mb-2.5 block">
              Common Questions
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[44px] text-[#1b3425] font-medium tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#475f50] max-w-xl mx-auto">
              Everything you need to know about our organic botanicals, brewing rituals, and pure formulations.
            </p>
          </motion.div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-2xl border border-[#e4ded0] bg-white/70 backdrop-blur-xs overflow-hidden transition-all duration-200 hover:border-[#cfc6b5]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4.5 text-left text-[#1b3425] hover:text-[#2d4d38] transition-colors cursor-pointer"
                  >
                    <span className="font-headline text-base sm:text-lg font-medium">
                      {faq.question}
                    </span>
                    <span
                      className={`text-2xl font-light text-[#4b6628] shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#475f50] leading-relaxed border-t border-[#f0ece2]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. RELATED BLENDS (EXPLORE MORE FROM CATALOG) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#f4f2ea] py-12 sm:py-16 border-t border-[#ded8cb]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#4b6628]">
                Complementary Infusions
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-[#1e392a] font-medium tracking-tight mt-1">
                You May Also Savor
              </h2>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#4b6628] hover:text-[#2e431a] transition-colors"
              >
                <span>Explore All 8 Blends</span>
                <span className="text-lg">→</span>
              </Link>

              {/* Mobile slider Prev / Next controls */}
              <div className="flex sm:hidden items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scrollSlider("left")}
                  aria-label="Previous blend"
                  className="w-8 h-8 rounded-full bg-white border border-[#4b6628]/25 flex items-center justify-center text-[#2e431a] shadow-2xs active:scale-90 transition-transform cursor-pointer"
                >
                  <MdChevronLeft className="text-xl" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollSlider("right")}
                  aria-label="Next blend"
                  className="w-8 h-8 rounded-full bg-[#3e5924] text-white flex items-center justify-center shadow-2xs active:scale-90 transition-transform cursor-pointer"
                >
                  <MdChevronRight className="text-xl" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Phone View: Horizontal Right-to-Left Snap Slider */}
          {/* Phone View: Horizontal Right-to-Left Snap Slider (All Products) */}
          <div className="sm:hidden">
            <div
              ref={sliderRef}
              onScroll={handleSliderScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-5 px-5 no-scrollbar scroll-smooth"
            >
              {allOtherBlends.map((item, idx) => (
                <div
                  key={item.id}
                  className="w-[82vw] max-w-[305px] shrink-0 snap-start flex flex-col"
                >
                  <TeaCard blend={item} index={idx} animate={false} />
                </div>
              ))}
            </div>

            {/* Mobile Slider Indicator & Counter */}
            <div className="flex items-center justify-between pt-3 text-xs text-[#597161]">
              <span className="font-medium">
                Blend {activeSlide + 1} of {allOtherBlends.length}
              </span>
              <div className="flex items-center gap-1.5">
                {allOtherBlends.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      if (!sliderRef.current) return;
                      const container = sliderRef.current;
                      const card = container.firstElementChild as HTMLElement | null;
                      const scrollDistance = card ? card.offsetWidth + 16 : 300;
                      container.scrollTo({
                        left: idx * scrollDistance,
                        behavior: "smooth",
                      });
                    }}
                    aria-label={`Go to blend ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSlide === idx
                        ? "w-6 bg-[#3e5924]"
                        : "w-1.5 bg-[#4b6628]/25 hover:bg-[#4b6628]/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Tablet & Desktop View: Responsive Multi-Column Grid (4 Products) */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {desktopRelatedBlends.map((item, idx) => (
              <TeaCard key={item.id} blend={item} index={idx} animate={false} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
