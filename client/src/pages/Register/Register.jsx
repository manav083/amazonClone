import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import "./Register.css";
import "../Login/Login.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

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
          Create Account
        </h1>
        <form>
          <Input
            type="text"
            require="true"
            placeholder="Name"
            id="name"
            action={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            type="number"
            require="true"
            placeholder="Phone Number"
            id="phonenumber"
            action={(e) => setMobile(e.target.value)}
            value={mobile}
          />
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
          <Button buttonText="Register" />
        </form>
        <div className="bottomLine">
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;