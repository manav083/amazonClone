import React, { useState, useEffect } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import "./Register.css";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import { Post } from "../../helper.js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from "../../Reducers/userReducer";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [animationFlag, setAnimationFlag] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  

  // console.log(helper)

  const register = async (e) => {
    e.preventDefault();
    // console.log("first")
    try {
      const data = {
        email: email,
        password: password,
        name: name,
        phoneNumber: mobile,
        user_type: "buyer",
      };
      const result = Post("register", data);
      if (result) {
        dispatch(setUser(result));
        setEmail("");
        setPassword("");
        setAnimationFlag(true);
        setName("");
        setMobile("");
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
          Create Account
        </h1>
        <form onSubmit={register}>
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

export default Register;
