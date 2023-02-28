import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   console.log(email);
  return (
    <div className="login">
      <div className="loginContainer">
        <h1
          style={{
            margin: 0,
            padding: "0px 12px",
            fontWeight: 500,
            fontSize: 26,
          }}
        >
          Sign in
        </h1>
        <form>
          <Input
            type="email"
            require="true"
            placeholder="Email"
            id="email"
            action={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            type="password"
            require="true"
            placeholder="Password"
            id="password"
            action={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button buttonText="Sign in" />
        </form>
        <div className="bottomLine">
          <p>New to Ecommerce?</p>
        </div>
        <div className="bottomLink">
          <Link to="/register">
            <p>Create Your Ecommerce Account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
