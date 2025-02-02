import React from "react";
import Icons from "../icons";

const CheckBoxWithText = ({ children }) => {
  return (
    <>
      <section className="flex items-center gap-2 lg:gap-3">
        <div>
          <section>
            <Icons.CheckBox />
          </section>
        </div>
        {children}
      </section>
    </>
  );
};

export default CheckBoxWithText;
