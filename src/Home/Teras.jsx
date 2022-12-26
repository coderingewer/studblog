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
import Home from "./Home";
import Leftpage from "./Leftpage";

function Teras() {
  return (
    <>
      <Leftpage />
      <Navbar />
      <Bottombar />
      <Routes>
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/user/updateavatar" element={<UpdateUseAvatar />} />
        <Route path="/teras/login" element={<Register />} />
        <Route path="/loginrequest" element={<UnLoginPage />} />
        <Route path="/createpost/" element={<PostEditor />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </>
  );
}

export default Teras;
