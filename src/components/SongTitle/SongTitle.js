import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./SongTitle.css";
const SongTitle = ({ idPlaylist, idSongInPlaylist }) => {
  const [songDetails, setSongDetails] = useState();

  const { idSong } = useParams();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ca14220a3cmsh07cc4af9be28ef9p1f0706jsn77a3f8201075",
        "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
      },
    };

    fetch(
      `https://simple-youtube-search.p.rapidapi.com/video?search=https://youtu.be/${idSongInPlaylist}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSongDetails(response.result))
      .catch((err) => console.error(err));
  }, [idSongInPlaylist]);

  if (!songDetails) return <Loading />;

  return (
    <Link to={`/Playlist/${idPlaylist}/${idSongInPlaylist}`}>
      <div className={idSongInPlaylist === idSong ? "thisSong" : null}>
        <img src={songDetails.thumbnail.url} alt="" id="imgSong" />
        <div>{songDetails.title}</div>
      </div>
    </Link>
  );
};

export default SongTitle;
