// components/HowItWorks.tsx

"use client";

import { motion } from "framer-motion";
import { Target, Coins, Trophy } from "lucide-react";

// ===========================
// 📋 DONNÉES DES 3 ÉTAPES

const steps = [
  {
    icon: Target,
    title: "Choisissez vos 9 numéros",
    description:
      "Sélectionnez 9 numéros parmi les options disponibles. Faites confiance à votre instinct !",
    overlayColor: "absolute inset-0 bg-black/60",

    iconBg: "bg-white/20",
    iconColor: "text-blue-200",
    step: "01",
  },
  {
    icon: Coins,
    title: "Misez à partir de 100 F CFA",
    description:
      "Un jeu accessible à tous. Déposez via MTN Mobile Money ou Orange Money en quelques secondes.",
    overlayColor: "absolute inset-0 bg-black/60",

    iconBg: "bg-gold/20",
    iconColor: "text-gold",
    step: "02",
  },
  {
    icon: Trophy,
    title: "Gagnez si l'ordre correspond",
    description:
      "Plus vous trouvez de numéros dans l'ordre, plus vos gains sont élevés. Jusqu'à 1 000 000 F CFA",
    overlayColor: "absolute inset-0 bg-black/60",

    iconBg: "bg-white/20",
    iconColor: "text-green-300",
    step: "03",
  },
];

// ===========================
// 🏗️ COMPOSANT
// ===========================
export default function HowItWorks() {
  return (
    <section id="comment-jouer" className="py-20 bg-gray-50">
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
            =========================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`
                relative overflow-hidden rounded-2xl
                min-h-[280px]
                shadow-lg hover:shadow-2xl
                transition-all duration-300
                group
              `}
            >
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage:
                    "url('/images/Logo_Fonds_Loto9_Expresso.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              <div
                className={`
                  absolute inset-0
                  ${step.overlayColor}
                
                  transition-all duration-500
                `}
              />

              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Numéro d'étape en arrière-plan */}
                <span className="absolute top-4 right-4 text-6xl font-black text-white/10 select-none">
                  {step.step}
                </span>

                {/* Icône dans un cercle */}
                <div
                  className={`
                    w-14 h-14 rounded-xl
                    ${step.iconBg}
                    backdrop-blur-sm
                    flex items-center justify-center mb-5
                    group-hover:scale-110 transition-transform duration-300
                  `}
                >
                  <step.icon size={28} className={step.iconColor} />
                </div>

                {/* Titre de l'étape */}
                <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 leading-relaxed text-sm drop-shadow-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
