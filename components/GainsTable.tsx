// components/GainsTable.tsx

"use client";

import { motion } from "framer-motion";
import { Star, Crown, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

// ===========================
// 📋 DONNÉES DES GAINS (sans le Jackpot)
// ===========================
// Le Jackpot est traité séparément pour un rendu spécial.
const regularGains = [
  {
    numbers: 3,
    multiplier: "x2",
    level: 1,
    color: "from-blue-50 to-blue-100",
    textColor: "text-blue-700",
    labelColor: "text-blue-500",
    borderColor: "border-blue-200 hover:border-blue-400",
    iconColor: "text-blue-400",
  },
  {
    numbers: 4,
    multiplier: "x5",
    level: 2,
    color: "from-indigo-50 to-indigo-100",
    textColor: "text-indigo-700",
    labelColor: "text-indigo-500",
    borderColor: "border-indigo-200 hover:border-indigo-400",
    iconColor: "text-indigo-400",
  },
  {
    numbers: 5,
    multiplier: "x50",
    level: 3,
    color: "from-violet-50 to-violet-100",
    textColor: "text-violet-700",
    labelColor: "text-violet-500",
    borderColor: "border-violet-200 hover:border-violet-400",
    iconColor: "text-violet-400",
  },
  {
    numbers: 6,
    multiplier: "x100",
    level: 4,
    color: "from-purple-50 to-purple-100",
    textColor: "text-purple-700",
    labelColor: "text-purple-500",
    borderColor: "border-purple-200 hover:border-purple-400",
    iconColor: "text-purple-400",
  },
  {
    numbers: 7,
    multiplier: "x500",
    level: 5,
    color: "from-primary/10 to-primary/20",
    textColor: "text-primary",
    labelColor: "text-primary-light",
    borderColor: "border-primary/30 hover:border-primary",
    iconColor: "text-primary",
  },
  {
    numbers: 8,
    multiplier: "x5 000",
    level: 6,
    color: "from-primary to-primary-light",
    textColor: "text-white",
    labelColor: "text-blue-200",
    borderColor: "border-primary hover:border-primary-light",
    iconColor: "text-gold",
  },
];

// ===========================
// 🏗️ COMPOSANT
// ===========================
export default function GainsTable() {
  return (
    <section id="gains" className="py-16 md:py-20 bg-white">
      <div className="section-container">
        {/* Titre + sous-titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Tableau des gains</h2>
          <p className="section-subtitle">
            Plus vous trouvez de numéros dans le bon ordre, plus vous gagnez !
          </p>
        </motion.div>

        {/* ===========================
            📦 GRILLE DES 6 PREMIERS NIVEAUX
            ===========================
            2 colonnes mobile → 3 colonnes tablette → 6 colonnes desktop
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4 mb-6">
          {regularGains.map((gain, index) => (
            <motion.div
              key={gain.numbers}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`
                relative rounded-2xl overflow-hidden
                border-2 ${gain.borderColor}
                transition-all duration-300
                group
              `}
            >
              {/* Fond dégradé */}
              <div className={`bg-gradient-to-br ${gain.color} p-5 md:p-6`}>
                {/* Icône de progression */}
                <div className="mb-3">
                  {gain.level >= 5 ? (
                    <Star
                      size={20}
                      className={`${gain.iconColor} group-hover:scale-125 transition-transform duration-300`}
                      fill="currentColor"
                    />
                  ) : (
                    <TrendingUp
                      size={20}
                      className={`${gain.iconColor} group-hover:scale-125 transition-transform duration-300`}
                    />
                  )}
                </div>

                {/* Label "X numéros" */}
                <div
                  className={`text-xs font-semibold ${gain.labelColor} mb-1`}
                >
                  {gain.numbers} numéros
                </div>

                {/* Multiplicateur */}
                <div
                  className={`text-2xl md:text-3xl font-black ${gain.textColor}`}
                >
                  {gain.multiplier}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===========================
            🏆 CARTE JACKPOT (9 NUMÉROS)
            ===========================
            Bandeau horizontal spectaculaire, séparé du reste
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`
            relative overflow-hidden
            bg-gradient-to-r from-gold-dark via-gold to-gold-light
            rounded-3xl
            ring-4 ring-gold/30
            shadow-2xl shadow-gold/20
          `}
        >
          {/* Éléments décoratifs */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Gauche : Icône + Label */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary-dark/20 rounded-2xl flex items-center justify-center animate-pulse-slow">
                <Crown size={36} className="text-primary-dark" />
              </div>
              <div>
                <div className="text-xs font-bold text-primary-dark/60 uppercase tracking-wider">
                  9 numéros trouvés
                </div>
                <div className="text-sm text-primary-dark/80 font-medium">
                  Le graal du LOTO 9 EXPRESS0
                </div>
              </div>
            </div>

            {/* Centre : Montant */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-dark">
                1 000 000 F
              </div>
              <div className="mt-1 inline-flex items-center gap-1 bg-primary-dark text-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Zap size={12} />
                Jackpot
              </div>
            </div>

            {/* Droite : Bouton CTA */}
            <Link
              href="https://iziloto.cm/lottery/games/dyce-games-loto9"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex-shrink-0
                bg-primary-dark text-gold
                font-bold text-sm
                px-6 py-3 rounded-xl
                hover:bg-primary transition-all duration-300
                hover:scale-105
                shadow-lg
              `}
            >
              Tenter ma chance →
            </Link>
          </div>
        </motion.div>

        {/* Texte informatif */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-gray-500 mt-6"
        >
          * Les gains sont des multiplicateurs de votre mise. Le jackpot est de
          1 000 000 F CFA.
        </motion.p>
      </div>
    </section>
  );
}
