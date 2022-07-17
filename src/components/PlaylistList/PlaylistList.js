import "./PlaylistList.css";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const PlaylistList = ({ playlists }) => {
  const { idPlaylist } = useParams();
  if (!playlists) {
    return <Loading />;
  }

  return (
    <div id="PlaylistList">
      {playlists.map((playlist) => (
        <Link to={`/Playlist/${playlist._id}/${playlist.songs[0]}`}>
          <div
            id={playlist.id}

          >
            <button className={
              idPlaylist === playlist._id
                ? "btn btn-outline-dark playlistName thisPlaylist"
                : "btn btn-outline-dark playlistName"
            } >
              {playlist.name}
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default PlaylistList;
