import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

// Fraunces: editorial serif with real character for headlines — the kind of
// confident, travel-magazine voice that reads as GuiTRIP's own, not a
// default SaaS template face.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Manrope: quiet, modern sans for body copy and UI — legible at small
// sizes without competing with the display face.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://guitrip.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GuiTRIP Club — Seus pontos podem valer muito mais",
    template: "%s | GuiTRIP Club",
  },
  description:
    "Assine o GuiTRIP Club e receba no WhatsApp alertas de transferências bonificadas, emissões com milhas, promoções e dicas para viajar mais gastando menos.",
  keywords: [
    "milhas",
    "pontos",
    "viagens",
    "transferência bonificada",
    "passagens com milhas",
    "GuiTRIP",
    "clube de milhas",
  ],
  authors: [{ name: "GuiTRIP" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "GuiTRIP Club",
    title: "GuiTRIP Club — Seus pontos podem valer muito mais",
    description:
      "Alertas, oportunidades e conhecimento sobre pontos, milhas e viagens, direto no seu WhatsApp.",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "GuiTRIP Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GuiTRIP Club — Seus pontos podem valer muito mais",
    description:
      "Alertas, oportunidades e conhecimento sobre pontos, milhas e viagens, direto no seu WhatsApp.",
    images: ["/images/og-cover.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
