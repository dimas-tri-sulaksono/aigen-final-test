import NavMenuBurger from "@/components/molecules/NavMenuBurger";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <>
      <div id="navbar" className="bg-nav fixed z-40 w-full py-4 lg:py-0">
        <div className="static z-0 w-full text-white">
          <div className="container lg:my-1 lg:flex lg:items-center lg:justify-between">
            <Link href="/" aria-current="page">
              <div className="flex items-center gap-1">
                <Image
                  src="/images/icons/brand_seakun.svg"
                  alt="brand seakun"
                  className="relative z-30 h-6 md:h-8 lg:h-10"
                  width={93}
                  height={24}
                />
              </div>
            </Link>
            <div className="z-100 absolute right-0 top-1 flex w-full animate-none flex-col rounded-b-xl px-4 py-4 pr-1 md:px-4 lg:relative lg:right-0 lg:top-0 lg:w-4/5 lg:flex-row lg:items-center lg:justify-end lg:p-0">
              <NavMenuBurger />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
