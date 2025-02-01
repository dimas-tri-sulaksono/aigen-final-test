import Icons from "@/components/atoms/icons";
import CardBlogLatest from "@/components/molecules/CardBlogLatest";
import Image from "next/image";
import React from "react";

const BlogLatest = () => {
  return (
    <>
      <div className="container">
        <div className="title-font mb-5">
          <label className="text-text-dark text-[16px] font-bold">Latest</label>
          <label className="text-primary text-[16px] font-bold"> Article</label>
        </div>
        <div>
          <div>
            <div className="grid w-full grid-cols-1 items-center justify-between gap-5 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
              <CardBlogLatest
                image={"/images/blog/squid-game-3.jpg"}
                alt="squid game 3"
                title={"Squid Game 3 Rilis 27 Juni Tahun ini!"}
                date={"31 Januari 2025"}
                category={"Film & Series"}
              />

              <CardBlogLatest
                image={"/images/blog/squid-game-3.jpg"}
                alt="squid game 3"
                title={"Squid Game 3 Rilis 27 Juni Tahun ini!"}
                date={"31 Januari 2025"}
                category={"Film & Series"}
              />

              <CardBlogLatest
                image={"/images/blog/squid-game-3.jpg"}
                alt="squid game 3"
                title={"Squid Game 3 Rilis 27 Juni Tahun ini!"}
                date={"31 Januari 2025"}
                category={"Film & Series"}
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center">
            <button className="rounded-[8px] border-2 border-[#08A081] bg-white pb-[12px] pl-[16px] pr-[16px] pt-[12px] text-[12px] font-bold text-[#08A081] lg:text-base">
              Lihat lainnya
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLatest;
