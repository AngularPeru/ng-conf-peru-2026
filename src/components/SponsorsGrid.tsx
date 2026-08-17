"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function SponsorsGrid() {
  const { t } = useLanguage();

  return (
    <section id="sponsors" className="relative py-24 sm:py-32 bg-[#0A0A0C] overflow-hidden text-center text-white">
      {/* Right Edge: Vertical Inca Torre Pattern */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-28 h-full pointer-events-none select-none z-0 opacity-40 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/torre.png"
            alt="Patrón Torre Decorativo"
            fill
            className="object-cover object-right"
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight font-outfit">
            {t.sponsorsGrid.title}
          </h2>
        </div>

        {/* Tier: Gold */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-white">
            {t.sponsorsGrid.gold}
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {/* Gold Sponsor 1 */}
            <div className="relative w-48 sm:w-56 aspect-[200/220] flex items-center justify-center p-6 group transition-transform duration-300 hover:scale-105 select-none">
              <Image
                src="/arco.png"
                alt="Marco Sponsor Gold"
                fill
                className="object-contain"
              />
              <div className="relative z-10 px-4 flex flex-col items-center justify-center text-center">
                <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                  Google for <strong className="font-bold">Developers</strong>
                </span>
              </div>
            </div>

            {/* Gold Sponsor 2: JetBrains */}
            <div className="relative w-48 sm:w-56 aspect-[200/220] flex items-center justify-center p-6 group transition-transform duration-300 hover:scale-105 select-none">
              <Image
                src="/arco.png"
                alt="Marco Sponsor Gold"
                fill
                className="object-contain"
              />
              <div className="relative z-10 px-4 flex flex-col items-center justify-center text-center space-y-1">
                <Image
                  src="/logo-jetbrains.png"
                  alt="JetBrains"
                  width={110}
                  height={24}
                  className="h-5 sm:h-6 w-auto object-contain opacity-95 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tier: Venue */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-white">
            {t.sponsorsGrid.venue}
          </h3>

          <div className="flex items-center justify-center">
            <div className="relative w-48 sm:w-56 aspect-[200/220] flex items-center justify-center p-6 group transition-transform duration-300 hover:scale-105 select-none">
              <Image
                src="/arco.png"
                alt="Marco Sponsor Venue"
                fill
                className="object-contain"
              />
              <div className="relative z-10 px-4 flex flex-col items-center justify-center text-center">
                <div className="inline-flex items-center gap-1 bg-white text-black px-3 py-1.5 rounded font-black text-lg tracking-wider font-outfit">
                  <span>UTEC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tier: Support */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-white">
            {t.sponsorsGrid.support}
          </h3>

          <div className="flex items-center justify-center">
            <div className="relative w-48 sm:w-56 aspect-[200/220] flex items-center justify-center p-6 group transition-transform duration-300 hover:scale-105 select-none">
              <Image
                src="/arco.png"
                alt="Marco Sponsor Support"
                fill
                className="object-contain"
              />
              <div className="relative z-10 px-4 flex flex-col items-center justify-center text-center space-y-1.5">
                <div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-bold text-sm">
                  S
                </div>
                <span className="text-sm font-extrabold tracking-wider font-outfit uppercase text-white">
                  sessionize
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Link
            href="mailto:angularcommunityperu@gmail.com"
            className="inline-block px-7 py-2.5 rounded-full bg-white hover:bg-gray-100 text-gray-950 font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            {t.sponsorsGrid.btn}
          </Link>
        </div>
      </div>
    </section>
  );
}
