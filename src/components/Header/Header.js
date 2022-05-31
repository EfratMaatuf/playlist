import "./Header.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header>
      <h1>My Playlist 🎧</h1>
      <nav>
        <Link to="/Login">Login | </Link>
        {user && (
          <>
            <Link to="/SearchPage">SearchPage | </Link>
            <Link to="/SongPage">SongPage</Link>
          </>
        )}
      </nav>
    </header>
  );
}
