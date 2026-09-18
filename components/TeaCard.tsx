"use client";

import React from "react";
import Image from "next/image";
import { TeaBlend } from "@/types/tea";
import { MdCheck, MdVisibility, MdShoppingBag } from "react-icons/md";
import { motion } from "motion/react";

interface TeaCardProps {
  blend: TeaBlend;
  index?: number;
}

export default function TeaCard({ blend, index = 0 }: TeaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
  duration: 1.6,
  ease: [0.22, 1, 0.36, 1],
  delay: (index % 4) * 0.18,
}}
      className="h-full flex flex-col"
    >
      <div className="bg-white rounded-[16px] overflow-hidden p-3.5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-black/5 hover:-translate-y-1 h-full">
        <div>
          {/* Top Product Image Container */}
          <div className="w-full aspect-square rounded-xl bg-[#fafaf7] border border-gray-100 overflow-hidden relative">
            <Image
              src={blend.imageSrc}
              alt={blend.imageAlt}
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>

          {/* Product Title */}
          <h3 className="font-headline font-extrabold text-xl sm:text-xl tracking-tight text-[#8c4a20] uppercase mt-4 mb-2 leading-snug">
            {blend.name}
          </h3>

          {/* Benefits Checklist */}
          <ul className="space-y-2.5 mb-3 text-sm text-[#475569] font-medium">
            {blend.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-2.5">
                <MdCheck className="text-[18px] text-[#8c4a20] shrink-0" />
                <span className="leading-tight">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Price Display below Benefits List */}
          <div className="flex items-baseline gap-1 pt-1 pb-3 text-[#8c4a20]">
            <span className="font-extrabold text-2xl tracking-tight">
              {blend.price || "₹500"}
            </span>
            {blend.weight && (
              <span className="text-xs font-semibold text-[#8c4a20]/75">
                /{blend.weight}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer: View & Buy Action Buttons in Bottom Corners */}
        <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2 mt-auto">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-[#4b6628]/30 hover:border-[#4b6628] bg-[#fafaf6] hover:bg-[#f1f3ea] text-[#34481c] font-bold text-xs uppercase tracking-wider transition-all duration-200 text-center cursor-pointer active:scale-95 shadow-2xs"
            aria-label={`View details for ${blend.name}`}
          >
            <MdVisibility className="text-base shrink-0" />
            <span>View</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#4b6628] hover:bg-[#3b5220] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 text-center cursor-pointer active:scale-95 shadow-xs hover:shadow-md"
            aria-label={`Buy ${blend.name}`}
          >
            <MdShoppingBag className="text-base shrink-0" />
            <span>Buy</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
