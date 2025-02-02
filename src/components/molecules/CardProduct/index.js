import Image from "next/image";
import React from "react";

const CardProduct = () => {
  return (
    <>
      <div>
        <div className="provider-card relative z-0 h-full w-full !rounded-[8px] bg-[#ffff] p-2 md:w-[268px] md:p-[14px]">
          <div className="flex items-center justify-center pt-2 md:pt-4">
            <div className="cloud"></div>
          </div>{" "}
          <div className="my-2 flex h-[30px] items-center gap-2 md:mb-0 md:h-[60px]">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md md:h-[60px] md:w-[60px]">
              <Image
                src="/images/icons/youtube.svg"
                alt="provider icon"
                className="w-full md:w-3/4"
                width={30}
                height={21}
              />
            </div>
            <p className="text-main max-w-[70%] text-left !text-sm !font-semibold !leading-5 lg:!text-base">
              Youtube
            </p>
          </div>
          <div className="h-[1px] w-full bg-[#F6F6F6]"></div>
          <div className="my-2 mt-2 min-h-[80px] space-y-[2px] md:min-h-[92px] md:space-y-1 lg:space-y-2">
            <div>
              <div className="flex items-center justify-between text-[11px] md:text-[14px]">
                <div>
                  <p className="text-main -mb-1 text-[11px] !font-light leading-[21px] md:mb-0 md:text-sm">
                    User Reguler
                  </p>
                  <p className="leading-[21px]">
                    <span className="text-main !font-bold">Rp 36.900</span>
                    <span className="text-[#66738F] md:hidden">/bln</span>
                    <span className="hidden text-[#66738F] md:inline-block">
                      /bulan
                    </span>
                  </p>
                </div>
                <div className="rounded-[20px] bg-[#E9FAF5] px-2 py-[3px] text-[8px] !font-medium leading-[15px] text-[#00BA88] md:px-[14px] md:py-2 md:text-[10px]">
                  1, 3, 6, 12
                  <span className="md:hidden"> Bln</span>
                  <span className="hidden md:inline-block"> Bulan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[77px] w-full md:h-[100px]"></div>
          <div className="absolute bottom-0 left-0 z-10 w-full p-2 md:p-[14px]">
            <div className="w-full">
              <div className="h-[0.5px] w-full bg-[#F6F6F6]"></div>
              <div className="mt-2 flex items-center justify-between px-1">
                <div
                  role="button"
                  className="flex items-center gap-1 text-[#4BAC99]"
                >
                  <div className="flex items-center justify-center md:h-[16px] md:w-[16px]">
                    <Image
                      src="/images/icons/eye.svg"
                      alt="open scheme"
                      className="md:w-full"
                      width={16}
                      height={17}
                    />
                  </div>
                  <p className="text-[11px] !font-light md:text-sm">
                    Lihat skema harga
                  </p>
                </div>
              </div>
              <div className="relative">
                <button
                  type="button"
                  variant="primary"
                  label="Pesan"
                  shape=""
                  addclassName="!rounded-[8px] py-2 md:py-3"
                  contentclassName=""
                  className="btn btn-primary mt-2 w-full !rounded-[8px] py-2 md:mt-3 md:py-3"
                >
                  <div>Pesan</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
