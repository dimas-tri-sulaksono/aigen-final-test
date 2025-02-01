import Footer from "@/components/organism/Footer";
import NavBlog from "@/components/organism/NavBlog";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/blog" ? <NavBlog /> : ""}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
