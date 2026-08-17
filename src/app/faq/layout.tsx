import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Ng Conf Perú 2026",
  description:
    "Resuelve tus dudas sobre Ng Conf Perú 2026. FAQ sobre entradas, ubicación, speakers, horarios y más. Información completa sobre la conferencia de Angular.",
  keywords: [
    "preguntas frecuentes Ng Conf",
    "FAQ Angular conference",
    "ayuda Ng Conf Perú",
    "entradas conferencia",
    "ubicación UTEC",
    "información evento Angular",
  ],
  openGraph: {
    title: "Preguntas Frecuentes | Ng Conf Perú 2026",
    description:
      "Encuentra respuestas a las preguntas más comunes sobre Ng Conf Perú 2026.",
    url: "https://ngconf.angular-peru.com/faq",
    type: "website",
  },
  alternates: {
    canonical: "https://ngconf.angular-peru.com/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
