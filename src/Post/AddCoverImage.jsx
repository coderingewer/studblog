import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import UpdateImage from "../Media/UpdateImage"
import "./Addpost.css"

function AddCoverImage() {
  const uploaded = useSelector(state=>state.medias.uplaoded)
  console.log(uploaded)
  document.title = "Studblog | Gönderi kapak Fotoğrafı"
  return (
    <div className='add-coverimg' >
        <p>Gönderi Kapak Resmi</p>
        <UpdateImage/>
       { uploaded === true  && <Navigate to="/" replace={true}/>}
    </div>
  )
}

export default AddCoverImage