// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LOTO 9 EXPRESS — Gagnez jusqu'à 1 000 000 F CFA | IziLoto.cm",
  description:
    "Jouez au LOTO 9 EXPRESS sur IziLoto.cm. Choisissez 9 numéros, misez à partir de 100 F CFA et gagnez jusqu'à 1 000 000 F CFA toutes les 2 minutes. Disponible au Cameroun via MTN Mobile Money et Orange Money.",
  keywords:
    "loto, cameroun, jeu, loterie, loto 9, express, iziloto, mobile money, gains",
  authors: [{ name: "Dyce Gaming" }],
  openGraph: {
    title: "LOTO 9 EXPRESS — Gagnez jusqu'à 1 000 000 F CFA",
    description:
      "Simple, rapide, accessible. Jouez responsablement à partir de 100 F CFA.",
    type: "website",
    locale: "fr_CM",
    url: "https://iziloto.cm",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />

        {/* Bouton flottant pour remonter en haut */}
        <ScrollToTop />
      </body>
    </html>
  );
}
