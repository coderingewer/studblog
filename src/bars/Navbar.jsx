import React, { useState } from "react";
import "./Navbar.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import editicon from "../icons/Edit.svg";
import {AiOutlineMenu} from "react-icons/ai"
import Usericon from "../icons/User.svg";
function Navbar() {
  return (
    <div id="navbar">
      <Link to="/" className="link">
        <div id="studblg-logo">
          <img src={logo} alt="StudBlog" />
        </div>
      </Link>
      <Link className="link nav-ico" to="/createpost">
        <div className="icon" id="edit-icon">
          <img src={editicon} alt="" />
        </div>
      </Link>
      <Link className="link nav-ico" to="/profile/1">
        <div className="icon" id="user-icon">
          <img src={Usericon} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
