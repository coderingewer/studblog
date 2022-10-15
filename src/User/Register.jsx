import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import validationSchema from "./Validation";
import {
  loginAsync,
  registerAsync,
  userStates,
} from "../Redux/Users/UserSlice";
import "./UserInfoForm.css";

function Register() {
  const success = useSelector((state) => state.users.registered);
  const dispatch = useDispatch();
  const message = useSelector((state) => state.users.message);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        username: "",
        email: "",
        password: "",
        passwordConfirm: ""
      },
      validationSchema,
      onSubmit: async (values, { resetForm }) => {
        await dispatch(registerAsync({
          email: values.email,
          username: values.username,
          name: values.name,
          password: values.password
        },
        ));
      },
    });
  return (
    <div className="formdiv">
      <div id="user-info-form">
        <p className="error-message">{message}</p>
        <h1>Kayıt Ol</h1>
        <form id="login-form" className="form" onSubmit={handleSubmit}>
          <label>İsim<div className="error-message" >{errors.name && touched.name && (errors.name)}</div> </label>
          <input
            className="form-items"
            type="text"
            name="name"
            placeholder={errors.name && touched.name ? (
              errors.password
            ) : "İsim"}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label>Kullanıcı Adı<div className="error-message" >{errors.username && touched.username && (errors.username)}</div> </label>
          <input
            className="form-items"
            type="text"
            name="username"
            placeholder="Kullanıcı Adı"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label>E Posta<div className="error-message" >{errors.email && touched.email && (errors.email)}</div> </label>
          <input
            className="form-items"
            type="email"
            name="email"
            placeholder="E Posta"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label>Şifre<div className="error-message" >{errors.password && touched.password && (errors.password)}</div> </label>
          <input
            className="form-items"
            type="password"
            name="password"
            placeholder="Şifre"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label>Şifre Tekrarı <div className="error-message" >{errors.passwordConfirm && touched.passwordConfirm && (errors.passwordConfirm)}</div> </label>
          <input
            className="form-items"
            type="password"
            name="passwordConfirm"
            placeholder="Şifre Tekrarı"
            value={values.passwordConfirm}
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
