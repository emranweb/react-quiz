import React from "react";
import Navbar from "../components/Navbar";

const Main = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main class="main">
        <div class="container">{children}</div>
      </main>
    </>
  );
};

export default Main;
