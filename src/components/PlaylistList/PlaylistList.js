import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const PlaylistList = ({ playlists }) => {
  if (!playlists) {
    return <Loading />;
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
