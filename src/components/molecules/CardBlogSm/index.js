import React from "react";
import Icons from "../../atoms/icons";

const CardBlogSm = ({
  image = "",
  image2 = "",
  category = "",
  title = "",
  author = "",
  date = "",
}) => {
  return (
    <>
      <div className="relative h-[124px] max-h-[124px] md:h-[248px] lg:h-full lg:max-h-full">
        <div
          className={`relative z-10 h-full w-full cursor-pointer rounded-[6px] bg-cover hover:shadow-md bg-[url('/images/blog/${image2}')] ${image}`}
        >
          <div className="relative flex h-full w-full items-end rounded-[6px] bg-black/40 p-2 md:p-5">
            <div>
              <div className="bg-primary/50 inline rounded-[20px] px-2 py-0.5 text-[10px] font-medium text-white md:text-[12px]">
                {category}
              </div>
              <h3 className="font-title mb-1 mt-1 line-clamp-2 font-bold text-white md:mt-2">
                {title}
              </h3>
              <div className="flex items-center gap-2 md:gap-1">
                <div className="font-main text-[10px] text-white md:text-[12px]">
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

export default CardBlogSm;
