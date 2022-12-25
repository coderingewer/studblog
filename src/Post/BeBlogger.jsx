import React from "react";
import Navbar from "../bars/Navbar";
import Leftpage from "../Home/Leftpage";
import "./Addpost.css";

function BeBlogger() {
  return (
    <>
      <div className="be-blogger-page">
        <p>Yazar Değil misiniz?</p>
        <a
          className="link"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfatdf6i6n7v5_kWcOtG2_3taDRwqW-8oweU-SX3OQ9X7aNTw/viewform"
        >
          {" "}
          Yazar olun
        </a>
      </div>
    </>
  );
}

export default BeBlogger;
