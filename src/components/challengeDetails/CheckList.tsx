import { Checklist } from "@components/common/models";
import Image from "next/image";
import React from "react";

export default function CheckList({ checklists }: { checklists: Checklist[] }) {
  return (
    <div className="w-[298px]">
      <div className="border rounded-md border-[#ECECEC] p-4">
        {checklists.map((item) => {
          return (
            <div key={item?.type} className="flex items-start mb-4 gap-2">
              <Image
                alt="Requirement"
                src="/images/Requirement.png"
                height={28}
                width={28}
                className="mt-2"
              />
              <div>
                <h3>2yrs+ Industry Experience</h3>
                <h2 className="font-semibold"> Beginner difficulty</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
