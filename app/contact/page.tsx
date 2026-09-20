import React from "react";
import { Metadata } from "next";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageView from "@/components/ContactPageView";

export const metadata: Metadata = {
  title: "Contact Us — House of Gardens | Brewing Wellness",
  description:
    "Get in touch with House of Gardens tea sommeliers. Inquire about personalized botanical recommendations, wedding & corporate gifting, wholesale partnerships, or brewing guidance.",
  keywords: [
    "Contact House of Gardens",
    "Tea Sommelier Consultation",
    "Botanical Tea Inquiries",
    "Corporate Tea Gifting",
    "Wedding Favors Tea",
    "Organic Tea Wholesale",
    "Brewing Wellness Support",
  ],
  openGraph: {
    title: "Contact Us — House of Gardens",
    description:
      "Connect with our herbal curators for customized brewing instructions, flight recommendations, or gifting inquiries.",
    images: [
      {
        url: "/banners/watermark-removed-Gemini_Generated_Image_4gvi9e4gvi9e4gvi.png",
        alt: "House of Gardens Contact and Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — House of Gardens",
    description:
      "Connect with our herbal curators for customized brewing instructions, flight recommendations, or gifting inquiries.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#8ca865]">
      {/* Top Banner (Catalog Identity) */}
      <TopBanner />

      {/* Main Sticky Navigation */}
      <Navbar />

      {/* Main Showcase Content */}
      <main className="w-full flex-1">
        <ContactPageView />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
