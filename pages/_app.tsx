import "@fontsource/poppins";
import "../styles/index.scss";
import { Fragment } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="layout">
      <Head
        children={
          <Fragment>
            <title>Todo App</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Fragment>
        }
      />

      <Navbar />

      <div className="content">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}
