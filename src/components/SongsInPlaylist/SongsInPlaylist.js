import "./SongsInPlaylist.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongTitle from "../SongTitle/SongTitle";
import PopupDelSong from "../PopupDelSong/PopupSong";
import headphones from "../../images/headphones.png";

const SongsInPlaylist = ({ idSong }) => {
  const { idPlaylist } = useParams();
  const [songs, setSongs] = useState([]);
  const [change, setChange] = useState();
  // if (!playlists) return <Loading />;

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
    };
    const fetchData = async () => {
      const res = await fetch(
        `/api/playlists/songsList/${idPlaylist}`,
        requestOptions
        // `http://localhost:3030/api/playlists/songsList/${idPlaylist}`
      );
      const data = await res.json();
      setSongs(data);
    };
    fetchData();
  }, [idPlaylist, change]);

  if (songs?.length === 0) {
    return (
      <div className="noSongs0">
        <img className="imgHeadphones" src={headphones} alt="img" />
        <div className="noSongs">
          Oh! You haven't added songs to this playlist
        </div>
        <div className="noSongs1">
          Search for songs you like and add them to a playlist
        </div>
      </div>
    );
  }

  return (
    <div id="SongsInPlaylist">
      {songs?.map((song) => (
        <div className={song.id === idSong ? "thisSong songs" : "songs"}>
          <SongTitle
            idPlaylist={idPlaylist}
            idSong={song.id}
            img={song.img}
            title={song.title}
          />
          <PopupDelSong
            idSong={song.id}
            title={song.title}
            setChange={setChange}
          />
        </div>
      ))}
    </div>
  );
};

export default SongsInPlaylist;
