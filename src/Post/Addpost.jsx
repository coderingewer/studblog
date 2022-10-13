import axios from "axios";
import { useFormik } from "formik";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./Addpost.css";
import { useDispatch } from "react-redux";
import { addPostsAsync } from "../Redux/Posts/PostSlice";

function PostEditor() {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        title: "",
        content: "",
        category: "",
      },
      onSubmit: () => {
        dispatch(
          addPostsAsync({
            title: values.title,
            content: editorRef.current.getContent(),
            category: values.category,
          })
        );
      },
    });
  const uploadFile = async (cb, file) => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}images/upload`,
      formData
    );
    cb(res.data.url);
    console.log(res.data.url);
    console.log(formData);
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
    "Bilim",
    "Sanat",
    "Eğitim",
    "Tanıtım",
    "Teknoloji",
    "Diğer",
  ];
  return (
    <div id="addpost">
      <form id="editor-form" onSubmit={handleSubmit}>
        <label>Başlık*</label>
        <input
          className="form-input"
          type="text"
          placeholder="Başlık"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label>Kategori*</label>
        <select
          type="text"
          className="form-input"
          placeholder="Kategori"
          name="category"
          value={values.category}
          onChange={handleChange}
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
        <button id="editor-form-btn" type="submit">
          Sonraki
        </button>
      </form>
    </div>
  );
}

export default PostEditor;
