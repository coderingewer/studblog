import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import {
  loginAsync,
  registerAsync,
  userStates,
} from "../Redux/Users/UserSlice";
import "./UserInfoForm.css";

function Register() {
  const success = useSelector((state) => state.users.registered);
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        username: "",
        email: "",
        password: "",
      },
      onSubmit: async (values, { resetForm }) => {
        await dispatch(registerAsync(values));
        console.log("Success  already registered");
      },
    });
  return (
    <div className="formdiv">
      <div id="user-info-form">
        <h1>Kayıt Ol</h1>
        <form id="login-form" className="form" onSubmit={handleSubmit}>
          <input
            className="form-items"
            type="text"
            name="name"
            placeholder="İsim"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <input
            className="form-items"
            type="text"
            name="username"
            placeholder="Kullanıcı Adı"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <input
            className="form-items"
            type="email"
            name="email"
            placeholder="E posta adresi"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <input
            className="form-items"
            type="password"
            name="password"
            placeholder="Şifre"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button className="form-items" type="submit">
            Kayıt Ol
          </button>
        </form>
        {success && <Navigate to="/login" />}
      </div>
    </div>
  );
}

export default Register;
