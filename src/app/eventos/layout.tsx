import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos & Sesiones - IA Labs | Ng Conf Perú 2026",
  description:
    "Descubre los eventos, talleres y sesiones de IA Labs Sessions. Aprende sobre herramientas de IA, automatización y agentes.",
};

export default function EventosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
