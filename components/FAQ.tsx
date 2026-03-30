// components/FAQ.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

// ===========================
// 📋 DONNÉES DES QUESTIONS
// ===========================
// Chaque question a un id unique, une question et une réponse.
// Si tu veux ajouter une question, ajoute simplement un objet ici.
const faqData = [
  {
    id: 1,
    question: "Qu'est-ce que LOTO 9 EXPRESS0 ?",
    answer:
      "LOTO 9 EXPRESS0 est un jeu de loterie rapide disponible exclusivement sur IziLoto.cm. Un tirage a lieu toutes les 2 minutes, 24h/24 et 7j/7. Vous choisissez 9 numéros et gagnez en fonction du nombre de numéros trouvés dans le bon ordre. C'est simple, rapide et accessible à partir de 100 F CFA.",
  },
  {
    id: 2,
    question: "Comment jouer ?",
    answer:
      "C'est très simple : 1) Rendez-vous sur IziLoto.cm et créez votre compte gratuitement. 2) Rechargez votre compte via MTN Mobile Money ou Orange Money. 3) Sélectionnez vos 9 numéros. 4) Validez votre mise (à partir de 100 F CFA). 5) Attendez le tirage — il a lieu toutes les 2 minutes ! Si vos numéros correspondent dans le bon ordre, vous gagnez.",
  },
  {
    id: 3,
    question: "Quel est le montant minimum de mise ?",
    answer:
      "La mise minimum est de 100 F CFA, ce qui rend le jeu accessible à tous. Le gain maximum est de 1 000 000 F CFA pour 9 numéros trouvés dans le bon ordre.",
  },
  {
    id: 4,
    question: "Comment récupérer mes gains ?",
    answer:
      "Vos gains sont automatiquement crédités sur votre compte IziLoto. Vous pouvez ensuite les retirer instantanément via MTN Mobile Money ou Orange Money, directement sur votre téléphone. Aucun frais de retrait n'est appliqué. Les retraits sont traités en quelques secondes.",
  },
  {
    id: 5,
    question: "Le jeu est-il légal au Cameroun ?",
    answer:
      "Oui, absolument. IziLoto.cm est une plateforme de jeux en ligne opérée par Dyce Gaming, en conformité avec la réglementation camerounaise en vigueur. La plateforme est sécurisée et les transactions sont protégées. Nous promouvons le jeu responsable et interdisons l'accès aux mineurs de moins de 21 ans.",
  },
];

// ===========================
// 🏗️ COMPOSANT FAQ
// ===========================
export default function FAQ() {
  // État : quelle question est ouverte (null = aucune)
  // On stocke l'id de la question ouverte
  const [openId, setOpenId] = useState<number | null>(null);

  // Fonction toggle : ouvre si fermée, ferme si déjà ouverte
  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      {/*
        id="faq" : ancre pour le lien du menu navigation
      */}

      <div className="section-container">
        {/* Titre + sous-titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Questions fréquentes</h2>
          <p className="section-subtitle">
            Tout ce que vous devez savoir sur LOTO 9 EXPRESS0
          </p>
        </motion.div>

        {/* ===========================
            📦 LISTE DES QUESTIONS (ACCORDÉON)
            ===========================
            max-w-3xl mx-auto : limite la largeur et centre
            pour une meilleure lisibilité
        */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`
                rounded-2xl border overflow-hidden
                transition-all duration-300
                ${
                  openId === item.id
                    ? "border-primary/30 shadow-lg bg-white"
                    : "border-gray-200 bg-gray-50 hover:border-gray-300"
                }
              `}
            >
              {/* ===========================
                  ❓ BOUTON QUESTION (toujours visible)
                  =========================== */}
              <button
                onClick={() => toggleQuestion(item.id)}
                className={`
                  w-full flex items-center justify-between
                  p-5 md:p-6 text-left
                  transition-colors duration-200
                  ${openId === item.id ? "bg-primary/5" : "hover:bg-gray-100"}
                `}
                aria-expanded={openId === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                {/*
                  aria-expanded : accessibilité — indique si la réponse est visible
                  aria-controls : lie le bouton à la réponse pour les lecteurs d'écran
                */}

                {/* Icône + texte de la question */}
                <div className="flex items-center gap-3 pr-4">
                  <HelpCircle
                    size={20}
                    className={`
                      flex-shrink-0 transition-colors duration-200
                      ${openId === item.id ? "text-primary" : "text-gray-400"}
                    `}
                  />
                  <span
                    className={`
                      font-semibold text-sm md:text-base
                      transition-colors duration-200
                      ${openId === item.id ? "text-primary" : "text-gray-800"}
                    `}
                  >
                    {item.question}
                  </span>
                </div>

                {/* Flèche qui tourne quand ouvert */}
                <ChevronDown
                  size={20}
                  className={`
                    flex-shrink-0 text-gray-400
                    transition-transform duration-300
                    ${openId === item.id ? "rotate-180 text-primary" : ""}
                  `}
                />
              </button>

              {/* ===========================
                  💬 RÉPONSE (s'affiche/se cache avec animation)
                  ===========================
                  AnimatePresence : gère l'animation de sortie (quand on ferme)
                  sans ça, l'élément disparaît instantanément
              */}
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                      {/* Ligne de séparation subtile */}
                      <div className="w-full h-px bg-gray-200 mb-4" />
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base pl-8">
                        {/*
                          pl-8 : décalé à droite pour s'aligner
                          sous le texte de la question (pas sous l'icône)
                        */}
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
