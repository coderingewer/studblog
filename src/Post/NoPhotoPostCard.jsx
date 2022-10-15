import React from 'react'
import "./NoPhotoPostCard.css"
import { Link } from "react-router-dom";


function NoPhotoPostCard(props) {
  return (
    <div className='nopimg-poscard' >
        <div className='no-img-postcard-pp' >
            <img src={props.userpp}/>
        </div>
        <div className="no-img-postcard-content">
        <Link className='link' to = {"/post/"+ props.postId}>  
        <p>{props.content}</p>
        </Link>
        </div>
    </div>
  )
}

export default NoPhotoPostCard