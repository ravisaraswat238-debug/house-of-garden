"use client";

import React, { useState } from "react";
import { ConsultationFormData } from "@/types/tea";
import {
  MdLanguage,
  MdEmail,
  MdVerifiedUser,
  MdCheckCircle,
} from "react-icons/md";

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
    <section className="w-full bg-[#fefef8] py-20" id="inquiry">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="bg-[#f8f7ee] border-2 border-[#8ca865]/30 rounded-[36px] p-8 md:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-[#647f3b] mb-2">
                Connect &amp; Learn
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-[#2d3a1a] mb-4">
                Brewing Consultation &amp; Catalog Inquiries
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Have questions about which botanical infusion matches your
                personal wellness routine? Reach out to our herbal curators for
                custom brewing instructions and tea flight recommendations.
              </p>

              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <MdLanguage className="text-[#647f3b] text-lg shrink-0" />
                  <a
                    className="font-semibold text-[#4b6628] hover:underline"
                    href="https://www.brewingwellness.store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.brewingwellness.store
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MdEmail className="text-[#647f3b] text-lg shrink-0" />
                  <span>curator@brewingwellness.store</span>
                </div>
                <div className="flex items-center gap-3">
                  <MdVerifiedUser className="text-[#647f3b] text-lg shrink-0" />
                  <span>100% Guaranteed Organic Ingredients</span>
                </div>
              </div>
            </div>

            {/* Informational Request Form */}
            <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-3xl border border-[#8ca865]/30 shadow-xs">
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

                  <button
                    className="w-full py-3 bg-[#4b6628] hover:bg-[#3a501e] text-white font-headline font-bold text-xs uppercase tracking-widest rounded-xl transition-colors shadow cursor-pointer"
                    type="submit"
                  >
                    Request Brewing Monograph &amp; Advice
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
