import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { updateImageAsync } from "../Redux/Media/MediaSlice";
import "./Media.css";

function UpdateImage() {
  const dispact = useDispatch();
  const {imageId} = useParams()
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
    await dispact(updateImageAsync({data:formData, id:imageId}));
    console.log(formData);
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
        <a className="link cancel" href="/">İptal</a>
      </div>
    </div>
  );
}

export default UpdateImage;
