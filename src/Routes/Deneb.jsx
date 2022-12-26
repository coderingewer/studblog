import React from "react";
import { Route, Routes } from "react-router";
import Bottombar from "../bars/Bottombar";
import Navbar from "../bars/Navbar";
import UpdateUseAvatar from "../Media/UpdateUserAvatar";
import PostEditor from "../Post/Addpost";
import Post from "../Post/Post";
import Login from "../User/Login";
import Profile from "../User/Profile";
import Register from "../User/Register";
import UnLoginPage from "../User/UnLoginPage";
import User from "../User/User";
import Home from "../Home/Home";
import Leftpage from "../Home/Leftpage";
import Explore from "../Explore/Explore";
import PopularPosts from "../Home/PopularPosts";
import { GetByCategory } from "../Redux/Posts/PostSlice";
import GetPostsByCategory from "../Post/GetPostsByCategory";

function Deneb() {
  return (
    <>
      <Leftpage />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/posts/:category" element={<GetPostsByCategory />} />
      </Routes>
      <PopularPosts/>
      <Bottombar />
    </>
  );
}

export default Deneb;
