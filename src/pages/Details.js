import React from "react";
import Header from "parts/Header";

import Breadcumb from "components/Breadcrumb";
import ProductsDetails from "parts/Details/ProductsDetails";

import Sitemap from "parts/HomePage/Sitemap";
import Footer from "parts/Footer";
import Suggestions from "parts/Details/Suggestions";

export default function Details(props) {
  return (
    <>
      <Header theme="black" />

      <Breadcumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <ProductsDetails />
      <Suggestions />

      <Sitemap />
      <Footer />
    </>
  );
}
