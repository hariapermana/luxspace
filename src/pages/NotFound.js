import React from "react";

import Header from "parts/Header";
import PageErrorMasage from "parts/PageErrorMasage";

import Footer from "parts/Footer";
import Sitemap from "parts/HomePage/Sitemap";

export default function NotFound() {
  return (
    <>
      <Header theme="black" />
      <PageErrorMasage />
      <Sitemap />
      <Footer />
    </>
  );
}
