import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import StatsBanner from "@/components/StatsBanner";
import TicketSection from "@/components/TicketSection";
import GallerySection from "@/components/GallerySection";
import SpeakersSection from "@/components/SpeakersSection";
import SponsorSection from "@/components/SponsorSection";
import TeamSection from "@/components/TeamSection";
import VenueSection from "@/components/VenueSection";
import SponsorsGrid from "@/components/SponsorsGrid";
import BottomCta from "@/components/BottomCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-gray-100 flex flex-col justify-between selection:bg-[#E5097F] selection:text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <StatsBanner />
      <TicketSection />
      <GallerySection />
      <SpeakersSection />
      <SponsorSection />
      <TeamSection />
      <VenueSection />
      <SponsorsGrid />
      <BottomCta />
      <Footer />
    </main>
  );
}
