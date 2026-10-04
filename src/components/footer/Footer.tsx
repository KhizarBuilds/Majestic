"use client";

import React from "react";
import { STUDIO_HUBS } from "@/data/studioData";

export default function Footer() {
  const socialLinks = [
    { label: "Discord Community", href: "https://discord.com" },
    { label: "Steam Publisher Hub", href: "https://steampowered.com" },
    { label: "X / Twitter", href: "https://x.com" },
    { label: "ArtStation Gallery", href: "https://artstation.com" },
    { label: "YouTube 4K Vault", href: "https://youtube.com" },
  ];

  return (
    <footer
      id="footer"
      className="relative w-full pt-20 sm:pt-28 pb-14 px-6 sm:px-12 lg:px-20 bg-[#050505] text-[#909090] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Direct Email Lines (Inspired by Resn reference, quiet luxury) */}
        <div className="border-b border-white/[0.06] pb-16 sm:pb-20 mb-16 sm:mb-20">
          <div className="max-w-4xl space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#666666] uppercase block mb-2">
                DIRECT COMMUNIQUÉ
              </span>
              <a
                href="mailto:studios@majestic.games"
                className="text-2xl sm:text-4xl lg:text-5xl font-display font-light text-[#f2f2f2] hover:text-white transition-colors tracking-tight block"
              >
                studios@majestic.games
              </a>
            </div>

            <div>
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#666666] uppercase block mb-2">
                PARTNERSHIPS & PUBLISHING
              </span>
              <a
                href="mailto:ventures@majestic.games"
                className="text-2xl sm:text-4xl lg:text-5xl font-display font-light text-[#909090] hover:text-[#f2f2f2] transition-colors tracking-tight block"
              >
                ventures@majestic.games
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Studio Hubs & Network Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 pb-16 sm:pb-20 border-b border-white/[0.06]">
          {/* Studio 1: Tokyo */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] text-[#f2f2f2] uppercase mb-3">
              TOKYO LAB
            </h4>
            <div className="space-y-1.5 text-xs font-mono text-[#909090]">
              <p className="text-[#c8c8c8]">{STUDIO_HUBS[0].phone}</p>
              <p>{STUDIO_HUBS[0].address}</p>
              <p className="text-[#666666]">Minato-ku, Tokyo, JP</p>
            </div>
          </div>

          {/* Studio 2: Stockholm */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] text-[#f2f2f2] uppercase mb-3">
              STOCKHOLM FOUNDRY
            </h4>
            <div className="space-y-1.5 text-xs font-mono text-[#909090]">
              <p className="text-[#c8c8c8]">{STUDIO_HUBS[1].phone}</p>
              <p>{STUDIO_HUBS[1].address}</p>
              <p className="text-[#666666]">Södermalm, Stockholm, SE</p>
            </div>
          </div>

          {/* Studio 3: Los Angeles */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] text-[#f2f2f2] uppercase mb-3">
              LOS ANGELES STAGE
            </h4>
            <div className="space-y-1.5 text-xs font-mono text-[#909090]">
              <p className="text-[#c8c8c8]">{STUDIO_HUBS[2].phone}</p>
              <p>{STUDIO_HUBS[2].address}</p>
              <p className="text-[#666666]">Arts District, LA, CA, US</p>
            </div>
          </div>

          {/* Column 4: Channels */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] text-[#f2f2f2] uppercase mb-3">
              CHANNELS
            </h4>
            <ul className="space-y-1.5 text-xs font-mono">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#909090] hover:text-[#f2f2f2] transition-colors"
                  >
                    <span className="text-[#666666]">→</span>
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-[#666666] uppercase">
          <span>© 2026 MAJESTIC INTERACTIVE. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#909090] transition-colors">
              CONFIDENTIALITY
            </a>
            <a href="#" className="hover:text-[#909090] transition-colors">
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
