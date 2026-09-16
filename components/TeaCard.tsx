import React from "react";
import Image from "next/image";
import { TeaBlend } from "@/types/tea";
import { MdCheck } from "react-icons/md";

interface TeaCardProps {
  blend: TeaBlend;
}

export default function TeaCard({ blend }: TeaCardProps) {
  const FooterIconComponent = blend.footerIcon;

  return (
    <div className="bg-white rounded-[16px] overflow-hidden p-3 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-black/5 hover:-translate-y-1">
      <div>
        {/* Top Product Image Container */}
        <div className="w-full aspect-[4/3] rounded-xl bg-[#fafaf7] border border-gray-100 overflow-hidden relative">
          <Image
            src={blend.imageSrc}
            alt={blend.imageAlt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        {/* Product Title */}
        <h3 className="font-headline font-extrabold text-xl sm:text-xl tracking-tight text-[#8c4a20] uppercase mt-4 mb-2 leading-snug">
          {blend.name}
        </h3>

        {/* Benefits Checklist */}
        <ul className="space-y-2.5 mb-4 text-sm text-[#475569] font-medium">
          {blend.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center gap-2.5">
              <MdCheck className="text-[18px] text-[#8c4a20] shrink-0" />
              <span className="leading-tight">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer: Aroma/Trait Note & Price */}
      <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-[#5a6b82] font-medium">
          <FooterIconComponent className="text-[18px] shrink-0" />
          <span>{blend.footerLabel}</span>
        </div>
        <span className="text-[#8c4a20] font-bold text-base tracking-tight">
          {blend.price || "500/-"}
        </span>
      </div>
    </div>
  );
}
