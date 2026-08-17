"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function VenueSection() {
  const { t } = useLanguage();

  return (
    <section id="donde-es" className="relative py-24 sm:py-32 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-gray-950 tracking-tight font-outfit leading-tight">
            {t.venue.titleLine1} <br />
            {t.venue.titleLine2}
          </h2>

          <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-1">
            <p>{t.venue.descLine1}</p>
            <p>{t.venue.descLine2}</p>
            <p className="font-semibold text-gray-900">{t.venue.descHighlight}</p>
          </div>
        </div>

        {/* 2-Column Split Container: UTEC Photo + Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-none overflow-hidden shadow-2xl border border-gray-200">
          {/* Left Column */}
          <div className="flex flex-col bg-[#0C0C0F] text-white min-h-[420px] sm:min-h-[480px]">
            <div className="relative flex-1 min-h-[300px] sm:min-h-[360px] w-full">
              <Image
                src="/utec.png"
                alt="Edificio Universidad de Ingeniería y Tecnología - UTEC"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Bottom Dark Info Bar */}
            <div className="p-6 sm:p-8 bg-[#0C0C0F] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 text-left">
                <h3 className="text-lg sm:text-xl font-bold text-white font-outfit">
                  {t.venue.utecTitle}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  {t.venue.utecAddress}
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="https://maps.google.com/?q=Universidad+de+Ingenieria+y+Tecnologia+UTEC+Barranco+Lima"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 rounded-full border border-[#E90464]/80 hover:border-[#E90464] text-xs font-semibold text-white hover:bg-white/10 transition-all duration-200"
                >
                  {t.venue.mapsBtn}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps */}
          <div className="relative min-h-[380px] sm:min-h-[480px] w-full bg-[#E5E3DF]">
            <iframe
              title="Mapa de Ubicación UTEC Barranco Lima"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7093259837947!2d-77.02454642398436!3d-12.132034088111244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b82875150993%3A0xb304910cf9e9cf24!2sUTEC%20-%20Universidad%20de%20Ingenier%C3%ADa%20y%20Tecnolog%C3%ADa!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] sm:min-h-[480px] block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
