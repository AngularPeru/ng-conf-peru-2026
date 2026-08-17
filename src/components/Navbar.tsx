"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.speakers, href: "/#speakers" },
    { name: t.nav.venue, href: "/#donde-es" },
    { name: t.nav.agenda, href: "/agenda" },
    { name: t.nav.conduct, href: "/codigo-de-conducta" },
    { name: t.nav.faq, href: "/faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo / Home Link */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105"
          >
            <span className="font-extrabold text-xl tracking-tight text-white font-outfit">
              Ng Conf <span className="text-[#E5097F]">Perú</span>
            </span>
          </Link>

          {/* Desktop Right Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <nav className="flex items-center gap-6 xl:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-200 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Buttons Group */}
            <div className="flex items-center gap-3">
              <Link
                href="mailto:angularcommunityperu@gmail.com"
                className="px-5 py-2 rounded-full border border-[#E5097F]/70 hover:border-[#E5097F] text-xs xl:text-sm font-medium text-white hover:bg-[#E5097F]/15 transition-all duration-200"
              >
                {t.nav.sponsorBtn}
              </Link>

              <Link
                href="/#entradas"
                className="px-5 py-2 rounded-full bg-[#E5097F] hover:bg-[#FF007A] text-xs xl:text-sm font-semibold text-white shadow-md shadow-[#E5097F]/30 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                {t.nav.ticketsBtn}
              </Link>

              {/* Language Switcher */}
              <div className="flex items-center text-xs font-semibold pl-2 text-gray-400">
                <button
                  onClick={() => setLang("ES")}
                  className={`hover:text-white transition-colors ${
                    lang === "ES" ? "text-white font-bold" : "text-gray-400"
                  }`}
                >
                  ES
                </button>
                <span className="mx-1 text-gray-600">|</span>
                <button
                  onClick={() => setLang("EN")}
                  className={`hover:text-white transition-colors ${
                    lang === "EN" ? "text-white font-bold" : "text-gray-400"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Language Switcher */}
            <div className="flex items-center text-xs font-semibold text-gray-400 mr-2">
              <button
                onClick={() => setLang("ES")}
                className={`hover:text-white transition-colors ${
                  lang === "ES" ? "text-white font-bold" : "text-gray-400"
                }`}
              >
                ES
              </button>
              <span className="mx-1 text-gray-600">|</span>
              <button
                onClick={() => setLang("EN")}
                className={`hover:text-white transition-colors ${
                  lang === "EN" ? "text-white font-bold" : "text-gray-400"
                }`}
              >
                EN
              </button>
            </div>

            <Link
              href="/#entradas"
              className="px-3.5 py-1.5 rounded-full bg-[#E5097F] text-xs font-semibold text-white"
            >
              {t.nav.ticketsBtn}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#E5097F]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0C]/95 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-6 space-y-3 transition-all duration-300 animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-200 hover:text-white hover:bg-[#E5097F]/10 hover:text-[#E5097F] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 space-y-2 border-t border-white/10">
            <Link
              href="mailto:angularcommunityperu@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 px-4 rounded-full border border-[#E5097F]/70 text-center text-sm font-medium text-white"
            >
              {t.nav.sponsorBtn}
            </Link>
            <Link
              href="/#entradas"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 px-4 rounded-full bg-[#E5097F] text-center text-sm font-semibold text-white shadow-lg shadow-[#E5097F]/40"
            >
              {t.nav.ticketsBtn}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
