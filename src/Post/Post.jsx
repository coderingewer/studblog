import React, { useEffect, useMemo, useState } from "react";
import "./Post.css";
import trashicon from "../icons/trash2.svg";
import { Link, useParams } from "react-router-dom";
import PopularPosts from "../Home/PopularPosts";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, GetPostByIdAsync } from "../Redux/Posts/PostSlice";
import ShareCard from "./ShareCard";
import { AiOutlineEdit, AiOutlineShareAlt } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { FiEye, FiMoreVertical } from "react-icons/fi"

function Post() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.item);
  const { postId } = useParams();
  const [status, setStatus] = useState(false);
  const userId = parseInt(localStorage.getItem("loggineduserId"))
  const OpenCard = (id) => {
    document.getElementById(id).style.display = "block";
    setStatus(true);
  };

  const CloseCard = (id) => {
    document.getElementById(id).style.display = "none";
    setStatus(false);
  };

  const handleDelete = async (id) => {
    await dispatch(deletePost(id))
  }

  useEffect(() => {
    dispatch(GetPostByIdAsync(postId));
  }, [dispatch]);
  document.title = "Studblog | " +  post.title
  console.log(post)
  console.log(userId)
  return (
    <>
      <div>
        <div id="post">
          <div id="postinfo">
            <div id="cardbuttons" className="post-btns">
              <Link className="link" to={"/profile/" + post.senderId}>
                <div id="postpp">
                  <img src={post.senderImageUrl} alt="" />
                  <h1>{post.senderName}</h1>
                </div>
              </Link>
              <div id={"post-buttons" + post.ID} className="post-buttons">
                <div
                  onClick={() => CloseCard("post-buttons" + post.ID)}
                  className="icon posts-more-close-icon "
                >
                  <RiCloseLine />
                </div>
                {
                  userId === post.senderId &&
                  <div>
                    <div onClick={() => handleDelete(post.ID)} className="icon trash-icon ">
                      <img src={trashicon} alt="" />
                    </div>
                    <Link to={"/updatepost/" + post.ID}>
                      <div className="icon edit-icon ">
                        <AiOutlineEdit />
                      </div>
                    </Link>
                  </div>
                }
                <div
                  onClick={
                    !status
                      ? () => OpenCard("share-card-inmore" + post.ID)
                      : () => CloseCard("share-card-inmore" + post.ID)
                  }
                  id="share-icon"
                  className="icon"
                >
                  <AiOutlineShareAlt />
                </div>
                <div
                  className="more-card-item-card"
                  id={"share-card-inmore" + post.ID}
                >
                  <div
                    className="close-btn"
                    onClick={() => CloseCard("share-card-inmore" + post.ID)}
                  >
                    <RiCloseLine />
                  </div>
                  <ShareCard
                    url={"https://studblog-demo-2.netlify.app/post/" + post.ID}
                    postId={post.ID}
                  />
                </div>
              </div>
              <div id="postseen">
                <FiEye />
                <h1>{post.views}</h1>
              </div>
              <div
                onClick={() => OpenCard("post-buttons" + post.ID)}
                className="postcardmore icon"
                id="post-more"
              >
                <FiMoreVertical />
              </div>
            </div>
          </div>
          <div className="post-body" >
            <div id="post-img">
              <img src={post.image} />
            </div>
            <div className="post-title" >
              <p>{post.title}</p>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              id="post-content"
            />
          </div>
        </div>
      </div>
      <PopularPosts />
    </>
  );
}

export default Post;
