// app/page.tsx

import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import GainsTable from "@/components/GainsTable";
import PaymentMethods from "@/components/PaymentMethods";
import FAQ from "@/components/FAQ";
import ResponsibleGaming from "@/components/ResponsibleGaming";
import FollowUs from "@/components/FollowUs";

export default function Home() {
  return (
    <>
      {/* 🎯 Accroche principale avec boules de loto */}
      <HeroSection />

      {/* 📋 Les 3 étapes pour jouer */}
      <HowItWorks />

      {/* 💰 Tableau des gains (7 niveaux + Jackpot) */}
      <GainsTable />

      {/* 💳 MTN Mobile Money + Orange Money */}
      <PaymentMethods />

      {/* ❓ Questions fréquentes (accordéon) */}
      <FAQ />

      {/* ⚠️ Bandeau d'avertissement jeu responsable */}
      <ResponsibleGaming />

      {/* 📱 Lien vers la page Facebook */}
      <FollowUs />
    </>
  );
}
