// app/page.tsx

import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import GainsTable from "@/components/GainsTable";
import LotoBonus from "@/components/LotoBonus";
import PaymentMethods from "@/components/PaymentMethods";
import FAQ from "@/components/FAQ";
import ResponsibleGaming from "@/components/ResponsibleGaming";
import FollowUs from "@/components/FollowUs";

export default function Home() {
  return (
    <>
      <HeroSection />

      <HowItWorks />

      <GainsTable />
      <LotoBonus />

      <PaymentMethods />

      <FAQ />

      <ResponsibleGaming />

      <FollowUs />
    </>
  );
}
