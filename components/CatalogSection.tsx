"use client";

import React from "react";
import Image from "next/image";
import TeaCard from "@/components/TeaCard";
import Reveal from "@/components/Reveal";
import { TEA_BLENDS } from "@/data/teaBlends";
import { MdVerified } from "react-icons/md";
import { motion } from "motion/react";

export default function CatalogSection() {
  return (
    <section
      className="relative w-full pt-5 pb-10 sm:py-14 md:py-20 overflow-hidden"
      id="catalog-blends"
    >
      {/* Products Botanical Background Image */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/banners/cataloge-background.png"
          alt="House of Gardens products botanical background"
          fill
          className="object-cover object-bottom"
          sizes="100vw"
          priority
        />
        {/* Soft warm overlay to harmonize with cards */}
        <div className="absolute inset-0 bg-[#fef8e2]/20" />
      </motion.div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <Reveal
          className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 md:mb-16 gap-2.5 sm:gap-4 md:gap-6"
          y={25}
          duration={0.8}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#4b6628]/10 border border-[#4b6628]/20 text-[#324519] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2.5 backdrop-blur-xs">
              <span>Botanical Archive</span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-medium uppercase tracking-tight text-[#324519]">
              Signature Jar Blends
            </h2>
          </div>
          <div className="bg-white/95 text-[#4b6628] border border-[#4b6628]/20 px-4 py-2 sm:px-5 sm:py-3 rounded-2xl shadow-sm text-xs font-bold uppercase tracking-wider flex items-center gap-2 self-start md:self-auto backdrop-blur-xs">
            <MdVerified className="text-[18px]" />
            <span>8 Signature Formulations</span>
          </div>
        </Reveal>

        {/* 8 Signature Blends Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEA_BLENDS.map((blend, index) => (
            <TeaCard key={blend.id} blend={blend} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
