import React from "react";
import Image from "next/image";
import Link from "next/link";

const promoBanners = [
  {
    id: "tea-of-the-month",
    title: "Tea of the Month - Flat 30% Off Roseherb Green Tea",
    alt: "Tea of the Month - Golden Tips Roseherb Green Tea Flat 30% Off",
    imageSrc: "/banners/Middle-banner_5_1024x.webp",
    link: "",
  },
  {
    id: "instant-premix-teas",
    title: "Introducing Instant Premix Teas - Pure Flavor, Ready in Seconds",
    alt: "Introducing Instant Premix Teas - Cardamom, Ginger, Saffron, Masala Chai",
    imageSrc: "/banners/premix-tea-middle-banner_1024x.webp",
    link: "",
  },
];

export default function PromoBanners() {
  return (
    <section
      className="w-full py-8 md:py-20 bg-[#ffff]"
      aria-label="Featured Promotions and Offers"
    >
      <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {promoBanners.map((banner) => {
            const isExternal = banner.link.startsWith("http");

            return (
              <Link
                key={banner.id}
                href={banner.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group relative block w-full aspect-[1024/397] overflow-hidden rounded-[6px] shadow-md hover:shadow-xl transition-all duration-500 border border-white/25 cursor-pointer bg-[#fefef8]/10"
              >
                {/* Smooth Zoom In / Zoom Out Image Container */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={banner.imageSrc}
                    alt={banner.alt}
                    fill
                    className="object-cover object-center transform transition-transform duration-700 ease-in-out group-hover:scale-105 select-none"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                  />
                  {/* Subtle shine overlay on hover */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 pointer-events-none" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
