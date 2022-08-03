import React from "react";
import playImg from "../../images/play.png";
import deleteImg from "../../images/delete.png";
import "./PlaylistCard.css";
import PopupDel from "../PopupDel/Popup";
import { Link } from "react-router-dom";
import defaultImg from "../../images/defaultImg.jpg"
const PlaylistCard = ({ name, img, playlist, firstSong, songsNumber }) => {
  return (
    <div className="playlistCard">
      <img className="playlistImg" src={img ? img : defaultImg} alt="img" />
      <div className="containerCard">
        <h4 className="nameSongCard">
          <b>{name}</b>
          <span className="songsNumber">{songsNumber} songs</span>
        </h4>
        <div className="icons">
          <Link to={`/Playlist/${playlist}/${firstSong}`}>
            <img src={playImg} alt="play" className="iconPlay" />
          </Link>
          <PopupDel idPlaylist={playlist} playlistName={name} />
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
