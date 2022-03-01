import React from "react";
import Navbar from "../components/Navbar";
import style from "../style/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className={style.main}>
        <div className={style.container}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
