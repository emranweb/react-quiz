import React from "react";
import { Link } from "react-router-dom";
import LogoBg from "../assets/logo-bg.png";
import style from "../style/Navbar.module.css";
import Account from "./Account";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to="/" className={style.brand}>
            <img src={LogoBg} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Navbar;
