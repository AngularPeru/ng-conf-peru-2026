import type { Metadata } from "next";
import localFont from "next/font/local";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const googleSans = localFont({
  src: "./fonts/GoogleSans.ttf",
  variable: "--font-google-sans",
  display: "swap",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Noto Sans",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
});

export const metadata: Metadata = {
  title: "Ng Conf Perú 2026 | Conferencia de Angular en Perú",
  description:
    "El evento referente de Angular en Perú se aproxima. 12 de Septiembre de 2026 en Lima, Perú. Únete a expertos locales e internacionales.",
  keywords: [
    "Ng Conf Perú",
    "Angular",
    "Angular Conference",
    "Perú Tech",
    "Frontend Perú",
    "UTEC Barranco",
    "JavaScript Perú",
    "TypeScript",
  ],
  authors: [{ name: "Comunidad Angular Perú" }],
  openGraph: {
    title: "Ng Conf Perú 2026 | El evento referente de Angular",
    description:
      "Sumérgete en un día lleno de conocimientos, networking y el mejor contenido sobre Angular en Lima, Perú.",
    url: "https://ngconf.pe",
    siteName: "Ng Conf Perú 2026",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${googleSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0A0A0C] text-gray-100 font-sans selection:bg-[#E5097F] selection:text-white antialiased overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
