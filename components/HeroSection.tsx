import React from "react";
import Image from "next/image";
import {
  MdWorkspacePremium,
  MdCheckCircle,
  MdArrowDownward,
  MdOpenInNew,
  MdAir,
  MdLocalFlorist,
} from "react-icons/md";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#8ca865] pt-12 pb-24 md:pt-16 md:pb-32">
      {/* Organic decorative background curve elements */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#97b370] rounded-full filter blur-3xl opacity-50 -z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#7d9b56] rounded-full filter blur-2xl opacity-60 -z-0 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Block */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fefef8]/15 backdrop-blur-md border border-white/20 text-[#fefef8] text-xs uppercase tracking-[0.2em] font-semibold w-fit mb-6">
              <MdWorkspacePremium className="text-[16px] text-[#f8f7ee]" />
              Official Product Catalogue
            </div>
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#fefef8] tracking-tight uppercase leading-[0.95] mb-6">
              House of
              <br />
              Gardens
            </h1>
            <div className="w-20 h-1.5 bg-[#fefef8] rounded-full mb-6" />
            <p className="font-display italic text-2xl md:text-3xl text-[#fefef8] font-normal leading-snug mb-4">
              &ldquo;Brewing Wellness — Handcrafted Botanical Tea Blends&rdquo;
            </p>
            <p className="font-body text-[#fefef8]/90 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              Started from our own house with a vision of catering holistic
              wellness, quality and authenticity. HOG curates the finest whole
              tea buds and crafts them into infusions infused with health and
              warmth.
            </p>

            {/* Key Trust Tags from Catalog Page 2 */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fefef8] text-[#4b6628] text-xs font-bold tracking-wide shadow-sm">
                <MdCheckCircle className="text-[15px] text-[#4b6628]" /> 100%
                Organic
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fefef8] text-[#4b6628] text-xs font-bold tracking-wide shadow-sm">
                <MdCheckCircle className="text-[15px] text-[#4b6628]" /> No
                Artificial Colors
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fefef8] text-[#4b6628] text-xs font-bold tracking-wide shadow-sm">
                <MdCheckCircle className="text-[15px] text-[#4b6628]" /> No
                Preservatives
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                className="px-8 py-3.5 bg-[#fefef8] text-[#4b6628] font-headline font-bold text-sm tracking-wider uppercase rounded-full shadow-lg hover:bg-[#f6f5ea] hover:scale-105 transition-all flex items-center gap-2"
                href="#catalog-blends"
              >
                <span>Explore 8 Signature Blends</span>
                <MdArrowDownward className="text-[18px]" />
              </a>
              <a
                className="px-7 py-3.5 bg-transparent border-2 border-[#fefef8] text-[#fefef8] font-headline font-bold text-sm tracking-wider uppercase rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
                href="https://www.brewingwellness.store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>www.brewingwellness.store</span>
                <MdOpenInNew className="text-[16px]" />
              </a>
            </div>
          </div>

          {/* Right Visual Block (Catalog Page 1 Cover Styling) */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Outer organic shape card mimicking the catalogue cover */}
            <div className="relative w-full max-w-[460px] aspect-[3/4] bg-[#fefef8] p-4 rounded-[40px] shadow-2xl overflow-hidden border-8 border-white/40">
              {/* Top & Bottom wavy mask styling */}
              <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-gradient-to-b from-[#8ca865]/30 to-[#f6f5ea] flex flex-col justify-between p-6">
                {/* Background authentic cup photo */}
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3iH_dT06BtLm-GFEx-RN3QhuqbkEOXU2N_hMISWdr3jylU3xQj4zezvLByAi5R8aULBAN9LZUAQnl5fiFmBEzWfFCZ-KlX72S4AeKTMa2sItdxiRVMDw6QoOgti0K4IeTaBDMgW_VAJObPK-znCS-OCPpuO7dy2R4-jbws1AlVaPMC0ZyssZSv0PHTNR8UQseWr_x6ZVEea4kNRMU2K8K7ak-Ikd-utQeZ8DH5WXhr0vx-k9TokDb"
                  alt="House of Gardens Brewing Wellness fresh tea preparation"
                  fill
                  className="object-cover mix-blend-multiply opacity-85"
                  priority
                />

                {/* Overlay wavy green framing imitating catalog design */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 400 550"
                  aria-hidden="true"
                >
                  <path
                    d="M0,0 L200,0 C120,80 180,180 80,240 C-10,290 50,420 0,550 L0,550 Z"
                    fill="#8ca865"
                    fillOpacity="0.88"
                  />
                  <path
                    d="M400,0 L280,0 C340,90 310,180 390,260 L400,280 Z"
                    fill="#8ca865"
                    fillOpacity="0.75"
                  />
                  <path
                    d="M400,320 C320,380 300,460 400,550 L400,550 Z"
                    fill="#8ca865"
                    fillOpacity="0.85"
                  />
                </svg>

                {/* Steam vector badge as in cover */}
                <div className="relative z-10 flex flex-col items-start gap-2">
                  <div className="bg-[#fefef8]/90 backdrop-blur-sm p-3 rounded-2xl shadow-md border border-[#8ca865]/30">
                    <MdAir className="text-[36px] text-[#647f3b]" />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest font-extrabold text-[#4b6628] bg-white/90 px-3 py-1 rounded-full shadow">
                    Fresh Handcrafted Steeping
                  </span>
                </div>

                {/* Center Emblem Stamp */}
                <div className="relative z-10 self-center bg-[#fefef8] p-4 rounded-full shadow-xl flex flex-col items-center justify-center text-center w-36 h-36 border-4 border-[#8ca865]/40">
                  <MdLocalFlorist className="text-[32px] text-[#4b6628]" />
                  <span className="text-[10px] font-extrabold uppercase tracking-tight text-[#4b6628] mt-1">
                    House of Gardens
                  </span>
                  <span className="text-[8px] uppercase tracking-widest text-[#835427] font-semibold">
                    Brewing Wellness
                  </span>
                </div>

                {/* Bottom Catalog Badge */}
                <div className="relative z-10 bg-[#4b6628] text-[#fefef8] py-2.5 px-4 rounded-xl text-center shadow-lg">
                  <span className="block text-xs uppercase font-extrabold tracking-widest">
                    Product Catalogue 2025
                  </span>
                  <span className="text-[10px] text-[#fefef8]/80">
                    Available online at www.brewingwellness.store
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy Bottom Transition to Cream Section */}
      <div className="w-full absolute bottom-0 left-0 leading-none overflow-hidden">
        <svg
          className="relative block w-full h-12 md:h-20"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          aria-hidden="true"
        >
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
            fill="#fefef8"
          />
        </svg>
      </div>
    </section>
  );
}
