"use client";
import React from "react";
interface Itabs {
  name: string;
  value: string;
}
export default function MonthYearTab({
  selectedTab,
  tabs,
  onSwitchTab,
}: {
  selectedTab: string;
  tabs: Itabs[];
  onSwitchTab: any;
}) {
  return (
    <div className="flex justify-end p-4 sm:justify-between">
      <nav className="items-center flex-1 mx-auto space-x-2 text-sm dark:text-gray-700 dark:bg-[#201F25] sm:flex">
        {tabs.map((item) => {
          const selected = selectedTab == item?.value;
          return (
            <a
              key={item?.name}
              onClick={() => {
                onSwitchTab(item?.value);
              }}
              className={`px-4 py-2 text-[#FFFFFF] font-semibold cursor-pointer rounded-md whitespace-nowrap`}
              style={{
                background: selected ? "#0000000A" : "#151419",
              }}
            >
              {item?.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
