import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "components/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({
  children,
  title = "This is the default title",
  description = "Put your default description here.",
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f2c94c" />
      <meta name="apple-mobile-web-app-title" content="SolarSam" />
      <meta name="application-name" content="SolarSam" />
      <meta name="msapplication-TileColor" content="#f2c94c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Navbar />
    {children}
    {/* <Footer /> */}
  </div>
);

export default Layout;
