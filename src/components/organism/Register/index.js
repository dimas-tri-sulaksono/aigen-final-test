import Button from "@/components/atoms/Button";
import CheckBoxWithText from "@/components/atoms/CheckBoxWithText";
import Icons from "@/components/atoms/icons";
import InputForm from "@/components/atoms/InputForm";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <>
      <form className="mt-5 px-3 lg:mt-6">
        <InputForm
          text="Nama Lengkap"
          label="nama"
          classNameLabel="pb-2"
          id="nama"
          name="nama"
          placeholder="Masukkan nama kamu di sini"
          classNameInput="px-3"
        >
          <div className="icon-left"></div>
        </InputForm>
        <InputForm
          text="Email"
          label="email"
          classNameLabel="mb-2 mt-4 text-gray-700"
          id="email"
          name="email"
          placeholder="Masukkan email"
          classNameInput="px-3"
        >
          <div className="icon-left"></div>
        </InputForm>
        <InputForm
          text="Password"
          label="password"
          classNameLabel="mb-2 mt-4 text-gray-700"
          type="password"
          id="password"
          name="password"
          placeholder="Masukkan password kamu di sini"
          classNameInput="pl-3 pr-10"
        >
          <Icons.EyeSlash />
        </InputForm>
        <InputForm
          text="Konfirmasi Password"
          label="confirm password"
          classNameLabel="mb-2 mt-4 text-gray-700"
          type="password"
          id="confirm password"
          name="confirm password"
          placeholder="Ketik ulang password kamu di sini"
          classNameInput="pl-3 pr-10"
        >
          <Icons.EyeSlash />
        </InputForm>

        <div className="dm-sans mt-5 flex items-center justify-between text-sm lg:mt-4 lg:text-base">
          <CheckBoxWithText>
            <p className="text-main text-xs leading-[18px] lg:text-sm">
              Dengan mendaftar, saya menyetujui
              <Link href="#" target="_blank" class="text-primary">
                {"  "} Syarat dan Ketentuan Seakun
              </Link>
              , serta
              <Link href="#" target="_blank" class="text-primary">
                {"  "} Kebijakan Privasi
              </Link>
            </p>
          </CheckBoxWithText>
        </div>
        <Button text="Daftar" />
      </form>
    </>
  );
};

export default Register;
