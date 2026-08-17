import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Código de Conducta | Ng Conf Perú 2026",
  description:
    "Código de conducta de Ng Conf Perú 2026. Políticas de inclusión, respeto y comportamiento esperado en nuestra conferencia de Angular.",
  keywords: [
    "código de conducta",
    "coc Ng Conf",
    "políticas inclusión",
    "event safety",
    "community guidelines",
    "conducta evento tecnológico",
  ],
  openGraph: {
    title: "Código de Conducta | Ng Conf Perú 2026",
    description:
      "Compromiso de Ng Conf Perú 2026 con un ambiente seguro, inclusivo y respetuoso para todos los asistentes.",
    url: "https://ngconf.angular-peru.com/codigo-de-conducta",
    type: "website",
  },
  alternates: {
    canonical: "https://ngconf.angular-peru.com/codigo-de-conducta",
  },
};

export default function CodeOfConductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
