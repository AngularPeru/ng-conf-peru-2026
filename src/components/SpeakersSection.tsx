"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function SpeakersSection() {
  const { t } = useLanguage();

  const speakers = [
    {
      id: 1,
      name: "Sofía Martínez",
      roleLine1: t.speakers.roleGDE,
      roleLine2: t.speakers.roleAngular,
      image: "/speaker.png",
      companyLogo: "/logo-jetbrains.png",
      companyName: "JetBrains",
    },
    {
      id: 2,
      name: "Sofía Martínez",
      roleLine1: t.speakers.roleGDE,
      roleLine2: t.speakers.roleAngular,
      image: "/speaker.png",
      companyLogo: "/logo-jetbrains.png",
      companyName: "JetBrains",
    },
    {
      id: 3,
      name: "Sofía Martínez",
      roleLine1: t.speakers.roleGDE,
      roleLine2: t.speakers.roleAngular,
      image: "/speaker.png",
      companyLogo: "/logo-jetbrains.png",
      companyName: "JetBrains",
    },
    {
      id: 4,
      name: "Sofía Martínez",
      roleLine1: t.speakers.roleGDE,
      roleLine2: t.speakers.roleAngular,
      image: "/speaker.png",
      companyLogo: "/logo-jetbrains.png",
      companyName: "JetBrains",
    },
  ];

  return (
    <section id="speakers" className="relative py-24 sm:py-32 bg-[#0A0A0C] overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight font-outfit">
            {t.speakers.title}
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {t.speakers.subtitleLine1} <br className="hidden sm:block" />
            {t.speakers.subtitleLine2}
          </p>

          <div className="pt-1">
            <Link
              href="mailto:angularcommunityperu@gmail.com"
              className="inline-block px-8 py-3 rounded-full bg-[#E90464] hover:bg-[#FF007A] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#E90464]/30 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {t.speakers.submitTalk}
            </Link>
          </div>
        </div>

        {/* Speakers 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="rounded-[24px] bg-[#0E0E12] border border-white/10 overflow-hidden flex flex-col items-center text-center pb-6 transition-all duration-300 hover:border-[#E90464]/40 group"
            >
              {/* Speaker Headshot with bottom gradient fade */}
              <div className="relative w-full aspect-[4/4.2] overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-top filter grayscale contrast-115 group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-[#0E0E12]/80 via-25% to-transparent" />
              </div>

              {/* Text Info */}
              <div className="px-4 -mt-2 space-y-1 z-10 w-full flex flex-col items-center">
                <h3 className="text-lg sm:text-xl font-bold text-white font-outfit">
                  {speaker.name}
                </h3>

                <div className="text-xs sm:text-[13px] font-medium text-[#E90464] leading-snug">
                  <p>{speaker.roleLine1}</p>
                  <p>{speaker.roleLine2}</p>
                </div>

                <div className="pt-3 pb-1 flex items-center justify-center">
                  <Image
                    src={speaker.companyLogo}
                    alt={speaker.companyName}
                    width={100}
                    height={22}
                    className="h-4 sm:h-[18px] w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
