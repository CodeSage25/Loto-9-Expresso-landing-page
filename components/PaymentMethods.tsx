// components/PaymentMethods.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";

// ===========================
// 📋 DONNÉES DES MOYENS DE PAIEMENT
// ===========================
// bgColor : fond coloré derrière le logo pour le rendre visible
// borderColor : bordure assortie au hover
const payments = [
  {
    name: "MTN Mobile Money",
    logo: "/images/image_Mtn_momo.png",
    description: "Dépôt et retrait instantanés",
    bgColor: "bg-yellow-20",
    borderColor: "hover:border-yellow-400",
    ringColor: "ring-yellow-400/30",
  },
  {
    name: "Orange Money",
    logo: "/images/orange_money.png",
    description: "Dépôt et retrait instantanés",
    bgColor: "bg-orange-500",
    borderColor: "hover:border-orange-500",
    ringColor: "ring-orange-500/30",
  },
];

// ===========================
// 🏗️ COMPOSANT
// ===========================
export default function PaymentMethods() {
  return (
    <section className="py-12 md:py-14 bg-white">
      {/*
        py-12 au lieu de py-20 : plus compact
        bg-white au lieu de bg-gray-50 : meilleur contraste
      */}

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {/* ===========================
              📦 BANDEAU PRINCIPAL
              ===========================
              Fond gris clair avec tout le contenu dedans
          */}
          <div className="bg-gray-50 rounded-3xl p-6 md:p-10 max-w-4xl mx-auto">
            {/* ===========================
                🏷️ TITRE EN LIGNE
                =========================== */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-1">
                  Rechargez et retirez facilement
                </h2>
                <p className="text-gray-500 text-sm">
                  Dépôt et retrait instantanés via Mobile Money
                </p>
              </div>

              {/* Badge sécurité */}
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium flex-shrink-0">
                <Shield size={16} />
                Transactions sécurisées
              </div>
            </div>

            {/* ===========================
                💳 CARTES DE PAIEMENT CÔTE À CÔTE
                =========================== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {payments.map((payment, index) => (
                <motion.div
                  key={payment.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className={`
                    bg-white rounded-2xl
                    p-5 md:p-6
                    border-2 border-gray-100
                    ${payment.borderColor}
                    
                    transition-all duration-300
                    flex items-center gap-5
                    group
                  `}
                >
                  {/*
                    Layout horizontal : logo à gauche, texte à droite.
                    Plus compact qu'une carte verticale.
                  */}

                  {/* ===========================
                      🖼️ LOGO SUR FOND COLORÉ
                      ===========================
                      Le fond coloré rend le logo PNG visible
                      même si l'image a un fond blanc/transparent
                  */}
                  <div
                    className={`
                      flex-shrink-0
                      w-16 h-16 md:w-20 md:h-20
                      ${payment.bgColor}
                      rounded-2xl
                      flex items-center justify-center
                      p-2
                      ring-4 ${payment.ringColor}
                      group-hover:scale-105
                      transition-transform duration-300
                    `}
                  >
                    <Image
                      src={payment.logo}
                      alt={payment.name}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* ===========================
                      📝 TEXTE
                      =========================== */}
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">
                      {payment.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {payment.description}
                    </p>
                    {/* Petites puces de réassurance */}
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 text-xs text-green-600">
                        <CheckCircle size={12} />
                        Instantané
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-green-600">
                        <CheckCircle size={12} />
                        Sans frais
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
