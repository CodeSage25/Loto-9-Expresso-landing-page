// components/Header.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// ===========================
// 📋 DONNÉES DU MENU

const navLinks = [
  { label: "Accueil", href: "/", isPage: true },
  { label: "Comment Jouer", href: "/#comment-jouer", isPage: false },
  { label: "Gains", href: "/#gains", isPage: false },
  { label: "Gagnants", href: "/gagnants", isPage: true },
  { label: "FAQ", href: "/#faq", isPage: false },
];

// ===========================
// 🏗️ COMPOSANT HEADER
// ===========================
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`
        sticky top-0 z-50
        bg-white/95 backdrop-blur-sm
        shadow-sm
        transition-all duration-300
      `}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ===========================
              🖼️ LOGO (Gauche)
              =========================== */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/Logo_Loto_Expresso.png"
              alt="Logo Loto 9 Express"
              width={160}
              height={50}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* ===========================
              📱 MENU DESKTOP (Centre)
              =========================== */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isPage ? (
                // Lien vers une page séparée → utilise next/link
                <Link
                  key={link.label}
                  href={link.href}
                  className={`
                    text-sm font-medium text-gray-700
                    hover:text-primary
                    transition-colors duration-200
                    relative
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0
                    after:w-0 after:h-0.5 after:bg-gold
                    after:transition-all after:duration-300
                    hover:after:w-full
                  `}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`
                    text-sm font-medium text-gray-700
                    hover:text-primary
                    transition-colors duration-200
                    relative
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0
                    after:w-0 after:h-0.5 after:bg-gold
                    after:transition-all after:duration-300
                    hover:after:w-full
                  `}
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          {/* ===========================
              🔘 BOUTON S'INSCRIRE + HAMBURGER (Droite)
              =========================== */}
          <div className="flex items-center gap-4">
            <Link
              href="https://iziloto.cm/register"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block btn-secondary"
            >
              S&apos;inscrire
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ===========================
            📱 MENU MOBILE (Dropdown)
            =========================== */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) =>
                link.isPage ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      text-sm font-medium text-gray-700
                      hover:text-primary hover:bg-gray-50
                      px-4 py-2 rounded-lg
                      transition-all duration-200
                    `}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      text-sm font-medium text-gray-700
                      hover:text-primary hover:bg-gray-50
                      px-4 py-2 rounded-lg
                      transition-all duration-200
                    `}
                  >
                    {link.label}
                  </a>
                ),
              )}
              <Link
                href="https://iziloto.cm/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center mx-4 mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                S&apos;inscrire
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
