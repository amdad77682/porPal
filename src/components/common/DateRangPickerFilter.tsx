import Image from "next/image";
import React from "react";
import DatePicker from "react-datepicker";
import { objectToURL } from "src/utills/queryString";
import useNavigation from "./hooks/useNavigation";
import { usePathname, useRouter } from "next/navigation";
export default function DateRangPickerFiter({
  startDate,
  endDate,
  onChange,
}: any) {
  const { query } = useNavigation();
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="">
      <div className="flex relative w-full min-w-[250px]">
        <span className="flex items-center justify-center px-4 dark:bg-[#201F25] dark:text-white rounded-md rounded-r-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </span>
        <div className="w-full">
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
            placeholderText="2024-06-23 - 2024-07-23"
            // isClearable={true}

            className="block w-full py-4 text-sm dark:bg-[#201F25] dark:text-white rounded-md rounded-l-none outline-none "
          />
        </div>
        <div className="absolute top-1/2 right-2 -translate-y-1/2">
          {startDate || endDate ? (
            <Image
              alt="arrowdown"
              src="/images/cancel.svg"
              height={10}
              width={10}
              className="cursor-pointer"
              onClick={() => {
                const allQuery = {
                  ...query,
                  start: undefined,
                  end: undefined,
                };
                onChange([null, null]);
                router.push(`${pathname}?${objectToURL(allQuery)}`);
              }}
            />
          ) : (
            <Image
              alt="arrowdown"
              src="/images/downArrow.svg"
              height={20}
              width={20}
            />
          )}
        </div>
      </div>
    </div>
  );
}
