import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Navbar from "../bars/Navbar";
import Leftpage from "../Home/Leftpage";
import {
  getUserByIdAsync,
  updatePasswordAsync,
  updateUserAsyc,
} from "../Redux/Users/UserSlice";
import "./EditUser.css";

function Password() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const { userId } = useParams();
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        password: "",
        newPassword: "",
        newPasswordConfirm: "",
      },
      onSubmit: async () => {
        await dispatch(
          updatePasswordAsync({
            id: userId,
            password: values.password,
            newPassword: values.newPassword,
          })
        );
      },
    });

  useEffect(() => {
    dispatch(getUserByIdAsync(userId));
  }, [dispatch]);

  return (
    <>
      <Leftpage />
      <Navbar />
      <div className="edit-user-dizayn">
        <div id="edit-password">
          <p>Şifreyi düzenle</p>
          <form onSubmit={handleSubmit} className="edit-user-dizayn">
            <input
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              placeholder="Eski Şifre"
            />
            <input
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              name="newPassword"
              placeholder="Yeni Şifre"
            />
            <input
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              name="newPasswordConfirm"
              placeholder="Yeni Şifre Tekrarı"
            />
            <button type="submit">Kaydet</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Password;
