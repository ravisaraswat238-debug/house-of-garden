import React from "react";
import { MdEco, MdLocalFlorist, MdNorthEast } from "react-icons/md";

const announcementItems = [
  {
    icon: <MdEco className="text-[14px] text-[#fed488] shrink-0" />,
    text: "BREWING WELLNESS • 100% ORGANIC • NO ARTIFICIAL COLORS • NO PRESERVATIVES",
  },
  {
    icon: <MdLocalFlorist className="text-[14px] text-[#fed488] shrink-0" />,
    text: "MATCHA MOMENTS — BUY 1 GET 1 FREE",
    badge: "SPECIAL OFFER",
  },
  {
    icon: <MdEco className="text-[14px] text-[#fed488] shrink-0" />,
    text: "AUTHENTIC WHOLE FLOWER BUDS & HERBAL INFUSIONS",
  },
  {
    icon: <MdNorthEast className="text-[13px] text-[#fed488] shrink-0" />,
    text: "House of Gardens",
    link: "",
  },
];

const Track = ({ ariaHidden }: { ariaHidden?: boolean }) => (
  <div
    className="flex shrink-0 items-center"
    aria-hidden={ariaHidden ? "true" : undefined}
  >
    {/* Duplicate list within track to ensure ample width on all screens */}
    {[...announcementItems, ...announcementItems].map((item, idx) => (
      <div
        key={idx}
        className="inline-flex items-center gap-2 mx-5 sm:mx-8 whitespace-nowrap text-xs font-bold tracking-widest uppercase text-[#fefef8]"
      >
        {item.icon}
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#fed488] underline underline-offset-2 transition-colors font-extrabold"
          >
            {item.text}
          </a>
        ) : (
          <span>{item.text}</span>
        )}
        {item.badge && (
          <span className="bg-[#fed488] text-[#334b18] text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-wider">
            {item.badge}
          </span>
        )}
        <span className="text-white/30 ml-4 font-normal">•</span>
      </div>
    ))}
  </div>
);

export default function TopBanner() {
  return (
    <div
      className="relative w-full bg-[#5f7935] overflow-hidden border-b border-white/10 py-2.5 z-40 select-none"
      role="region"
      aria-label="Announcements"
    >
      {/* Continuous seamlessly looping marquee */}
      <div className="animate-marquee">
        <Track />
        <Track ariaHidden />
      </div>
    </div>
  );
}
