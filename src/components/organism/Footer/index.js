import Icons from "@/components/atoms/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="main-font footer mt-12 py-[64px] lg:py-[100px]">
        <div className="tn:px-3 gap-8 p-4 text-white md:!container md:grid md:grid-cols-2 md:justify-between lg:grid-cols-5 lg:justify-center lg:gap-8">
          <div className="max-w-md md:row-span-3 md:pr-10 lg:col-span-2 xl:pr-16">
            <div className="tn:mt-8 tn:mb-6 md:mb-9">
              <Icons.LogoSeakun />
            </div>
            <p className="tn:text-sm my-2 space-y-1 md:text-base">
              Platform pertama di Indonesia yang memberikan layanan Berlangganan
              Bersama agar dapat menikmati fitur premium dengan proses
              berlangganan yang praktis, legal, aman dan murah
            </p>
            <div className="my-3 flex space-x-2 xl:space-x-3">
              <Link href="#" target="_blank">
                <Image
                  src="/images/footer/instagram.svg"
                  alt="instagram icon"
                  width={24}
                  height={25}
                />
              </Link>
              <Link href="#" target="_blank">
                <Image
                  src="/images/footer/twitter.svg"
                  alt="twitter icon"
                  width={24}
                  height={25}
                />
              </Link>
              <Link href="#" target="_blank">
                <Image
                  src="/images/footer/linkedin.svg"
                  alt="linkedin icon"
                  width={24}
                  height={25}
                />
              </Link>
            </div>
            <div className="max-w-[312px] pt-3 text-sm leading-[22px] text-white">
              <p>
                Sudah terdaftar sebagai penyedia media elektronik di Kominfo
                <Image
                  src="/images/footer/shield-check.svg"
                  alt="check"
                  className="mb-1 inline h-[18px] w-[18px]"
                  width={24}
                  height={25}
                />
              </p>
            </div>
          </div>
          <div className="tn:my-4 mt-10 md:mt-0">
            <h1 className="tn:text-lg tn:my-8 font-bold md:text-2xl lg:mb-4 xl:mb-8">
              {" "}
              Seakun{" "}
            </h1>
            <ul className="tn:text-sm my-2 space-y-4 md:text-base xl:space-y-4">
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Skema Harga
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Syarat dan Ketentuan
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link className="hover:no-underline" href="#" target="_blank">
                  Laporan Kendala
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Tip untuk Seakun
                </Link>
              </li>
            </ul>
          </div>
          <div className="tn:my-4 mt-10 py-4 lg:mt-0">
            <h1 className="tn:text-lg tn:my-8 font-bold md:text-2xl lg:mb-4 xl:mb-8">
              {" "}
              Produk{" "}
            </h1>
            <ul className="tn:text-sm my-2 space-y-4 md:text-base xl:space-y-4">
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Produk Digital
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Produk Non Digital
                </Link>
              </li>
              <li className="relative max-w-max">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Sequrban
                </Link>
              </li>
              <li className="relative max-w-max">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  SeGlowUp
                </Link>
                <Image
                  className="absolute -right-1 top-0 w-[9px] opacity-100 transition-opacity delay-75 duration-500 ease-in-out"
                  src="/images/footer/spark.svg"
                  alt="spark"
                  width={24}
                  height={25}
                />
                <Image
                  className="absolute -right-2 bottom-1 w-[8px] !opacity-100 transition-opacity delay-75 duration-500 ease-in-out"
                  src="/images/footer/spark.svg"
                  alt="spark"
                  width={24}
                  height={25}
                />
                <Image
                  className="absolute -right-4 top-0 w-[12px] !opacity-100 transition-opacity delay-75 duration-500 ease-in-out"
                  src="/images/footer/spark.svg"
                  alt="spark"
                  width={24}
                  height={25}
                />
              </li>
            </ul>
            <div className="tn:my-4 mt-10 lg:mt-0">
              <h1 className="tn:text-lg tn:my-8 font-bold md:text-2xl lg:mb-4 xl:mb-8">
                Hubungi Kami
              </h1>
              <div className="tn:text-sm my-2 space-y-4 md:text-base xl:space-y-4">
                <div className="flex space-x-2">
                  <Image
                    src="/images/footer/email-icon.svg"
                    alt="#"
                    width={24}
                    height={25}
                  />
                  <Link href="#">
                    <p>admin@seakun.id</p>
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/footer/whatsapp.svg"
                    alt="#"
                    width={24}
                    height={25}
                  />
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    082124852235
                  </Link>
                </div>
                <div className="flex items-start space-x-2">
                  <Image
                    className="ml-1"
                    src="/images/footer/time-circle.svg"
                    alt="#"
                    width={20}
                    height={21}
                  />
                  <div className="space-y-1">
                    <p className="font-bold">Jam Operasional</p>
                    <p>Setiap Hari</p>
                    <p>09.00 - 21.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tn:py-2 text-center text-white lg:py-4">
            <p>© 2020 - 2025 PT Seakun Global Teknologi</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
