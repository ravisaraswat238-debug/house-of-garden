import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import PromoBanners from "@/components/PromoBanners";
import InstagramSection from "@/components/InstagramSection";
import WellnessSection from "@/components/WellnessSection";
import InquirySection from "@/components/InquirySection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#8ca865]">
      {/* Top Banner (Catalog Identity) */}
      <TopBanner />

      {/* Main Sticky Navigation */}
      <Navbar />

      {/* Main Landing Page Content */}
      <main className="w-full flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 3. Featured Blends Catalog Showcase (8 Blends) */}
        <CatalogSection />

        {/* 4. Dual Promotional Banners with Zoom Effect */}
        <PromoBanners />

        {/* 5. Instagram Community & Infinite Reels Marquee */}
        <InstagramSection />

        {/* 5. Circadian Wellness Daily Flow */}
        <WellnessSection />

        {/* 2. About Us & Value Pillars */}
        <AboutSection />

        {/* 6. Verified Customer Reviews Carousel */}
        <ReviewsSection />

        {/* 7. Brewing Consultation & Catalog Inquiry */}
        <InquirySection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
