// components/ResponsibleGaming.tsx

"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

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
            flex items-center justify-center
            gap-4
            text-white
          `}
        >
          {/*
            justify-center : tout est centré horizontalement
            items-center : aligné verticalement
            Un seul bloc avec icône + texte
          */}

          {/* Icône d'alerte dans un cercle */}
          <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <AlertTriangle size={24} className="text-white" />
          </div>

          {/* Texte */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold">Jouons responsable</h3>
            <p className="text-sm text-red-200">Interdit au -21 ans</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
