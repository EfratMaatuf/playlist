import "./PlaylistList.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import PopupDel from "../PopupDel/Popup";

const PlaylistList = ({ playlists, setChange }) => {
  const { idPlaylist } = useParams();
  if (!playlists) {
    return <Loading />;
  }

  return (
    <div id="PlaylistList">
      <div className="title_">My playlists :</div>
      {playlists.map((playlist) => (
        <>
          <Link to={`/Playlist/${playlist._id}/${playlist.songs[0]?.songId}`}>
            <div id={playlist.id}>
              {/* <button className={
              idPlaylist === playlist._id
                ? "btn btn-outline-dark playlistName thisPlaylist"
                : "btn btn-outline-dark playlistName"
            } >
              {playlist.name}
            </button> */}
              <button
                className={
                  idPlaylist === playlist._id ? "thisPlaylist" : "playlistName"
                }
              >
                {playlist.name}
              </button>
            </div>
          </Link>
          {/* <div>
          {idPlaylist === playlist._id
            ? <PopupDel setChange={setChange} />
            : null
          }</div> */}
        </>
      ))}
    </div>
  );
};
export default PlaylistList;
