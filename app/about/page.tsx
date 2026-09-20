import React from "react";
import { Metadata } from "next";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageView from "@/components/AboutPageView";

export const metadata: Metadata = {
  title: "About Us — House of Gardens | Brewing Wellness",
  description:
    "Discover the story of House of Gardens. Rooted in Darjeeling's mist-covered gardens, we craft 100% pure botanical whole-flower and single-estate tea blends with zero additives.",
  keywords: [
    "About House of Gardens",
    "Botanical Tea Story",
    "Organic Darjeeling Tea",
    "Artisanal Whole-Flower Tea",
    "Ethical Tea Harvesting",
    "Loose Leaf Tea Ritual",
    "Brewing Wellness",
  ],
  openGraph: {
    title: "About Us — House of Gardens",
    description:
      "Rooted in nature, brewed with mindfulness. Discover the craft and story behind House of Gardens.",
    images: [
      {
        url: "/banners/about-tea-harvest.png",
        alt: "House of Gardens Tea Harvest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — House of Gardens",
    description:
      "Rooted in nature, brewed with mindfulness. Discover the craft and story behind House of Gardens.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#8ca865]">
      {/* Top Banner (Catalog Identity) */}
      <TopBanner />

      {/* Main Sticky Navigation */}
      <Navbar />

      {/* Main Showcase Content */}
      <main className="w-full flex-1">
        <AboutPageView />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
