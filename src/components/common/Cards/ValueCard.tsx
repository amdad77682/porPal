import React from "react";

export default function ValueCard({
  name,
  value,
  unit,
}: {
  name?: string;
  value?: string | number;
  unit?: string | number;
}) {
  return (
    <div className="dark:bg-[#1C1A21] rounded-md shadow-sm ">
      <div className="px-4 py-4 lg:px-6 ">
        <span className="block mb-4 text-xs font-semibold tracking-wider dark:text-[#6C6B6E]">
          {name || "N/A"}
        </span>
        <div className="flex items-center space-x-2">
          <div className="">
            <span className="text-base truncate w-[200px] font-semibold dark:text-[#FFFFFF] lg:text-xl">
              {value || "0"}
            </span>
            <span className="text-sm ml-2 dark:text-[#6C6B6E]">{unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
