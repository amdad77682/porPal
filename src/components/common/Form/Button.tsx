import React from "react";

export default function Button({
  type,
  submitType = "button",
  children,
  onClick,
  class_name,
  isDisabled,
}: {
  type?: "outline" | "primary" | "secondary" | "default";
  submitType?: "submit" | "button";
  children: React.ReactNode;
  onClick?: any;
  class_name?: string;
  isDisabled?: boolean;
}) {
  if (type == "outline") {
    return (
      <button
        disabled={isDisabled}
        type={submitType}
        onClick={onClick}
        className={`${class_name} flex px-4 py-3 items-center gap-1 space-x-2 text-sm font-medium leading-4 text-green transition-colors duration-300 border border-[#019974] rounded-md hover:bg-[#019974] hover:text-white`}
      >
        {children}
      </button>
    );
  } else if (type == "primary") {
    return (
      <button
        disabled={isDisabled}
        type={submitType}
        onClick={onClick}
        className={`${class_name} flex items-center gap-1 px-4 py-3 space-x-2 text-sm font-medium leading-4 transition-colors duration-300 bg-[#019974] rounded-md hover:bg-[#019974] text-white`}
      >
        {children}
      </button>
    );
  } else if (type == "secondary") {
    return (
      <button
        disabled={isDisabled}
        type={submitType}
        onClick={onClick}
        className={`${class_name} flex items-center gap-1 px-4 py-3 space-x-2 text-sm font-medium leading-4 transition-colors duration-300 bg-[#2B2932] rounded-md hover:bg-white text-[#A2A3A4] hover:text-black`}
      >
        {children}
      </button>
    );
  } else if (type == "default") {
    return (
      <button
        disabled={isDisabled}
        onClick={onClick}
        type={submitType}
        className={`${class_name} flex items-center gap-1 px-4 py-3 space-x-2 text-sm font-medium leading-4 text-green transition-colors duration-300`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      disabled={isDisabled}
      type={submitType}
      className={`${class_name} flex px-4 py-3 space-x-2 text-sm font-medium leading-4 text-green transition-colors duration-300 border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700`}
    >
      {children}
    </button>
  );
}
