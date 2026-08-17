"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function SponsorSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32 bg-white text-gray-900 overflow-hidden">
      {/* Pink Inca Rana Vector in Bottom-Left */}
      <div className="absolute -bottom-10 left-0 w-36 sm:w-52 h-auto pointer-events-none select-none z-0">
        <Image
          src="/vector-rana.png"
          alt="Vector Rana Decorativa"
          width={220}
          height={220}
          className="w-full h-auto object-contain opacity-90 filter drop-shadow-sm"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-16">
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-gray-950 tracking-tight font-outfit leading-tight">
            {t.sponsorSection.title}
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl bg-gray-100 border border-gray-200">
              <Image
                src="/sponsor.png"
                alt="Presentación de patrocinadores Ng Conf Perú"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-7 text-left lg:text-right flex flex-col items-start lg:items-end">
            <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-xl">
              {t.sponsorSection.p1}
            </p>

            <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-xl">
              {t.sponsorSection.p2}
            </p>

            <p className="text-gray-900 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-xl">
              {t.sponsorSection.p3}
            </p>

            {/* CTA Button */}
            <div className="pt-3">
              <Link
                href="mailto:angularcommunityperu@gmail.com"
                className="inline-block px-8 py-3.5 rounded-full bg-[#E90464] hover:bg-[#FF007A] text-white font-bold text-base shadow-md shadow-[#E90464]/30 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                {t.sponsorSection.btn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
