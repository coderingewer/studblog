import React from 'react'
import "./AdminBar.css"
import logo from "../../logo.png"

function AdminSideBar() {
  return (
    <div
    className='admin-side-bar'
>
    <div className='admin-logo-app'>
<img src={logo} alt="StudBlog" />
    </div>

</div>
  )
}

export default AdminSideBar