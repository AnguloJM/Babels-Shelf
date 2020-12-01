import React from "react";
import "./Layout.css";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  )
};

export default Layout;