import Challenges from "@components/home/Challenges";
import GuestSection from "@components/home/GuestSection";
import HeroSection from "@components/home/HeroSection";
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
