"use client";

import React, { useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-gradient-to-b from-[#4D1821] via-[#330A11] to-[#1E050A] flex flex-col justify-between p-8 sm:p-12 md:hidden overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-6">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-mono tracking-[0.28em] text-[#FAF7F2] uppercase font-bold">
            MAJESTIC
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#FAF7F2]/80 uppercase px-1.5 py-0.5 rounded border border-white/20 bg-black/25">
            STUDIO
          </span>
        </div>

        <button
          onClick={onClose}
          className="text-[#FAF7F2] hover:text-white p-2 rounded-full border border-white/20 hover:bg-white/10 transition-all"
          aria-label="Close navigation"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links - Monumental Quiet Luxury Typography */}
      <nav className="relative z-10 flex flex-col gap-6 my-auto" aria-label="Mobile Navigation Links">
        {links.map((link, idx) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="group flex items-baseline justify-between py-3 border-b border-white/10 hover:border-white/30 transition-all"
          >
            <div className="flex items-baseline gap-4 transition-transform duration-300 group-hover:translate-x-2">
              <span className="text-[11px] font-mono text-[#E5D2D6]/60 font-semibold">
                0{idx + 1}
              </span>
              <span className="text-3xl font-display font-light text-[#FAF7F2] group-hover:text-white transition-colors duration-200 uppercase tracking-tight">
                {link.label}
              </span>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#FAF7F2]/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        ))}

        {/* Mobile Contact Action */}
        <div className="pt-4">
          <a
            href="#footer"
            onClick={onClose}
            className="w-full py-3.5 px-6 rounded-full bg-[#FAF7F2] text-[#330A11] hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
          >
            <span className="text-xs font-mono tracking-[0.24em] font-semibold uppercase">
              INITIATE CONTACT
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#4D1821]" />
          </a>
        </div>
      </nav>

      {/* Bottom Telemetry */}
      <div className="relative z-10 border-t border-white/15 pt-6 flex items-center justify-between text-[11px] font-mono text-[#E5D2D6]/70 tracking-wider uppercase">
        <span>TOKYO • STOCKHOLM • LA</span>
        <span>EST. 2026</span>
      </div>
    </div>
  );
}
