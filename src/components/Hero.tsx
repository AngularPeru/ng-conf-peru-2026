"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#0A0A0C]"
      style={{
        background:
          "linear-gradient(109.84deg, #0F0F11 26.97%, #300D1E 44.93%, #E90464 89.78%)",
      }}
    >
      {/* Background Glow Aura */}
      <div className="absolute -top-24 right-0 w-[600px] h-[600px] bg-[#E5097F]/25 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Machu Picchu Transparent Vector Graphic Layer */}
      <div className="absolute right-0 bottom-0 top-0 w-full lg:w-[65%] xl:w-[58%] pointer-events-none z-10 flex items-end justify-end select-none">
        <div className="relative w-full h-[70vh] sm:h-[82vh] lg:h-[90vh]">
          <Image
            src="/machu-picchu.png"
            alt="Machu Picchu Ng Conf Perú"
            fill
            priority
            className="object-contain object-right-bottom"
          />
        </div>
      </div>

      {/* Hero Left Content */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-20">
        <div className="max-w-2xl space-y-8">
          {/* Date Tagline */}
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-gray-300 uppercase font-mono">
            {t.hero.date}
          </div>

          {/* Main Title in 2 lines */}
          <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-extrabold text-white tracking-tight leading-[1.05] font-outfit">
            {t.hero.titleLine1} <br />
            {t.hero.titleLine2}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-normal leading-relaxed max-w-xl">
            {t.hero.desc}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/checkout"
              className="px-8 py-3.5 rounded-full bg-[#E5097F] hover:bg-[#FF007A] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#E5097F]/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              {t.hero.buyTickets}
            </Link>

            {/* <Link
              href="mailto:angularcommunityperu@gmail.com"
              className="px-8 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white font-medium text-sm sm:text-base border border-white/40 hover:border-white transition-all duration-300"
            >
              {t.hero.submitTalk}
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
