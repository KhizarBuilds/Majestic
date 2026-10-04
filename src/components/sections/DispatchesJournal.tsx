"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { DISPATCHES_DATA } from "@/data/studioData";

export default function DispatchesJournal() {
  return (
    <section
      id="dispatches"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#080808] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="text-[10px] font-mono tracking-[0.28em] text-[#666666] uppercase">
            05 / DISPATCHES
          </span>
          <div className="h-[1px] w-8 bg-white/10" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#f2f2f2] uppercase">
            TECHNICAL INTELLIGENCE
          </h2>
          <span className="text-xs font-mono text-[#666666] uppercase tracking-widest">
            ENGINEERING & LORE ARCHIVES
          </span>
        </div>

        {/* Typography-Led Editorial Articles */}
        <div className="divide-y divide-white/[0.06]">
          {DISPATCHES_DATA.map((item) => (
            <div
              key={item.id}
              className="group py-8 sm:py-10 transition-colors duration-300 hover:bg-white/[0.015] px-4 -mx-4 rounded-xl cursor-default"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                {/* Meta */}
                <div className="lg:col-span-3 flex items-center gap-3 text-xs font-mono text-[#666666]">
                  <span>0{item.index}</span>
                  <span>&bull;</span>
                  <span className="text-[#909090] uppercase">{item.category}</span>
                  <span>&bull;</span>
                  <span>{item.date}</span>
                </div>

                {/* Title and Summary */}
                <div className="lg:col-span-7">
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#f2f2f2] group-hover:text-white transition-colors duration-200 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#909090] font-light leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Author & Arrow */}
                <div className="lg:col-span-2 flex items-center justify-between lg:justify-end gap-4 text-xs font-mono text-[#666666]">
                  <span>{item.readTime}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
