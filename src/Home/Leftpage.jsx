import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Sidebar.css";
import logo from "../logo.png";
import editicon from "../icons/Edit.svg";
import Usericon from "../icons/User.svg";
import tech from "../icons/categories-icons-tech.png";
import { useDispatch } from "react-redux";
import { GetAllPosts } from "../Redux/Posts/PostSlice";

function Leftpage() {
  const [active, setActive] = useState("")
  const ChoiceCategory = (id) => {
    setActive(id)
  };
  return (
    <div id="leftpage">
      <Link to="/" className="link">
        <div id="studblog-side-logo">
          <img src={logo} alt="StudBlog" />
        </div>
      </Link>
      <div id="categories">
        <div className="category-area">
          <div id={active === "tech"? "tech":"disabled" } className="category">
            <p>Teknoloji</p>
          </div>
          <div
            onClick={() => ChoiceCategory("tech")}
            className="category-icon icon"
          >
            <img src={tech} alt="" />
          </div>
        </div>
        <div className="category-area">
          <div id={active === "sci"? "sci":"disabled"} className="category demo">
            <p>Teknoloji</p>
          </div>
          <div
            onClick={() => ChoiceCategory("sci")}
            className="category-icon icon"
          >
            <img src={tech} alt="" />
          </div>
        </div>
      </div>
      <div className="user-buttons">
        <Link className="link" to="/createpost">
          <div className=" icon user-sidebar-icon">
            <img src={editicon} alt="" />
          </div>
        </Link>
        <Link className="link" to="/profile/1">
          <div className="icon edit-sidebar-icon">
            <img src={Usericon} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default React.memo(Leftpage);
