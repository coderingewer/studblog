import './App.css';
import Navbar from './bars/Navbar';
import Home from './Home/Home';
import Post from './Post/Post';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from './User/Login';
import PostEditor from './Post/Addpost';
import Leftpage from './Home/Leftpage';
import Register from './User/Register';
import Explore from './Explore/Explore';
import ListCard from './Lists/ListCard';
import React from 'react';
import UnLoginPage from './User/UnLoginPage';
import { useSelector } from 'react-redux';
import UploadImage from './Media/UploadImage';
import GetPostsByCategory from './Post/GetPostsByCategory';
import BeBlogger from './Post/BeBlogger';
import EditUser from './User/EditUser';
import UpdatePost from './Post/UpdatePost';
import AddCoverImage from './Post/AddCoverImage';
import UpdateImage from './Media/UpdateImage';
import User from './User/User';
import UpdateUseAvatar from './Media/UpdateUserAvatar';
import Profile from './User/Profile';
import Adminpanel from './Admin/Adminpanel';
import Teras from './Home/Teras';

function App() {
  const success = useSelector(state => state.users.user);
  const logined = localStorage.getItem('logined');
  return (
    <header className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/teras/*' element={<Teras/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default React.memo(App) ;
