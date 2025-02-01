import Icons from "@/components/atoms/icons";
import React from "react";

const CardBlogTrending = ({ image = "", category, title, author, date }) => {
  return (
    <>
      <div className="relative col-span-2 row-span-2 h-[240px] w-full md:h-full lg:h-[400px]">
        <div
          className={`relative z-10 h-full w-full cursor-pointer rounded-[6px] bg-cover hover:shadow-md ${image}`}
        >
          <div className="relative flex h-full w-full items-end rounded-[6px] bg-black/40 p-3 md:p-7">
            <div>
              <div className="bg-primary/50 inline rounded-[20px] px-2 py-0.5 text-[10px] font-medium text-white md:text-[12px]">
                {category}
              </div>
              <h3 className="font-title mb-1 mt-1 line-clamp-2 font-bold text-white md:mt-2">
                {title}
              </h3>
              <div className="flex items-center gap-2 md:gap-1">
                <div className="font-main text-[14px] text-white md:text-[16px]">
                  <span className="line-clamp-1">{author}</span>
                </div>
                <div className="">
                  <Icons.WhiteDot />
                </div>
                <div className="flex shrink-0 items-center gap-1 md:gap-2">
                  <Icons.Cal />
                  <p className="text-[10px] text-white md:text-xs">{date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBlogTrending;
