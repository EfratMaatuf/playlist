import React, { useContext, useEffect, useState } from "react";
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
  const [idPlaylist, setIdPlaylist] = useState("");
  const [idSong, setIdSong] = useState("");


  useEffect(() => {
    if (user) {
      console.log(user);
      const options = {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.token}`

        },
      };

      fetch(
        `http://localhost:3030/api/playlists/firstPlaylist/${user.id}`
        ,
        options
      )

        .then((response) => response.json())
        .then((response) => {
          setIdPlaylist(response.playlist);
          setIdSong(response.song);
          console.log(response);

        })

        .catch((err) => console.error(err));
    }


  }, [user]);
  useEffect(() => {
    console.log(idPlaylist)
    console.log(idSong);
  }, [idPlaylist, idSong])

  return (
    <UserContext.Provider value={{ user, setUser, setIdPlaylist, setIdSong }}>
      <div>
        <Header />
        <Routes>
          {!user ? (
            <>
              {console.log("no user")}
              <Route path="/Login" element={<Login />} />
              <Route path="*" element={<Navigate to="/Login" />} />
            </>
          ) : (
            <>
              <Route path="/Login" element={<Navigate to="/" />} />
              <Route path="/" element={<Navigate to="/Playlist" />} />
              {idPlaylist ? (
                <>
                  <Route
                    path="/Playlist"
                    element={<Navigate to={`/Playlist/${idPlaylist}/${idSong}`} />}
                  />
                  <Route
                    path="/Playlist/:idPlaylist/:idSong"
                    element={<PlaylistPage />}
                  />
                </>
              ) : null}

              <Route path="/Song/:id" element={<SongPage />} />
              <Route path="/SearchPage" element={<SearchPage />} />
            </>
          )}
        </Routes>
      </div>
    </UserContext.Provider>
  );
};
export default Layout;
