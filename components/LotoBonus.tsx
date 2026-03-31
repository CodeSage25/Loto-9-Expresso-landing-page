"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const lotoBonusGames = [
  {
    image: "/images/Logo_LotoExpresso_3-9.png",
    name: "Loto 3/9",
    gains: [{ label: "3 numéros dans l'ordre (plein)", multiplier: "×4" }],
  },
  {
    image: "/images/Logo_LotoExpresso_4-9_Bonus.png",
    name: "Loto 4/9",
    gains: [
      { label: "4 numéros dans l'ordre (plein)", multiplier: "×10" },
      { label: "3 premiers dans l'ordre", multiplier: "×1" },
    ],
  },
  {
    image: "/images/Logo_LotoExpresso_5-9_Bonus.png",
    name: "Loto 5/9",
    gains: [
      { label: "5 numéros dans l'ordre (plein)", multiplier: "×45" },
      { label: "4 premiers dans l'ordre", multiplier: "×2" },
      { label: "3 premiers dans l'ordre", multiplier: "×1" },
    ],
  },
  {
    image: "/images/Logo_LotoExpresso_6-9_Bonus.png",
    name: "Loto 6/9",
    gains: [
      { label: "6 numéros dans l'ordre (plein)", multiplier: "×250" },
      { label: "5 premiers dans l'ordre", multiplier: "×10" },
      { label: "4 premiers dans l'ordre", multiplier: "×2" },
    ],
  },
];

export default function LotoBonus() {
  return (
    <section id="loto-bonus" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Logo_Loto_Expresso_Bonus+.png"
            alt="Loto Bonus"
            className="mx-auto h-16 sm:h-20 lg:h-30 w-auto mb-6"
          />
          {/* Sous le titre principal */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge mise en haut */}
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold-dark px-4 py-1.5 rounded-full text-sm font-bold mb-3">
              <span>💰</span>
              Mise de 100 à 1 000 F
            </div>

            {/* Texte explicatif en dessous */}
            <p className="text-base sm:text-lg text-gray-600">
              Sélectionnez vos numéros favoris (de 1 à 10) et définissez votre
              propre ordre de priorité. Le tirage dévoile ensuite une séquence
              de 10 numéros. Votre objectif ? Que vos choix apparaissent dans le
              même ordre que le tirage officiel. Peu importe s&apos;ils sont
              séparés par d&apos;autres numéros, tant que la hiérarchie est
              respectée, vous gagnez !
            </p>
          </div>
          {/* 💡 Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-sm text-gray-500 mt-8"
          >
            💡 Exemple : une mise de 1000 F au Loto 5/9 = 1000 × 45 ={" "}
            <span className="font-bold text-brand-blue">45 000 F CFA</span> de
            gain !
          </motion.p>
        </motion.div>

        {/* Grille des 4 jeux — centrée */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
          {lotoBonusGames.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href="https://iziloto.cm/lottery/games/dyce-games-loto10"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                  className="bg-gradient-to-b from-white to-gray-200 
                             rounded-2xl p-6 text-center border border-gray-200
                             hover:border-brand-gold/50 hover:shadow-xl 
                             transition-all duration-300 h-full
                             flex flex-col"
                >
                  {/* Logo du jeu */}
                  <div className="mb-5 flex justify-center">
                    <Image
                      src={game.image}
                      alt={game.name}
                      width={120}
                      height={120}
                      className="h-20 sm:h-24 w-auto object-contain
                                 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-brand-blue-dark mb-4">
                    {game.name}
                  </h3>

                  {/* Liste des gains */}
                  <div className="flex flex-col gap-3 mt-auto">
                    {game.gains.map((g, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <p className="text-xs text-gray-500 leading-snug mb-1">
                          {g.label}
                        </p>
                        <div
                          className={`inline-block px-4 py-1.5 rounded-full font-black text-base
                                      shadow-md group-hover:shadow-lg transition-all duration-300
                                      ${
                                        i === 0
                                          ? "bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-blue-dark group-hover:shadow-brand-gold/30"
                                          : "bg-gray-100 border border-gray-300 text-gray-700"
                                      }`}
                        >
                          Mise {g.multiplier}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="https://iziloto.cm/lottery/games/dyce-games-loto10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 
                       bg-brand-blue text-white font-bold text-lg
                       rounded-full hover:bg-brand-blue-light 
                       transition-all duration-300 hover:shadow-xl
                       hover:shadow-brand-blue/30 hover:scale-105"
          >
            Jouer au Loto Bonus
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
