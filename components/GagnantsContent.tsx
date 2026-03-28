// components/GagnantsContent.tsx

"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar, Ticket, Award, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ===========================
// 📋 DONNÉES DES GAGNANTS
// ===========================
// Quand il y aura un gagnant, ajoute un objet ici.
// Pour l'instant, le tableau est vide → on affiche un message
// "Pas encore de gagnants".
//
// EXEMPLE pour ajouter un gagnant plus tard :
// {
//   id: 1,
//   date: "15 Janvier 2025",
//   ticketImage: "/images/ticket-gagnant-1.png",
//   description: "3 numéros trouvés — Gain de x2 !",
//   gain: "200 F CFA",
//   numbersFound: 3,
// },

interface Winner {
  id: number;
  date: string;
  ticketImage: string; // Chemin vers l'image du ticket dans /public/images/
  description: string;
  gain: string;
  numbersFound: number;
}

const winners: Winner[] = [
  // ===========================
  // 👇 AJOUTE LES GAGNANTS ICI
  // ===========================
  // Exemple :
  // {
  //   id: 1,
  //   date: "15 Janvier 2025",
  //   ticketImage: "/images/tickets/ticket-gagnant-1.png",
  //   description: "Un joueur de Douala a trouvé 7 numéros dans le bon ordre et remporté un gain incroyable !",
  //   gain: "50 000 F CFA",
  //   numbersFound: 7,
  // },
  // {
  //   id: 2,
  //   date: "20 Janvier 2025",
  //   ticketImage: "/images/tickets/ticket-gagnant-2.png",
  //   description: "Jackpot décroché ! 9 numéros trouvés par un joueur de Yaoundé !",
  //   gain: "1 000 000 F CFA",
  //   numbersFound: 9,
  // },
];

// ===========================
// 🏷️ BADGE COULEUR SELON LE NOMBRE DE NUMÉROS
// ===========================
function getGainBadgeStyle(numbersFound: number): string {
  if (numbersFound === 9)
    return "bg-gold text-primary-dark ring-2 ring-gold/50";
  if (numbersFound >= 7) return "bg-primary text-white";
  if (numbersFound >= 5) return "bg-blue-100 text-blue-700";
  return "bg-gray-100 text-gray-700";
}

// ===========================
// 🏗️ COMPOSANT PRINCIPAL
// ===========================
export default function GagnantsContent() {
  return (
    <div className="min-h-screen">
      {/* ===========================
          🎯 HERO BANNER DE LA PAGE
          =========================== */}

      {/* ===========================
          📦 LISTE DES GAGNANTS
          =========================== */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          {winners.length > 0 ? (
            <>
              {/* ===========================
                  ✅ IL Y A DES GAGNANTS → ON LES AFFICHE
                  =========================== */}

              {/* Compteur de gagnants */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">
                  <Award size={16} />
                  {winners.length} gagnant{winners.length > 1 ? "s" : ""} au
                  total
                </div>
              </div>

              {/* Grille des tickets gagnants */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {winners.map((winner, index) => (
                  <motion.div
                    key={winner.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`
                      bg-white rounded-2xl overflow-hidden
                      border-2 
                      ${
                        winner.numbersFound === 9
                          ? "border-gold shadow-xl shadow-gold/10"
                          : "border-gray-100 shadow-md"
                      }
                      hover:shadow-xl hover:-translate-y-1
                      transition-all duration-300
                    `}
                  >
                    {/* Image du ticket */}
                    <div className="relative w-full aspect-[4/3] bg-gray-100">
                      <Image
                        src={winner.ticketImage}
                        alt={`Ticket gagnant - ${winner.date}`}
                        fill
                        className="object-contain p-4"
                      />

                      {/* Badge nombre de numéros */}
                      <div
                        className={`
                          absolute top-3 right-3
                          px-3 py-1 rounded-full
                          text-xs font-bold
                          ${getGainBadgeStyle(winner.numbersFound)}
                        `}
                      >
                        {winner.numbersFound} numéros
                      </div>
                    </div>

                    {/* Informations du gagnant */}
                    <div className="p-5">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                        <Calendar size={14} />
                        {winner.date}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        {winner.description}
                      </p>

                      {/* Montant du gain */}
                      <div
                        className={`
                          flex items-center justify-between
                          bg-gray-50 rounded-xl px-4 py-3
                        `}
                      >
                        <span className="text-xs text-gray-500 font-medium">
                          Gain remporté
                        </span>
                        <span
                          className={`
                            font-black text-lg
                            ${
                              winner.numbersFound === 9
                                ? "text-gradient-gold"
                                : "text-primary"
                            }
                          `}
                        >
                          {winner.gain}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* ===========================
                  📭 PAS ENCORE DE GAGNANTS
                  ===========================
                  Message affiché quand le tableau winners est vide
              */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center max-w-lg mx-auto"
              >
                {/* Grande icône ticket */}
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Ticket size={40} className="text-gray-400" />
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  Les gagnants arrivent bientôt !
                </h2>

                <p className="text-gray-500 leading-relaxed mb-8">
                  Le LOTO 9 EXPRESS0 vient d&apos;être lancé. Les premiers
                  tickets gagnants seront affichés ici très prochainement.
                  Tentez votre chance dès maintenant !
                </p>
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* ===========================
          💡 BANDEAU D'INCITATION
          =========================== */}
      <section className="py-12 bg-gray-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`
              bg-gradient-to-r from-primary to-primary-light
              rounded-2xl p-8 md:p-10
              flex flex-col md:flex-row items-center justify-between
              gap-6
            `}
          >
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Le prochain gagnant, c&apos;est vous ?
              </h3>
              <p className="text-blue-200 text-sm">
                Tirage toutes les 2 minutes • Misez à partir de 100 F CFA
              </p>
            </div>

            <Link
              href="https://iziloto.cm/lottery/games/dyce-games-loto9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta flex-shrink-0"
            >
              JOUER MAINTENANT
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
