"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Resolver, useForm } from "react-hook-form";
type FormValues = {
  email: string;
  password: string;
};

const resolver: Resolver<FormValues> = async (values: FormValues) => {
  return {
    values: values.email ? values : {},
    errors: !values.password
      ? {
          email: {
            type: "required",
            message: "This is required.",
          },
          password: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

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
