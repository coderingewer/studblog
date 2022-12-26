import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GetByCategory } from "../Redux/Posts/PostSlice";
import PostCard from "./PostCard";

function GetPostsByCategory() {
  const posts = useSelector((state) => state.posts.category);
  const { category } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Studblog | " + category;
    dispatch(GetByCategory(category))
  }, [dispatch]);
  return (
    <>
      <div id="home-page">
          {posts.map((post) => (
            <div key={post.ID}>
              <PostCard
                title={post.title}
                authorpp={post.sender.image.url}
                imgurl={post.image.url}
                authorname={post.sender.name}
                postId={post.ID}
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default GetPostsByCategory;
