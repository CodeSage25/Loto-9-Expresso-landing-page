// components/ScrollToTop.tsx

"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ===========================
// 🏗️ BOUTON SCROLL TO TOP
// ===========================
// Apparaît quand l'utilisateur a scrollé vers le bas.
// Au clic, remonte doucement en haut de la page.
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // ===========================
  // 👂 ÉCOUTER LE SCROLL
  // ===========================
  useEffect(() => {
    const toggleVisibility = () => {
      // Affiche le bouton si on a scrollé de plus de 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // On écoute l'événement scroll
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup : on retire l'écouteur quand le composant est démonté
    // (bonne pratique pour éviter les fuites mémoire)
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animation fluide
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 z-50
            w-12 h-12 rounded-full
            bg-primary hover:bg-primary-light
            text-white shadow-lg hover:shadow-xl
            flex items-center justify-center
            transition-all duration-300
            hover:scale-110
          `}
          aria-label="Remonter en haut de la page"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
