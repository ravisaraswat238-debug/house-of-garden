import React from "react";
import Image from "next/image";
import TeaCard from "@/components/TeaCard";
import { TEA_BLENDS } from "@/data/teaBlends";
import { MdVerified } from "react-icons/md";

export default function CatalogSection() {
  return (
    <section
      className="relative w-full py-20 overflow-hidden"
      id="catalog-blends"
    >
      {/* Products Botanical Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/banners/watermark-removed-Gemini_Generated_Image_lodz7slodz7slodz.png"
          alt="House of Gardens products botanical background"
          fill
          className="object-cover object-bottom"
          sizes="100vw"
          priority
        />
        {/* Soft warm overlay to harmonize with cards */}
        <div className="absolute inset-0 bg-[#fef8e2]/20" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4b6628]/10 border border-[#4b6628]/20 text-[#324519] text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-xs">
              <span>Botanical Archive</span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#324519]">
              Signature Jar Blends
            </h2>
          </div>
          <div className="bg-white/95 text-[#4b6628] border border-[#4b6628]/20 px-5 py-3 rounded-2xl shadow-sm text-xs font-bold uppercase tracking-wider flex items-center gap-2 self-start md:self-auto backdrop-blur-xs">
            <MdVerified className="text-[18px]" />
            <span>8 Signature Formulations</span>
          </div>
        </div>

        {/* 8 Signature Blends Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEA_BLENDS.map((blend) => (
            <TeaCard key={blend.id} blend={blend} />
          ))}
        </div>
      </div>
    </section>
  );
}
