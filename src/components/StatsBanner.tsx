"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function StatsBanner() {
  const { t } = useLanguage();

  const stats = [
    {
      value: "+400",
      label: t.stats.attendees,
    },
    {
      value: "10",
      label: t.stats.speakers,
    },
    {
      value: "3",
      label: t.stats.workshops,
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#E90464] text-white overflow-hidden select-none">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 text-center space-y-16 sm:space-y-20">
        {/* Title in 2 lines */}
        <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight font-outfit text-white leading-tight max-w-4xl mx-auto">
          {t.stats.titleLine1} <br />
          {t.stats.titleLine2}
        </h2>

        {/* 3 Stats Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 max-w-4xl mx-auto items-baseline">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-3">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold font-outfit tracking-tight text-white">
                {stat.value}
              </span>
              <span className="text-lg sm:text-xl font-medium tracking-normal text-white">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
