import axios from "axios";
import { useFormik } from "formik";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./Addpost.css";
import validationSchema from "./Validations"
import { useDispatch, useSelector } from "react-redux";
import { addPostsAsync } from "../Redux/Posts/PostSlice";
import { Navigate } from "react-router";
import BeBlogger from "./BeBlogger.jsx"
import UnLoginPage from "../User/UnLoginPage";

function PostEditor() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user)
  const imageId = useSelector(state => state.posts.imageId)
  const posted = useSelector(state => state.posts.posted)
  const logined = localStorage.getItem("logined");

  const valid = user.isValid ? user.isValid : Boolean(localStorage.getItem("user-valid"))
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        title: "",
        content: "",
        category: "",
      },
      validationSchema,
      onSubmit: async () => {
        await dispatch(
          addPostsAsync({
            title: values.title,
            content: editorRef.current.getContent(),
            category: values.category,
          })
        );
      }
    });
  const uploadFile = async (cb, file) => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}images/upload`,
      formData
    );
    cb(res.data.url);
  };
  const editorRef = useRef(null);
  const imageHandler = (cb, a, b) => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      await uploadFile(cb, file);
      console.warn("You could only upload images.");
    };
  };
  const categories = [
    "",
    "Teknoloji",
    "Bilim",
    "Sanat",
    "Eğitim",
    "Tanıtım",
    "Diğer",
  ];
  document.title = "Gönderi oluştur"
  return (
    <>
      {valid === true ?
        <div id="addpost">
          <form id="editor-form" onSubmit={handleSubmit}>
            <label>Başlık  <div className="error-message" > {errors.title && touched.title && (errors.title)}</div></label>
            <input
              className="form-input"
              type="text"
              placeholder="Başlık"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Kategori <div className="error-message" > {errors.category && touched.category && (errors.category)}</div></label>
            <select
              type="text"
              className="form-input"
              placeholder="Kategori"
              name="category"
              value={values.category}
              onChange={handleChange} title
              onBlur={handleBlur}
            >
              {categories.map((category, i) => (
                <option key={i} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <label>İçerik*</label>
            <Editor
              className="tiny-editor"
              apiKey="idcaorhm2cm2ogoz2v6gu7gk08g8ubc75x5i7wto7zqyegpv"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={values.content}
              init={{
                height: 500,
                width: "100%",
                menubar: true,
                plugins: "image media  code link",
                toolbar:
                  "  undo redo |bold italic backcolor forecolor strikethrough" +
                  "styleselect superscript +subscript underline| formatselect " +
                  " h1 h2 h3 h4 h5 h6| code image media link | formatselect | " +
                  " alignleft aligncenter " +
                  "alignright alignjustify  bullist numlist outdSonrakient indent |",
                file_picker_types: "image",
                file_picker_callback: imageHandler,
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
            <button disabled={errors && values.title === "" && values.category === "" ? true : false} id="editor-form-btn" type="submit">
              Sonraki
            </button>
          </form>
        </div>
        : <>
          {!logined ? <UnLoginPage /> : <BeBlogger />}
        </>
      }
      {posted && <Navigate to={"/coverimage/" + imageId} replace ={true} />}
    </>
  );
}

export default PostEditor;
