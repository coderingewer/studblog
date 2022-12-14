import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import Navbar from "../bars/Navbar";
import Leftpage from "../Home/Leftpage";
import { loginAsync, userStates } from "../Redux/Users/UserSlice";
import "./UserInfoForm.css";

function Login() {
  const success = localStorage.getItem("logined");
  const message = useSelector((state) => state.users.message);
  const userId = useSelector((state) => state.users.userId);
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values, { resetForm }) => {
        await dispatch(
          loginAsync({
            email: values.email,
            password: values.password,
          })
        );
        resetForm();
      },
    });
  return (
    <>
      <Leftpage />
      <Navbar />
      <div className="formdiv">
        <div id="user-info-form">
          <p className="error-message">{message}</p>
          <h1>Giriş Yap</h1>
          <form id="login-form" className="form" onSubmit={handleSubmit}>
            <label>E Posta</label>
            <input
              className="form-items"
              type="email"
              name="email"
              placeholder="E posta adresi"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Şifre</label>
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
              Giriş Yap
            </button>
          </form>
          {success && <Navigate to={"/profile/" + userId} replace={true} />}
        </div>
      </div>
    </>
  );
}

export default Login;
