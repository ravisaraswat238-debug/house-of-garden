import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CatalogSection from "@/components/CatalogSection";
import BrewingGuideSection from "@/components/BrewingGuideSection";
import WellnessSection from "@/components/WellnessSection";
import InquirySection from "@/components/InquirySection";
import Footer from "@/components/Footer";

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

        {/* 2. About Us & Value Pillars */}
        <AboutSection />

        {/* 3. Featured Blends Catalog Showcase (8 Blends) */}
        <CatalogSection />

        {/* 4. Mindful Brewing Guide */}
        <BrewingGuideSection />

        {/* 5. Circadian Wellness Daily Flow */}
        <WellnessSection />

        {/* 6. Brewing Consultation & Catalog Inquiry */}
        <InquirySection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
