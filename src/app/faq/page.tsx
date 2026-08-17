"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, HelpCircle, Search, Mail } from "lucide-react";

export default function FAQPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = [
    { id: "all", label: t.faqPage.categories.all },
    { id: "general", label: t.faqPage.categories.general },
    { id: "tickets", label: t.faqPage.categories.tickets },
    { id: "venue", label: t.faqPage.categories.venue },
    { id: "speakers", label: t.faqPage.categories.speakers },
  ];

  const filteredItems = t.faqPage.items.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#0A0A0C] text-gray-100 flex flex-col justify-between">
      <Navbar />

      <section className="relative pt-36 pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Background Aura */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#E5097F]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5097F]/10 border border-[#E5097F]/30 text-[#E5097F] text-xs font-semibold uppercase tracking-wider font-mono">
              <HelpCircle className="w-3.5 h-3.5" /> {t.faqPage.badge}
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-outfit">
              {t.faqPage.title}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.faqPage.subtitle}
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar pregunta..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-[#121218] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#E5097F] text-sm sm:text-base transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-[#E90464] text-white shadow-lg shadow-[#E90464]/30 scale-105"
                    : "bg-[#14141C] text-gray-300 hover:text-white hover:bg-[#1A1A24] border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4 pt-4">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#0E0E14] border border-white/10 overflow-hidden transition-all duration-200 hover:border-[#E5097F]/30"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                    >
                      <span className="font-bold text-base sm:text-lg text-white font-outfit">
                        {item.q}
                      </span>
                      <div
                        className={`p-1.5 rounded-full bg-white/5 text-gray-300 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#E5097F] bg-[#E5097F]/10" : ""
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/5 animate-in fade-in">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 text-gray-400">
                No se encontraron preguntas que coincidan con la búsqueda.
              </div>
            )}
          </div>

          {/* Bottom Contact Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#181824] to-[#101016] border border-white/15 text-center space-y-3">
            <h3 className="text-xl font-bold text-white font-outfit">
              {t.faqPage.needMoreHelp}
            </h3>
            <p className="text-gray-300 text-sm">{t.faqPage.contactUs}</p>
            <div className="pt-2">
              <a
                href="mailto:angularcommunityperu@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E90464] hover:bg-[#FF007A] text-white font-semibold text-sm shadow-md transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>angularcommunityperu@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
