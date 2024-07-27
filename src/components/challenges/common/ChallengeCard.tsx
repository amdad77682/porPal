import Image from "next/image";
import React from "react";

export default function ChallengeCard() {
  return (
    <div className="h-[406px] w-[348px] bg-[#FFFFFF] rounded-md ">
      <Image
        alt={"Guest Card"}
        src={"/images/product.png"}
        height={166}
        width={348}
      />
      <div className="p-2">
        <h2>UX Bangladesh</h2>
        <h1>Design and test a Medicine Reminder app for non-tech ...</h1>
        <h4>Skills covered: Interaction design, Usability testing </h4>
      </div>
    </div>
  );
}
