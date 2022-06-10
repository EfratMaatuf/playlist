import React from "react";
import { Link } from "react-router-dom";

const PlaylistList = ({ playlists }) => {
  if (!playlists) {
    return <div>loading...</div>;
  }
  return (
    <div id="PlaylistList">
      {playlists.map((playlist) => (
        <Link to={`/Playlist/${playlist.id}/${playlist.songs[0]}`}>
          <div id={playlist.id}>{playlist.titlePlaylist}</div>
        </Link>
      ))}
    </div>
  );
};
export default PlaylistList;
