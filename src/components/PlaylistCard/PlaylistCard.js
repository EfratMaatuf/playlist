import React from "react";
import playImg from "../../images/play.png";
import deleteImg from "../../images/delete.png";
import "./PlaylistCard.css";
const PlaylistCard = () => {
  return (
    <div class="playlistCard">
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="playlist"
        className="imgCard"
      />
      <div className="containerCard">
        <h4>
          <b>John Doe</b>
        </h4>
        <div>
          <img src={playImg} alt="delete" />
          <img src={deleteImg} alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
