import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import axios from "axios";
import "./Login.css";

const ROOT_URL = import.meta.env.VITE_API_URL_LOCAL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [animationFlag, setAnimationFlag] = useState(false);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    // console.log("first")
    try {
      const data = {
        email: email,
        password: password,
      };
      const result = await axios.post(`${ROOT_URL}/login`, data);
      if (result.status == 200) {
        setAnimationFlag(true);
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
      // console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

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
        <form onSubmit={login}>
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
      <div
        className={
          !animationFlag ? "sideImg animationDiv" : "sideImg animationDiv2"
        }
      >
        <img src="https://img.fortawesome.com/1ce05b4b/ad-pro-visuals.svg" />
      </div>
    </div>
  );
};

export default Login;
