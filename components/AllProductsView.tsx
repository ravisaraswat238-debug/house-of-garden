"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { TEA_BLENDS } from "@/data/teaBlends";
import TeaCard from "@/components/TeaCard";
import { MdArrowBack, MdVerified, MdFilterList } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

type FilterCategory = "all" | "caffeine-free" | "green-tea" | "floral";

export default function AllProductsView() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const filteredBlends = useMemo(() => {
    switch (activeCategory) {
      case "caffeine-free":
        return TEA_BLENDS.filter(
          (b) =>
            b.caffeineLevel?.toLowerCase().includes("free") ||
            b.tag?.toLowerCase().includes("caffeine-free") ||
            b.id === "hibiscus-flower-tea" ||
            b.id === "blue-tea"
        );
      case "green-tea":
        return TEA_BLENDS.filter(
          (b) =>
            b.id.includes("green-tea") ||
            b.ingredients?.some((ing) => ing.toLowerCase().includes("green tea"))
        );
      case "floral":
        return TEA_BLENDS.filter(
          (b) =>
            b.badgeText?.toLowerCase().includes("flower") ||
            b.badgeText?.toLowerCase().includes("petal") ||
            b.id.includes("rose") ||
            b.id.includes("hibiscus") ||
            b.id.includes("blue") ||
            b.id.includes("lavender")
        );
      default:
        return TEA_BLENDS;
    }
  }, [activeCategory]);

  const categories: { id: FilterCategory; label: string; count: number }[] = [
    { id: "all", label: "All Blends", count: TEA_BLENDS.length },
    {
      id: "caffeine-free",
      label: "Caffeine-Free",
      count: TEA_BLENDS.filter(
        (b) =>
          b.caffeineLevel?.toLowerCase().includes("free") ||
          b.tag?.toLowerCase().includes("caffeine-free") ||
          b.id === "hibiscus-flower-tea" ||
          b.id === "blue-tea"
      ).length,
    },
    {
      id: "green-tea",
      label: "Green Teas",
      count: TEA_BLENDS.filter((b) => b.id.includes("green-tea")).length,
    },
    {
      id: "floral",
      label: "Floral Blossoms",
      count: TEA_BLENDS.filter(
        (b) =>
          b.id.includes("rose") ||
          b.id.includes("hibiscus") ||
          b.id.includes("blue") ||
          b.id.includes("lavender")
      ).length,
    },
  ];

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
          <span className="text-[#1e392a] font-semibold">Products</span>
        </nav>
      </div>

      {/* Products Heading Section */}
      <section className="relative w-full pt-6 pb-2">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
          <h1 className="font-headline text-2xl sm:text-3xl lg:text-5xl text-[#1b3425] font-medium tracking-tight">
            Products
          </h1>
        </div>
      </section>

      {/* Filter Tabs & Products Grid Section */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-8 pt-6 pb-16 sm:pb-20">
        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[#ded8cb]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5a7165]">
            <MdFilterList className="text-base text-[#4b6628]" />
            <span>Filter By:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#233d2f] text-[#FAF8F3] shadow-xs"
                      : "bg-white/80 hover:bg-white text-[#3c5445] hover:text-[#1b3425] border border-[#e0d9cb]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1.5 text-xs opacity-75 ${
                      isSelected ? "text-[#fed488]" : "text-[#5a7165]"
                    }`}
                  >
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredBlends.map((blend, index) => (
            <TeaCard key={blend.id} blend={blend} index={index} />
          ))}
        </div>

        {filteredBlends.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-[#5a7165] mb-4">No blends match this filter.</p>
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className="px-6 py-2.5 rounded-full bg-[#233d2f] text-white text-sm font-medium cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Value Pillars Strip */}
      <section className="w-full bg-[#eae5db] border-y border-[#dad3c4] py-12">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            <div className="flex flex-col items-start lg:px-6 lg:border-r lg:border-[#d5cebf]">
              <span className="font-headline font-semibold text-lg text-[#1e392a] mb-1">
                100% Pure &amp; Natural
              </span>
              <p className="text-sm text-[#546b5d] leading-relaxed">
                Whole botanical flowers and tender leaves with zero artificial flavors.
              </p>
            </div>
            <div className="flex flex-col items-start lg:px-6 lg:border-r lg:border-[#d5cebf]">
              <span className="font-headline font-semibold text-lg text-[#1e392a] mb-1">
                Sustainably Sourced
              </span>
              <p className="text-sm text-[#546b5d] leading-relaxed">
                Direct single-estate harvest from the mist-covered slopes of Darjeeling.
              </p>
            </div>
            <div className="flex flex-col items-start lg:px-6 lg:border-r lg:border-[#d5cebf]">
              <span className="font-headline font-semibold text-lg text-[#1e392a] mb-1">
                Small-Batch Blended
              </span>
              <p className="text-sm text-[#546b5d] leading-relaxed">
                Handcrafted in micro-batches to preserve essential botanical oils.
              </p>
            </div>
            <div className="flex flex-col items-start lg:px-6">
              <span className="font-headline font-semibold text-lg text-[#1e392a] mb-1">
                Airtight Glass Jars
              </span>
              <p className="text-sm text-[#546b5d] leading-relaxed">
                Packed in recyclable glass jars to preserve ultimate freshness and aroma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry & Guidance CTA Banner */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="bg-[#f2ece1] rounded-3xl p-8 sm:p-12 border border-[#ded5c2] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <span className="font-headline text-xs font-bold uppercase tracking-[0.25em] text-[#4b6628] mb-2.5 block">
              PERSONAL BOTANICAL GUIDANCE
            </span>
            <h2 className="font-headline text-xl sm:text-2xl lg:text-4xl text-[#1e392a] font-medium tracking-tight mb-3">
              Need Help Choosing Your Blend?
            </h2>
            <p className="text-[#475f50] text-sm sm:text-base leading-relaxed">
              Connect with our tea sommeliers on WhatsApp for customized blend recommendations, brewing rituals, or bulk order inquiries.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                "Hello House of Gardens, I would like guidance on selecting the right botanical tea blend."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#233d2f] hover:bg-[#1a2f24] text-[#FAF8F3] px-8 py-4 font-semibold text-base shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer group"
            >
              <FaWhatsapp className="text-2xl text-[#25D366] group-hover:scale-110 transition-transform duration-200" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
