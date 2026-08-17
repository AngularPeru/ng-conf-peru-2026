"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, Clock, Sparkles } from "lucide-react";

export default function AgendaPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#0A0A0C] text-gray-100 flex flex-col justify-between">
      <Navbar />

      <section className="relative pt-36 pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#E90464]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E90464]/10 border border-[#E90464]/30 text-[#E90464] text-xs font-semibold uppercase tracking-wider font-mono">
              <Calendar className="w-3.5 h-3.5" /> {t.agendaPage.badge}
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-outfit">
              {t.agendaPage.title}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.agendaPage.subtitle}
            </p>
          </div>

          {/* Schedule Timeline */}
          <div className="space-y-4">
            {t.agendaPage.schedule.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#0E0E14] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#E5097F]/40 transition-all group"
              >
                <div className="flex items-center gap-3 text-[#E90464] font-mono text-sm font-semibold flex-shrink-0">
                  <Clock className="w-4 h-4" />
                  <span>{item.time}</span>
                </div>

                <div className="flex-1 space-y-1 sm:px-4">
                  <h3 className="text-base sm:text-lg font-bold text-white font-outfit group-hover:text-[#E90464] transition-colors">
                    {item.title}
                  </h3>
                  {item.speaker && (
                    <p className="text-xs sm:text-sm text-gray-400 font-medium">
                      Expositor: <span className="text-gray-200">{item.speaker}</span>
                    </p>
                  )}
                </div>

                <div className="flex-shrink-0">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-medium ${
                      item.type === "Keynote"
                        ? "bg-[#E90464]/20 text-[#E90464] border border-[#E90464]/40"
                        : item.type === "Workshop"
                        ? "bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/40"
                        : item.type === "Break" || item.type === "After"
                        ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                        : "bg-white/5 text-gray-300 border border-white/10"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Note Banner */}
          <div className="p-6 rounded-2xl bg-[#121218] border border-white/10 text-center text-xs text-gray-400 font-mono">
            * El cronograma puede estar sujeto a ajustes menores para garantizar la mejor experiencia a los asistentes.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
