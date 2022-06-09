import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchPage from "../SearchPage/SearchPage";
import Login from "../Login/Login";
import SongPage from "../SongPage/SongPage";
import PlaylistPage from "../PlaylistPage/PlaylistPage";
import UserContext from "../../context/UserContext";
import data from "../../data/data";

const Layout = () => {
  const [user, setUser] = useState();
  // const [playlists, setPlaylists] = useState();
  const [idPlaylist, setIdPlaylist] = useState();
  const [idSong, setIdSong] = useState();

  useEffect(() => {
    console.log(user);
    //fetch to DB
    // setPlaylists(data);
    setIdPlaylist(data[0].id);
    setIdSong(data[0].songs[0]);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Header />
        <Routes>
          {!user ? (
            <>
              <Route path="/Login" element={<Login />} />
              <Route path="*" element={<Navigate to="/Login" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="/Playlist" />} />
              <Route path="/Login" element={<Navigate to="/" />} />
              <Route path="/SongPage" element={<SongPage />} />
              <Route path="/SearchPage" element={<SearchPage />} />
              <Route
                path="/Playlist"
                element={<Navigate to={`/Playlist/${idPlaylist}/${idSong}`} />}
              />
              <Route
                path="/Playlist/:idPlaylist/:idSong"
                element={<PlaylistPage />}
              />
            </>
          )}
        </Routes>
      </div>
    </UserContext.Provider>
  );
};
export default Layout;
