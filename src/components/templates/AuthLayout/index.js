import ArrowBack from "@/components/molecules/ArrowBack";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ title, children, type = "login" }) => {
  return (
    <>
      <div className="relative min-h-screen before:absolute before:inset-0 before:bg-[url('/images/bg/bg-layer-mobile.png')] before:bg-cover before:opacity-30 md:before:hidden">
        <main className="container !px-4 pb-4 lg:pb-0">
          <ArrowBack />
          <div className="relative z-40 mx-auto mt-4 w-full rounded-[12px] bg-white p-1 pb-5 sm:max-w-[478px] lg:fixed lg:left-1/2 lg:top-[110px] lg:mt-0 lg:-translate-x-1/2 lg:p-5 lg:pb-8">
            <Image
              src="/images/bg/bg-register-mobile.webp"
              alt="login"
              className="w-full rounded-lg object-contain lg:hidden"
              width={360}
              height={219}
            />
            <h1 className="pl-3 pt-4 text-base font-bold text-[#49A794] md:text-xl lg:pt-0 lg:text-[26px]">
              {title}
            </h1>
            <p className="dm-sans mt-1 pl-3 pt-1 text-sm text-[#474747] lg:pt-0 lg:text-base">
              {type === "register"
                ? "Sudah punya akun? "
                : "Belum punya akun? "}
              <span className="text-green-primary cursor-pointer underline underline-offset-2 hover:opacity-70">
                {type === "register" && <Link href="/login">Login</Link>}
                {type === "login" && <Link href="/register">Daftar</Link>}
              </span>
            </p>
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default AuthLayout;
