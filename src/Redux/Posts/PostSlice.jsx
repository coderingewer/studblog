import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router";
import UpdatePost from "../../Post/UpdatePost";

export const GetAllPosts = createAsyncThunk("posts/getAll", async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_REQUEST_DOMAIN}posts/getAll`
  );
  return res.data;
});

export const GetPopularPosts = createAsyncThunk(
  "posts/getPopulars",
  async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_REQUEST_DOMAIN}posts/getPopulars`
    );
    return res.data;
  }
);

export const GetByCategory = createAsyncThunk(
  "posts/getByCategory",
  async (category) => {
    const res = await axios.get(
      `${process.env.REACT_APP_REQUEST_DOMAIN}posts/getByCategory/` + category
    );
    return res.data;
  }
);

export const GetPostByIdAsync = createAsyncThunk(
  "posts/GetPostByIdAsync",
  async (id) => {
    const res = await axios.get(
      `${process.env.REACT_APP_REQUEST_DOMAIN}posts/getById/` + id
    );
    console.log(id);
    return res.data;
  }
);

export const getUserPost = createAsyncThunk("posts/getUserPost", async (id) => {
  const res = await axios.get(
    `${process.env.REACT_APP_REQUEST_DOMAIN}posts/getByUserId/` + id
  );
  return res.data;
});

export const addPostsAsync = createAsyncThunk(
  "posts/addPostsAsync",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}posts/new`,
      data,
      {
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(data);
    return res.data;
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}posts/update/` + data.id,
      data,
      {
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(data);
    return res.data;
  }
);

export const updatePostImage = createAsyncThunk(
  "posts/updatePost",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}posts/update/` + data.id,
      data,
      {
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(data);
    return res.data;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id) => {
    const res = await axios.delete(
      `${process.env.REACT_APP_REQUEST_DOMAIN}posts/delete/` + id,
      {
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      }
    );
    return res.data;
  }
);

const PostSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    userposts: [],
    category: [],
    item: {},
    image: {},
    populars: [],
    notfound: false,
    filtered: [],
    posted:false,
    searching: false,
    currentcategory: "",
    imageId:0,
    deleted:false
  },
  reducers: {
    searchPosts: (state, action) => {
      const filtered = state.items.filter((item) => {
        return item["title"]
          .toString()
          .toLowerCase()
          .includes(action.payload.toString().toLowerCase());
      });
      if (filtered.length < 1) {
        state.notfound = true;
        state.filtered = [];
      }
      state.searching = true;
      state.filtered = filtered;
    },
  },
  extraReducers: {
    [GetAllPosts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.posted = false;
      state.deleted = false
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.posted = false;
      state.userposts = action.payload;
      state.deleted = false
    },
    [GetPostByIdAsync.fulfilled]: (state, action) => {
      console.log("paylod: " + action.payload);
      state.item = [];
      state.deleted = false
      state.item = action.payload;
    },
    [GetPopularPosts.fulfilled]: (state, action) => {
      state.populars = action.payload;
    },
    [GetByCategory.fulfilled]: (state, action) => {
      state.category = action.payload
      state.currentcategory = action.meta.arg
    },
    [UpdatePost.fulfilled]: (state, action) => {
    },
    [addPostsAsync.fulfilled]: (state, action) => {
      state.posted = true;
      state.imageId = action.payload.imageId;
    },
    [deletePost.fulfilled]:(state, action)=>{
      state.deleted = true
    }
  },
});

export const { searchPosts } = PostSlice.actions;
export default PostSlice.reducer;
