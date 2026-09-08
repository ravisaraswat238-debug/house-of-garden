import type { Metadata } from "next";
import { Epilogue, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "House of Gardens — Brewing Wellness | Handcrafted Botanical Tea Blends",
  description:
    "Started from our own house with a vision of catering holistic wellness, quality and authenticity. HOG curates the finest whole tea buds and crafts them into infusions infused with health and warmth.",
  keywords: [
    "House of Gardens",
    "Brewing Wellness",
    "Botanical Tea Blends",
    "Organic Tea",
    "Whole Flower Tea",
    "Hibiscus Tea",
    "Blue Tea",
    "Darjeeling Green Tea",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${playfair.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="bg-[#8ca865] font-body text-on-surface antialiased selection:bg-[#7d9b56] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
