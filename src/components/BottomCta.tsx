"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function BottomCta() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-r from-[#D60472] via-[#AC00B8] to-[#7B00FF] text-white overflow-hidden select-none">
      {/* Top-Left Decorative Vector Motif (cta-1.png) */}
      <div className="absolute -top-6 left-6 sm:left-12 w-28 sm:w-40 h-auto pointer-events-none opacity-40 select-none">
        <Image
          src="/cta-1.png"
          alt="Vector Decorativo Superior Izquierdo"
          width={180}
          height={180}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Bottom-Right Decorative Vector Motif (cta-2.png) */}
      <div className="absolute -bottom-6 right-6 sm:right-12 w-28 sm:w-40 h-auto pointer-events-none opacity-40 select-none">
        <Image
          src="/cta-2.png"
          alt="Vector Decorativo Inferior Derecho"
          width={180}
          height={180}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 text-center relative z-10 space-y-10">
        {/* Title in 3 lines */}
        <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight font-outfit leading-[1.15] text-white max-w-4xl mx-auto drop-shadow-md">
          {t.cta.titleLine1} <br />
          {t.cta.titleLine2} <br />
          {t.cta.titleLine3}
        </h2>

        {/* Dual Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* Outlined Button */}
          <Link
            href="/#entradas"
            className="px-8 py-3.5 rounded-full border border-white hover:bg-white/10 text-white font-medium text-sm sm:text-base transition-all duration-200"
          >
            {t.cta.waitlistBtn}
          </Link>

          {/* Solid White Button with Magenta Text */}
          <Link
            href="mailto:angularcommunityperu@gmail.com"
            className="px-8 py-3.5 rounded-full bg-white text-[#900050] hover:bg-gray-100 font-semibold text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            {t.cta.sponsorBtn}
          </Link>
        </div>
      </div>
    </section>
  );
}
