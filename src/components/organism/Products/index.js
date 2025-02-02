import Icons from "@/components/atoms/icons";
import CardProduct from "@/components/molecules/CardProduct";
import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <>
      <div className="container relative z-20 pb-8 pt-8 md:pb-10 md:pt-10 lg:pb-16 lg:pt-16 xl:pt-20">
        <div className="mb-8 md:mb-10 lg:mb-[50px] xl:mb-[60px]">
          <div
            id="product-digital"
            className="flex items-center justify-between"
          >
            <h1 className="text-title text-main md:mb-4 lg:mb-4">
              Berlangganan Produk Digital
            </h1>
          </div>
          <div className="mt-4 flex w-full flex-wrap items-center md:mt-2 md:flex-nowrap md:justify-between md:space-x-3">
            <div className="relative z-20 w-full lg:w-[400px]">
              <div className="relative m-0">
                <div className="relative z-10">
                  <input
                    id="search-input"
                    type="text"
                    placeholder="Cari produk"
                    autocomplete="off"
                    value=""
                    className="w-full appearance-none rounded-lg border border-[#A0A3BD] bg-[#fff] px-10 py-3 text-[#A0A3BD] focus:outline-none md:border-2"
                  />
                  <div className="icon-left !pt-1 text-[#A0A3BD]">
                    {/* <Icons.Loupe /> */}
                  </div>
                </div>
                <div className="relative z-20">
                  <div
                    id="dropdown-search"
                    className="absolute left-0 top-0 !z-50 w-full overflow-hidden rounded bg-white text-[#A0A3BD] shadow-2xl"
                  ></div>
                </div>
              </div>
            </div>
            <div className="relative z-20 mt-3 flex w-full items-center space-x-3 md:mt-0 md:w-auto">
              <div className="w-full md:w-[200px]">
                <div id="select-option-Pre-order-2" className="relative z-10">
                  <button
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    className="button-dropdown flex w-full items-center justify-between !rounded-lg border border-[#A0A3BD] bg-white px-4 py-3 text-[#A0A3BD] focus:outline-none md:border-2"
                  >
                    <span>Tipe produk</span>
                    <span></span>
                  </button>
                  <div className="relative z-0"></div>
                </div>
              </div>
              <div className="w-full md:w-[200px]">
                <div id="select-option-Game-game" className="relative z-10">
                  <button
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    className="button-dropdown flex w-full items-center justify-between !rounded-lg border border-[#A0A3BD] bg-white px-4 py-3 text-[#A0A3BD] focus:outline-none md:border-2"
                  >
                    <span>Kategori produk</span>
                    <span></span>
                  </button>
                  <div className="relative z-0"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 mt-6">
            <div>
              <div className="grid grid-cols-2 !items-stretch gap-3 md:flex md:flex-wrap md:justify-center md:gap-4">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
