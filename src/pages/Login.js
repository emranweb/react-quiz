import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import Illustration from "../components/Illustration";
import Info from "../components/Info";
import TextInput from "../components/TextInput";
import style from "../style/Login.module.css";

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
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </Info>
        </Form>
      </div>
    </>
  );
};

export default Login;
