import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchPage from "../SearchPage/SearchPage";
import Login from "../Login/Login";
import SongPage from "../SongPage/SongPage";
import PlaylistPage from "../PlaylistPage/PlaylistPage";
import UserContext from "../../context/UserContext";
import Home from "../../components/Home/Home";

const Layout = () => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
              <Route path="/" element={<Navigate to="/Home" />} />
              <Route path="/Login" element={<Navigate to="/" />} />
              <Route path="/Home" element={<Home />} />

              <Route
                path="/Playlist/:idPlaylist/:idSong"
                element={<PlaylistPage />}
              />

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
