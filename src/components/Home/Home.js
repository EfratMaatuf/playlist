import React, { useContext, useState } from "react";
import { useEffect } from "react";
import UserContext from "../../context/UserContext";
import AddPlaylist from "../AddPlaylist/AddPlaylist";
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import Snackbar from "../Snackbar/Snackbar";
import "./Home.css";
const Home = () => {
  const { user } = useContext(UserContext);
  const [playlists, setPlaylists] = useState();
  const [change, setChange] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const res = await fetch(
        `http://localhost:3030/api/playlists/allPlaylists/${user.id}`,
        requestOptions
      );
      const data = await res.json();
      // console.log(data);
      if (!data.message) {
        setPlaylists(data);
      }
    };
    fetchData();
  }, [change]);
  return (
    <div>
      <div className="userName">Hi {user.name}! 🤍
        What you'd like to hear now?</div>
      <div className="PlaylistsCards">
        <AddPlaylist setChange={setChange} />
        {playlists?.map((playlist) => {
          return (
            <PlaylistCard
              name={playlist.name}
              img={playlist.songs[0]?.img}
              key={playlist._id}
              playlist={playlist._id}
              firstSong={playlist.songs[0]?.songId}
              songsNumber={playlist.songs.length}
              setChange={setChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
