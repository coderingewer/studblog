import { configureStore } from "@reduxjs/toolkit";
import  MediaSlice  from "./Media/MediaSlice";
import PostSlice from "./Posts/PostSlice";
import UserSlice from "./Users/UserSlice";

export const store = configureStore({
  reducer: {
    users: UserSlice,
    posts: PostSlice,
    medias: MediaSlice,
  },
});
