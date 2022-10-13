import React, { useEffect } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Bottombar from "../bars/Bottombar";
import NoPhotoPostCard from "../Post/NoPhotoPostCard";
import PostCard from "../Post/PostCard";
import { GetAllPosts, GetPopularPosts, searchPosts } from "../Redux/Posts/PostSlice";
import "./Explore.css";
import FilteredPost from "./FilteredPost";

function Explore() {
  const posts = useSelector((state) => state.posts.populars);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch (GetPopularPosts())
    dispatch (GetAllPosts())
  })

  const [searchText, setSearchText] = React.useState("")
  const hadleSearch = (text)=>{
    dispatch(searchPosts(searchText))
    setSearchText(text)
    document.getElementById("filtered-posts-list").style.display = "block"
  }
  return (
    <>
      <div className="Explore-page">
        <div className="searchpost">
          <input type="text" onChange={(e)=>hadleSearch(e.target.value)} placeholder="Ara bulamazsan canımız sağ olsun." />
          <button onClick={() => console.log("Hello")}>
            <RiSearch2Line />
          </button>
        </div>
        <FilteredPost/>
        <div className="popular-posts">
          <div className="title">
            <h1>Popüler Gönderiler</h1>
          </div>
          {posts.map((post) => (
            <div key={post.ID}>
              <PostCard
                title={post.title}
                authorpp={post.senderImageUrl}
                imgurl={post.image}
                authorname={post.senderName}
                postId={post.ID}
              />
            </div>
          ))}
          <div className="title">
            <h1>Kategoriler</h1>
          </div>
          <div className="explore-categories">
            <h1>Bilim</h1>
            <h1>Teknoloji</h1>
            <h1>Psikoloji</h1>
            <h1>Tanıtım</h1>
            <h1>Tanıtım</h1>
            <h1>Tanıtım</h1>
            <h1>Tanıtım</h1>
            <h1>Tanıtım</h1>
            <h1>Tanıtım</h1>
            <h1>Tanıtım</h1>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
}

export default Explore;
