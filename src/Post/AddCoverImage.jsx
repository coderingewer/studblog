import React from 'react'
import UpdateImage from "../Media/UpdateImage"
import "./Addpost.css"

function AddCoverImage() {
  document.title = "Studblog | Gönderi kapak Fotoğrafı"
  return (
    <div className='add-coverimg' >
        <p>Gönderi Kapak Resmi</p>
        <UpdateImage/>
    </div>
  )
}

export default AddCoverImage