import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="relative min-h-screen before:absolute before:inset-0 before:bg-[url('/images/bg/bg-layer-mobile.png')] before:bg-cover before:opacity-30 md:before:hidden">
        <main className="container !px-4 pb-4 lg:pb-0">
          <div className="relative max-w-max pt-8 lg:hidden">
            <Link href="/">
              <Image
                src="/images/icons/arrow-bold.svg"
                alt="back"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="relative z-40 mx-auto mt-4 w-full rounded-[12px] bg-white p-1 pb-5 sm:max-w-[478px] lg:fixed lg:left-1/2 lg:top-[110px] lg:mt-0 lg:-translate-x-1/2 lg:p-5 lg:pb-8">
            <Image
              src="/images/bg/bg-register-mobile.webp"
              alt="login"
              className="w-full rounded-lg object-contain lg:hidden"
              width={360}
              height={219}
            />
            <h1 className="pl-3 pt-4 text-base font-bold text-[#49A794] md:text-xl lg:pt-0 lg:text-[26px]">
              Login
            </h1>
            <p className="dm-sans mt-1 pl-3 pt-1 text-sm text-[#474747] lg:pt-0 lg:text-base">
              Belum punya akun?
              <span className="text-green-primary cursor-pointer underline underline-offset-2 hover:opacity-70">
                Daftar
              </span>
            </p>
            <form className="mt-5 px-3 lg:mt-6">
              <label
                for="email"
                className="text-gray-secondary !lg:text-base dm-sans block pb-2 !text-sm"
              >
                Email
              </label>
              <div className="text-sm lg:text-base" id="email">
                <div className="form-content relative z-0">
                  <input
                    type="text"
                    name="email"
                    placeholder="Masukkan email"
                    id="email"
                    className="focus:shadow-outline relative z-0 w-full appearance-none rounded-lg border px-3 py-3 leading-tight text-gray-700 focus:outline-none"
                  />
                  <div className="icon-left"></div>
                </div>
              </div>{" "}
              <div className="text-sm lg:text-base">
                <label
                  for=""
                  className="text-gray-secondary !lg:text-base dm-sans mb-2 mt-4 block text-sm text-gray-700"
                >
                  Password
                </label>
                <div className="form-content relative z-0">
                  <input
                    type="password"
                    name=""
                    placeholder="Masukkan password kamu disini"
                    className="focus:shadow-outline relative z-0 w-full appearance-none rounded-lg border py-3 pl-3 pr-10 leading-tight text-gray-700 focus:outline-none"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
                    <Image
                      src="/images/icons/eye-slash.svg"
                      alt="hide"
                      className="h-6 w-6"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
              <div className="dm-sans mt-5 flex items-center justify-between text-sm lg:mt-4 lg:text-base">
                <section className="flex items-center gap-2 lg:gap-3">
                  <div>
                    <section>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 cursor-pointer lg:h-6 lg:w-6"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="23"
                          height="23"
                          rx="3.5"
                          fill="white"
                          stroke="#D9D9D9"
                        ></rect>
                      </svg>
                    </section>
                  </div>
                  <p>Ingatkan saya</p>
                </section>{" "}
                <p className="cursor-pointer text-[#25BCAF]">Lupa password?</p>
              </div>
              <button
                type="button"
                label=""
                shape=""
                addclassName="bg-[#08A081] text-white w-full !h-[42px] lg:!h-[54px] text-sm lg:text-base font-bold mt-7 lg:mt-9 dm-sans"
                contentclassName=""
                className="btn btn-null dm-sans mt-7 !h-[42px] w-full bg-[#08A081] text-sm font-bold text-white lg:mt-9 lg:!h-[54px] lg:text-base"
              >
                <div className="">Login</div>
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
