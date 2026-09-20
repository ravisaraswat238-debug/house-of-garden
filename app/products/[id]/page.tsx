import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { TEA_BLENDS } from "@/data/teaBlends";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetailView from "@/components/ProductDetailView";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return TEA_BLENDS.map((blend) => ({
    id: blend.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const blend = TEA_BLENDS.find((b) => b.id === id);

  if (!blend) {
    return {
      title: "Blend Not Found | House of Gardens",
      description: "The botanical tea blend you are looking for does not exist.",
    };
  }

  return {
    title: `${blend.name} — House of Gardens | Botanical Archive`,
    description:
      blend.description ||
      `Experience ${blend.name} handcrafted whole botanical tea blend from House of Gardens.`,
    openGraph: {
      title: `${blend.name} — House of Gardens`,
      description:
        blend.description ||
        `Experience ${blend.name} handcrafted whole botanical tea blend.`,
      images: [
        {
          url: blend.imageSrc,
          alt: blend.imageAlt,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const blend = TEA_BLENDS.find((b) => b.id === id);

  if (!blend) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#8ca865]">
      {/* Top Banner (Catalog Identity) */}
      <TopBanner />

      {/* Main Sticky Navigation */}
      <Navbar />

      {/* Main Product Showcase */}
      <main className="w-full flex-1">
        <ProductDetailView blendId={blend.id} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
