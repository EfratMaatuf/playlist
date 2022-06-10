import "./Header.css";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const { user } = useContext(UserContext);
  console.log(user);

  const [search, setSearch] = useState("");

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            🎧
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  Home
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link to="/Login" class="nav-link active">Login</Link>

              </li> */}

              {user && (
                <>
                  {/* <li class="nav-item">
                    <Link to="/SearchPage" class="nav-link active">SearchPage</Link>

                  </li>
                  <li class="nav-item">
                    <Link to="/SongPage" class="nav-link active">SongPage</Link>


                  </li> */}
                  <li class="nav-item">
                    <Link to="/PlaylistPage" class="nav-link active">
                      PlaylistPage
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {user && (
              <>
                <form class="d-flex" role="search">
                  <input
                    class="search me-2 "
                    type="search"
                    placeholder=" Search song..."
                    aria-label="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                  />
                  <Link to={`/SearchPage/?search=${search}`}>
                    {" "}
                    <button class="btn btn-outline-dark" type="submit">
                      Search
                    </button>
                  </Link>
                </form>
                <div className="_search"></div>
                <div class="nav-item">
                  <a class="nav-link active me-2" href="#">
                    <img
                      src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                      alt=""
                      width="30"
                      height="30"
                      class="d-inline-block align-text-top"
                    />
                    {user.email}
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
