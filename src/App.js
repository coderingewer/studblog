import './App.css';
import Navbar from './bars/Navbar';
import Home from './Home/Home';
import Post from './Post/Post';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from './User/Profile';
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

function App() {
  const success = useSelector(state => state.users.user);
  const logined = localStorage.getItem('logined');
  return (
    <header className="App">
      <Router>
      <Navbar/>
      <Leftpage/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile/:userId' element={ <Profile />} />
          <Route path='/user/:userId' element={ <User />} />
          <Route path='/loginrequest' element={ <UnLoginPage />} />
          <Route path='/lists' element={<ListCard />} />
          <Route path='/createpost/' element={<PostEditor />} />
          <Route path='/post/:postId' element={<Post />} />
          <Route path='/login/' element={<Login />} />
          <Route path='/register/' element={<Register/>} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/uploadimage' element={<UploadImage />} />
          <Route path='/updateimage/:imageId' element={<UpdateImage />} />
          <Route path='/coverimage/:imageId' element={<AddCoverImage />} />
          <Route path='/posts/:category' element={<GetPostsByCategory />} />
          <Route path='/be-blogger' element={<BeBlogger />} />
          <Route path='/edituser/:userId' element={<EditUser />} />
          <Route path='/updatepost/:postId' element={<UpdatePost />} />
        </Routes>
      </Router>
    </header>
  );
}

export default React.memo(App) ;
