import "./SongsInPlaylist.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import SongTitle from "../SongTitle/SongTitle";
import PopupDelSong from "../PopupDelSong/PopupSong"


const SongsInPlaylist = ({ idSong }) => {
  const { idPlaylist } = useParams();
  const [songs, setSongs] = useState()
  const [change, setChange] = useState()

  // if (!playlists) return <Loading />;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3030/api/playlists/songsList/${idPlaylist}`,
      );
      const data = await res.json();
      console.log(data);
      setSongs(data)
    }
    fetchData()

  }, [idPlaylist, change])


  if (songs?.length === 0) return <div className="songs">No songs</div>;

  return (
    <div id="SongsInPlaylist">

      {songs?.map((song) => (<div className={song.id === idSong ? "thisSong songs" : "songs"}>
        <SongTitle idPlaylist={idPlaylist} idSong={song.id} img={song.img} title={song.title} />
        <PopupDelSong idSong={song.id} title={song.title} setChange={setChange} />
      </div>
      ))}
    </div>
  );
};

export default SongsInPlaylist;
