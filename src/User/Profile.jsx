import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import NoPhotoPostCard from "../Post/NoPhotoPostCard";
import { getUserPost } from "../Redux/Posts/PostSlice";
import { getUserByIdAsync, signOut } from "../Redux/Users/UserSlice";
import "./Profile.css";
import Bottombar from "../bars/Bottombar";
import ListCard from "../Lists/ListCard";
import { MdOutlineCreate } from "react-icons/md"

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const userPosts = useSelector((state) => state.posts.userposts);
  const { userId } = useParams()
  const logined = localStorage.getItem("logined");
  const [active, setActive] = useState("")
  const swictchList = ((id) => {
    setActive(id)
  });
  const siggnOut = async () => {
    dispatch(signOut())
  }

  useEffect(() => {
    document.title = user.name
    dispatch(getUserByIdAsync(userId));
    dispatch(getUserPost(userId));
  }, [dispatch]);
  return (
    <>
      <div className="profile">
        <div id="profile-posts">
          <div className="profile-nav">
            <h1 onClick={() => swictchList("user-posts-list")} >Gönderiler</h1>
            <h1 onClick={() => swictchList("user-favorites-lists")} >Listeler</h1>
          </div>
          <div id={active === "user-favorites-lists" ? "disabled" : ""} >
            {userPosts.map((post) => (
              <div key={post.ID}>
                <NoPhotoPostCard content={post.title} userpp={user.userImageUrl} />
              </div>
            ))}
          </div>
          <div id={active === "user-favorites-lists" ? "" : "disabled"} >
            <ListCard />
          </div>
        </div>
        <div id="profile-page">
          <div id="profile-details">
            <button onClick={() => siggnOut()} className="signout-btn" >Çıkış Yap</button>
            <Link className="edit-profile-link" to={"/edituser/"+user.ID} >düzenle</Link>
            <img src={user.userImageUrl} alt="" />
            <h1 className="name">{user.name}</h1>
            <h1 className="username">@{user.username}</h1>
            <div className="profile-info">
              <h1>{user.user_role}</h1>
              <h1>{userPosts.length} Gönderi</h1>
            </div>
          </div>
        </div>
        <div className="profilepage-btns">
          <Link className="link" to="/createpost">
            <div className="icon" id="edit-icon-prf">
              <MdOutlineCreate />
            </div>
          </Link>
        </div>
      </div>
      <Bottombar />
      {!logined ? <Navigate to="/loginrequest" /> : ""}
    </>
  );
}

export default Profile;
