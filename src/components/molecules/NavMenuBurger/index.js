import NavMenu from "@/components/atoms/NavMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavMenuBurger = () => {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    sessionStorage.removeItem("isLoggedIn");
    router.push("/login");
    window.location.href = "/login";
  }
  return (
    <>
      <div className="items-center sm:mt-1 md:mt-2 lg:mt-0">
        <button className="float-right rounded-lg focus:outline-none lg:hidden">
          <div className="pr-1 pt-1">
            {/* <Image
                      src="/images/icons/hamburger.svg"
                      alt="menu"
                      className="-mt-0.5 w-[18px] md:-mt-2 md:w-[20px]"
                      width={18}
                      height={12}
                    /> */}
            <div>
              <div
                onClick={handleLogout}
                class="bg-primary -mt-3 flex h-[35px] w-fit min-w-[75px] items-center justify-center rounded-[8px] text-sm font-bold text-white lg:text-base"
              >
                Logout
              </div>
              <div
                onClick={handleLogout}
                class="border-primary bg-primary hidden h-[42px] w-[112px] items-center justify-center rounded-[8px] border text-sm font-semibold text-white lg:ml-10 lg:flex lg:text-base"
              >
                Logout
              </div>
            </div>
          </div>
        </button>
      </div>
      <NavMenu title={"Layanan"} className="mt-6" />
      <NavMenu title={"Pengguna"} />
      <NavMenu title={"Cara Pesan"} />
      <NavMenu title={"Testimoni"} />
      <NavMenu title={"FAQ"} />
      <NavMenu title={"Blog"} />
      <NavMenu title={"Laporan Kendala"} />
      <div>
        <Link
          href="/login"
          className="bg-primary mt-3 hidden h-[42px] w-fit min-w-[130px] items-center justify-center rounded-[8px] text-sm font-bold text-white lg:text-base"
        >
          Login
        </Link>
        <Link
          href="/login"
          className="border-primary bg-primary hidden h-[42px] w-[112px] items-center justify-center rounded-[8px] border text-sm font-semibold text-white lg:ml-10 lg:flex lg:text-base"
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default NavMenuBurger;
