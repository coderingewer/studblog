import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAsync = createAsyncThunk(
  "users/loginAsnyc/",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}users/login`,
      data,
    );
    return res.data;
  }
);

export const registerAsync = createAsyncThunk(
  "users/register/",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}users/new`,
      data
    );
    return res.data;
  }
);

export const getUserByIdAsync = createAsyncThunk(
  "users/getUserById",
  async (id) => {
    const res = await axios.get(
      `${process.env.REACT_APP_REQUEST_DOMAIN}users/getById/` + id
    );
    return res.data;
  }
);

export const getAllUsersAsync = createAsyncThunk(
  "users/getAllUsers",
  async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_REQUEST_DOMAIN}users/getAll`
    );
    return res.data;
  }
);

export const updateUserAsyc = createAsyncThunk(
  "users/update/",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}users/update/` + data.id,
      data.data,
      {
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
        },
      }
    );
    console.logo(data)
    return res.data;
  }
);
export const updatePasswordAsync = createAsyncThunk(
  "users/update/password",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}users/updatePassword/` + data.id,
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

export const editUserAvatarAsync = createAsyncThunk(
  "users/editUserAvatarAsync/",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}users/updateuserimage`,
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


export const userSlice = createSlice({
  name: "users",
  initialState: {
    success: false,
    signout: false,
    registered: false,
    loading: false,
    user: {},
    message: "",
    userId:0,
    logineduserId: localStorage.getItem("loggineduserId"),
  },
  reducers: {
    signOut: (state) => {
      state.user = {}
      state.success = false;
      state.signout = true;
      localStorage.removeItem("token");
      localStorage.removeItem("logined");
      localStorage.removeItem("user-valid");
      localStorage.removeItem("loggineduserId");
    },
  },
  extraReducers: {
    [loginAsync.pending]: (state, action) => {
      state.loading = true;
    },
    [loginAsync.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("logined", true);
      localStorage.setItem("loggineduserId", action.payload.ID);
      state.userId = action.payload.ID
      state.success = true;
      localStorage.setItem("user-valid", action.payload.isValid)
      state.loading = false;
    },
    [loginAsync.rejected]: (state, action) => {
      state.message = "Şifre veya E posta hatalı"
      state.loading = false;
    },

    [getUserByIdAsync.fulfilled]: (state, action) => {
      state.user = {};
      state.user = action.payload;
    },

    [registerAsync.fulfilled]: (state, action) => {
      state.registered = true;
      state.loading = false;
      console.log(action)
    },
    [registerAsync.pending]: (state, action) => {
      state.loading = true;
    },
    [registerAsync.rejected]: (state, action) => {
      state.message = "Kayıt başarısız bilgilerinizi kontrol ederek tekrar deneyin"
      state.loading = false;
    }

  },
});
export const { signOut } = userSlice.actions;
export default userSlice.reducer;
