import React from "react";
import GuestCard from "./common/GuestCard";

export default function GuestSection() {
  return (
    <div className="container flex gap-4 -mt-[100px]">
      {[0, 1].map((item) => {
        return <GuestCard key={item} />;
      })}
    </div>
  );
}
