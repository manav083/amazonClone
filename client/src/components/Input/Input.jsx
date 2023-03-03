import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <>
      <div className="inputContainer">
        <input
        className="loginInput"
          type={props.type}
          for={props.id}
          style={props.style}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.action}
          autoComplete="false"
          required={props.require === "true" ? true : false}
        />
      </div>
      <br />
    </>
  );
};

export default Input;
