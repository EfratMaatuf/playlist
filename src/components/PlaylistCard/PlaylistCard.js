import React from "react";
import playImg from "../../images/play.png";
import deleteImg from "../../images/delete.png";
import "./PlaylistCard.css";
import PopupDel from "../PopupDel/Popup";
import { Link } from "react-router-dom";
const PlaylistCard = ({ name, img, playlist, firstSong, songsNumber }) => {
  return (
    <div className="playlistCard">
      <div className="playlistImg" style={{ backgroundImage: `url(${img})` }}>
        <div className="songsNumber">{songsNumber} songs</div>
      </div>
      <div className="containerCard">
        <h4 className="nameSongCard">
          <b>{name}</b>
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
