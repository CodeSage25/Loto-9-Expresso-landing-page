// app/gagnants/page.tsx

import type { Metadata } from "next";
import GagnantsContent from "@/components/GagnantsContent";

// ===========================
// 🔍 SEO SPÉCIFIQUE À CETTE PAGE
// ===========================
// Chaque page peut avoir ses propres métadonnées.
// Ça écrase celles du layout.tsx pour cette page uniquement.
export const metadata: Metadata = {
  title: "Gagnants LOTO 9 EXPRESS0 — Tickets Gagnants | IziLoto.cm",
  description:
    "Découvrez les derniers gagnants du LOTO 9 EXPRESS0 sur IziLoto.cm. Tickets gagnants, montants remportés et témoignages.",
};

// ===========================
// 🏗️ PAGE GAGNANTS
// ===========================
// Le Header et Footer s'affichent automatiquement
// car ils sont dans layout.tsx
export default function GagnantsPage() {
  return <GagnantsContent />;
}
