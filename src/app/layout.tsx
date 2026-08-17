import type { Metadata } from "next";
import localFont from "next/font/local";
import { LanguageProvider } from "@/context/LanguageContext";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Ng Conf Perú 2026 | Conferencia de Angular en Perú | 9-10 Octubre",
  description:
    "Ng Conf Perú 2026: La conferencia de Angular más grande de Latinoamérica. Únete el 9 y 10 de octubre en UTEC Lima. Expertos internacionales, talleres, networking y las últimas tendencias en Angular, TypeScript y desarrollo frontend.",
  keywords: [
    "Ng Conf Perú",
    "conferencia Angular",
    "Angular conference Peru",
    "Angular 2026",
    "desarrollo Angular",
    "TypeScript Perú",
    "frontend conference",
    "tech event Lima",
    "UTEC Barranco",
    "JavaScript Perú",
    "web development",
    "Angular workshop",
    "programación Perú",
  ],
  authors: [{ name: "Comunidad Angular Perú" }],
  creator: "Comunidad Angular Perú",
  publisher: "Ng Conf Perú",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Ng Conf Perú 2026 | Conferencia de Angular en Lima",
    description:
      "La conferencia técnica más importante para desarrolladores Angular en Perú. Networking, charlas de expertos y las mejores prácticas en Angular.",
    url: "https://ngconf.angular-peru.com",
    siteName: "Ng Conf Perú 2026",
    locale: "es_PE",
    type: "website",
    countryName: "Peru",
    images: [
      {
        url: "https://ngconf.angular-peru.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ng Conf Perú 2026 - Conferencia de Angular",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ng Conf Perú 2026 | Conferencia de Angular",
    description:
      "Únete a la conferencia de Angular más grande de Latinoamérica. 9-10 octubre en Lima, Perú.",
    creator: "@ngconfperu",
    images: ["https://ngconf.angular-peru.com/twitter-image.png"],
  },
  alternates: {
    canonical: "https://ngconf.angular-peru.com",
    languages: {
      "es-PE": "https://ngconf.angular-peru.com",
      "en-US": "https://ngconf.angular-peru.com/en",
    },
  },
  category: "Technology",
  classification: "Technology Event",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Ng Conf Perú 2026",
    description:
      "La conferencia de Angular más grande de Latinoamérica con expertos internacionales, talleres y networking.",
    url: "https://ngconf.angular-peru.com",
    startDate: "2026-10-09T09:00:00-05:00",
    endDate: "2026-10-10T18:00:00-05:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "UTEC Barranco",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lima",
        addressRegion: "Lima",
        postalCode: "15063",
        addressCountry: "PE",
        streetAddress: "Av. Atahualpa 5250",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-12.1449",
        longitude: "-77.0158",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Comunidad Angular Perú",
      url: "https://ngconf.angular-peru.com",
      sameAs: [
        "https://twitter.com/ngconfperu",
        "https://www.facebook.com/ngconfperu",
        "https://www.linkedin.com/company/ng-conf-peru/",
      ],
    },
    image: [
      "https://ngconf.angular-peru.com/og-image.png",
      "https://ngconf.angular-peru.com/event-banner.png",
    ],
    performer: {
      "@type": "Person",
      name: "Expertos en Angular",
    },
    offers: {
      "@type": "Offer",
      url: "https://ngconf.angular-peru.com",
      price: "0",
      priceCurrency: "PEN",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01T00:00:00-05:00",
    },
  };

  return (
    <html lang="es" className={`${googleSans.variable} scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0A0A0C" />
        <link rel="alternate" hrefLang="es-PE" href="https://ngconf.pe" />
        <link rel="alternate" hrefLang="en" href="https://ngconf.pe/en" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0A0C] text-gray-100 font-sans selection:bg-[#E5097F] selection:text-white antialiased overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
