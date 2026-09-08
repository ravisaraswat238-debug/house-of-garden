import React from "react";
import { MdLocalFlorist, MdPublic, MdCheckCircle } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-[#3d5122] text-[#fefef8] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#fefef8] p-1 flex items-center justify-center">
                <MdLocalFlorist className="text-[24px] text-[#4b6628]" />
              </div>
              <div>
                <span className="font-headline font-extrabold text-lg text-white uppercase tracking-tight block">
                  House of Gardens
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#fed488] uppercase font-semibold">
                  Brewing Wellness
                </span>
              </div>
            </div>
            <p className="text-xs text-white/80 leading-relaxed max-w-sm mb-4">
              Started from our own house with a vision of catering holistic
              wellness, quality and authenticity. HOG curates the finest tea
              buds and crafts them into tea blends infused with health and
              warmth.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#fed488] font-semibold">
              <MdPublic className="text-[16px]" />
              <a
                className="hover:underline"
                href="https://www.brewingwellness.store"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.brewingwellness.store
              </a>
            </div>
          </div>

          {/* 8 Blends Directory */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#fed488] mb-4">
              Botanical Tea Directory
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-white/80">
              <a className="hover:text-white transition-colors" href="#catalog-blends">
                • Hibiscus Flower Tea
              </a>
              <a className="hover:text-white transition-colors" href="#catalog-blends">
                • Blue Butterfly Pea
              </a>
              <a className="hover:text-white transition-colors" href="#catalog-blends">
                • Elaichi Green Tea
              </a>
              <a className="hover:text-white transition-colors" href="#catalog-blends">
                • Rose Green Tea
              </a>
              <a className="hover:text-white transition-colors" href="#catalog-blends">
                • Darjeeling Green
              </a>
              <a className="hover:text-white transition-colors" href="#catalog-blends">
                • Lavender Green
              </a>
              <a className="hover:text-white transition-colors" href="#catalog-blends">
                • Peach Green Tea
              </a>
              <a className="hover:text-white transition-colors" href="#catalog-blends">
                • Silver Needle White
              </a>
            </div>
          </div>

          {/* Wellness Standards */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#fed488] mb-4">
              Our Integrity Standard
            </h4>
            <ul className="text-xs space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <MdCheckCircle className="text-[15px] text-[#fed488] shrink-0" />
                <span>100% Organic certified leaves</span>
              </li>
              <li className="flex items-center gap-2">
                <MdCheckCircle className="text-[15px] text-[#fed488] shrink-0" />
                <span>Zero Artificial Colorants</span>
              </li>
              <li className="flex items-center gap-2">
                <MdCheckCircle className="text-[15px] text-[#fed488] shrink-0" />
                <span>Zero Chemical Preservatives</span>
              </li>
              <li className="flex items-center gap-2">
                <MdCheckCircle className="text-[15px] text-[#fed488] shrink-0" />
                <span>Whole Flower &amp; Bud Cuts Only</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Domain Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2025 House of Gardens (HOG). Brewing Wellness. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Official Catalog Edition</span>
            <a
              className="hover:text-[#fed488] transition-colors"
              href="https://www.brewingwellness.store"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Online Shop
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
