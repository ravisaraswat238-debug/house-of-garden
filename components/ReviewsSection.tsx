"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  MdStar,
  MdVerified,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import { motion } from "motion/react";
import Reveal from "@/components/Reveal";

interface Review {
  id: string;
  name: string;
  timeAgo: string;
  rating: number;
  blend: string;
  comment: string;
  avatarUrl?: string;
  initials: string;
}

const reviewsData: Review[] = [
  {
    id: "1",
    name: "Vikrant Badal",
    timeAgo: "9 months ago",
    rating: 5,
    blend: "Elaichi Green Tea",
    initials: "VB",
    avatarUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
    comment:
      "House of Gardens teas have a pleasant, well-balanced fragrance that feels fresh and comforting for personal use. It lasts long without being overpowering, making it suitable for daily wellness. Overall, it's a truly refreshing experience.",
  },
  {
    id: "2",
    name: "Mansi Srivastava",
    timeAgo: "5 months ago",
    rating: 5,
    blend: "Hibiscus Flower Tea",
    initials: "MS",
    comment:
      "It's long-lasting, luxurious, and perfect. A well-balanced botanical fragrance and infusion suitable for someone who enjoys a mix of freshness and natural warmth. Whole flower cuts make a visible difference.",
  },
  {
    id: "3",
    name: "Krishna Goel",
    timeAgo: "6 months ago",
    rating: 5,
    blend: "Blue Butterfly Pea",
    initials: "KG",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    comment:
      "The Blue Butterfly Pea is an absolute showstopper! Pure vibrant petals with zero artificial colorant or additives. When you add a slice of lemon, the violet hue and gentle floral notes are simply magical.",
  },
  {
    id: "4",
    name: "Ananya Deshmukh",
    timeAgo: "3 months ago",
    rating: 5,
    blend: "Darjeeling Green",
    initials: "AD",
    comment:
      "Darjeeling Green has replaced my morning coffee routine entirely. Extremely smooth with none of that harsh bitterness you get from standard tea bags. You can see the whole rolled leaves unfurling in the teapot.",
  },
  {
    id: "5",
    name: "Dr. Rajesh Iyer",
    timeAgo: "2 months ago",
    rating: 5,
    blend: "Silver Needle White",
    initials: "RI",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    comment:
      "As someone meticulous about wellness and antioxidants, HOG's Silver Needle White is pristine quality. Delicate sweetness, silky texture, and completely unadulterated. Highly recommended for mindful health practitioners.",
  },
  {
    id: "6",
    name: "Pooja Sengupta",
    timeAgo: "1 month ago",
    rating: 5,
    blend: "Rose Green Tea",
    initials: "PS",
    comment:
      "The real dried rose petals in the Rose Green tea give off the most calming aroma even before steeping. The tin packaging is gorgeous on my kitchen shelf and keeps every batch fresh.",
  },
];

