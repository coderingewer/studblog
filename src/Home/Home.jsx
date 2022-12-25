import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Bottombar from "../bars/Bottombar";
import Navbar from "../bars/Navbar";
import PostEditor from "../Post/Addpost";
import PostCard from "../Post/PostCard";
import { resetResult } from "../Redux/Media/MediaSlice";
import { GetAllPosts } from "../Redux/Posts/PostSlice";
import Profile from "../User/Profile";
import UnLoginPage from "../User/UnLoginPage";
import User from "../User/User";
import "./HomePage.css";
import Leftpage from "./Leftpage";
import PopularPosts from "./PopularPosts";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);

  useEffect(() => {
    dispatch(GetAllPosts());
    dispatch(resetResult());
  }, [dispatch]);
  document.title = "Studblog | Teras";
  return (
    <>
      <Leftpage />
      <Navbar />
      <div id="home-page">
        <div id="posts">
          {posts.map((post) => (
            <div key={post.ID}>
              <PostCard
                title={post.title}
                authorpp={post.sender.user_image.url}
                imgurl={post.image.url}
                authorname={post.sender.name}
                authorId={post.sender.ID}
                postId={post.ID}
              />
            </div>
          ))}
        </div>
        <PopularPosts />
      </div>
    </>
  );
}

export default React.memo(Home);
