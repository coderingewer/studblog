import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { editUserAvatarAsync } from "../Redux/Users/UserSlice";
import "./Media.css";

function UpdateUseAvatar() {
  const dispact = useDispatch();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const success = useSelector((state) => state.users.success);
  const userId = parseInt(localStorage.getItem("loggineduserId"));
  const loading = useSelector((state) => state.users.loading);

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    await dispact(editUserAvatarAsync(formData));
  };
  return (
    <>
      <div className="media-form">
        <div className="media-form-card">
          <div className="file-name">
            <p>{fileName}</p>
          </div>
          <div>
            <input
              disabled={loading ? true : false}
              id="file-input"
              type="file"
              accept=".jpg, .png, .jpeg, .gif,"
              onChange={saveFile}
            />
            <button
              disabled={loading ? true : false}
              className="file-btn"
              onClick={() => document.getElementById("file-input").click()}
            >
              Fotoğraf Seç
            </button>
          </div>
          <button
            disabled={loading ? true : false}
            className="file-btn"
            onClick={uploadFile}
          >
            Yükle
          </button>
          <Link className="link cancel" to={-1}>
            İptal
          </Link>
        </div>
        {success === true && <Navigate to={"/user/" + userId} replace={true} />}
      </div>
    </>
  );
}

export default UpdateUseAvatar;
