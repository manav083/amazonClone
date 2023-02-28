import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <>
      <div className="inputContainer">
        <div className="label">
          <label id={props.id} name={props.id}>
            {props.label}
          </label>
        </div>
        <input
          type={props.type}
          for={props.id}
          value={props.value}
          onChange={props.action}
          required={props.require === "true" ? true : false}
        />
      </div>
      <br />
    </>
  );
};

export default Input;
