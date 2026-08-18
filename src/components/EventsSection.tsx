"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, MapPin, Users, ExternalLink, MessageCircle } from "lucide-react";

export default function EventsSection() {
  const { t } = useLanguage();
  const { eventsSection } = t;

  return (
    <section id="eventos" className="py-20 relative bg-[#0A0A0C] border-t border-white/5 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E5097F]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5097F]/10 border border-[#E5097F]/30 text-[#E5097F] text-xs font-semibold uppercase tracking-wider font-mono">
              <Calendar className="w-3.5 h-3.5" />
              {eventsSection.badge}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-outfit">
              {eventsSection.title}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              {eventsSection.subtitle}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://chat.whatsapp.com/KGzIkgdIY2u8p3WFXr619c"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs sm:text-sm font-semibold transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              {eventsSection.whatsappBtn}
            </a>

            <a
              href="https://luma.com/ia-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#E5097F] hover:bg-[#FF007A] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#E5097F]/30 transition-all duration-200"
            >
              {eventsSection.viewAllLuma}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsSection.items.map((event) => (
            <div
              key={event.id}
              className="group rounded-2xl bg-[#0E0E14] border border-white/10 hover:border-[#E5097F]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg shadow-black/40 hover:-translate-y-1"
            >
              <div>
                {/* Image Banner */}
                <div className="relative w-full h-44 bg-neutral-900 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-transparent to-black/20" />

                  {/* Format & Status Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono font-medium text-white">
                      {event.format}
                    </span>
                    {event.badgeStatus && (
                      <span className="px-2.5 py-1 rounded-full bg-[#E5097F]/80 backdrop-blur-md text-xs font-mono font-bold text-white uppercase tracking-wider">
                        {event.badgeStatus}
                      </span>
                    )}
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-white font-outfit line-clamp-2 group-hover:text-[#E5097F] transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-xs text-gray-400 font-medium line-clamp-1">
                    {event.hosts}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <MapPin className="w-3.5 h-3.5 text-[#E5097F] flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {event.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-gray-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-white/5">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                  {event.attendees && (
                    <>
                      <Users className="w-3.5 h-3.5 text-purple-400" />
                      <span>{event.attendees} asistentes</span>
                    </>
                  )}
                </div>

                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#E5097F] hover:text-white transition-colors group/link"
                >
                  {eventsSection.viewEvent}
                  <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
