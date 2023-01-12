import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Navbar from "../bars/Navbar";
import Leftpage from "../Home/Leftpage";
import { getUserByIdAsync, updateUserAsyc } from "../Redux/Users/UserSlice";
import "./EditUser.css";
import Password from "./Password";

function EditUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const { userId } = useParams();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: user.name,
        username: user.username,
        email: user.email,
      },
      onSubmit: () => {
        dispatch(
          updateUserAsyc({
            id: userId,
            data: {
              email: values.email,
              username: values.username,
              name: values.name,
            },
          })
        );
      },
    });
  return (
    <>
      <div className="edit-user-dizayn">
        <div id="edit-user">
          <p>Profili düzenle</p>
          <form className="edit-user-dizayn" onSubmit={handleSubmit}>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              type="email"
              placeholder="E-Posta"
            />
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name"
              type="text"
              placeholder="İsim"
            />
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              name="username"
              type="text"
              placeholder="kullanıcı adı"
            />
            <button type="submit">Kaydet</button>
          </form>
        </div>
        <Password />
      </div>
    </>
  );
}

export default EditUser;
