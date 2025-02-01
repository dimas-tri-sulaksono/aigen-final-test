import Icons from "@/components/atoms/icons";
import Image from "next/image";
import React from "react";

const CardBlogLatest = ({ image, alt, title, date, category }) => {
  return (
    <>
      <div className="relative z-0">
        <div
          className="relative h-full w-full cursor-pointer overflow-hidden rounded-md bg-white shadow-md hover:rounded-md hover:shadow-md"
          label_type="light"
        >
          <Image
            className="h-[160px] w-full object-cover md:h-[130px]"
            src={image}
            alt={alt}
            width={160}
            height={130}
          />
          <div className="px-3 py-3">
            <div className="text-text-dark line-clamp-2 min-h-10 text-sm font-bold lg:min-h-10">
              <p>{title}</p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <Icons.CalBlack />
                <p className="text-mono px-2 text-[10px] md:text-xs">{date}</p>
              </div>
              <div className="bg-primary/50 inline rounded-[20px] px-2 py-0.5 text-[10px] font-medium text-white md:text-[12px]">
                {category}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBlogLatest;
