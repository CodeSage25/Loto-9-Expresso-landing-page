// components/HeroSection.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// ===========================
// 🎱 COMPOSANT BOULE DE LOTO
// ===========================
function LotoBall({
  number,
  color,
  delay,
  size = "w-16 h-16 text-xl",
}: {
  number: number;
  color: string;
  delay: number;
  size?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`
        ${size} rounded-full flex items-center justify-center
        text-white font-black
        shadow-lg cursor-default select-none
        ${color}
      `}
      style={{
        animation: `float ${3 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        boxShadow: `
          inset -3px -3px 8px rgba(0,0,0,0.3),
          inset 3px 3px 8px rgba(255,255,255,0.2),
          0 8px 20px rgba(0,0,0,0.2)
        `,
      }}
    >
      {number}
    </motion.div>
  );
}

// ===========================
// 🎨 COULEURS DES BOULES
// ===========================
const ballColors = [
  "bg-red-500",
  "bg-blue-600",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-600",
  "bg-pink-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-indigo-600",
];

// ===========================
// 🏗️ COMPOSANT HERO SECTION
// ===========================
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light min-h-[500px] md:min-h-[600px] flex items-center">
      {/* Décos arrière-plan */}
      <div className="absolute top-10 right-10 w-48 md:w-72 h-48 md:h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 md:w-96 h-64 md:h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-40 md:w-64 h-40 md:h-64 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ===========================
              📝 TEXTE (Gauche)
              =========================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Tirage toutes les 2 minutes
            </div>

            {/* Titre H1 — tailles responsive */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              LOTO 9 EXPRESS0 :
              <br />
              <span className="text-gradient-gold">
                Gagnez jusqu&apos;à
                <br className="hidden sm:block" /> 1 000 000 F
              </span>
              <br />
              toutes les 2 minutes !
            </h1>

            {/* Sous-titre */}
            <p className="text-base md:text-xl text-blue-200 mb-8 max-w-lg mx-auto lg:mx-0">
              Simple, rapide, accessible. Jouez responsablement à partir de{" "}
              <strong className="text-white">100 F CFA</strong>.
            </p>

            {/* ===========================
                🎱 BOULES VERSION MOBILE
                ===========================
                Visibles uniquement sur mobile/tablette (lg:hidden)
                Disposition horizontale compacte
            */}
            <div className="flex justify-center gap-2 mb-8 lg:hidden flex-wrap">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => (
                <LotoBall
                  key={num}
                  number={num}
                  color={ballColors[index]}
                  delay={index * 0.05}
                  size="w-10 h-10 text-sm"
                />
              ))}
            </div>

            {/* Bouton CTA */}
            <div className="flex justify-center lg:justify-start">
              <Link
                href="https://iziloto.cm/lottery/games/dyce-games-loto9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta animate-glow text-center text-base md:text-lg"
              >
                JOUER MAINTENANT
              </Link>
            </div>

            {/* Réassurance */}
            <p className="mt-4 text-sm text-blue-300/70 text-center lg:text-left">
              🔒 Plateforme sécurisée • Paiement Mobile Money
            </p>
          </motion.div>

          {/* ===========================
              🎱 BOULES VERSION DESKTOP
              ===========================
              Visibles uniquement sur desktop (hidden lg:flex)
              Grille 3x3 avec grosses boules
          */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl scale-75" />
              <div className="relative grid grid-cols-3 gap-5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => (
                  <LotoBall
                    key={num}
                    number={num}
                    color={ballColors[index]}
                    delay={index * 0.1}
                    size="w-20 h-20 text-2xl"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
