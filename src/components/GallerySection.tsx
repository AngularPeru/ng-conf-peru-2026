"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GallerySection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 sm:py-28 bg-[#0A0A0C] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight font-outfit leading-tight">
            {t.gallery.title}
          </h2>
          <p className="text-gray-200 text-base sm:text-lg lg:text-xl font-normal">
            {t.gallery.desc}
          </p>
        </div>

        {/* 5-Column Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.2fr_1.2fr_1.1fr_1.1fr_2.4fr] gap-3 sm:gap-3.5 h-auto lg:h-[480px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-3 sm:gap-3.5 h-full">
            <div className="relative flex-1 rounded-xl sm:rounded-2xl overflow-hidden bg-[#121218] min-h-[170px] lg:min-h-0">
              <Image
                src="/Frame 5226.png"
                alt="Nicobytes ponencia principal"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative flex-1 rounded-xl sm:rounded-2xl overflow-hidden bg-[#121218] min-h-[170px] lg:min-h-0">
              <Image
                src="/Frame 5233.png"
                alt="Foto comunitaria en auditorio"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3 sm:gap-3.5 h-full">
            <div className="relative flex-1 rounded-xl sm:rounded-2xl overflow-hidden bg-[#121218] min-h-[170px] lg:min-h-0">
              <Image
                src="/Frame 5227.png"
                alt="Sticker Angular y laptop"
                fill
                sizes="(max-width: 1024px) 50vw, 15vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative flex-1 rounded-xl sm:rounded-2xl overflow-hidden bg-[#121218] min-h-[170px] lg:min-h-0">
              <Image
                src="/Frame 5230.png"
                alt="Escenario UTP Ng Conf Perú"
                fill
                sizes="(max-width: 1024px) 50vw, 15vw"
                className="object-cover object-bottom"
                priority
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#121218] min-h-[260px] lg:h-full">
            <Image
              src="/Frame 5230.png"
              alt="Auditorio luces y techo"
              fill
              sizes="(max-width: 1024px) 50vw, 15vw"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Column 4 */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#121218] min-h-[260px] lg:h-full">
            <Image
              src="/Frame 5231.png"
              alt="Presentador en vivo auditorio púrpura"
              fill
              sizes="(max-width: 1024px) 50vw, 15vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Column 5 */}
          <div className="flex flex-col gap-3 sm:gap-3.5 h-full sm:col-span-2 lg:col-span-1">
            {/* Top Wide Image */}
            <div className="relative flex-1 rounded-xl sm:rounded-2xl overflow-hidden bg-[#121218] min-h-[170px] lg:min-h-0">
              <Image
                src="/Frame 5235.png"
                alt="Asistente caminando en butacas"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Bottom Row Split into 2 */}
            <div className="flex-1 grid grid-cols-2 gap-3 sm:gap-3.5 min-h-[140px] lg:min-h-0">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#121218]">
                <Image
                  src="/Frame 5234.png"
                  alt="Asistentes en butacas rojas conversando"
                  fill
                  sizes="(max-width: 1024px) 50vw, 15vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Purple "VER GALERÍA" Card */}
              <Link
                href="/#gallery"
                className="rounded-xl sm:rounded-2xl bg-[#7C00FF] hover:bg-[#8B14FF] text-white flex flex-col items-center justify-center p-3 sm:p-4 text-center transition-all duration-200 group shadow-lg shadow-[#7C00FF]/30 hover:scale-102 select-none"
              >
                <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-1.5 transform group-hover:translate-x-1.5 transition-transform" />
                <span className="text-xs sm:text-sm font-extrabold tracking-wider font-outfit uppercase">
                  {t.gallery.viewGallery}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
