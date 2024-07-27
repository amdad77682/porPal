import Challenges from "@components/challenges/Challenges";
import GuestSection from "@components/challenges/GuestSection";
import HeroSection from "@components/challenges/HeroSection";
import React, { Suspense } from "react";

export default function page() {
  return (
    <Suspense>
      <HeroSection />
      <GuestSection />
      <Challenges />
    </Suspense>
  );
}
