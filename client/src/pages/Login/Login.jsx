import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   console.log(email);
  return (
    <>
      <div className="loginContainer">
        <h1 style={{ margin: 0, padding: 10, textAlign: "left" }}>Sign in</h1>
        <Input
          type="email"
          label="Email:"
          require="true"
          id="email"
          action={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="password"
          label="Password:"
          require="true"
          id="password"
          action={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
    </>
  );
};

export default Login;
