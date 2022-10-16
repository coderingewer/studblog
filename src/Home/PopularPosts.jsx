import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoPhotoPostCard from "../Post/NoPhotoPostCard";
import "./Explore.css";
import { RiSearch2Line } from "react-icons/ri";
import { GetPopularPosts, searchPosts } from "../Redux/Posts/PostSlice";
import FilteredPost from "../Explore/FilteredPost";

function PopularPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.populars);
  useEffect(()=>{
    dispatch (GetPopularPosts())
  },[dispatch])
  const [searchText, setSearchText] = React.useState("")
  const hadleSearch = (text)=>{
    dispatch(searchPosts(searchText))
    setSearchText(text)
    document.getElementById("filtered-posts-list").style.display = "block"
  }
  return (
    <div id="popular">
      <div className="searchpost">
          <input type="text" onChange={(e)=>hadleSearch(e.target.value)} placeholder="Ara bulamazsan canımız sağ olsun." />
          <button>
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
            <NoPhotoPostCard
              userpp={post.senderImageUrl}
              content={post.title}
              postId ={post.ID}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(PopularPosts);
