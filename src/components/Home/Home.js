import React, { useContext, useState } from "react";
import { useEffect } from "react";
import UserContext from "../../context/UserContext";
import AddPlaylist from "../AddPlaylist/AddPlaylist";
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import "./Home.css";
const Home = () => {
  const { user } = useContext(UserContext);
  console.log("🚀 ~ file: Home.js ~ line 8 ~ Home ~ user", user);
  const [playlists, setPlaylists] = useState();
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
      console.log(data);
      if (!data.message) {
        setPlaylists(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="PlaylistsCards">
      <AddPlaylist />

      {playlists?.map((playlist) => {
        return (
          <PlaylistCard
            name={playlist.name}
            img={playlist.img}
            key={playlist._id}
            playlist={playlist._id}
            firstSong={playlist.firstSong}
            songsNumber={playlist.songsNumber}
          />
        );
      })}
    </div>
  );
};

export default Home;
