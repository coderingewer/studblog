import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoPhotoPostCard from "../Post/NoPhotoPostCard";
import "./Explore.css";
import { RiSearch2Line } from "react-icons/ri";
import { GetPopularPosts } from "../Redux/Posts/PostSlice";

function PopularPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.populars);
  useEffect(()=>{
    dispatch (GetPopularPosts())
  },[dispatch])
  return (
    <div id="popular">
      <div className="searchpost">
        <input type="text" placeholder="Ara bulamazsan canımız sağ olsun." />
        <button onClick={() => console.log("Hello")}>
          <RiSearch2Line />
        </button>
      </div>
      <div className="popular-posts">
        <div className="title">
          <h1>Popüler Gönderiler</h1>
        </div>
        {posts.map((post) => (
          <div key={post.ID}>
            <NoPhotoPostCard
              userpp={post.senderImageUrl}
              content={post.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(PopularPosts);
