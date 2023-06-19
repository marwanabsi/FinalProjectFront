// Sidebar.js
import React from "react";
import { Link } from 'react-router-dom';
import "../App.css";
import { SidebarData } from "./SidebarData";
import { BottomData } from "./BottomData";
import LogoImage from "../image/ritajIcon.png"
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="imageDiv">
        <img src={LogoImage}></img>
      </div>
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li className="field" key={key}>
              <Link  className="a" to={val.link}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="BottomList">
        <div>
          {BottomData.map((val, key) => {
            return (
              <li className="field" key={key}>
                <Link className="a" to={val.link}>
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
