import Image from "next/image";
import React from "react";

export default function GuestCard() {
  return (
    <div className="h-[406px] w-[532px] bg-[#FFFFFF] rounded-md ">
      <Image
        alt={"Guest Card"}
        src={"/images/guestDEfault.svg"}
        height={182}
        width={532}
      />
      <h4>UX Bangladesh</h4>
      <h1>The Four C's of 21st Century Skills UXD Quest</h1>
      <h6>Skills covered: Interaction design, Usability testing </h6>
    </div>
  );
}
