import { Checklist } from "@components/common/models";
import React from "react";

export default function CheckList({ checklists }: { checklists: Checklist[] }) {
  return (
    <div className="w-[298px]">
      <div className="border rounded-md border-[#ECECEC] p-4">
        {checklists.map((item) => {
          return <div key={item?.type}>{item?.value}</div>;
        })}
      </div>
    </div>
  );
}
