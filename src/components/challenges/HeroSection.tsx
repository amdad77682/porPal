import React from "react";

export default function HeroSection() {
  return (
    <div
      className="h-[300px]"
      style={{
        backgroundImage: 'url("./images/hero.png")',
      }}
    >
      <div className="container">
        <div className="py-12">
          <h1 className="text-white">Quest Challenges</h1>
          <p className="text-white">
            Join our community of problem solvers and take on exciting
            challenges to win rewards.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
