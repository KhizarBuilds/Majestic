"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#030102] flex flex-col justify-between overflow-hidden pt-28 sm:pt-32 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-20 selection:bg-[#800020] selection:text-white"
    >
      {/* =========================================================================
          LEFT ATMOSPHERIC COSMIC ENVIRONMENT LAYER (Extended Cosmic Galaxy & Terrain)
          Immerses the whole hero section so the text is backed by deep space, nebula & landscape
         ========================================================================= */}
      <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[65%] xl:w-[70%] h-full pointer-events-none select-none overflow-hidden z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero_bg_left.jpg"
            alt="Cosmic Environment Planetary Background"
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            priority
            draggable={false}
            className="object-cover object-left filter contrast-[1.05] brightness-[0.92]"
          />
        </div>

        {/* Cinematic Scrim - allows galaxy, planets, stars and rocky terrain to show through with rich contrast for editorial typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030102]/65 via-[#030102]/45 to-[#030102] pointer-events-none" />

        {/* Top & Bottom Vignettes for Seamless Edge Blending */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#030102] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#030102] to-transparent pointer-events-none" />
      </div>

      {/* =========================================================================
          ATMOSPHERIC BACKGROUND & VISUAL LAYER
          Monumental Glowing Ruby Obsidian Monolith on the right side
         ========================================================================= */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[58%] h-full pointer-events-none select-none overflow-hidden flex items-center justify-center lg:justify-end z-10">
        {/* Breathing Float Animation for the Artifact */}
        {mounted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full lg:translate-x-16 xl:translate-x-24 2xl:translate-x-32"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/majestic_ruby_monolith.jpg"
                alt="Majestic Ruby Monolith Artifact"
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                priority
                draggable={false}
                className="object-cover object-center lg:object-right filter contrast-[1.08] brightness-[0.98]"
              />
            </motion.div>
          </motion.div>
        ) : (
          <div className="relative w-full h-full lg:translate-x-16 xl:translate-x-24 2xl:translate-x-32">
            <Image
              src="/images/majestic_ruby_monolith.jpg"
              alt="Majestic Ruby Monolith Artifact"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              priority
              draggable={false}
              className="object-cover object-center lg:object-right filter contrast-[1.08] brightness-[0.98]"
            />
          </div>
        )}

        {/* Seamless Blending Vignettes */}
        {/* Left Horizontal Vignette - melts background into solid black for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030102] via-[#030102]/85 lg:via-[#030102]/40 to-transparent pointer-events-none" />

        {/* Top & Bottom Vignettes */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#030102] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#030102] to-transparent pointer-events-none" />

        {/* Subtle Ambient Crimson Radial Glow behind monolith */}
        <div className="absolute top-1/2 left-[72%] xl:left-[76%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(128,0,32,0.22)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      </div>

      {/* =========================================================================
          FAR RIGHT VERTICAL TELEMETRY WATERMARK (Matching Reference Mockup)
         ========================================================================= */}
      <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center gap-6 pointer-events-none select-none">
        <span
          className="font-mono text-[10px] tracking-[0.38em] text-[#7A7074] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          MAJESTIC
        </span>
        {/* 4-Point Diamond Crosshair Star */}
        <div className="w-2.5 h-2.5 rotate-45 border border-white/25 flex items-center justify-center">
          <div className="w-1 h-1 bg-[#800020] rounded-none" />
        </div>
      </div>

      {/* =========================================================================
          MAIN EDITORIAL HERO CONTENT (Left Column)
         ========================================================================= */}
      <div className="max-w-7xl mx-auto w-full relative z-20 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 xl:col-span-7 space-y-6 sm:space-y-7">
          {/* Eyebrow Label with Burgundy Accent Bar */}
          {mounted ? (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[2px] bg-[#800020] rounded-full shadow-[0_0_10px_rgba(128,0,32,0.9)] inline-block" />
              <span className="font-mono text-[10.5px] sm:text-[11px] tracking-[0.32em] text-[#A89CA0] uppercase font-medium">
                GAME DEVELOPMENT STUDIO
              </span>
            </motion.div>
          ) : (
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#800020] rounded-full shadow-[0_0_10px_rgba(128,0,32,0.9)] inline-block" />
              <span className="font-mono text-[10.5px] sm:text-[11px] tracking-[0.32em] text-[#A89CA0] uppercase font-medium">
                GAME DEVELOPMENT STUDIO
              </span>
            </div>
          )}

          {/* Monumental Cinematic Title with Metallic Sheen */}
          {mounted ? (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-serif font-bold tracking-[0.06em] uppercase leading-[0.92] select-none"
            >
              <span className="bg-gradient-to-b from-[#FFFFFF] via-[#EAE6E7] to-[#998F92] bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
                MAJESTIC
              </span>
            </motion.h1>
          ) : (
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-serif font-bold tracking-[0.06em] uppercase leading-[0.92] select-none">
              <span className="bg-gradient-to-b from-[#FFFFFF] via-[#EAE6E7] to-[#998F92] bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
                MAJESTIC
              </span>
            </h1>
          )}

          {/* Slogan / Sub-headline */}
          {mounted ? (
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="text-sm sm:text-base lg:text-[17px] font-sans font-semibold tracking-[0.24em] text-[#E0D8DA] uppercase"
            >
              BIGGER WORLDS. DEEPER STORIES.
            </motion.h2>
          ) : (
            <h2 className="text-sm sm:text-base lg:text-[17px] font-sans font-semibold tracking-[0.24em] text-[#E0D8DA] uppercase">
              BIGGER WORLDS. DEEPER STORIES.
            </h2>
          )}

          {/* Mission Statement Paragraph */}
          {mounted ? (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="text-[13.5px] sm:text-[15px] font-light text-[#9A9094] leading-[1.7] max-w-lg"
            >
              We are a next-generation game studio crafting immersive worlds, unforgettable characters and experiences that stay with you.
            </motion.p>
          ) : (
            <p className="text-[13.5px] sm:text-[15px] font-light text-[#9A9094] leading-[1.7] max-w-lg">
              We are a next-generation game studio crafting immersive worlds, unforgettable characters and experiences that stay with you.
            </p>
          )}

          {/* Call-to-Action Buttons */}
          {mounted ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              {/* Primary Burgundy Pill Button */}
              <a
                href="#titles"
                className="group relative overflow-hidden px-7 sm:px-8 py-3.5 rounded-full border border-[#800020]/50 hover:border-[#800020]/80 text-[#FAF7F2] font-mono text-[11px] tracking-[0.22em] uppercase font-semibold flex items-center gap-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(77,24,33,0.35)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.28),0_14px_35px_rgba(0,0,0,0.75),0_0_28px_rgba(128,0,32,0.5)] hover:scale-[1.02] transition-all duration-300 backdrop-blur-xl"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(46, 10, 17, 0.97) 0%, rgba(77, 24, 33, 0.98) 50%, rgba(46, 10, 17, 0.97) 100%)",
                }}
              >
                {/* Specular Silk Top Hairline Matching Navbar */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                <span className="relative z-10">EXPLORE OUR GAMES</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FAF7F2] group-hover:translate-x-1 transition-transform relative z-10" />
              </a>

              {/* Secondary Dark Velvet Pill Button */}
              <a
                href="#studio"
                className="px-7 sm:px-8 py-3.5 rounded-full bg-[#120608]/80 hover:bg-[#1E090F] border border-white/15 hover:border-[#800020]/50 text-[#FAF7F2] font-mono text-[11px] tracking-[0.22em] uppercase font-medium hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
              >
                <span>ABOUT MAJESTIC</span>
              </a>
            </motion.div>
          ) : (
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="#titles"
                className="group relative overflow-hidden px-7 sm:px-8 py-3.5 rounded-full border border-[#800020]/50 hover:border-[#800020]/80 text-[#FAF7F2] font-mono text-[11px] tracking-[0.22em] uppercase font-semibold flex items-center gap-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(77,24,33,0.35)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.28),0_14px_35px_rgba(0,0,0,0.75),0_0_28px_rgba(128,0,32,0.5)] hover:scale-[1.02] transition-all duration-300 backdrop-blur-xl"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(46, 10, 17, 0.97) 0%, rgba(77, 24, 33, 0.98) 50%, rgba(46, 10, 17, 0.97) 100%)",
                }}
              >
                {/* Specular Silk Top Hairline Matching Navbar */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                <span className="relative z-10">EXPLORE OUR GAMES</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FAF7F2] group-hover:translate-x-1 transition-transform relative z-10" />
              </a>

              <a
                href="#studio"
                className="px-7 sm:px-8 py-3.5 rounded-full bg-[#120608]/80 hover:bg-[#1E090F] border border-white/15 hover:border-[#800020]/50 text-[#FAF7F2] font-mono text-[11px] tracking-[0.22em] uppercase font-medium hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
              >
                <span>ABOUT MAJESTIC</span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
          BOTTOM ARCHITECTURAL FEATURE BAR (Directly from Mockup)
         ========================================================================= */}
      <div className="max-w-7xl mx-auto w-full relative z-20 pt-8 sm:pt-12">
        <div className="flex items-center justify-between gap-4 border-t border-white/[0.08] pt-4 sm:pt-5">
          {/* Left Feature Indicator */}
          <div className="flex items-center gap-3">
            <span className="w-[2px] h-4 sm:h-5 bg-[#800020] rounded-full inline-block" />
            <span className="font-mono text-[10.5px] sm:text-[11px] tracking-[0.28em] text-[#7A7074] uppercase">
              FEATURED TITLES
            </span>
          </div>

          {/* Right Direct Trigger */}
          <a
            href="#titles"
            className="flex items-center gap-2 font-mono text-[10.5px] sm:text-[11px] tracking-[0.24em] text-[#7A7074] hover:text-[#FAF7F2] uppercase transition-colors group"
          >
            <span>VIEW ALL</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#7A7074] group-hover:text-white group-hover:translate-x-1 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}