export default function ReviewsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleUpdate = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 8);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8);
    };

    const rId = requestAnimationFrame(handleUpdate);
    container.addEventListener("scroll", handleUpdate, { passive: true });
    window.addEventListener("resize", handleUpdate);
    return () => {
      cancelAnimationFrame(rId);
      container.removeEventListener("scroll", handleUpdate);
      window.removeEventListener("resize", handleUpdate);
    };
  }, []);

  const scrollNext = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const firstCard = container.querySelector<HTMLElement>("[data-review-card]");
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 320; // 16px gap

    // If at or near the end, loop smoothly back to the beginning
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const firstCard = container.querySelector<HTMLElement>("[data-review-card]");
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 320; // 16px gap
    if (direction === "left") {
      container.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    } else {
      scrollNext();
    }
  };

  // Automatically move one step forward every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (document.visibilityState === "visible") {
        scrollNext();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="customer-reviews"
      className="w-full bg-[#fcfbf7] py-10 sm:py-16 lg:py-24 border-t border-[#4b6628]/10 overflow-hidden"
      aria-label="Customer Reviews"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16" y={25} duration={0.75}>
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="h-[1.5px] w-8 bg-[#9eb67f]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#557335]">
              Real Experiences
            </span>
            <span className="h-[1.5px] w-8 bg-[#9eb67f]" />
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-5xl font-light text-[#1e2e13] tracking-tight leading-[1.15]">
            Loved by Tea Seekers Across the Country
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#617351] leading-relaxed">
            Genuine reflections from our community of mindful tea drinkers, herbal
            enthusiasts, and daily wellness practitioners.
          </p>
        </Reveal>

        {/* Carousel & Summary Row */}
        <div className="relative flex flex-col lg:flex-row items-stretch gap-5 lg:gap-6">
          {/* 1. Left Fixed Aggregate Rating Card (No shadow, clean pop up effect) */}
          <motion.div
            className="w-full lg:w-[280px] xl:w-[300px] shrink-0 bg-white rounded-2xl sm:rounded-[24px] border border-[#4b6628]/20 p-7 sm:p-8 flex flex-col items-center justify-between text-center transition-transform duration-300 hover:-translate-y-1.5"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full pt-2">
              <span className="font-headline font-black text-xl sm:text-2xl tracking-wider text-[#1e2e13] block">
                EXCELLENT
              </span>

              {/* 5 Golden Stars */}
              <div className="flex items-center justify-center gap-1.5 my-4 text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <MdStar key={i} className="text-2xl sm:text-[26px]" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#4b5563] font-medium">
                Based on <strong className="text-[#1e2e13] font-bold">140+ reviews</strong>
              </p>
            </div>

            <div className="w-full pt-6 border-t border-[#4b6628]/10 mt-6">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#557335] block">
                GENUINE CUSTOMER REVIEWS
              </span>
              <span className="text-[10px] text-gray-400 mt-1 block font-medium">
                100% Verified Purchases
              </span>
            </div>
          </motion.div>

          {/* 2. Full Cards Horizontal Slider (No cut-off cards, exact full card scroll) */}
          <div
            className="relative flex-1 min-w-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Left Nav Arrow Button (only visible when can scroll left) */}
            {canScrollLeft && (
              <button
                onClick={() => handleScroll("left")}
                aria-label="Previous review"
                className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white text-[#2a3c18] border border-[#4b6628]/25 transition-all flex items-center justify-center cursor-pointer hover:bg-[#3e5924] hover:text-white hover:border-[#3e5924] hover:scale-110 active:scale-95"
              >
                <MdChevronLeft className="text-2xl" />
              </button>
            )}

            {/* Right Nav Arrow Button (only visible when can scroll right) */}
            {canScrollRight && (
              <button
                onClick={() => handleScroll("right")}
                aria-label="Next review"
                className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white text-[#2a3c18] border border-[#4b6628]/25 transition-all flex items-center justify-center cursor-pointer hover:bg-[#3e5924] hover:text-white hover:border-[#3e5924] hover:scale-110 active:scale-95"
              >
                <MdChevronRight className="text-2xl" />
              </button>
            )}

            {/* Scrolling Track Container - Exactly fits full cards with zero cutting */}
            <div
              ref={scrollContainerRef}
              className="flex items-stretch gap-4 overflow-x-hidden scroll-smooth snap-x snap-mandatory py-2 px-1 select-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {reviewsData.map((review, index) => {
                const isExpanded = expandedId === review.id;
                const isLongText = review.comment.length > 130;
                const displayText =
                  isLongText && !isExpanded
                    ? `${review.comment.slice(0, 130)}...`
                    : review.comment;

                return (
                  <motion.div
                    key={review.id}
                    data-review-card
                    className="w-full sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-32px)/3)] shrink-0 snap-start bg-white rounded-2xl sm:rounded-[24px] border border-[#4b6628]/18 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:scale-[1] hover:border-[#4b6628]/45"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.75,
                      delay: (index % 3) * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div>
                      {/* Customer Header */}
                      <div className="flex items-center gap-3 mb-3.5">
                        {review.avatarUrl ? (
                          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#d6dec4]">
                            <Image
                              src={review.avatarUrl}
                              alt={review.name}
                              fill
                              className="object-cover"
                              sizes="40px"
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3e5924] to-[#5d7c38] text-white flex items-center justify-center font-bold text-xs shrink-0">
                            {review.initials}
                          </div>
                        )}

                        <div className="min-w-0 flex-1">
                          <h4 className="font-headline font-bold text-sm text-[#1e2e13] truncate">
                            {review.name}
                          </h4>
                          <span className="text-[11px] text-gray-400 block">
                            {review.timeAgo}
                          </span>
                        </div>
                      </div>

                      {/* Stars & Verified Buyer Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-0.5 text-[#f59e0b]">
                          {[...Array(review.rating)].map((_, i) => (
                            <MdStar key={i} className="text-[17px]" />
                          ))}
                        </div>
                        <span
                          title="Verified Buyer"
                          className="inline-flex items-center text-[#2563eb]"
                        >
                          <MdVerified className="text-[17px]" />
                        </span>
                      </div>

                      {/* Blend Tag */}
                      <div className="mb-3">
                        <span className="inline-block text-[10px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-md bg-[#eef3e5] text-[#3e5823] border border-[#4b6628]/15">
                          {review.blend}
                        </span>
                      </div>

                      {/* Review Comment */}
                      <p className="text-xs sm:text-[13px] text-[#4b5563] leading-relaxed">
                        {displayText}
                      </p>
                    </div>

                    {/* Read more toggle */}
                    {isLongText && (
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : review.id)
                        }
                        className="text-[11px] font-semibold text-[#557335] hover:text-[#2d4217] mt-3 self-start hover:underline cursor-pointer"
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
