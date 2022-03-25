import React from "react";
import style from "../style/Login.module.css";
import Button from "./Button";
import Form from "./Form";
import Illustration from "./Illustration";
import Info from "./Info";
import TextInput from "./TextInput";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration />
        <Form className={`${style.login}`}>
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button type="submit" className="button">
            <span>Submit Now</span>
          </Button>
          <Info className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </Info>
        </Form>
      </div>
    </>
  );
};

export default Login;
