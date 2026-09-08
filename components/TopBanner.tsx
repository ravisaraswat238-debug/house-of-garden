import React from "react";
import { MdEco, MdNorthEast } from "react-icons/md";

export default function TopBanner() {
  return (
    <div className="w-full bg-[#5f7935] text-[#fefef8] py-2 px-4 text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-3 text-center border-b border-white/10">
      <MdEco className="text-[15px] text-[#fed488] shrink-0" />
      <span>
        BREWING WELLNESS • 100% ORGANIC • NO ARTIFICIAL COLORS • NO PRESERVATIVES
      </span>
      <span className="hidden md:inline text-white/40">•</span>
      <a
        className="hidden md:inline-flex items-center gap-1 underline underline-offset-2 hover:text-[#fed488] transition-colors"
        href="https://www.brewingwellness.store"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>www.brewingwellness.store</span>
        <MdNorthEast className="text-[13px]" />
      </a>
    </div>
  );
}
