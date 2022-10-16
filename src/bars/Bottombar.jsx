import React from "react";
import "./BottomBar.css";
import { Link } from "react-router-dom";
import {CgProfile, CgSearchLoading} from "react-icons/cg"
import { AiOutlineHome } from "react-icons/ai";

function Bottombar() {
  const userId = localStorage.getItem("loggineduserId")
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
      <Link className="link" to={"/profile/"+userId}>
      <div className="icon" id="user-icon">
        <CgProfile />
      </div>
      </Link>
    </div>
  );
}

export default Bottombar;
