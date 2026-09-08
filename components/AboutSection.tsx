import React from "react";
import Image from "next/image";
import {
  MdVerified,
  MdEco,
  MdBlock,
  MdHealthAndSafety,
  MdWaterDrop,
  MdSpa,
  MdShield,
  MdArrowForward,
} from "react-icons/md";
import { IconType } from "react-icons";

interface BenefitItem {
  icon: IconType;
  text: string;
  fullSpan?: boolean;
}

const BENEFITS: BenefitItem[] = [
  { icon: MdVerified, text: "No Artificial Colors" },
  { icon: MdEco, text: "100% Organic" },
  { icon: MdBlock, text: "No Preservatives" },
  { icon: MdHealthAndSafety, text: "Reduces Inflammation" },
  { icon: MdWaterDrop, text: "Mild in Texture" },
  { icon: MdSpa, text: "Great Way to Unwind" },
  { icon: MdShield, text: "Packed with Antioxidants", fullSpan: true },
];

export default function AboutSection() {
  return (
    <section
      className="w-full bg-[#fefef8] py-16 md:py-24 relative overflow-hidden"
      id="about-us"
    >
      {/* Decorative leafy background accents */}
      <div className="absolute top-10 right-[-5%] w-72 h-72 rounded-full bg-[#8ca865]/10 filter blur-2xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6">
        {/* About Us Green Header Pill matching Catalog Page 2 */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-[#6f8f41] text-[#fefef8] px-10 py-3 rounded-full shadow-md transform -rotate-1 mb-6">
            <h2 className="font-display italic text-3xl md:text-4xl font-normal tracking-wide">
              About Us
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <p className="font-headline font-bold text-xl md:text-2xl text-[#3b4c23] leading-relaxed">
              Started from our own house with a vision of catering{" "}
              <span className="text-[#835427] underline decoration-[#8ca865] underline-offset-4">
                holistic wellness
              </span>
              , quality and authenticity.
            </p>
            <p className="font-headline italic text-lg md:text-xl text-[#55693c] leading-relaxed max-w-2xl mx-auto">
              HOG curates the finest tea buds and crafts them into tea blends
              infused with health and warmth.
            </p>
          </div>
        </div>

        {/* "Our tea blends offer" Feature Container (from Catalog Page 2) */}
        <div className="mt-8 max-w-4xl mx-auto bg-[#f8f7ee] border-2 border-[#8ca865]/30 rounded-[32px] p-8 md:p-12 shadow-sm relative">
          {/* Green Pill Badge on top of card */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#647f3b] text-[#fefef8] px-8 py-2.5 rounded-full font-headline font-bold text-lg tracking-wide shadow-md">
            Our tea blends offer
          </div>

          {/* 7 Verified Badge Items with React Icons (Exact items from Catalog Page 2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-5 gap-x-8 pt-4">
            {BENEFITS.map((b) => {
              const IconComponent = b.icon;
              return (
                <div
                  key={b.text}
                  className={`flex items-center gap-3 bg-white p-3.5 rounded-2xl shadow-xs border border-[#8ca865]/20 ${
                    b.fullSpan ? "sm:col-span-2 justify-center" : ""
                  }`}
                >
                  <span className="w-8 h-8 rounded-full bg-[#8ca865]/20 flex items-center justify-center text-[#647f3b] shrink-0">
                    <IconComponent className="text-[18px]" />
                  </span>
                  <span className="font-headline font-bold text-[#2d3a1a] text-base">
                    {b.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Bottom miniature tea flight photo from Page 2 */}
          <div className="mt-8 pt-6 border-t border-[#8ca865]/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#8ca865] shadow shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvPMF9lqD6cPYu4JnD7XSg8k_DBNytr7yEoDabE6i_DtZbI9CDR8ffhhppRaPXqcvmdSXrvMgyzfNw122mLxoaTaeLQ6Dsoxx8UZI89U9Xn2FGO0iORxDY-CriDE5Hhn4LBIwnJ8huCr19KMVG9ol_4gB7sKhVr7qC29bA4BnDl6XtunbzlnVcX8yZwIDqcNb_CkS-YkJ2D93lCB2g_YYpfRQ3lpCkARMn-57g8ZiW3G3Ejs-P25d2"
                  alt="Tea tasting array"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-headline font-bold text-sm text-[#2d3a1a]">
                  Whole Bud Alchemy
                </h4>
                <p className="text-xs text-[#55693c]">
                  Fresh steeped batches highlighting natural floral tints and
                  soothing hues.
                </p>
              </div>
            </div>
            <a
              className="text-xs font-bold text-[#4b6628] uppercase tracking-wider underline hover:text-[#835427] flex items-center gap-1.5 shrink-0"
              href="#catalog-blends"
            >
              <span>View all botanical blends</span>
              <MdArrowForward className="text-[14px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
