"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="que-es"
      className="relative py-20 sm:py-28 bg-[#0A0A0C] overflow-hidden border-t border-b border-[#E5097F]/20"
    >
      {/* Decorative Inca geometric pattern along the left edge */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none select-none">
        <Image
          src="/vector.png"
          alt="Patrón Inca Decorativo"
          width={168}
          height={490}
          className="h-[320px] sm:h-[420px] w-auto object-contain filter brightness-125"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Title in 3 lines */}
          <div className="lg:col-span-5 pl-4 sm:pl-8 lg:pl-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-outfit">
              {t.about.titleLine1} <br />
              {t.about.titleLine2} <br />
              {t.about.titleLine3}
            </h2>
          </div>

          {/* Right Column: Descriptions */}
          <div className="lg:col-span-7 space-y-6 text-left lg:text-right max-w-2xl lg:ml-auto">
            <p className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
              {t.about.p1}
            </p>

            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              {t.about.p2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
