import Button from "@components/common/Form/Button";
import { IChallengeDetails } from "@components/common/models";
import Image from "next/image";
import React from "react";

export default function OverviewSection({ data }: { data: IChallengeDetails }) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #E0F2FF 0%, #FFFFFF 100%)",
      }}
      className="h-[500px]"
    >
      <div className="container pt-12 flex items-center">
        <div>
          <h4 className="py-8">All Challenges</h4>
          <p className="">Real life problem solving</p>
          <h1 className="text-[36px] font-bold">{data?.title}</h1>
          <p className="py-4">{data?.description}</p>
          <p>Organizer: </p>
          <p className="py-2">+1234 participant have join this challenge</p>
          <Button type="primary" class_name="px-8">
            Start Project
          </Button>
        </div>
        <div>
          <Image
            alt={"Product Card"}
            src={"/images/Product_image.png"}
            height={162}
            width={162}
          />
        </div>
      </div>
    </div>
  );
}
