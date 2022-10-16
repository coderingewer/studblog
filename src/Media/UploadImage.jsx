import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadImageAsync } from "../Redux/Media/MediaSlice";
import "./Media.css";

function UploadImage() {
  const dispact = useDispatch();

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    await dispact(uploadImageAsync(formData));
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
        <div></div>
        <button className="file-btn" onClick={uploadFile}>
          Yükle
        </button>
      </div>
    </div>
  );
}

export default UploadImage;
