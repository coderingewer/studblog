import React, { Profiler } from "react";
import { Route, Routes } from "react-router";
import Bottombar from "../bars/Bottombar";
import Navbar from "../bars/Navbar";
import Leftpage from "../Home/Leftpage";
import Addpost from "../Post/Addpost"
import Profile from "../User/Profile"
import EditUser from "../User/EditUser"
import UpdateUserAvatar from "../Media/UpdateUserAvatar"

function Altair() {
  return (
    <>
      <Leftpage />
      <Navbar />
      <Routes>
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/edituser/:userId" element={<EditUser />} />
        <Route path="/addpost" element={<Addpost />} />
        <Route path="/updateimage/:imageId" element={<UpdateUserAvatar />} />
      </Routes>
      <Bottombar />
    </>
  );
}

export default Altair;
