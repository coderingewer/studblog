import React from "react";
import "./ShareCard.css";
import icon from "../icons/Share.svg"
import { AiFillTwitterCircle, AiOutlineLink } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function ShareCard(props) {
  function CopyText() {
    var copyText = document.getElementById("shareUrl");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
  }
  const CloseShare = ()=>{
    document.getElementById("share-card-id"+props.postIs).style.display="none";
  }
  return (
    <div id={"share-card-id"+props.postIs} className="share-card">
        <div className="share-card-title" >
        <h4>Paylaş</h4>
        </div>
        <div className="share-icons">
      <a className="link"  target="_blank" href={"https://twitter.com/intent/tweet?url=" + props.url}><AiFillTwitterCircle className="icon"/></a>
      <a  className="link"  target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=" + props.url}>
       <BsFacebook className="icon"/>
      </a>
        </div>
      <div className="copy-text" >
      <textarea disabled onChange={()=>CopyText()} id="shareUrl" type="text" value={props.url} />
      <button onClick={() => CopyText()}><AiOutlineLink/></button>
      </div>
    </div>
  );
}

export default ShareCard;
