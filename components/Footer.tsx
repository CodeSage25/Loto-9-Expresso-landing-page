// components/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

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
// 📋 LIENS RAPIDES
// ===========================
const quickLinks = [
  { label: "Accueil", href: "#" },
  { label: "Comment Jouer", href: "#comment-jouer" },
  { label: "Gains", href: "#gains" },
  { label: "FAQ", href: "#faq" },
  { label: "Gagnants", href: "/gagnants" },
];

// ===========================
// 🏗️ COMPOSANT FOOTER
// ===========================
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary-dark to-black text-white">
      {/* ===========================
          📦 CONTENU PRINCIPAL DU FOOTER
          =========================== */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/*
            md:grid-cols-3 : 3 colonnes bien réparties dès la tablette.
            Sur mobile : 1 colonne empilée.
          */}

          {/* ===========================
              🖼️ COLONNE 1 : LOGO + DESCRIPTION
              =========================== */}
          <div>
            <Link
              href="https://iziloto.cm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/Logo_Loto9_Expresso.png"
                alt="Logo Loto 9 Express"
                width={180}
                height={55}
                className="h-12 w-auto mb-4"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Disponible sur{" "}
              <Link
                href="https://iziloto.cm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors underline"
              >
                iziloto.cm
              </Link>
            </p>
          </div>

          {/* ===========================
              🔗 COLONNE 2 : NAVIGATION
              =========================== */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`
                      text-gray-400 text-sm
                      hover:text-gold transition-colors duration-200
                      hover:translate-x-1 inline-block
                      transition-transform
                    `}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ===========================
              📞 COLONNE 3 : CONTACT
              =========================== */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-5">
              Contact
            </h4>

            <Link
              href="https://www.facebook.com/people/IziLotocm/61585217354848/"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center gap-2
                bg-white/10 hover:bg-blue-600
                text-gray-300 hover:text-white
                px-4 py-2 rounded-lg
                transition-all duration-300
                text-sm
              `}
            >
              <FacebookIcon size={16} />
              Facebook
            </Link>
          </div>
        </div>
      </div>

      {/* ===========================
          📄 BARRE DE COPYRIGHT
          =========================== */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs text-center md:text-left">
              © 2026. Tous droits réservés.
            </p>
            <p className="text-gray-600 text-xs text-center md:text-right">
              Interdit aux moins de 21 ans • Jouez responsable
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
