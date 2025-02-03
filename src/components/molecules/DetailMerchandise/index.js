import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const DetailMarchandise = ({ title, image, price }) => {
  const router = useRouter();
  return (
    <>
      <div class="px-[20px] pb-28 pt-20 md:container md:w-full">
        <div class="flex items-center gap-2 text-sm">
          <div>
            <div class="flex items-center gap-1 text-sm text-[#6D7588]">
              <button
                onClick={router.back}
                class="flex items-center gap-[4.8px]"
              >
                <Image
                  src="/images/icons/home-light.svg"
                  alt="home"
                  class="w-[16px]"
                  width={100}
                  height={100}
                />
                <Image
                  src="/images/icons/arrow-light.svg"
                  alt="home"
                  class="w-[5px]"
                  width={100}
                  height={100}
                />
              </button>
              <p class="line-clamp-1 text-[12px] leading-[14px] md:text-[14px] md:leading-[16px]">
                {title}
              </p>
            </div>
          </div>
        </div>
        <div class="mt-4 block gap-5 lg:flex">
          <div class="block gap-5 md:flex md:w-[752px]">
            <div class="rounded-xl md:w-[350px]">
              <div class="h-[262px] min-w-[320px] cursor-pointer rounded-xl border bg-[#fff] p-10 shadow-sm md:h-[320px] md:w-[350px]">
                <Image
                  src={image}
                  alt=""
                  className="aspect-video h-[200px] w-full rounded-xl object-contain md:h-[320px] md:w-[350px]"
                  width={100}
                  height={100}
                />
              </div>
              <div class="mt-4 flex w-full gap-3 overflow-x-auto overflow-y-hidden">
                <div class="h-[46px] w-[46px] flex-shrink-0 cursor-pointer rounded-[6px] border border-[#08A081] bg-[#AFE8DC]">
                  <Image
                    src="https://storage.googleapis.com/seakunid_prod-bucket/merchandise/product/c0d1452b-97ca-492c-a92c-66d2a8da8512/images/03041a18-f77e-46fa-8739-05d99c9096ea.webp"
                    alt="Img-seakun patungan for lyfe 1.webp"
                    class="h-[46px] w-[46px] rounded-[6px] object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div class="hiddenh-[46px] w-[46px] flex-shrink-0 cursor-pointer rounded-[6px] bg-[#AFE8DC]">
                  <Image
                    src="https://storage.googleapis.com/seakunid_prod-bucket/merchandise/product/c0d1452b-97ca-492c-a92c-66d2a8da8512/images/d7c6814d-46e5-4e33-b06b-582d0a631f59.webp"
                    alt="Img-seakun patungan for lyfe 5.webp"
                    class="h-[46px] w-[46px] rounded-[6px] object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div class="h-[46px] w-[46px] flex-shrink-0 cursor-pointer rounded-[6px] bg-[#AFE8DC]">
                  <Image
                    src="https://storage.googleapis.com/seakunid_prod-bucket/merchandise/product/c0d1452b-97ca-492c-a92c-66d2a8da8512/images/488f16b4-f224-4d89-9618-9f1f0cb99992.webp"
                    alt="Img-seakun patungan for lyfe 2.webp"
                    class="h-[46px] w-[46px] rounded-[6px] object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-[382px]">
          <div class="mt-4 inline-block h-[25px] w-[78px] rounded-[40px] bg-[#F6F6BE] px-3 py-1 text-[11px] font-medium leading-[13px] md:mt-0 md:text-[14px] md:leading-[16px]">
            Preorder
          </div>
          <div class="mt-3 text-[18px] font-bold leading-6 md:text-[24px] md:leading-7">
            {title}
          </div>
          <div class="mt-3 flex justify-between">
            <div class="text-[16px] font-bold leading-[26px] text-[#08A081] md:text-[24px] md:leading-[40px]">
              {price}
            </div>
            <div class="md:text-[14px]leading-5 text-[12px] font-medium text-[#66738F] md:leading-6">
              Terjual: 8
            </div>
          </div>
          <div class="mt-4 hidden border border-[#A0A3BD1A] border-opacity-10 md:block"></div>
          <div class="mt-4">
            <div class="text-[14px] font-medium leading-[23px] md:text-[16px] md:leading-[26px]">
              Pilih Warna
            </div>
            <div class="mt-3 w-full">
              <div class="flex flex-wrap gap-3">
                <div class="relative flex h-[40px] cursor-pointer items-center justify-center rounded-[6px] border !border-[#08A081] bg-[#E1F7F2] px-[14px] py-1 text-[14px]">
                  <div class="flex items-center justify-center gap-1">
                    <Image
                      src="https://storage.googleapis.com/seakunid_prod-bucket/merchandise/product/c0d1452b-97ca-492c-a92c-66d2a8da8512/variant/9d2de1f1-8001-4e90-9c33-9b225981e7b0/icon-e7fb3b18-872e-4598-af3f-a3a76fbd8b35.webp"
                      alt=""
                      class="h-6 w-8 object-contain"
                      width={100}
                      height={100}
                    />
                    <div class="text-[14px] font-medium leading-[23px]">
                      Black
                    </div>
                  </div>
                </div>
                <div class="relative flex h-[40px] cursor-pointer items-center justify-center rounded-[6px] border border-[#DCE1E0] px-[14px] py-1 text-[14px]">
                  <div class="flex items-center justify-center gap-1">
                    <Image
                      src="https://storage.googleapis.com/seakunid_prod-bucket/merchandise/product/c0d1452b-97ca-492c-a92c-66d2a8da8512/variant/dafeba00-7f94-41a9-aa6b-14acdbd5201c/icon-b9c82e30-757c-4da1-8305-c22d4d49f635.webp"
                      alt=""
                      class="h-6 w-8 object-contain"
                      width={100}
                      height={100}
                    />
                    <div class="text-[14px] font-medium leading-[23px]">
                      White
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <div class="text-[14px] font-medium leading-[23px] md:text-[16px] md:leading-[26px]">
              Pilih Ukuran
            </div>
            <div class="mt-3 w-full">
              <div class="flex flex-wrap gap-3">
                <div class="inline-flex h-[34px] w-10 cursor-pointer items-center justify-center rounded-[6px] border !border-[#08A081] bg-[#E1F7F2] px-2 py-[8.5px] text-center text-[14px] leading-[23px]">
                  S
                </div>
                <div class="inline-flex h-[34px] w-10 cursor-pointer items-center justify-center rounded-[6px] border border-[#DCE1E0] px-2 py-[8.5px] text-center text-[14px] leading-[23px]">
                  M
                </div>
                <div class="inline-flex h-[34px] w-10 cursor-pointer items-center justify-center rounded-[6px] border border-[#DCE1E0] px-2 py-[8.5px] text-center text-[14px] leading-[23px]">
                  L
                </div>
                <div class="inline-flex h-[34px] w-10 cursor-pointer items-center justify-center rounded-[6px] border border-[#DCE1E0] px-2 py-[8.5px] text-center text-[14px] leading-[23px]">
                  XL
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 border-0 border-[#A0A3BD1A] md:mt-7"></div>
          <div class="mt-2 hidden">
            <div class="flex gap-7 px-3">
              <div class="cursor-pointer text-[14px] font-medium leading-[23.1px] text-[#66738F]">
                Detail
              </div>
            </div>
            <div class="mt-2 border border-[#A0A3BD1A]"></div>
          </div>
        </div>
        <div class="md:w-[352px]">
          <div class="hidden rounded-lg border-[0.5px] border-[#66738F80] px-[20px] py-[16px] lg:block">
            <div class="text-[16px] font-semibold leading-[22px]">
              Detail Pesanan
            </div>
            <div class="my-3 border border-[#EBF6F4] bg-[#F6FBFA] p-2">
              <div class="flex items-center gap-2">
                <div class="h-10 w-10 content-center items-center rounded-[6px] bg-white">
                  <Image
                    src="https://storage.googleapis.com/seakunid_prod-bucket/merchandise/product/c0d1452b-97ca-492c-a92c-66d2a8da8512/variant/9d2de1f1-8001-4e90-9c33-9b225981e7b0/icon-e7fb3b18-872e-4598-af3f-a3a76fbd8b35.webp"
                    alt=""
                    class="h-10 w-10 rounded-[6px] object-contain"
                    width={100}
                    height={100}
                  />
                </div>
                <div class="text-[14px] font-medium leading-[23px]">
                  Black, S
                </div>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex items-center justify-center text-[14px] font-medium leading-[23px]">
                Kuantitas
              </div>
              <div class="flex content-center items-center gap-2">
                <div class="h-8 w-8 cursor-pointer border border-[#DCE1E0] p-[6px]">
                  <Image
                    src="/images/merchandise/line-md_minus.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div class="text-[16px] font-semibold leading-[22px]">1</div>
                <div class="h-8 w-8 cursor-pointer border border-[#DCE1E0] p-[6px]">
                  <Image
                    src="/images/merchandise/line-md_plus.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="mb-6 mt-5 flex justify-between text-[16px] font-semibold leading-[26px]">
              <div>Total Tagihan</div>
              <div class="text-[#08A081]">Rp 130.000</div>
            </div>
            <button
              type="button"
              label
              shape
              addclass="w-full text-base text-white bg-primary py-3 text-center font-bold"
              contentclass="flex justify-center items-center gap-1"
              class="btn btn-null bg-primary w-full py-3 text-center text-base font-bold text-white"
            >
              <div class="flex items-center justify-center gap-1">
                <Image
                  src="/images/merchandise/tabler_shopping-bag.svg"
                  alt="loading"
                  class="h-[22px] w-[22px]"
                  width={100}
                  height={100}
                />
                <span class="!m-0">Pesan Sekarang </span>
              </div>
            </button>
            <button
              type="button"
              variant="secondary"
              label
              shape
              addclass="w-full text-base py-3 text-center font-bold mb-[12px] mt-3"
              contentclass="flex justify-center items-center gap-1"
              class="btn btn-secondary mb-[12px] mt-3 w-full py-3 text-center text-base font-bold"
            >
              <div class="flex items-center justify-center gap-1">
                <Image
                  src="/images/icon/share.svg"
                  alt="loading"
                  class="h-[22px] w-[22px]"
                  width={100}
                  height={100}
                />
                <span class="!m-0">Bagikan</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="fixed bottom-0 left-0 z-30 w-full bg-[#ffff] py-[10.5px] [box-shadow:4px_0px_4px_0px_rgba(102,115,143,0.2)] md:py-5 lg:hidden">
        <div class="px-[20px] md:grid md:w-full md:grid-cols-2 md:gap-3">
          <div class="mb-2 flex items-center justify-between md:mb-0 md:block">
            <p class="text-sm font-medium !leading-[23.1px] md:text-base">
              Total Tagihan
            </p>
            <p class="text-primary text-sm font-bold !leading-[23.1px] md:mt-1 md:text-[20px]">
              Rp 130.000
            </p>
          </div>
          <div class="flex items-center gap-2">
            <button
              type="button"
              label
              shape
              addclass="w-full text-white bg-primary py-3 md:py-3 text-center font-bold text-[16px] leading-[26px]"
              contentclass
              class="btn btn-null bg-primary w-full py-3 text-center text-[16px] font-bold leading-[26px] text-white md:py-3"
            >
              <div class>Beli Sekarang</div>
            </button>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </>
  );
};

export default DetailMarchandise;
