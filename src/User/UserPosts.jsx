import React from "react";
import { useSelector } from "react-redux";
import NoPhotoPostCard from "../Post/NoPhotoPostCard";
import "./Profile.css"

function UserPosts() {
    const imgurl = useSelector((state) => state.users.profilephotolink);
  const userPosts = useSelector((state) => state.posts.userposts);
  return (
    <div>
      {userPosts.map((post) => (
        <div key={post.ID}>
          <NoPhotoPostCard content={post.title} userpp={imgurl} />
        </div>
      ))}
    </div>
  );
}

export default UserPosts;
