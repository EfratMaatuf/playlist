import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import SongTitle from "../SongTitle/SongTitle";

const SongsInPlaylist = ({ playlists }) => {
  const { idPlaylist } = useParams();

  if (!playlists) return <Loading />;

  const playlist = playlists.filter((playlist) => {
    return playlist.id === idPlaylist;
  });

  if (playlist.length === 0) return <div>No songs</div>;

  return (
    <div id="SongsInPlaylist">
      {playlist[0].songs.map((idSong) => (
        <SongTitle idPlaylist={idPlaylist} idSong={idSong} />
      ))}
    </div>
  );
};

export default SongsInPlaylist;
