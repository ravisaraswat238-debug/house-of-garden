import React from "react";

const STEPS = [
  {
    step: "01",
    title: "Measure Tender Leaves",
    description:
      "Use 2 to 3 grams (approx. 1 teaspoon) of whole leaves or 3-4 whole flower buds per 200ml cup.",
    footnote: "Leaves need room to unfurl",
  },
  {
    step: "02",
    title: "Respect the Temperature",
    description:
      "Never pour boiling water over green or white teas. Cool boiled water for 2 minutes to reach ~80°C.",
    footnote: "Preserves fragile L-theanine",
  },
  {
    step: "03",
    title: "Unhurried Infusion",
    description:
      "Steep green teas for 2 to 3 minutes. For pure flower tisanes (Blue Tea, Hibiscus), allow 4 to 5 minutes.",
    footnote: "Watch water shift tone",
  },
  {
    step: "04",
    title: "Re-steep 2-3 Times",
    description:
      "Whole artisanal buds yield multiple fragrant steepings. Each pour reveals delicate second notes.",
    footnote: "Zero waste botanical ritual",
  },
];

export default function BrewingGuideSection() {
  return (
    <section className="w-full bg-[#fefef8] py-20 relative" id="brewing-guide">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="bg-[#8ca865]/20 text-[#4b6628] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-3">
            Mindful Steeping
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-[#2d3a1a]">
            The Botanical Steeping Guide
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Whole botanical flowers and tender tea shoots require unhurried
            temperature calibration to release their medicinal oils and natural
            sweetness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="bg-[#f8f7ee] p-6 rounded-3xl border border-[#8ca865]/30 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#8ca865] text-white flex items-center justify-center font-headline font-bold text-base mb-4">
                  {s.step}
                </div>
                <h3 className="font-headline font-bold text-base text-[#2d3a1a] mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#8ca865]/20 text-[11px] font-semibold text-[#647f3b]">
                {s.footnote}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
