import CheckBoxWithText from "@/components/atoms/CheckBoxWithText";
import InputForm from "@/components/atoms/InputForm";
import { login } from "@/services/auth";
import { useRouter } from "next/compat/router";
import React, { useState } from "react";
import Button from "@/components/atoms/Button";
import Image from "next/image";

const LoginPage = () => {
  const [errorLogin, setErrorLogin] = useState("");
  const router = useRouter();

  //
  async function handleLogin(event) {
    //
    event.preventDefault();

    const payload = {
      username: event.target.username.value, // johnd
      password: event.target.password.value, // m38rmF$
    };

    try {
      const res = await login(payload);
      console.log(res);

      if (res.status) {
        localStorage.setItem("token", res.token);
        router.push("/blog");
        //
      } else {
        console.log("login error : ", res.error.response.data);
        setErrorLogin(res.error.response.data);
      }
    } catch (error) {
      console.log("login failed : ", error);
      setErrorLogin(error.response.data);
    }
  }

  return (
    <form className="mt-5 px-3 lg:mt-6" onSubmit={handleLogin}>
      <InputForm
        text="Email"
        label="username"
        classNameLabel="pb-2"
        id="username"
        name="username"
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
        placeholder="Masukkan password kamu disini"
        classNameInput="pl-3 pr-10"
      >
        <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
          <Image
            src="/images/icons/eye-slash.svg"
            alt="hide"
            className="h-6 w-6"
            width={24}
            height={24}
          />
        </div>
      </InputForm>

      <div className="dm-sans mt-5 flex items-center justify-between text-sm lg:mt-4 lg:text-base">
        <CheckBoxWithText>
          <p>Ingatkan saya</p>
        </CheckBoxWithText>
        <p className="cursor-pointer text-[#25BCAF]">Lupa password?</p>
      </div>
      <Button text="Login" />
      {errorLogin && (
        <p className="mt-4 text-center text-sm text-red-500">{errorLogin}</p>
      )}
    </form>
  );
};

export default LoginPage;
