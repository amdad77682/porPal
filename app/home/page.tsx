import Challenges from "@components/home/Challenges";
import GuestSection from "@components/home/GuestSection";
import HeroSection from "@components/home/HeroSection";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection />
      <GuestSection />
      <Challenges />
    </div>
  );
}
