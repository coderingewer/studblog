import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NoPhotoPostCard from '../Post/NoPhotoPostCard'

function FilteredPost() {
    const filtered = useSelector(state=> state.posts.filtered)
    const items = useSelector(state=> state.posts.items)
    const searching = useSelector(state=> state.posts.searching)
    const posts = searching ? filtered : items
  return (
    <div id='filtered-posts-list' className='filtered-posts' >
        {posts.map((post)=>(
          <div key={post.ID}>
            <NoPhotoPostCard userpp={post.sender.user_image.url} content={post.title}  />
          </div>  
        ))}
    </div>
  )
}

export default FilteredPost