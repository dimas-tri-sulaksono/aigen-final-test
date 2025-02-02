import Footer from "@/components/organism/Footer";
import NavBlog from "@/components/organism/NavBlog";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {/* sementara */}
      {router.pathname === "/login" || router.pathname === "/register" ? (
        ""
      ) : (
        <NavBlog />
      )}{" "}
      <Component {...pageProps} />
      {router.pathname === "/login" || router.pathname === "/register" ? (
        ""
      ) : (
        <Footer />
      )}{" "}
    </>
  );
}
