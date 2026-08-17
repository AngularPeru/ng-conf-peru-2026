import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda | Ng Conf Perú 2026",
  description:
    "Conoce el programa completo de Ng Conf Perú 2026. Charlas, talleres y horarios de los 9 y 10 de octubre. Expertos en Angular, TypeScript y desarrollo frontend.",
  keywords: [
    "agenda Ng Conf Perú",
    "programa conferencia Angular",
    "charlas Angular",
    "talleres TypeScript",
    "horarios Ng Conf",
    "schedule Angular conference Peru",
  ],
  openGraph: {
    title: "Agenda | Ng Conf Perú 2026",
    description:
      "Programa completo de charlas, talleres y actividades de Ng Conf Perú 2026.",
    url: "https://ngconf.angular-peru.com/agenda",
    type: "website",
  },
  alternates: {
    canonical: "https://ngconf.angular-peru.com/agenda",
  },
};

export default function AgendaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
