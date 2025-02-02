import Footer from "@/components/organism/Footer";
import Nav from "@/components/organism/Nav";
import NavBlog from "@/components/organism/NavBlog";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {/* sementara */}
      {["/login", "/register"].includes(
        router.pathname,
      ) ? null : router.pathname === "/blog" ? (
        <NavBlog />
      ) : (
        <Nav />
      )}
      <Component {...pageProps} />
      {router.pathname === "/login" || router.pathname === "/register" ? (
        ""
      ) : (
        <Footer />
      )}{" "}
    </>
  );
}
