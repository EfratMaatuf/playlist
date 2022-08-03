import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchPage from "../SearchPage/SearchPage";
import Login from "../Login/Login";
import SongPage from "../SongPage/SongPage";
import PlaylistPage from "../PlaylistPage/PlaylistPage";
import UserContext from "../../context/UserContext";
import SnackbarContext from "../../context/SnackbarContext";
import Home from "../../components/Home/Home";
import Snackbar from "../../components/Snackbar/Snackbar";

const Layout = () => {
  const [user, setUser] = useState();
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState();
  const snackbarFunc = (message) => {
    setSnackbar(true);
    setSnackbarMessage(message);
    console.log(message);
    setTimeout(() => {
      setSnackbar(false);
    }, 3000);
  };
  return (
    <SnackbarContext.Provider value={{ snackbarFunc }}>
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
        {snackbar && <Snackbar message={snackbarMessage} />}
      </UserContext.Provider>
    </SnackbarContext.Provider>
  );
};
export default Layout;
