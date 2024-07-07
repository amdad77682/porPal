"use client";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex items-center justify-center mx-auto h-[1000px]">
      <div className="flex items-center justify-center flex-col gap-14">
        <Image alt="logo" src={"/images/logo.svg"} height={50} width={206} />

        <div className="bg-[#f9f7f7] dark:bg-[#1F1E25]  min-w-[420px] ">
          <h2 className="dark:text-white border-b dark:border-[#FFFFFF1A] p-5">
            Sign in
          </h2>
        </div>
      </div>
    </div>
  );
}
