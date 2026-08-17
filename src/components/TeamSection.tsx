"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function TeamSection() {
  const { t } = useLanguage();
  const teamList = [1, 2, 3, 4];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0A0A0C] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16 sm:space-y-20 text-center">
        {/* Section Title */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight font-outfit">
            {t.team.title}
          </h2>
        </div>

        {/* 4 Hexagonal Team Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto items-center justify-items-center">
          {teamList.map((item, idx) => (
            <div
              key={idx}
              className="relative w-full max-w-[220px] transition-transform duration-300 hover:scale-105 select-none"
            >
              <Image
                src="/team.png"
                alt={`Miembro del Team ${idx + 1}`}
                width={240}
                height={269}
                priority
                className="w-full h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(233,4,100,0.25)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
