import React from "react";
import { Link } from "react-router-dom";
import style from "../style/Account.module.css";

const Account = () => {
  return (
    <>
      <div className={style.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <Link to="/signup">Signup</Link>
        <span className="material-icons-outlined" title="Logout">
          logout
        </span>
      </div>
    </>
  );
};

export default Account;
