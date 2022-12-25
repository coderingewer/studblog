import React from "react";
import { Link } from "react-router-dom";
import Bottombar from "../bars/Bottombar";
import Navbar from "../bars/Navbar";
import Leftpage from "../Home/Leftpage";
import "./Profile.css";

function UnLoginPage() {
  return (
    <>
      <div className="noprofile-page">
        <Link className="link login-btn" to="/login">
          Giriş Yap{" "}
        </Link>
        <p>Ya da</p>
        <Link className="link signup-btn" to="/register">
          Kayıt Ol{" "}
        </Link>
      </div>
    </>
  );
}

export default UnLoginPage;
