import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./SongTitle.css";
const SongTitle = ({ idPlaylist, idSong, img, title }) => {
  // const [songDetails, setSongDetails] = useState();

  const { idSongUrl } = useParams();
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "ca14220a3cmsh07cc4af9be28ef9p1f0706jsn77a3f8201075",
  //       "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
  //     },
  //   };

  //   fetch(
  //     `https://simple-youtube-search.p.rapidapi.com/video?search=https://youtu.be/${idSong}`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setSongDetails(response.result))
  //     .catch((err) => console.error(err));
  // }, [idSong]);

  // if (!songDetails) return <Loading />;

  return (
    <Link to={`/Playlist/${idPlaylist}/${idSong}`}>
      <div className={idSongUrl === idSong ? "thisSong" : null}>
        <img src={img} alt="" id="imgSong" />
        <div>{title}</div>
      </div>
    </Link>
  );
};

export default SongTitle;
