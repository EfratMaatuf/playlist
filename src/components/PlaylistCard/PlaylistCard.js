import React, { useState } from "react";
import playImg from "../../images/play.png";
import edit from "../../images/edit.png";
import "./PlaylistCard.css";
import PopupDel from "../PopupDel/Popup";
import { Link } from "react-router-dom";
import defaultImg from "../../images/defaultImg.jpg";
const PlaylistCard = ({
  name,
  img,
  playlist,
  firstSong,
  songsNumber,
  setChange,
}) => {
  const [rename, setRename] = useState(false);
  const renameFunc = () => {
    console.log("rename");
    setRename(!rename);
  };
  const update = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };
  return (
    <div className="playlistCard">
      <Link to={`/Playlist/${playlist}/${firstSong}`}>
        <img className="playlistImg" src={img ? img : defaultImg} alt="img" />
      </Link>
      <div className="containerCard">
        <h4 className="nameSongCard">
          {rename ? (
            <form onSubmit={update} className="formRenamePlaylist">
              <input className="inputRename" placeholder="Playlist name" />
              <button type="submit" className="buttonRenamePlaylist">
                update
              </button>
            </form>
          ) : (
            <b className="playlistNameInCard">{name}</b>
          )}
          <span className="songsNumber">{songsNumber} songs</span>
        </h4>
        <div className="icons">
          <Link to={`/Playlist/${playlist}/${firstSong}`}>
            <img src={playImg} alt="play" className="iconPlay" />
          </Link>
          <div className="renameAndDelete">
            <img
              src={edit}
              alt=""
              className="renamePlaylist"
              onClick={renameFunc}
            />
            <PopupDel
              idPlaylist={playlist}
              playlistName={name}
              setChange={setChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
