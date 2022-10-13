import React from "react";
import "./BottomBar.css";
import editicon from "../icons/Edit.svg";
import Homepage from "../icons/Homepage.svg";
import Usericon from "../icons/User.svg";
import { Link } from "react-router-dom";
import {CgProfile, CgSearchLoading} from "react-icons/cg"
import { AiOutlineHome } from "react-icons/ai";

function Bottombar() {
  return (
    <div id="bottombar">
      <Link className="link" to="/explore">
        <div className="icon" id="explore-icon">
          <CgSearchLoading />
        </div>
      </Link>
    <Link className="link" to="/">
      <div className="icon" id="home-icon">
        <AiOutlineHome />
      </div>
      </Link>
      <Link className="link" to="/profile/1">
      <div className="icon" id="user-icon">
        <CgProfile />
      </div>
      </Link>
    </div>
  );
}

export default Bottombar;
