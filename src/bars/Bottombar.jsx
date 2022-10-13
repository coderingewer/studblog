import React from "react";
import "./BottomBar.css";
import editicon from "../icons/Edit.svg";
import Homepage from "../icons/Homepage.svg";
import Usericon from "../icons/User.svg";
import { Link } from "react-router-dom";

function Bottombar() {
  return (
    <div id="bottombar">
      <Link className="link" to="/explore">
        <div className="icon" id="explore-icon">
          <img src={editicon} alt="" />
        </div>
      </Link>
    <Link className="link" to="/">
      <div className="icon" id="home-icon">
        <img src={Homepage} alt="" />
      </div>
      </Link>
      <Link className="link" to="/profile/1">
      <div className="icon" id="user-icon">
        <img src={Usericon} alt="" />
      </div>
      </Link>
    </div>
  );
}

export default Bottombar;
