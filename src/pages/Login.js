import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import Illustration from "../components/Illustration";
import Info from "../components/Info";
import TextInput from "../components/TextInput";
import style from "../style/Login.module.css";
import { useAuth } from "./../context/AuthContext.";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signin } = useAuth();
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(email, password);
      navigation("/");
    } catch (error) {
      setLoading(false);
      setError("Login Fail");
    }
  };

  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration />
        <Form className={`${style.login}`} onSubmit={handleSubmit}>
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            type="password"
            placeholder="Enter password"
            icon="lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button disabled={loading} type="submit" className="button">
            <span>Submit Now</span>
          </Button>
          {error && <p className="error">{error}</p>}
          <Info className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </Info>
        </Form>
      </div>
    </>
  );
};

export default Login;
