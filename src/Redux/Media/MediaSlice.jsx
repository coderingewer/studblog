import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const uploadImageAsync = createAsyncThunk(
  "images/uploadImageAsync/",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}images/upload`,
      data
    );
    return res.data;
  }
);

export const updateImageAsync = createAsyncThunk(
  "images/updateImageAsync/",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}medias/update/` + data.id,
      data.data
    );
    return res.data;
  }
);
const MediaSlice = createSlice({
  name: "medias",
  initialState: {
  },
  reducers: {},
  extraReducers: {
    [uploadImageAsync.pending]: (state, action) => {
      state.isLoading = true;
    },

    [uploadImageAsync.fulfilled]: (state, action) => {
     
    },
    [uploadImageAsync.rejected]: (state, action) => {
      
    },
    [updateImageAsync.pending]: (state, action) => {
    },
    [updateImageAsync.fulfilled]: (state, action) => {
   
    },
    [updateImageAsync.rejected]: (state, action) => {
     
    },
  },
});

export default MediaSlice.reducer;
