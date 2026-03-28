// components/FollowUs.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ===========================
// 📱 ICÔNE FACEBOOK CUSTOM
// ===========================
function FacebookIcon({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// ===========================
// 🏗️ COMPOSANT SUIVEZ-NOUS
// ===========================
export default function FollowUs() {
  return (
    <section className="py-10 md:py-12 bg-gray-50">
      {/*
        py-10 au lieu de py-20 : réduit l'espace vertical de moitié
      */}
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {/* ===========================
              📦 BANDEAU COMPACT
              ===========================
              Tout sur une seule ligne en desktop :
              [Icône FB]  [Texte]  [Bouton Suivre]
          */}
          <Link
            href="https://www.facebook.com/people/IziLotocm/61585217354848/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div
              className={`
                bg-white rounded-2xl
                px-6 py-5 md:px-10 md:py-6
                border border-gray-200
                shadow-md hover:shadow-xl
                transition-all duration-300
                group-hover:border-blue-300
                flex flex-col md:flex-row
                items-center
                gap-5 md:gap-8
                max-w-3xl mx-auto
              `}
            >
              {/* ===========================
                  🔵 ICÔNE FACEBOOK (Gauche)
                  =========================== */}
              <div
                className={`
                  flex-shrink-0
                  w-14 h-14
                  bg-blue-600 rounded-full
                  flex items-center justify-center
                  group-hover:bg-blue-700
                  transition-colors duration-300
                  shadow-md
                `}
              >
                <FacebookIcon size={24} className="text-white" />
              </div>

              {/* ===========================
                  📝 TEXTE (Centre)
                  =========================== */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-bold text-gray-900">
                  Suivez-nous sur Facebook !
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  Rejoignez la communauté IziLoto.cm — résultats en direct et
                  promotions exclusives
                </p>
              </div>

              {/* ===========================
                  🔘 BOUTON SUIVRE (Droite)
                  =========================== */}
              <div className="flex-shrink-0">
                <span
                  className={`
                    inline-flex items-center gap-2
                    bg-blue-600 text-white
                    font-semibold text-sm
                    px-6 py-2.5 rounded-full
                    group-hover:bg-blue-700
                    transition-all duration-300
                    group-hover:scale-105
                  `}
                >
                  <FacebookIcon size={16} />
                  Suivre notre page
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
