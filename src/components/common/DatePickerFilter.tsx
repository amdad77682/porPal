import Image from "next/image";
import React from "react";
import DatePicker from "react-datepicker";
export default function DatePickerFiter({ value, onChange }: any) {
  return (
    <div className="">
      <div className="flex relative w-full">
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
            onChange={onChange}
            selected={value}
            dateFormat="dd/MM/yyyy"
            className="block w-full py-4 text-sm dark:bg-[#201F25] dark:text-white rounded-md rounded-l-none outline-none "
          />
        </div>
        <div className="absolute top-1/2 right-2 -translate-y-1/2">
          <Image
            alt="arrowdown"
            src="/images/downArrow.svg"
            height={20}
            width={20}
          />
        </div>
      </div>
    </div>
  );
}
