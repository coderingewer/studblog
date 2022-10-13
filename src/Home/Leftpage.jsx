import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useParams } from 'react-router'
import logo from "../logo.png";
import tech from "../icons/categories-icons-tech.png";
import { MdOutlineCreate } from "react-icons/md";
import { CgDetailsMore, CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import {GiMaterialsScience} from "react-icons/gi"
import {GrTechnology} from "react-icons/gr"
import {BsPalette} from "react-icons/bs"
import {IoSchoolOutline} from "react-icons/io5"
import {TbMapSearch} from "react-icons/tb"

function Leftpage() {
  const [active, setActive] = useState("")
  const category = useSelector(state => state.posts.currentcategory)
  const ChoiceCategory = (id) => {
    setActive(id)
  };
  console.log(category)
  return (
    <div id="leftpage">
      <a href="/" className="link">
        <div id="studblog-side-logo">
          <img src={logo} alt="StudBlog" />
        </div>
      </a>
      <div id="categories">
        <div className="category-area">
          <div id={category === "teknoloji" ? "tech" : "disabled"} className="category">
            <p>Teknoloji</p>
          </div>
          <a href="/posts/teknoloji">

          <div
            className="category-icon icon"
            >
            <GrTechnology />
          </div>
            </a>
        </div>
        <div className="category-area">
          <div id={category === "bilim" ? "sci" : "disabled"} className="category demo">
            <p>Bilim</p>
          </div>
          <a href="/posts/bilim">

          <div
            className="category-icon icon"
            >
            <GiMaterialsScience />
          </div>
            </a>
        </div>
        <div className="category-area">
          <div id={category === "sanat" ? "art" : "disabled"} className="category demo">
            <p>Sanat</p>
          </div>
          <a href="/posts/sanat">

          <div
            className="category-icon icon"
            >
            <BsPalette/>
          </div>
            </a>
        </div>
        <div className="category-area">
          <div id={category === "eğitim" ? "edu" : "disabled"} className="category demo">
            <p>Eğitim</p>
          </div>
          <a href="/posts/eğitim">

          <div
            className="category-icon icon"
            >
            <IoSchoolOutline/>
          </div>
            </a>
        </div>
        <div className="category-area">
          <div id={category === "tanıtım" ? "gui" : "disabled"} className="category demo">
            <p>Tanıtım</p>
          </div>
          <a href="/posts/tanıtım">
          <div
            className="category-icon icon"
          >
            <TbMapSearch/>
          </div>
          </a>
        </div>
        <div className="category-area">
          <div id={category === "diğer" ? "other" : "disabled"} className="category demo">
            <p>Diğer</p>
          </div>
          <a href="/posts/diğer" >
            <div
              className="category-icon icon"
            >
              <CgDetailsMore/>
            </div>
          </a>
        </div>
      </div>
      <div className="user-buttons">
        <Link className="link" to="/createpost">
          <div className=" icon user-sidebar-icon">
            <MdOutlineCreate />
          </div>
        </Link>
        <Link className="link" to="/profile/1">
          <div className="icon edit-sidebar-icon">
            <CgProfile />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default React.memo(Leftpage);
