// components/HowItWorks.tsx

"use client";

import { motion } from "framer-motion";
import { Target, Coins, Trophy } from "lucide-react";

// ===========================
// 📋 DONNÉES DES 3 ÉTAPES
// ===========================
// On sépare les données du rendu pour faciliter la maintenance.
// Chaque étape a une icône, un titre et une description.
const steps = [
  {
    icon: Target,
    title: "Choisissez vos 9 numéros",
    description:
      "Sélectionnez 9 numéros parmi les options disponibles. Faites confiance à votre instinct !",
    color: "bg-blue-50 text-blue-600",
    borderColor: "border-blue-200",
    step: "01",
  },
  {
    icon: Coins,
    title: "Misez à partir de 100 F CFA",
    description:
      "Un jeu accessible à tous. Déposez via MTN Mobile Money ou Orange Money en quelques secondes.",
    color: "bg-gold/10 text-gold-dark",
    borderColor: "border-gold/30",
    step: "02",
  },
  {
    icon: Trophy,
    title: "Gagnez si l'ordre correspond",
    description:
      "Plus vous trouvez de numéros dans le bon ordre, plus vos gains sont élevés. Jusqu'à 1 000 000 F CFA !",
    color: "bg-green-50 text-green-600",
    borderColor: "border-green-200",
    step: "03",
  },
];

// ===========================
// 🏗️ COMPOSANT
// ===========================
export default function HowItWorks() {
  return (
    <section id="comment-jouer" className="py-20 bg-gray-50">
      {/*
        id="comment-jouer" : ancre pour le menu de navigation
        py-20 : padding vertical généreux
        bg-gray-50 : fond gris très léger pour contraster avec le hero
      */}

      <div className="section-container">
        {/* Titre + sous-titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Comment ça marche ?</h2>
          <p className="section-subtitle">
            Trois étapes simples pour tenter votre chance et gagner gros
          </p>
        </motion.div>

        {/* ===========================
            📦 GRILLE DES 3 CARTES
            ===========================
            grid-cols-1 : 1 colonne sur mobile
            md:grid-cols-3 : 3 colonnes à partir de 768px
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              // Animation : apparaît en montant, avec un délai croissant
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`
                relative bg-white rounded-2xl p-8
                border ${step.borderColor}
                hover:shadow-xl hover:-translate-y-2
                transition-all duration-300
                group
              `}
            >
              {/*
                group : permet de cibler les enfants au hover
                hover:-translate-y-2 : la carte monte légèrement au survol
                hover:shadow-xl : ombre plus marquée au survol
              */}

              {/* Numéro d'étape en arrière-plan */}
              <span className="absolute top-4 right-4 text-6xl font-black text-gray-100 select-none">
                {step.step}
              </span>

              {/* Icône dans un cercle coloré */}
              <div
                className={`
                  w-14 h-14 rounded-xl ${step.color}
                  flex items-center justify-center mb-5
                  group-hover:scale-110 transition-transform duration-300
                `}
              >
                {/* 
                  step.icon est un composant Lucide React.
                  On l'utilise comme <step.icon /> grâce à JSX.
                */}
                <step.icon size={28} />
              </div>

              {/* Titre de l'étape */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
