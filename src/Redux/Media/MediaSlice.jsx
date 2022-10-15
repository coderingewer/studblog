import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";


export const uploadImageAsync = createAsyncThunk(
  "medias/uploadImageAsync/",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}images/upload`,
      data
      );
    return res.data;
  }
  );
  
  export const updateImageAsync = createAsyncThunk(
    "medias/updateImageAsync/",
    async (data) => {
      const res = await axios.post(
        `${process.env.REACT_APP_REQUEST_DOMAIN}images/update/` + data.id,
      data.data
      );
      return res.data;
    }
    );
    const MediaSlice = createSlice({
      name: "medias",
      initialState: {
        uplaoded:false,
      },
      reducers: {},
      extraReducers: {
    [uploadImageAsync.pending]: (state, action) => {
    },
    
    [uploadImageAsync.fulfilled]: (state, action) => {
      
    },
    [uploadImageAsync.rejected]: (state, action) => {
      
    },
    [updateImageAsync.pending]: (state, action) => {
    },
    [updateImageAsync.fulfilled]: (state, action) => {
      state.uplaoded = true;
      console.log(action.payload)
      setTimeout(() => {
       state.uplaoded = false;
        console.log("hi")
      }, 1000);
    },
    [updateImageAsync.rejected]: (state, action) => {
      
    },
  },
});

export default MediaSlice.reducer;
