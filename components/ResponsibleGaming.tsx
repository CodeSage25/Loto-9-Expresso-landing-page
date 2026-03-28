// components/ResponsibleGaming.tsx

"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Phone } from "lucide-react";

// ===========================
// 🏗️ COMPOSANT JEU RESPONSABLE
// ===========================
export default function ResponsibleGaming() {
  return (
    <section className="bg-gradient-to-r from-danger-dark via-danger to-danger-light py-6 md:py-8">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`
            flex flex-col md:flex-row 
            items-center 
            justify-between
            gap-4 md:gap-6 
            text-white
          `}
        >
          {/*
            justify-between : pousse les éléments aux extrémités.
            Sur mobile (flex-col) : empilés verticalement, centrés.
            Sur desktop (md:flex-row) : alignés en ligne, bien répartis.
          */}

          {/* ===========================
              ⚠️ BLOC GAUCHE : ICÔNE + TITRE
              =========================== */}
          <div className="flex items-center gap-4">
            {/* Icône d'alerte dans un cercle */}
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <AlertTriangle size={24} className="text-white" />
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold">
                Jouons responsable
              </h3>
              <p className="text-sm text-red-200">Interdit au -21 ans</p>
            </div>
          </div>

          {/* ===========================
              📝 BLOC CENTRE : TEXTE D'AVERTISSEMENT
              =========================== */}

          {/* ===========================
              📞 BLOC DROITE : NUMÉRO D'ASSISTANCE
              =========================== */}
          <div className="flex-shrink-0">
            <a
              href="tel:+237688332304"
              className={`
                inline-flex items-center gap-3
                bg-white/20 hover:bg-white/30
                backdrop-blur-sm
                text-white font-semibold
                px-5 py-3 rounded-xl
                transition-all duration-300
                hover:scale-105
                text-sm
              `}
            >
              <Phone size={18} className="flex-shrink-0" />
              <span>
                <span className="block text-xs text-red-200">Assistance</span>
                +237 688 33 23 04
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
