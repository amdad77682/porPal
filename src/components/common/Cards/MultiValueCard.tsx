import React from "react";
import Status from "../Status";

export default function MultiValueCard({ name, value, status }: any) {
  return (
    <div className="dark:bg-[#1C1A21] rounded-md shadow-sm ">
      <div className="px-4 py-4 lg:px-6 ">
        <span className="block mb-4 text-base font-semibold tracking-wider dark:text-white truncate max-w-[300px]">
          {name}
        </span>
        <div className="mb-4">
          <span className="block mb-1  text-xs tracking-wider dark:text-[#6C6B6E] ">
            Production
          </span>
          <h2 className="text-base font-semibold dark:text-[#FFFFFF] lg:text-xl">
            {value}
          </h2>
        </div>
        <div className="mb-4">
          <span className="block  mb-1 text-xs font-semibold tracking-wider dark:text-[#6C6B6E] ">
            Status
          </span>
          <h2 className="text-base font-semibold dark:text-[#FFFFFF] ">
            {status ? (
              <Status bg="#3BC83B" name={"Active"} />
            ) : (
              <Status bg="#EE4141" name={"Inactive"} />
            )}
          </h2>
        </div>
      </div>
    </div>
  );
}
