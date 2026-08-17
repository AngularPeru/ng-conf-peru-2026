"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, CheckCircle2, AlertTriangle, LifeBuoy, Scale } from "lucide-react";

export default function CodeOfConductPage() {
  const { t } = useLanguage();

  const sectionIcons = [CheckCircle2, AlertTriangle, LifeBuoy, Scale];

  return (
    <main className="min-h-screen bg-[#0A0A0C] text-gray-100 flex flex-col justify-between">
      <Navbar />

      <section className="relative pt-36 pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-purple-300 text-xs font-semibold uppercase tracking-wider font-mono">
              <ShieldCheck className="w-3.5 h-3.5" /> {t.conductPage.badge}
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-outfit">
              {t.conductPage.title}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.conductPage.subtitle}
            </p>
          </div>

          {/* Intro Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0E0E14] border border-white/10 leading-relaxed text-gray-200 text-base sm:text-lg">
            {t.conductPage.intro}
          </div>

          {/* Sections List */}
          <div className="space-y-8">
            {t.conductPage.sections.map((section, idx) => {
              const IconComp = sectionIcons[idx] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-[#0E0E14] border border-white/10 space-y-4 hover:border-[#E5097F]/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#E90464]/15 text-[#E90464]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white font-outfit">
                      {section.title}
                    </h2>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {section.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E90464] mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Closing Message */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#D60472]/30 via-[#8B14FF]/30 to-[#7B00FF]/30 border border-white/20 text-center space-y-2">
            <p className="text-base sm:text-lg font-medium text-white">
              {t.conductPage.closing}
            </p>
            <p className="text-xs text-gray-300 font-mono">
              Comité Organizador Ng Conf Perú 2026
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
