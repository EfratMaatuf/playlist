import React, { useContext, useState } from "react";
import SnackbarContext from "../../context/SnackbarContext";
import UserContext from "../../context/UserContext";
import addPlaylistImg from "../../images/addPlaylist.png";
import Snackbar from "../Snackbar/Snackbar";
import "./AddPlaylist.css";
const AddPlaylist = ({ setChange }) => {
  const { user } = useContext(UserContext);
  const { snackbarFunc } = useContext(SnackbarContext);
  const addPlaylist = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target[0].value,
        userId: user.id,
      }),
    };
    const res = await fetch(
      `/api/playlists/addPlaylist`,
      // `http://localhost:3030/api/playlists/addPlaylist`,
      requestOptions
    );
    const data = await res.json();
    if (data.name) {
      setChange(data.name);
      snackbarFunc("Playlist added");
      e.target[0].value = "";
    }
  };
  return (
    <div className="playlistCard">
      <img src={addPlaylistImg} alt="playlist" className="imgAddPlaylist" />

      <form onSubmit={addPlaylist} className="formAddPlaylist">
        <input placeholder="Enter new playlist" className="inputNewPlaylist" />

        <button type="submit" className="buttonNewPlaylist">
          Add Playlist
        </button>
      </form>
    </div>
  );
};

export default AddPlaylist;
