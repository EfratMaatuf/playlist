import React from "react";
import { Link, useParams } from "react-router-dom";

const SongsInPlaylist = ({ playlists }) => {
  const { idPlaylist } = useParams();

  if (!playlists) return <div>loading...</div>;

  const playlist = playlists.filter((playlist) => {
    return playlist.id === idPlaylist;
  });

  if (playlist.length === 0) return <div>No songs</div>;

  return (
    <div id="SongsInPlaylist">
      SongsInPlaylist
      {playlist[0].songs.map((song) => (
        <Link to={`/Playlist/${idPlaylist}/${song}`}>
          <div>{song}</div>
        </Link>
      ))}
    </div>
  );
};

export default SongsInPlaylist;
