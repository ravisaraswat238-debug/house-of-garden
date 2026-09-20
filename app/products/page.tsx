import React from "react";
import { Metadata } from "next";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AllProductsView from "@/components/AllProductsView";

export const metadata: Metadata = {
  title: "All Products — House of Gardens | Botanical Archive",
  description:
    "Explore our complete botanical collection of 8 artisanal whole-flower and loose-leaf herbal tea blends. 100% pure, additive-free, and ethically crafted for mindful wellness.",
  keywords: [
    "House of Gardens Products",
    "All Teas",
    "Organic Botanical Blends",
    "Hibiscus Tea",
    "Blue Tea",
    "Darjeeling Green Tea",
    "White Tea",
    "Artisanal Herbal Infusions",
  ],
  openGraph: {
    title: "All Products — House of Gardens",
    description:
      "Explore our complete botanical collection of 8 artisanal whole-flower and loose-leaf herbal tea blends.",
    images: [
      {
        url: "/banners/cataloge-background.png",
        alt: "House of Gardens Botanical Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Products — House of Gardens",
    description:
      "Explore our complete botanical collection of 8 artisanal whole-flower and loose-leaf herbal tea blends.",
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#8ca865]">
      {/* Top Banner (Catalog Identity) */}
      <TopBanner />

      {/* Main Sticky Navigation */}
      <Navbar />

      {/* Main Showcase Content */}
      <main className="w-full flex-1">
        <AllProductsView />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
