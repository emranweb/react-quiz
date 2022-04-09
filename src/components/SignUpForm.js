import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import Info from "./Info";
import TextInput from "./TextInput";
import style from "../style/Signup.module.css";
import { useAuth } from "./../context/AuthContext.";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const nagivation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // check password not match
    if (password !== confirmPassword) {
      return setError("password not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, name);
      nagivation("/");
    } catch (error) {
      setLoading(false);
      setError("Signup Fail");
    }
  };

  return (
    <Form className={`${style.signup} form`} action="" onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter Name"
        icon="person"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Confirm password"
        required
        icon="lock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <CheckBox
        type="checkbox"
        text="I agree to the Terms & Conditions"
        checked={agree}
        onChange={(e) => setAgree(!agree)}
      />
      <Button disabled={loading} type="submit" className="button">
        <span>Submit Now</span>
      </Button>
      {error ?? <p className="error">{error}</p>}
      <Info className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </Info>
    </Form>
  );
};

export default SignUpForm;
