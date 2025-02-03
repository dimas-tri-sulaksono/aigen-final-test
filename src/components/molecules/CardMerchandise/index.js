import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardMarchandise = ({ id, title, image, alt, price, origin="Jakarta" }) => {
  return (
    <>
      <Link href={`/products/${id}`}>
        <div
          key={id}
          className="w-full cursor-pointer rounded-lg border border-[#DCE1E0] bg-white"
        >
          <header className="h-[160px] w-full rounded-t-lg bg-[#fff] md:h-[165px] lg:h-[180px]">
            <Image
              src={image}
              alt={alt}
              className="aspect-video h-full w-full object-contain p-5"
              width={168}
              height={160}
            />
          </header>
          <div className="px-2 pb-3 pt-2 md:px-3">
            <div className="min-h-10 lg:min-h-11">
              <p className="line-clamp-2 text-xs font-medium leading-5 md:text-sm md:leading-[22px]">
                {title}
              </p>
            </div>
            <p className="text-primary mt-1 text-sm font-bold leading-7 lg:text-base">
              {price}
            </p>{" "}
            <div className="mt-1 flex items-center justify-between text-[10px] text-[#66738F] md:text-xs">
              <section className="flex items-center gap-1">
                <Image
                  src="/images/icons/shipping-fast.svg"
                  alt="car"
                  className="w-[14px] md:w-[16px] lg:w-[18px]"
                  width={14}
                  height={14}
                />{" "}
                <p className="mt-0.5 capitalize">{origin}</p>
              </section>{" "}
              <p>23 Terjual</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardMarchandise;
