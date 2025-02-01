import CatBlog from "@/components/atoms/CatBlog";
import Icons from "@/components/atoms/icons";
import Link from "next/link";
import React from "react";

const NavBlog = () => {
  return (
    <nav className="title-font container py-3 md:pb-3">
      <div className="flex items-center justify-between pt-2">
        <div className="logo border-0">
          <Link href={"/"} rel="noopener noreferrer" target="_blank">
            <Icons.LogoSeakun />
          </Link>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search.."
            className="h-[42px] w-[180px] rounded-lg border px-4 py-2 focus-visible:outline-[#08a081]"
          />
          <Icons.Loupe />
        </div>
      </div>
      <ul className="hide-scrollbar flex w-full items-center gap-4 overflow-auto border-b border-gray-200 md:mt-3 md:gap-5">
        <CatBlog text={"Semua"} className="" />
        <CatBlog text={"Seakun"} />
        <CatBlog text={"Film & Series"} />
        <CatBlog text={"Musik"} />
        <CatBlog text={"Edukasi"} />
        <CatBlog text={"Produktivitas"} />
        <CatBlog text={"Game"} />
        <CatBlog text={"Info"} />
      </ul>
    </nav>
  );
};

export default NavBlog;
