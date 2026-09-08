import React from "react";
import Image from "next/image";
import {
  MdWbTwilight,
  MdWbSunny,
  MdBedtime,
  MdArrowForward,
} from "react-icons/md";

export default function WellnessSection() {
  return (
    <section
      className="w-full bg-[#8ca865] py-20 text-[#fefef8]"
      id="wellness-pillars"
    >
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Flow Descriptions */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f8f7ee] mb-2">
              Holistic Daily Flow
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Harmonize Your Mind &amp; Body All Day
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
              Our blends are designed to accompany the natural rhythm of your
              circadian day, from dawn awakening to restful dusk tranquility.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/20">
                <MdWbTwilight className="text-[#fed488] text-[24px] shrink-0" />
                <div>
                  <h4 className="font-headline font-bold text-sm">
                    Morning Alertness
                  </h4>
                  <p className="text-xs text-white/80">
                    Darjeeling Green Tea or Elaichi Green Tea
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/20">
                <MdWbSunny className="text-[#fed488] text-[24px] shrink-0" />
                <div>
                  <h4 className="font-headline font-bold text-sm">
                    Afternoon Digestion &amp; Glow
                  </h4>
                  <p className="text-xs text-white/80">
                    Peach Green Tea or Rose Green Tea
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/20">
                <MdBedtime className="text-[#fed488] text-[24px] shrink-0" />
                <div>
                  <h4 className="font-headline font-bold text-sm">
                    Evening Unwind &amp; Calming
                  </h4>
                  <p className="text-xs text-white/80">
                    Lavender Green Tea or Blue Tea Infusion
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Showcase Image Card with Organic Curved Border */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="bg-[#fefef8] p-6 rounded-[36px] shadow-2xl text-[#2d3a1a] max-w-lg w-full border-4 border-white/40">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvPMF9lqD6cPYu4JnD7XSg8k_DBNytr7yEoDabE6i_DtZbI9CDR8ffhhppRaPXqcvmdSXrvMgyzfNw122mLxoaTaeLQ6Dsoxx8UZI89U9Xn2FGO0iORxDY-CriDE5Hhn4LBIwnJ8huCr19KMVG9ol_4gB7sKhVr7qC29bA4BnDl6XtunbzlnVcX8yZwIDqcNb_CkS-YkJ2D93lCB2g_YYpfRQ3lpCkARMn-57g8ZiW3G3Ejs-P25d2"
                  alt="Tea flight brewed into clear glass cups"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-[#4b6628] shadow">
                  Handcrafted In Small Batches
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-headline font-bold text-xl text-[#2d3a1a]">
                  Curated from Our Home to Yours
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Every jar contains tender leaves hand-inspected for freshness.
                  We guarantee clean ingredients without synthetic flavoring
                  agents or chemical preservatives.
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <a
                    className="px-6 py-2.5 bg-[#4b6628] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#3b511f] transition-colors inline-flex items-center gap-2"
                    href="https://www.brewingwellness.store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Visit Online Flagship</span>
                    <MdArrowForward className="text-[15px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
