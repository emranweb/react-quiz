import React from "react";
import Illustration from "../components/Illustration";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;
