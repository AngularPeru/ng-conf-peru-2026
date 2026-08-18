"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsSection from "@/components/EventsSection";

export default function EventosPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-gray-100 flex flex-col justify-between">
      <Navbar />
      <div className="pt-20">
        <EventsSection />
      </div>
      <Footer />
    </main>
  );
}
