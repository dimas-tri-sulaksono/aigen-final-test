import BlogLatest from "@/components/organism/BlogLatest";
import BlogMain from "@/components/organism/BlogMain";
import useSessionCheck from "@/hooks/useSessionCheck";
import React from "react";

const Blog = () => {
  const isLoading = useSessionCheck();

  return (
    <>
      <BlogMain />
      <BlogLatest />
    </>
  );
};

export default Blog;
