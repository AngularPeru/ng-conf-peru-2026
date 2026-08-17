"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function TicketSection() {
  const { t } = useLanguage();

  return (
    <section
      id="entradas"
      className="relative py-20 sm:py-28 bg-white text-gray-900 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Title, Description & CTA Button */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-gray-950 tracking-tight leading-[1.1] font-outfit">
              {t.tickets.titleLine1} <br />
              {t.tickets.titleLine2}
            </h2>

            <p className="text-gray-700 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-lg">
              {t.tickets.desc}
            </p>

            <div className="pt-2">
              <Link
                href="#entradas"
                className="inline-block px-8 py-3.5 rounded-full bg-[#E90464] hover:bg-[#FF007A] text-white font-bold text-base shadow-md shadow-[#E90464]/30 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                {t.tickets.btn}
              </Link>
            </div>
          </div>

          {/* Right Column: Ticket Image with Mirror Reflection */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center">
            <div className="relative w-full max-w-[473px]">
              {/* Main Ticket Image */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/ticket-card.png"
                  alt="Ticket Ng Conf Perú 2026"
                  width={473}
                  height={243}
                  priority
                  className="w-full h-auto object-contain block"
                />
              </div>

              {/* Reflection Effect */}
              <div
                className="w-full pointer-events-none select-none opacity-40 transform scale-y-[-1] -mt-2"
                style={{
                  maskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 65%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 65%)",
                }}
              >
                <Image
                  src="/ticket-card.png"
                  alt="Ticket Reflejo"
                  width={473}
                  height={243}
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
