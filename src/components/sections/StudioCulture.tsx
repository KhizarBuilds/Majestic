"use client";

import React from "react";
import Image from "next/image";
import { STUDIO_HUBS } from "@/data/studioData";

export default function StudioCulture() {
  return (
    <section
      id="studio"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#050505] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="text-[10px] font-mono tracking-[0.28em] text-[#666666] uppercase">
            04 / THE STUDIOS
          </span>
          <div className="h-[1px] w-8 bg-white/10" />
        </div>

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 sm:mb-16 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#f2f2f2] uppercase">
              ARCHITECTURAL FOUNDRIES
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-[#909090] font-light leading-relaxed">
              Three international hubs operating under a singular artistic discipline: Tokyo for rendering architecture, Stockholm for sound design, and Los Angeles for performance capture.
            </p>
          </div>
        </div>

        {/* Studio Foundry Photography (Clean Architectural View, No Overlays) */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d0d0d] mb-14 sm:mb-16">
          <Image
            src="/images/studio_foundry.jpg"
            alt="Majestic Performance Capture and Simulation Lab"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover filter contrast-[1.05] brightness-[0.88]"
          />
        </div>

        {/* Studio Hubs: Clean 3-Column Editorial Grid (No Cards, Pure Canvas Alignment) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pt-8 border-t border-white/[0.06]">
          {STUDIO_HUBS.map((hub) => (
            <div key={hub.city} className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono tracking-[0.25em] text-[#666666] uppercase block mb-1">
                  {hub.country}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#f2f2f2] uppercase tracking-tight mb-3">
                  {hub.city}
                </h3>
                <p className="text-xs font-mono text-[#909090] uppercase tracking-wider mb-2">
                  {hub.division}
                </p>
                <p className="text-xs text-[#666666] font-mono leading-relaxed">
                  {hub.address}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#666666]">
                <span>{hub.lead}</span>
                <span className="text-[#909090]">{hub.phone}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
