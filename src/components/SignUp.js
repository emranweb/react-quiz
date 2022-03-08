import React from "react";
import style from "../style/Signup.module.css";
import Form from "./Form";
import Illustration from "./Illustration";
import TextInput from "./TextInput";

const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${style.signup} form`} action="#">
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock"
          />
        </Form>
      </div>
    </>
  );
};

export default SignUp;
