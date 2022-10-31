import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPostsAsync, GetAllPosts } from "../Posts/PostSlice";


export const uploadImageAsync = createAsyncThunk(
  "medias/uploadImageAsync/",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}images/upload`,
      data,
      {
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      }
    );
    return res.data;
  }
);

export const updateImageAsync = createAsyncThunk(
  "medias/updateImageAsync/",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}images/update/` + data.id,
      data.data,
      {
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      }
    );
    return res.data;
  }
);
const MediaSlice = createSlice({
  name: "medias",
  initialState: {
    uplaoded: false,
    loading: false,
    success: false,
  },
  reducers: {
    resetResult : (state, action) =>{
      state.uplaoded = false;
      state.success = false
    }

  },
  extraReducers: {
    [uploadImageAsync.pending]: (state, action) => {
    },

    [uploadImageAsync.fulfilled]: (state, action) => {

    },
    [uploadImageAsync.rejected]: (state, action) => {

    },
    [updateImageAsync.pending]: (state, action) => {
      state.loading = true
    },
    [updateImageAsync.fulfilled]: (state, action) => {
      state.uplaoded = true;
      state.loading = false
      state.success = true
    },
    [updateImageAsync.rejected]: (state, action) => {
      state.loading = false
      state.success = false
    }
  },
});
export const {resetResult} =  MediaSlice.actions
export default MediaSlice.reducer;
