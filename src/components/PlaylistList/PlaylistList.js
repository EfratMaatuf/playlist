import "./PlaylistList.css";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const PlaylistList = ({ playlists }) => {
  const { idPlaylist } = useParams();
  console.log(idPlaylist);
  if (!playlists) {
    return <Loading />;
  }

  return (
    <div id="PlaylistList">
      {playlists.map((playlist) => (
        <Link to={`/Playlist/${playlist.id}/${playlist.songs[0]}`}>
          <div
            id={playlist.id}
            className={
              idPlaylist === playlist.id
                ? "playlistName thisPlaylist"
                : "playlistName"
            }
          >
            {playlist.titlePlaylist}
          </div>
        </Link>
      ))}
    </div>
  );
};
export default PlaylistList;
