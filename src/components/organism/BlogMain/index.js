import CardBlogSm from "@/components/molecules/CardBlogSm";
import CardBlogTrending from "@/components/molecules/CardBloTrending";
import React from "react";

const BlogMain = () => {
  return (
    <>
      <div className="min-h-[60vh] w-full space-y-5">
        <div className="container mt-3">
          <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
            <CardBlogTrending
              image={"bg-[url('/images/blog/squid-game-3.jpg')]"}
              category={"Film & Series"}
              title={"Squid Game 3 Rilis 27 Juni Tahun ini!"}
              author={"Silvia Nur Chairina"}
              date={"31 Jan 2025"}
            />

            <CardBlogSm
              image={"bg-[url('/images/blog/the-trauma-code.jpg')]"}
              category={"Film & Series"}
              title={
                "The Trauma Code: Heroes on Call, Sukses Menarik Penonton Marathon!"
              }
              author={"Silvia Nur Chairina"}
              date={"30 Jan 2025"}
            />
            <CardBlogSm
              image={"bg-[url('/images/blog/gusdur.png')]"}
              category={"Edukasi"}
              title={"Ada Gus Dur Dibalik Perayaan Imlek di Indonesia"}
              author={"Silvia Nur Chairina"}
              date={"29 Jan 2025"}
            />
            <CardBlogSm
              image={"bg-[url('/images/blog/imlek.webp')]"}
              category={"Info"}
              title={"Sambut Imlek Tahun Ular Kayu dengan Penuh Keberuntungan!"}
              author={"Seakun"}
              date={"28 Jan 2025"}
            />
            <CardBlogSm
              image={"bg-[url('/images/blog/isra.png')]"}
              category={"Info"}
              title={
                "Memperingati Isra Miraj, Yuk Intip Beberapa Tradisi di Indonesia!"
              }
              author={"Silvia Nur Chairina"}
              date={"27 Jan 2025"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMain;
