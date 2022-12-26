import React, { useState } from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";
import ShareCard from "./ShareCard";
import { AiOutlineShareAlt } from "react-icons/ai";

function PostCard(props) {
  const [status, setStatus] = useState(false);

  const OpenCard = (id) => {
    document.getElementById(id).style.display = "block";
    setStatus(true);
  };

  const CloseCard = (id) => {
    document.getElementById(id).style.display = "none";
    setStatus(false);
  };
  return (
    <div id="post-card">
      <div className="card-body">
        <div id="post-title">
          <Link className="link" to={"/deneb/post/" + props.postId}>
            <p>{props.title}</p>
          </Link>
        </div> 
        <div id="postcard-img">
          <img src={props.imgurl} alt="" />
        </div>
      </div>
      <div id="cardbuttons" className="card-btns">
        <Link className="link" to={"/deneb/user/" + props.authorId}>
          <div id="postpp">
            <img src={props.authorpp} alt="" />
            <h1>{props.authorname}</h1>
          </div>
        </Link>
        <div
          onClick={
            !status
              ? () => OpenCard("share-card-inmore" + props.postId)
              : () => CloseCard("share-card-inmore" + props.postId)
          }
          id="share-icon"
          className="icon"
        >
          <AiOutlineShareAlt />
        </div>
      </div>
      <div
        className="more-card-item-card"
        id={"share-card-inmore" + props.postId}
      >
        <div
          className="close-btn"
          onClick={() => CloseCard("share-card-inmore" + props.postId)}
        >
          X
        </div>
        <ShareCard
          url={"https://www.studappblog.com/post/" + props.postId}
          postId={props.postId}
        />
      </div>
    </div>
  );
}

export default PostCard;
