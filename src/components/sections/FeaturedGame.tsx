"use client";

import React from "react";
import Image from "next/image";
import { GAMES_DATA } from "@/data/studioData";

export default function FeaturedGame() {
  const game = GAMES_DATA[0]; // Aetherius: Reign of Stone

  return (
    <section
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#050505] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="text-[10px] font-mono tracking-[0.28em] text-[#666666] uppercase">
            02 / FLAGSHIP PRODUCTION
          </span>
          <div className="h-[1px] w-8 bg-white/10" />
        </div>

        {/* Text Header (Above the Visual, with Generous Breathing Room) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-12 sm:mb-16 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono tracking-[0.25em] text-[#909090] uppercase block mb-3">
              {game.genre} &bull; {game.year}
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#f2f2f2] uppercase leading-[1.05]">
              {game.title}: {game.subtitle}
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm text-[#909090] font-light leading-relaxed mb-4">
              {game.description}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {game.platforms.map((plat) => (
                <span
                  key={plat}
                  className="px-2.5 py-1 rounded border border-white/[0.08] bg-[#0d0d0d] text-[10px] font-mono text-[#909090] uppercase tracking-wider"
                >
                  {plat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cinematic Artwork Viewport (Dominant, Clean, ZERO Text Overlap, ZERO Video Controls) */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d0d0d]">
          <Image
            src={game.image}
            alt="Aetherius World Architectural View"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
            className="object-cover filter contrast-[1.05] brightness-[0.92]"
          />
        </div>

        {/* Supporting Architectural Pillars (Clean Typography Below Visual) */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-10 border-t border-white/[0.06]">
          <div>
            <span className="text-[10px] font-mono text-[#666666] uppercase block mb-2">
              PILLAR 01
            </span>
            <h3 className="text-sm font-display font-semibold tracking-wide text-[#f2f2f2] uppercase mb-2">
              MONUMENTAL SCALE
            </h3>
            <p className="text-xs text-[#909090] font-light leading-relaxed">
              Vast non-terrestrial stone colossi carved into mountain spines, rendered natively at 60 FPS without loading seams.
            </p>
          </div>

          <div>
            <span className="text-[10px] font-mono text-[#666666] uppercase block mb-2">
              PILLAR 02
            </span>
            <h3 className="text-sm font-display font-semibold tracking-wide text-[#f2f2f2] uppercase mb-2">
              PRIMORDIAL RESONANCE
            </h3>
            <p className="text-xs text-[#909090] font-light leading-relaxed">
              Tactile, weight-driven combat system requiring acute physical stance alignment and resonant harmonic frequency timing.
            </p>
          </div>

          <div>
            <span className="text-[10px] font-mono text-[#666666] uppercase block mb-2">
              PILLAR 03
            </span>
            <h3 className="text-sm font-display font-semibold tracking-wide text-[#f2f2f2] uppercase mb-2">
              CELESTIAL RIFT DYNAMICS
            </h3>
            <p className="text-xs text-[#909090] font-light leading-relaxed">
              Real-time atmospheric storms driven by simulated planetary gravitational perturbations, completely altering battlefield topology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
