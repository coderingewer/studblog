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
import { useSelector } from 'react-redux';
import Deneb from './Routes/Deneb';
import GetPostsByCategory from './Post/GetPostsByCategory';
import Altair from './Routes/Altair';

function App() {
  const success = useSelector(state => state.users.user);
  const logined = localStorage.getItem('logined');
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/deneb"/>} />
          <Route path='/deneb/*' element={<Deneb/>} />
          <Route path='/altair/*' element={<Altair/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default React.memo(App) ;
