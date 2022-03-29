import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Form from "../components/Form";
import Illustration from "../components/Illustration";
import Info from "../components/Info";
import TextInput from "../components/TextInput";
import style from "../style/Signup.module.css";

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
            Already have an account? <Link to="/login">Login</Link> instead.
          </Info>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
