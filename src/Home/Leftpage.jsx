import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../logo.png";
import { MdOutlineCreate } from "react-icons/md";
import { CgDetailsMore, CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { GiMaterialsScience } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { BsPalette } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { TbMapSearch } from "react-icons/tb";
import { useState } from "react";
import { GetByCategory } from "../Redux/Posts/PostSlice";

function Leftpage() {
  const userId = localStorage.getItem("loggineduserId");
  const [crntCategory, setCrntCategory] = useState()
  const category = crntCategory;
  const dispatch = useDispatch();
  const GetByPosts = async (categoryy) => {
    await dispatch(GetByCategory(categoryy));
    setCrntCategory(categoryy)
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
          <div
            id={category === "teknoloji" ? "tech" : "disabled"}
            className="category"
          >
            <p>Teknoloji</p>
          </div>
          <Link onClick={()=>GetByPosts("teknoloji")} to="/deneb/posts/teknoloji" className="link">
            <div className="category-icon icon">
              <GrTechnology />
            </div>
          </Link>
        </div>
        <div className="category-area">
          <div
            id={category === "bilim" ? "sci" : "disabled"}
            className="category demo"
          >
            <p>Bilim</p>
          </div>
          <Link onClick={()=>GetByPosts("bilim")} to="/deneb/posts/bilim" className="link">
            <div className="category-icon icon">
              <GiMaterialsScience />
            </div>
          </Link>
        </div>
        <div className="category-area">
          <div
            id={category === "sanat" ? "art" : "disabled"}
            className="category demo"
          >
            <p>Sanat</p>
          </div>
          <Link onClick={()=>GetByPosts("sanat")} to="/deneb/posts/sanat" className="link">
            <div className="category-icon icon">
              <BsPalette />
            </div>
          </Link>
        </div>
        <div className="category-area">
          <div
            id={category === "eğitim" ? "edu" : "disabled"}
            className="category demo"
          >
            <p>Eğitim</p>
          </div>
          <Link onClick={()=>GetByPosts("eğitim")} to="/deneb/posts/eğitim" className="link">
            <div className="category-icon icon">
              <IoSchoolOutline />
            </div>
          </Link>
        </div>
        <div className="category-area">
          <div
            id={category === "tanıtım" ? "gui" : "disabled"}
            className="category demo"
          >
            <p>Tanıtım</p>
          </div>
          <Link onClick={()=>GetByPosts("tanıtım")} to="/deneb/posts/tanıtım" className="link">
            <div className="category-icon icon">
              <TbMapSearch />
            </div>
          </Link>
        </div>
        <div className="category-area">
          <div
            id={category === "diğer" ? "other" : "disabled"}
            className="category demo"
          >
            <p>Diğer</p>
          </div>
          <Link onClick={()=>GetByPosts("diğer")} to="/deneb/posts/diğer" className="link">
            <div className="category-icon icon">
              <CgDetailsMore />
            </div>
          </Link>
        </div>
      </div>
      <div className="user-buttons">
        <Link className="link" to="/teras/createpost">
          <div className=" icon user-sidebar-icon">
            <MdOutlineCreate />
          </div>
        </Link>
        <Link className="link" to={"/teras/profile/" + userId}>
          <div className="icon edit-sidebar-icon">
            <CgProfile />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default React.memo(Leftpage);
