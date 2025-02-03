import Footer from "@/components/organism/Footer";
import Nav from "@/components/organism/Nav";
import NavBlog from "@/components/organism/NavBlog";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  const showNav = useMemo(() => {
    return !["/", "/register", "/login"].includes(pathname);
  }, [pathname]);

  const showNavBlog = useMemo(() => pathname === "/blog", [pathname]);

  return (
    <>
      {showNav ? showNavBlog ? <NavBlog /> : <Nav /> : null}

      <Component {...pageProps} />

      {showNavBlog && <Footer />}
    </>
  );
}
