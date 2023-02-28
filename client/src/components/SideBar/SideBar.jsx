import React from "react";
import "./SideBar.css";

const SideBar = ({ sideBarStatus, setSideBarStatus }) => {
  return (
    <div
      className={`SideBar ${sideBarStatus ? "" : "close"}`}
      onClick={() => setSideBarStatus()}
    >
      <div className={`SideBar__Drawer`} onClick={(e) => e.stopPropagation()}>
        <div className="SideBar__Drawer__header">
          <h3>SideBar Header</h3>
          <button onClick={() => setSideBarStatus()}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="SideBar__Drawer__items">Item 1</div>
        <div className="SideBar__Drawer__items">Item 2</div>
        <div className="SideBar__Drawer__items">Item 3</div>
        <div className="SideBar__Drawer__items">Item 4</div>
        <div className="SideBar__Drawer__items">Item 5</div>
        <div className="SideBar__Drawer__items">Item 6</div>
        <div className="SideBar__Drawer__items">Item 7</div>
        <div className="SideBar__Drawer__items">Item 8</div>
        <div className="SideBar__Drawer__items">Item 9</div>
      </div>
    </div>
  );
};

export default SideBar;
