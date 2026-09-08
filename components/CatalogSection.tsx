import React from "react";
import TeaCard from "@/components/TeaCard";
import { TEA_BLENDS } from "@/data/teaBlends";
import { MdVerified } from "react-icons/md";

export default function CatalogSection() {
  return (
    <section
      className="w-full bg-[#8ca865] py-20 text-[#1b1c19] relative"
      id="catalog-blends"
    >
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-[#fefef8]">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 text-[#fefef8] text-xs font-bold uppercase tracking-widest mb-3">
              <span>Botanical Archive</span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              Signature Jar Blends
            </h2>
            <p className="font-display italic text-xl text-[#f6f5ea] mt-2">
              Every jar hand-packed with whole flower buds, therapeutic spices,
              and tender estate leaves.
            </p>
          </div>
          <div className="bg-[#fefef8] text-[#4b6628] px-5 py-3 rounded-2xl shadow-sm text-xs font-bold uppercase tracking-wider flex items-center gap-2 self-start md:self-auto">
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
