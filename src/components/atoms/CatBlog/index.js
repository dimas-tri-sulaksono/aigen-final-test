import Link from "next/link";
import React from "react";

const CatBlog = ({
  href = "#",
  className = "relative cursor-pointer whitespace-nowrap px-1 py-3 md:px-4 md:pb-5",
  text,
}) => {
  return (
    <>
      <li>
        <Link
          aria-current="page"
          href={href}
          className="router-link-active router-link-exact-active"
        >
          <p className={className}>{text}</p>
        </Link>
      </li>
    </>
  );
};

export default CatBlog;
