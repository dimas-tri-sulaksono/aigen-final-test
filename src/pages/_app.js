import Footer from "@/components/organism/Footer";
import Nav from "@/components/organism/Nav";
import NavBlog from "@/components/organism/NavBlog";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";

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

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      {showNavBlog && <Footer />}
    </>
  );
}
