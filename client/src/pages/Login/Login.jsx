import React, { useState, useEffect } from "react";
import Input from "../../Components/Input/Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import "./Login.css";
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from "../../Reducers/userReducer";
import { Post } from "../../helper";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [animationFlag, setAnimationFlag] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const login = async (e) => {
    e.preventDefault();
    // console.log("first")
    try {
      const data = {
        email: email,
        password: password,
      };
      const result = await Post("login", data);
      if (result) {
        setAnimationFlag(true);
        dispatch(setUser(result));
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

  useEffect(() => {
    let user = localStorage.getItem("user");
    if(user){
      navigate("/");
    }
  }, []);

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
