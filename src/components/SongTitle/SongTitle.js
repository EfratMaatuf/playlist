import React from "react";
import { Link, useParams } from "react-router-dom";
import "./SongTitle.css";
const SongTitle = ({ idPlaylist, idSong, img, title }) => {
  const { idSongUrl } = useParams();

  return (
    <Link to={`/Playlist/${idPlaylist}/${idSong}`}>
      <div className={idSongUrl === idSong ? "thisSong song" : "song"}>
        <img src={img} alt="" id="imgSong" />
        <div className="title">{title}</div>
      </div>
    </Link>
  );
};

export default SongTitle;
