import React from 'react'
import "./NoPhotoPostCard.css"

function NoPhotoPostCard(props) {
  return (
    <div className='nopimg-poscard' >
        <div className='no-img-postcard-pp' >
            <img src={props.userpp}/>
        </div>
        <div className="no-img-postcard-content">
        <p>{props.content}</p>
        </div>
    </div>
  )
}

export default NoPhotoPostCard