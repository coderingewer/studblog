import React, { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import NoPhotoPostCard from '../Post/NoPhotoPostCard'
import "./Explore.css"

function FilteredPost() {
  const filtered = useSelector(state => state.posts.filtered)
  const items = useSelector(state => state.posts.items)
  const searching = useSelector(state => state.posts.searching)
  const posts = searching ? filtered : items

  const CloseCard = (id) => {
    document.getElementById(id).style.display = "none";
  };
  return (
    <div id='filtered-posts-list' className='filtered-posts' >
      <div
        onClick={() => CloseCard("filtered-posts-list")}
        className="icon filtered-posts-close "
      >
        <RiCloseLine />
      </div>
      {posts.map((post) => (
        <div key={post.ID}>
          <NoPhotoPostCard userpp={post.sender.user_image.url} content={post.title} />
        </div>
      ))}
    </div>
  )
}

export default FilteredPost