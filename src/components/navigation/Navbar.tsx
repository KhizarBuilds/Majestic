"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Bottom proximity check to ensure smooth exit before overlapping footer
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const currentScroll = window.scrollY + clientHeight;

      if (scrollHeight - currentScroll < 260) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver specifically watching the footer element
    const footerElement = document.getElementById("footer");
    let observer: IntersectionObserver | null = null;

    if (footerElement) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsFooterVisible(entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0.02,
        }
      );
      observer.observe(footerElement);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  const navLinks = [
    { label: "TITLES", href: "#titles" },
    { label: "STUDIO", href: "#studio" },
    { label: "DISPATCHES", href: "#dispatches" },
    { label: "ABOUT", href: "#about" },
  ];

  // The navbar stays visible throughout the site and smoothly hides ONLY when entering the footer
  const shouldHide = isFooterVisible || isNearBottom;

  return (
    <>
      {/* Floating Header Container with Smooth Exit on Footer */}
      <header
        className={`fixed top-3 sm:top-5 left-0 right-0 z-[90] px-4 sm:px-6 lg:px-8 pointer-events-none flex justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          shouldHide
            ? "-translate-y-28 opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        }`}
      >
        {/* Clean, Elegant Rounded Burgundy Glass Capsule */}
        <div
          className={`w-full max-w-6xl pointer-events-auto rounded-full transition-all duration-500 ease-out px-5 sm:px-8 flex items-center justify-between border border-[#800020]/45 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_40px_rgba(0,0,0,0.65),0_0_20px_rgba(77,24,33,0.3)] backdrop-blur-2xl relative overflow-hidden ${
            isScrolled
              ? "py-3 shadow-[0_16px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(128,0,32,0.35)]"
              : "py-3.5 sm:py-4 shadow-[0_10px_35px_rgba(0,0,0,0.55)]"
          }`}
          style={{
            background: isScrolled
              ? "linear-gradient(90deg, rgba(46, 10, 17, 0.97) 0%, rgba(77, 24, 33, 0.98) 50%, rgba(46, 10, 17, 0.97) 100%)"
              : "linear-gradient(90deg, rgba(40, 9, 15, 0.93) 0%, rgba(77, 24, 33, 0.95) 50%, rgba(40, 9, 15, 0.93) 100%)",
          }}
        >
          {/* Subtle Silk Top Specular Hairline */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

          {/* Left: Brand Identity */}
          <Link
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3 group transition-opacity duration-300 hover:opacity-90 shrink-0"
          >
            <span className="text-sm font-display font-bold tracking-[0.32em] text-[#FAF7F2] uppercase">
              MAJESTIC
            </span>

            {/* Subtle Atelier Tag */}
            <span className="hidden sm:inline-block font-mono text-[9px] tracking-[0.24em] text-[#FAF7F2]/80 uppercase px-2 py-0.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm">
              STUDIO
            </span>
          </Link>

          {/* Center: Desktop Navigation Links on Burgundy */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-10"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-mono tracking-[0.24em] text-[#E5D2D6] hover:text-[#FFFFFF] transition-all duration-300 py-1.5 px-3 rounded-full hover:bg-white/[0.12] uppercase font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Luxury High-Contrast Contact Capsule */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href="#footer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FAF7F2] text-[#330A11] hover:bg-white transition-all duration-300 font-mono text-[11px] tracking-[0.24em] font-semibold uppercase shadow-[0_2px_14px_rgba(0,0,0,0.35)] hover:shadow-[0_4px_22px_rgba(250,247,242,0.25)] hover:scale-[1.02]"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#4D1821]" />
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#FAF7F2] hover:text-white border border-white/20 hover:bg-white/10 transition-all"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Cinematic Full-screen Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
