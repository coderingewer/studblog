import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../Redux/Users/UserSlice";
import "./Profile.css"

function Profilesrop() {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const siggnOut = async () => {
    dispatch(signOut())
  }
  return (
    <div id="profile-more-card" className="profile-drop">
      <button onClick={() => siggnOut()} className="signout-btn">
        Çıkış Yap
      </button>
      <Link className="edit-profile-link" to={"/edituser/" + user.ID}>
        düzenle
      </Link>
    </div>
  );
}

export default Profilesrop;
