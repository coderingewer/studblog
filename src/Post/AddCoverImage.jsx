import React from 'react'
import UpdateImage from "../Media/UpdateImage"
import "./Addpost.css"

function AddCoverImage() {
  return (
    <div className='add-coverimg' >
        <p>Gönderi Kapak Resmi</p>
        <UpdateImage/>
    </div>
  )
}

export default AddCoverImage