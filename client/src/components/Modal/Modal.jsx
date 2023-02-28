import React from "react";
import "./Modal.css";

const Modal = ({ modalStatus, component, closeModal }) => {
  return (
    <div
      className={`Modal ${modalStatus ? "" : "close"}`}
      onClick={() => closeModal()}
    >
      <div className="Modal_Content" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default Modal;
