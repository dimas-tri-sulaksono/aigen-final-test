import React from "react";

const NavMenu = ({ title, className = "mt-3" }) => {
  return (
    <>
      <nav
        className={`${className} hidden flex-col items-start pr-4 md:p-0 md:pr-4 lg:mt-0 lg:flex lg:flex-row lg:justify-end lg:pr-0`}
      >
        <div className="text-main relative cursor-pointer rounded-lg text-right text-base font-light hover:opacity-50 focus:opacity-50 md:mt-0 md:py-0 lg:my-3 lg:ml-8 lg:text-sm lg:font-semibold xl:ml-10">
          {" "}
          <p className="whitespace-nowrap">{title}</p>{" "}
        </div>
      </nav>
    </>
  );
};

export default NavMenu;
