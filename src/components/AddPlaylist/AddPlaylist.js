import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import addPlaylistImg from "../../images/addPlaylist.png";
import "./AddPlaylist.css";
const AddPlaylist = () => {
  const { user } = useContext(UserContext);

  const addPlaylist = async (e) => {
    e.preventDefault();
    console.dir("e.target[0].value:  ", e.target[0].value);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target[0].value,
        userId: user.id,
      }),
    };
    const res = await fetch(
      `http://localhost:3030/api/playlists/addPlaylist`,
      requestOptions
    );
    const data = await res.json();
    console.log(data);
    if (data.name) {
      console.log("v");
    }
  };
  return (
    <div className="playlistCard">
      <img src={addPlaylistImg} alt="playlist" className="imgAddPlaylist" />
      {/* <div className="containerCard"> */}

      <form onSubmit={addPlaylist} className="formAddPlaylist">
        <input placeholder="Enter new playlist" className="inputNewPlaylist" />

        <button type="submit" className="buttonNewPlaylist">
          Add Playlist
        </button>
      </form>

      {/* </div> */}
    </div>
  );
};

export default AddPlaylist;
