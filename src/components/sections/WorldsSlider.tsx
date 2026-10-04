"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SLIDER_PROJECTS = [
  {
    id: "chronomancer",
    number: "01",
    title: "CHRONOMANCER",
    subtitle: "SHADOW INTERVAL",
    genre: "Tactical Temporal Espionage",
    year: "2026",
    status: "ALPHA TELEMETRY",
    platforms: ["PC / STEAM", "PS5 PRO"],
    engine: "UNREAL ENGINE 5.5",
    image: "/images/chronomancer.jpg",
    description:
      "Operate in the fragmented seconds between surveillance snapshots. Manipulate micro-time loops, shear gravitational vectors, and dismantle clandestine syndicates across rain-drenched brutalist cities.",
  },
  {
    id: "neobabylon",
    number: "02",
    title: "NEO-BABYLON 2099",
    subtitle: "MONOLITH OF SOULS",
    genre: "Psychological Sci-Fi RPG",
    year: "2028",
    status: "IN PRODUCTION",
    platforms: ["NEXT-GEN CONSOLES", "PC"],
    engine: "MAJESTIC CORE V",
    image: "/images/neobabylon.jpg",
    description:
      "Climb a 4,000-meter vertical metropolis of brutalist concrete, endless downpours, and bio-mechanical transhuman factions. An uncompromising narrative exploration into consciousness and collective memory.",
  },
  {
    id: "voidstrider",
    number: "03",
    title: "VOID STRIDER",
    subtitle: "DEEP HORIZON",
    genre: "Hard-SciFi Zero-G Survival",
    year: "2026",
    status: "PRE-ORDER ACTIVE",
    platforms: ["PC / STEAM", "PS5"],
    engine: "MAJESTIC CORE V",
    image: "/images/voidstrider.jpg",
    description:
      "Board derelict alien mega-constructs abandoned for eons in the outer Oort cloud. Master authentic Newtonian physics, vacuum acoustics, and atmospheric reclamation in pure cosmic isolation.",
  },
];

export default function WorldsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  const total = SLIDER_PROJECTS.length;
  const current = SLIDER_PROJECTS[currentIndex];

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null) {
      if (touchDeltaX.current > 40) {
        goToPrev();
      } else if (touchDeltaX.current < -40) {
        goToNext();
      }
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    touchDeltaX.current = 0;
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current && touchStartX.current !== null) {
      touchDeltaX.current = e.clientX - touchStartX.current;
    }
  };

  const handleMouseUp = () => {
    if (isDragging.current && touchStartX.current !== null) {
      if (touchDeltaX.current > 50) {
        goToPrev();
      } else if (touchDeltaX.current < -50) {
        goToNext();
      }
    }
    isDragging.current = false;
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section
      id="titles"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#080808] border-t border-white/[0.06] overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="text-[10px] font-mono tracking-[0.28em] text-[#666666] uppercase block mb-3">
              03 / UPCOMING PRODUCTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#f2f2f2] uppercase">
              WORLDS IN DEVELOPMENT
            </h2>
          </div>

          {/* Minimal Controls & Direct Step Trigger */}
          <div className="flex items-center gap-6">
            <span className="text-xs font-mono tracking-widest text-[#909090]">
              0{currentIndex + 1} <span className="text-[#666666]">/ 0{total}</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrev}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/40 bg-white/[0.03] hover:bg-white/10 flex items-center justify-center text-[#c8c8c8] hover:text-white transition-all active:scale-95 cursor-pointer"
                aria-label="Previous world"
              >
                <ArrowLeft className="w-4 h-4 pointer-events-none" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/40 bg-white/[0.03] hover:bg-white/10 flex items-center justify-center text-[#c8c8c8] hover:text-white transition-all active:scale-95 cursor-pointer"
                aria-label="Next world"
              >
                <ArrowRight className="w-4 h-4 pointer-events-none" />
              </button>
            </div>
          </div>
        </div>

        {/* Direct Clickable Tabs for Instant Switching */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
          {SLIDER_PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`px-4 py-2 rounded-full text-[11px] font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                currentIndex === idx
                  ? "bg-[#f2f2f2] text-[#050505] border-[#f2f2f2] font-semibold"
                  : "bg-transparent text-[#909090] border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              0{idx + 1} &bull; {proj.title}
            </button>
          ))}
        </div>

        {/* Thin Progress Indicator Line */}
        <div className="w-full h-[1px] bg-white/[0.08] mb-10 relative overflow-hidden">
          <div
            className="absolute top-0 bottom-0 bg-[#f2f2f2] transition-all duration-500 ease-out"
            style={{
              left: `${(currentIndex / total) * 100}%`,
              width: `${(1 / total) * 100}%`,
            }}
          />
        </div>

        {/* Horizontal Slider Stage (Physical Flex Track, 100% Reliable) */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0d0d0d] cursor-grab active:cursor-grabbing"
        >
          {/* Main Visual Slide Track */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] overflow-hidden bg-black">
            <div
              className="flex w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
              style={{
                transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
              }}
            >
              {SLIDER_PROJECTS.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="w-full h-full flex-shrink-0 relative overflow-hidden"
                >
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority={idx === 0}
                    draggable={false}
                    className="object-cover filter contrast-[1.05] brightness-[0.9] select-none pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Slide Details (Clean Editorial Typography, Instant Updating) */}
          <div className="p-8 sm:p-12 border-t border-white/[0.06] bg-[#0d0d0d]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#909090] uppercase block mb-2">
                  {current.genre} &bull; TARGET {current.year}
                </span>
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-[#f2f2f2] uppercase tracking-tight">
                  {current.title}
                  <span className="text-[#666666] font-light block sm:inline sm:ml-3">
                    {current.subtitle}
                  </span>
                </h3>
                <p className="mt-4 text-sm text-[#909090] font-light leading-relaxed max-w-2xl">
                  {current.description}
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between h-full lg:border-l lg:border-white/[0.06] lg:pl-10">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#666666] uppercase block mb-3">
                    DEPLOYMENT TARGETS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {current.platforms.map((plat) => (
                      <span
                        key={plat}
                        className="px-3 py-1 rounded border border-white/[0.08] bg-[#141414] text-[10px] font-mono text-[#c8c8c8] uppercase tracking-wider"
                      >
                        {plat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-[#666666] uppercase">
                  ENGINE: {current.engine}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
