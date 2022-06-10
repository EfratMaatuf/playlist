import "./PlaylistPage.css";
import React, { useEffect, useState } from "react";
import data from "../../data/data";
import ReactPlayer from "react-player";
import PlaylistList from "../../components/PlaylistList/PlaylistList";
import SongsInPlaylist from "../../components/SongsInPlaylist/SongsInPlaylist";
import { useParams } from "react-router-dom";

const PlaylistPage = () => {
  const [playlists, setPlaylists] = useState();
  const { idSong } = useParams();
  useEffect(() => {
    //fetch to DB
    setPlaylists(data);
  }, []);
  return (
    <div id="playlistPage">
      <PlaylistList playlists={playlists} />
      <ReactPlayer url={`https://www.youtube.com/watch?v=${idSong}`} />
      <SongsInPlaylist playlists={playlists} />
    </div>
  );
};

export default PlaylistPage;
