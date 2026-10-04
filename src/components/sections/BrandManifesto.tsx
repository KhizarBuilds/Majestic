"use client";

import React from "react";
import { STUDIO_METRICS } from "@/data/studioData";

export default function BrandManifesto() {
  return (
    <section
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#080808] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="text-[10px] font-mono tracking-[0.28em] text-[#666666] uppercase">
            01 / MANIFESTO
          </span>
          <div className="h-[1px] w-8 bg-white/10" />
        </div>

        {/* Editorial Statement: Asymmetric Grid with Generous Negative Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#f2f2f2] uppercase leading-[1.08]">
              WE DO NOT BUILD DISTRACTIONS.
              <br />
              <span className="text-[#666666] font-light">
                WE ARCHITECT WORLDS WORTH ENTERING.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between pt-2">
            <p className="text-sm sm:text-base text-[#909090] font-light leading-relaxed">
              Founded on the conviction that interactive worlds represent the highest contemporary intersection of architecture, sound, and narrative engineering. Every release is an uncompromising artistic statement.
            </p>
            <div className="mt-8 text-[11px] font-mono tracking-[0.2em] text-[#666666] uppercase">
              INDEPENDENT DIRECTION · ZERO COMPROMISE
            </div>
          </div>
        </div>

        {/* Studio Metrics: Clean Typographic Scale on Canvas (No Cards) */}
        <div className="mt-20 sm:mt-28 pt-12 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {STUDIO_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="text-3xl sm:text-5xl font-display font-light text-[#f2f2f2] tracking-tight">
                {metric.value}
              </span>
              <span className="mt-2 text-[10px] font-mono tracking-[0.22em] text-[#666666] uppercase">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
