import React from "react";

const Button = ({
  type = "submit",
  className,
  text = "Submit",
  classNameTex,
}) => {
  return (
    <>
      <button
        type={type}
        className={`btn btn-null dm-sans mt-7 !h-[42px] w-full bg-[#08A081] text-sm font-bold text-white lg:mt-9 lg:!h-[54px] lg:text-base ${className}`}
      >
        <div className={`${classNameTex}`}>{text}</div>
      </button>
    </>
  );
};

export default Button;
