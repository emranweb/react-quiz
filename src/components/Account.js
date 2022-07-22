import React from "react";
import { Link } from "react-router-dom";
import style from "../style/Account.module.css";
import { useAuth } from "./../context/AuthContext.";

const Account = () => {
  const { current, signout } = useAuth();

  const handleLogout = () => {
    signout();
  };
  return (
    <>
      <div className={style.account}>
        {current ? (
          <>
            <span className="material-icons-outlined" title="Account">
              account_circle
            </span>
            {current.displayName && <span>{current.displayName}</span>}
            <span
              className="material-icons-outlined"
              onClick={handleLogout}
              title="Logout"
            >
              logout
            </span>
          </>
        ) : (
          <>
            <span className="material-icons-outlined" title="Account">
              account_circle
            </span>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </>
  );
};

export default Account;
