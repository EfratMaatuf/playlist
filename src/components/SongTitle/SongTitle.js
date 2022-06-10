import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SongTitle.css";
const SongTitle = ({ idPlaylist, idSong }) => {
  const [songDetails, setSongDetails] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ca14220a3cmsh07cc4af9be28ef9p1f0706jsn77a3f8201075",
        "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
      },
    };

    fetch(
      `https://simple-youtube-search.p.rapidapi.com/video?search=https://youtu.be/${idSong}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSongDetails(response.result))
      .catch((err) => console.error(err));
  }, [idSong]);

  if (!songDetails) return null;

  return (
    <Link to={`/Playlist/${idPlaylist}/${idSong}`}>
      <img src={songDetails.thumbnail.url} alt="" id="imgSong" />
      <div>{songDetails.title}</div>
    </Link>
  );
};

export default SongTitle;
