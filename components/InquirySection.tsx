"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ConsultationFormData } from "@/types/tea";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdCheckCircle,
} from "react-icons/md";
import { motion } from "motion/react";

export default function InquirySection() {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: "",
    email: "",
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
      blendOfInterest: "Hibiscus Flower Tea",
      message: "",
    });
  };

  return (
    <section className="w-full bg-[#efeae0] py-10 sm:py-14 md:py-20" id="inquiry">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6">
        <div className="bg-[#f8f7ee] border-2 border-[#8ca865]/30 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 md:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.0, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#647f3b] mb-2 block">
                  Connect &amp; Learn
                </span>
                <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-light text-[#2d3a1a] mb-4">
                  Brewing Consultation &amp; Catalog Inquiries
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Have questions about which botanical infusion matches your
                  personal wellness routine? Reach out to our herbal curators for
                  custom brewing instructions and tea flight recommendations.
                </p>

                <div className="space-y-3.5 text-sm text-gray-700">
                  <div className="flex items-center gap-3">
                    <MdPhone className="text-[#647f3b] text-lg shrink-0" />
                    <a
                      href="tel:+919310772895"
                      className="font-semibold text-[#2d3a1a] hover:text-[#4b6628] transition-colors"
                    >
                      +91 93107 72895
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MdEmail className="text-[#647f3b] text-lg shrink-0" />
                    <a
                      href="mailto:houseofgardenswellness@gmail.com"
                      className="font-semibold text-[#2d3a1a] hover:text-[#4b6628] transition-colors"
                    >
                      houseofgardenswellness@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MdLocationOn className="text-[#647f3b] text-lg shrink-0 mt-0.5" />
                    <span className="text-[#2d3a1a] leading-relaxed">
                      Gulmohar Greens, Mohan Nagar, Ghaziabad, 201007, India
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Informational Request Form */}
            <motion.div
              className="lg:col-span-6 bg-white p-6 md:p-8 rounded-3xl border border-[#8ca865]/30 shadow-xs"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#8ca865]/20 text-[#4b6628] flex items-center justify-center mx-auto">
                    <MdCheckCircle className="text-4xl" />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-[#2d3a1a]">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#2d3a1a]">{formData.fullName || "Friend"}</strong>! A House of Gardens herbal specialist will respond to{" "}
                    <strong className="text-[#2d3a1a]">{formData.email}</strong> with your personalized brewing advice for{" "}
                    <strong className="text-[#4b6628]">{formData.blendOfInterest}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 bg-[#4b6628] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#3b511f] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold uppercase text-[#2d3a1a] mb-1"
                    >
                      Your Full Name
                    </label>
                    <input
                      id="fullName"
                      className="w-full bg-[#fcfbf7] border border-[#8ca865]/30 rounded-xl px-4 py-2.5 text-sm text-[#2d3a1a] focus:outline-none focus:ring-2 focus:ring-[#8ca865]"
                      placeholder="e.g. Eleanor Vance"
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase text-[#2d3a1a] mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="w-full bg-[#fcfbf7] border border-[#8ca865]/30 rounded-xl px-4 py-2.5 text-sm text-[#2d3a1a] focus:outline-none focus:ring-2 focus:ring-[#8ca865]"
                      placeholder="your.email@wellness.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="blendOfInterest"
                      className="block text-xs font-bold uppercase text-[#2d3a1a] mb-1"
                    >
                      Blend of Interest
                    </label>
                    <select
                      id="blendOfInterest"
                      className="w-full bg-[#fcfbf7] border border-[#8ca865]/30 rounded-xl px-4 py-2.5 text-sm text-[#2d3a1a] focus:outline-none focus:ring-2 focus:ring-[#8ca865]"
                      value={formData.blendOfInterest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          blendOfInterest: e.target.value,
                        })
                      }
                    >
                      <option>Hibiscus Flower Tea</option>
                      <option>Elaichi Green Tea</option>
                      <option>Darjeeling Green Tea</option>
                      <option>Peach Green Tea</option>
                      <option>Blue Tea (Butterfly Pea)</option>
                      <option>Rose Green Tea</option>
                      <option>Lavender Green Tea</option>
                      <option>White Tea (Silver Needles)</option>
                      <option>Complete Wellness Collection</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase text-[#2d3a1a] mb-1"
                    >
                      Your Wellness Goal / Question
                    </label>
                    <textarea
                      id="message"
                      className="w-full bg-[#fcfbf7] border border-[#8ca865]/30 rounded-xl px-4 py-2.5 text-sm text-[#2d3a1a] focus:outline-none focus:ring-2 focus:ring-[#8ca865]"
                      placeholder="Tell us what you are looking for (e.g. afternoon digestion, better sleep, skin hydration)..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <motion.button
                    className="w-full py-3 bg-[#4b6628] hover:bg-[#3a501e] text-white font-headline font-bold text-xs uppercase tracking-widest rounded-xl transition-colors shadow cursor-pointer"
                    type="submit"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Request Brewing Monograph &amp; Advice
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
