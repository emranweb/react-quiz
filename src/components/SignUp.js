import React from "react";
import style from "../style/Signup.module.css";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import Illustration from "./Illustration";
import Info from "./Info";
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
          <CheckBox type="checkbox" text="I agree to the Terms & Conditions" />
          <Button type="submit" className="button">
            <span>Submit Now</span>
          </Button>
          <Info className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </Info>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
