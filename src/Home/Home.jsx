import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bottombar from "../bars/Bottombar";
import PostCard from "../Post/PostCard";
import { GetAllPosts } from "../Redux/Posts/PostSlice";
import "./HomePage.css";
import PopularPosts from "./PopularPosts";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);

  useEffect(() => {
    dispatch(GetAllPosts());
  }, [dispatch]);
  document.title = "Studblog | Ana Sayfa"
  return (
    <>
      <div id="home-page">
        <div id="posts">
          {posts.map((post) => (
            <div key={post.ID}>
              <PostCard
                title={post.title}
                authorpp={post.sender.user_image.url}
                imgurl={post.image.url}
                authorname={post.sender.name}
                postId={post.ID}
              />
            </div>
          ))}
        </div>
        <PopularPosts />
      </div>
      <Bottombar />
    </>
  );
}

export default React.memo(Home);
