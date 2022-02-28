import React from "react";
import LogoBg from "../assets/logo-bg.png";
import style from "../style/Navbar.module.css";
import Account from "./Account";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <a href="index.html" className={style.brand}>
            <img src={LogoBg} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Navbar;
