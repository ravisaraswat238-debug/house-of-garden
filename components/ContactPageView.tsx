"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowBack, MdPhone, MdEmail, MdLocationOn, MdCheckCircle } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight, Send, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { TEA_BLENDS } from "@/data/teaBlends";

export default function ContactPageView() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "Recommendations",
    blendOfInterest: "Hibiscus Flower Tea",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      inquiryType: "Recommendations",
      blendOfInterest: "Hibiscus Flower Tea",
      message: "",
    });
  };

  const handleWhatsAppSend = () => {
    const text = `Hello House of Gardens,
My name is ${formData.fullName || "a tea lover"}.
*Inquiry Type*: ${formData.inquiryType}
*Blend of Interest*: ${formData.blendOfInterest}
*Email*: ${formData.email || "N/A"}
*Phone*: ${formData.phone || "N/A"}
*Message*: ${formData.message || "I would like to inquire about your botanical blends."}`;

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };


  return (
    <div className="w-full bg-[#fbfaf5] text-[#1e392a] min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 pt-6 pb-2">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#5c7263]"
        >
          <Link
            href="/"
            className="hover:text-[#1e392a] transition-colors flex items-center gap-1.5"
          >
            <MdArrowBack className="text-base" />
            <span>Home</span>
          </Link>
          <span className="text-[#a0b0a5]">/</span>
          <span className="text-[#1e392a] font-semibold">Contact Us</span>
        </nav>
      </div>

      {/* Contact Us Heading Section (matching Products & About pages) */}
      <section className="relative w-full pt-6 pb-2">
        <motion.div
          className="max-w-[1360px] mx-auto px-6 sm:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-headline text-2xl sm:text-3xl lg:text-5xl text-[#1b3425] font-medium tracking-tight">
            Contact Us
          </h1>
        </motion.div>
      </section>

      {/* Interactive Botanical Consultation & Form Section */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-8 pt-6 pb-16 sm:pb-24">
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-[#d8e2c7] bg-[#eff3e5]/90 backdrop-blur-xs px-6 py-10 shadow-[0_10px_35px_rgba(40,65,20,0.05)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Narrative & Botanical Consultation Info */}
            <motion.div
              className="lg:col-span-5 flex flex-col"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-4 flex items-center gap-3.5">
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#557335] uppercase">
                  GET IN TOUCH
                </span>
                <span className="h-[1.5px] w-14 bg-[#b5c79e]" />
              </div>

              <h2 className="font-headline text-2xl sm:text-3xl lg:text-[42px] font-medium leading-[1.18] tracking-tight text-[#1b3425]">
                We&apos;d Love to
                <br />
                Hear From You
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#4d6353]">
                Whether you are seeking guidance on the right herbal infusion for your daily ritual, ordering bespoke corporate or wedding gift boxes, or curious about our sustainable sourcing in Darjeeling, our tea sommeliers are here to help.
              </p>

              {/* Direct Contact Details Block (Phone, Email, Address) */}
              <div className="mt-8 space-y-4 p-5 bg-[#FAF8F3] rounded-2xl border border-[#d6dfc8]">
                <div className="flex items-center gap-3.5 text-sm text-[#1b3425]">
                  <div className="w-9 h-9 rounded-full bg-[#dbe8ca] text-[#3c5722] flex items-center justify-center shrink-0">
                    <MdPhone className="text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#557335] block">
                      Phone / WhatsApp
                    </span>
                    <a
                      href="tel:+919310772895"
                      className="font-semibold text-sm hover:text-[#4b6628] transition-colors"
                    >
                      +91 93107 72895
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-[#1b3425]">
                  <div className="w-9 h-9 rounded-full bg-[#dbe8ca] text-[#3c5722] flex items-center justify-center shrink-0">
                    <MdEmail className="text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#557335] block">
                      Email Address
                    </span>
                    <a
                      href="mailto:houseofgardenswellness@gmail.com"
                      className="font-semibold text-sm hover:text-[#4b6628] transition-colors"
                    >
                      houseofgardenswellness@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-[#1b3425]">
                  <div className="w-9 h-9 rounded-full bg-[#dbe8ca] text-[#3c5722] flex items-center justify-center shrink-0 mt-0.5">
                    <MdLocationOn className="text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#557335] block">
                      Address
                    </span>
                    <span className="text-xs sm:text-sm text-[#3c5445] leading-relaxed">
                      Gulmohar Greens, Mohan Nagar, Ghaziabad, 201007, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Prompt Card */}
              <div className="mt-8 p-5 bg-[#FAF8F3] rounded-2xl border border-[#d6dfc8] flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4b6628] block mb-0.5">
                    Prefer Instant Chat?
                  </span>
                  <span className="text-xs sm:text-sm text-[#3e5445] font-medium">
                    Connect directly on WhatsApp with our curator.
                  </span>
                </div>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    "Hello House of Gardens, I would like to speak with a tea sommelier."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-3 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba5a] transition-transform hover:scale-105 shadow-xs"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp className="text-2xl" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Interactive Form */}
            <motion.div
              className="lg:col-span-7 bg-[#FAF8F3] p-6 sm:p-10 rounded-3xl border border-[#d6dfc8] shadow-xs"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#8ca865]/20 text-[#4b6628] flex items-center justify-center mx-auto">
                    <MdCheckCircle className="text-4xl" />
                  </div>
                  <h3 className="font-headline font-semibold text-xl sm:text-2xl text-[#1b3425]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm sm:text-base text-[#4d6353] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1b3425]">{formData.fullName || "Tea Enthusiast"}</strong>! A House of Gardens tea curator has received your inquiry regarding{" "}
                    <strong className="text-[#4b6628]">{formData.blendOfInterest}</strong>. We will respond to{" "}
                    <strong className="text-[#1b3425]">{formData.email}</strong> shortly.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-[#233d2f] text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-[#1a2f24] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <Link
                      href="/products"
                      className="px-6 py-2.5 bg-white border border-[#c7d5b8] text-[#1b3425] rounded-full text-xs sm:text-sm font-semibold hover:bg-[#FAF8F3] transition-colors"
                    >
                      Browse Products
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-headline font-semibold text-xl text-[#1b3425] mb-1">
                      Send a Message
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5a7165]">
                      Fill in the details below, and our tea specialist will get in touch with you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3c5445] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Radhika Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-[#cfd9c3] bg-white text-sm text-[#1b3425] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4b6628]/40 focus:border-[#4b6628]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3c5445] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#cfd9c3] bg-white text-sm text-[#1b3425] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4b6628]/40 focus:border-[#4b6628]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3c5445] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-[#cfd9c3] bg-white text-sm text-[#1b3425] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4b6628]/40 focus:border-[#4b6628]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#3c5445] mb-1.5">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({ ...formData, inquiryType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[#cfd9c3] bg-white text-sm text-[#1b3425] focus:outline-none focus:ring-2 focus:ring-[#4b6628]/40 focus:border-[#4b6628] cursor-pointer"
                      >
                        <option value="Recommendations">Personal Blend Recommendation</option>
                        <option value="Bulk & Gifting">Wedding &amp; Corporate Gifting</option>
                        <option value="Wholesale">Cafe &amp; Boutique Partnership</option>
                        <option value="Order Support">Order Tracking &amp; Delivery</option>
                        <option value="Other">Other Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3c5445] mb-1.5">
                      Blend of Interest
                    </label>
                    <select
                      value={formData.blendOfInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, blendOfInterest: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-[#cfd9c3] bg-white text-sm text-[#1b3425] focus:outline-none focus:ring-2 focus:ring-[#4b6628]/40 focus:border-[#4b6628] cursor-pointer"
                    >
                      {TEA_BLENDS.map((blend) => (
                        <option key={blend.id} value={blend.name}>
                          {blend.name} ({blend.badgeText || blend.tag})
                        </option>
                      ))}
                      <option value="All 8 Blends / Sampler">Complete 8-Blend Collection</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3c5445] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share your brewing preferences, quantity required, or any specific questions..."
                      className="w-full px-4 py-3 rounded-xl border border-[#cfd9c3] bg-white text-sm text-[#1b3425] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4b6628]/40 focus:border-[#4b6628] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-[#233d2f] hover:bg-[#1a2f24] text-[#FAF8F3] px-7 py-3.5 text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <span>Submit Inquiry</span>
                      <Send size={15} />
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#f6fcf8] text-[#1b3425] border border-[#cfd9c3] hover:border-[#25D366] px-6 py-3.5 text-sm font-semibold transition-all duration-200 cursor-pointer group"
                    >
                      <FaWhatsapp className="text-xl text-[#25D366] group-hover:scale-110 transition-transform" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Promise Section with Botanical Banner Background */}
      <section className="relative w-full text-[#FAF8F3] py-20 sm:py-28 overflow-hidden bg-[#16291d]">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/banners/watermark-removed-Gemini_Generated_Image_4gvi9e4gvi9e4gvi.png"
            alt="House of Gardens Botanical background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-[#0d1a12]/25" />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-headline text-xs font-bold uppercase tracking-[0.25em] text-[#fed488] mb-4 block drop-shadow-xs">
            BOTANICAL INTEGRITY PROMISE
          </span>
          <blockquote className="font-headline text-lg sm:text-xl lg:text-3xl font-light leading-relaxed tracking-tight text-[#FAF8F3] mb-8 drop-shadow-sm">
            &ldquo;Every tea conversation matters to us. Whether you need brewing tips or are designing custom blends, we treat every cup and customer with authentic botanical care.&rdquo;
          </blockquote>
          <div className="flex flex-col items-center">
            <span className="font-headline font-semibold text-base text-[#fed488] drop-shadow-xs">
              House of Gardens
            </span>
            <span className="text-xs text-[#d1dfd6] mt-0.5 font-medium tracking-wide">
              Brewing Wellness, Naturally
            </span>
          </div>
        </motion.div>
      </section>

      {/* Value Pillars Strip (Consistent with Products and About Pages) */}
      <section className="w-full bg-[#eae5db] border-b border-[#dad3c4] py-12">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.0, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start lg:px-6 lg:border-r lg:border-[#d5cebf]"
            >
              <span className="font-headline font-semibold text-lg text-[#1e392a] mb-1">
                100% Pure &amp; Natural
              </span>
              <p className="text-sm text-[#546b5d] leading-relaxed">
                Whole botanical flowers and tender leaves with zero artificial flavors.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start lg:px-6 lg:border-r lg:border-[#d5cebf]"
            >
              <span className="font-headline font-semibold text-lg text-[#1e392a] mb-1">
                Sustainably Sourced
              </span>
              <p className="text-sm text-[#546b5d] leading-relaxed">
                Direct single-estate harvest from the mist-covered slopes of Darjeeling.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start lg:px-6 lg:border-r lg:border-[#d5cebf]"
            >
              <span className="font-headline font-semibold text-lg text-[#1e392a] mb-1">
                Small-Batch Blended
              </span>
              <p className="text-sm text-[#546b5d] leading-relaxed">
                Handcrafted in micro-batches to preserve essential botanical oils.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start lg:px-6"
            >
              <span className="font-headline font-semibold text-lg text-[#1e392a] mb-1">
                Airtight Glass Jars
              </span>
              <p className="text-sm text-[#546b5d] leading-relaxed">
                Packed in recyclable glass jars to preserve ultimate freshness and aroma.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
