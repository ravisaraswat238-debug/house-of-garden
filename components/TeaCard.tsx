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
    <div className="bg-[#fefef8] rounded-[28px] overflow-hidden p-5 shadow-lg flex flex-col justify-between border-2 border-white/60 hover:-translate-y-1 transition-transform">
      <div>
        {/* Badge Header Styled Like Catalog Page */}
        <div
          className={`${blend.headerColor} text-white py-2 px-4 rounded-xl text-center shadow-xs mb-4`}
        >
          <h3 className="font-headline font-extrabold text-sm uppercase tracking-wide">
            {blend.name}
          </h3>
        </div>

        {/* Jar Image Visual Representation */}
        <div
          className={`w-full aspect-[4/3] rounded-xl overflow-hidden ${
            blend.bgLightClass || "bg-gray-50"
          } mb-4 relative group`}
        >
          <Image
            src={blend.imageSrc}
            alt={blend.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div
            className={`absolute top-2 right-2 bg-white/95 px-2.5 py-1 rounded-full text-[10px] font-bold ${blend.tagColor} shadow`}
          >
            {blend.badgeText}
          </div>
        </div>

        {/* Catalog Benefits List */}
        <div className="space-y-2 mb-5">
          <h4
            className={`text-xs font-extrabold uppercase ${blend.benefitsTitleColor} tracking-wider`}
          >
            Health Profile:
          </h4>
          <ul className="text-xs space-y-1.5 text-gray-700">
            {blend.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <MdCheck
                  className={`text-[14px] ${blend.tagColor} shrink-0 mt-0.5`}
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Informational Profile Card Footer */}
      <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-gray-500">
        <span className="inline-flex items-center gap-1.5">
          <FooterIconComponent className="text-[14px]" />
          <span>{blend.footerLabel}</span>
        </span>
        <span className={`${blend.tagColor} font-bold`}>{blend.tag}</span>
      </div>
    </div>
  );
}
