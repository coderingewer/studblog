import React from 'react'
import UnLoginPage from './UnLoginPage';
import User from './User';

export default function Profile() {
    const logined = localStorage.getItem("logined");
  return (
    <div className='profile'>
{logined ? <User/> : <UnLoginPage/>}
    </div>
  )
}
