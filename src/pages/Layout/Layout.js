import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchPage from "../SearchPage/SearchPage";
import Login from "../Login/Login";
import SongPage from "../SongPage/SongPage";
import PlaylistPage from "../PlaylistPage/PlaylistPage";
import Song from "../../components/Song/Song";
import UserContext from "../../context/UserContext";
const Layout = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Header />
        <Routes>
          {!user ? (
            <>
              <Route path="/Login" element={<Login />} />
              <Route path="/" element={<Navigate to="/Login" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<PlaylistPage />} />
              <Route path="/Login" element={<Navigate to="/" />} />
              <Route path="/SongPage" element={<SongPage />} />
              <Route path="/SearchPage" element={<SearchPage />} />
            </>
          )}
        </Routes>
        <Song />
      </div>
    </UserContext.Provider>
  );
};
export default Layout;
