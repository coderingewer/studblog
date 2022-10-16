import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { updateImageAsync } from "../Redux/Media/MediaSlice";
import { editUserAvatarAsync } from "../Redux/Users/UserSlice";
import "./Media.css";

function UpdateUseAvatar() {
  const dispact = useDispatch();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const success= useSelector(state=>state.medias.success)
  const loading = useSelector(state => state.medias.loading)


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
    <div className="media-form">
      <div className="media-form-card" >
        <div className="file-name">
          <p>{fileName}</p>
        </div>
        <div>
          <input
            id="file-input"
            type="file"
            accept=".jpg, .png, .jpeg, .gif,"
            onChange={saveFile}
          />
          <button
            className="file-btn"
            onClick={() => document.getElementById("file-input").click()}
          >
            Fotoğraf Seç
          </button>
        </div>
        <button
        
          className="file-btn" onClick={uploadFile}>
          Yükle
        </button>
        <Link
          className="link cancel"
          to={-1}>İptal</Link>
      </div>
    </div>
  );
}

export default UpdateUseAvatar;
