"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function FinalCallToAction() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full py-36 sm:py-48 px-6 sm:px-12 lg:px-20 bg-[#050505] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#666666] uppercase mb-6 block">
          COMMISSION & INQUIRIES
        </span>

        {/* Monumental Headline with Grey Tonal Treatment */}
        <h2 className="text-[8.5vw] sm:text-[7vw] lg:text-[5.5vw] font-display font-bold tracking-tight uppercase leading-[0.95] text-silver select-none">
          THE HORIZON AWAITS.
          <br />
          <span className="text-[#666666] font-light">
            ENTER THE ARCHITECTURE.
          </span>
        </h2>

        {/* Concise Supporting Copy */}
        <p className="max-w-lg mt-8 text-sm sm:text-base text-[#909090] font-light leading-relaxed">
          For publishing partnerships, co-productions, or confidential inquiries with our directors in Tokyo, Stockholm, and Los Angeles.
        </p>

        {/* Restrained Actions */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:studios@majestic.games"
            className="px-8 py-3.5 rounded-full bg-[#f2f2f2] text-[#050505] font-mono text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300"
          >
            DIRECT COMMUNIQUÉ
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/25 text-[#909090] hover:text-[#f2f2f2] font-mono text-xs tracking-widest uppercase transition-colors"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
