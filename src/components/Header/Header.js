import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import searchImg from "../../images/search.png";
import logoutImg from "../../images/logout.png";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const [search, setSearch] = useState("");
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/SearchPage/?search=${search}`);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/Home" className="link">
            🎧 My Playlists
          </Link>
        </Navbar.Brand>

        {/* <Navbar.Brand>
          <Link to="/" className="link" onClick={() => { setUser(""); localStorage.clear(); setIdPlaylist(""); setIdSong("") }}>
            logout
          </Link>
        </Navbar.Brand> */}

        <Navbar.Text className="_search"></Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {user && (
          <>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Form onSubmit={onSubmit} className="search d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search song..."
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                  />
                  <Link to={`/SearchPage/?search=${search}`}>
                    <Button variant="light">
                      <img
                        className="searchImg"
                        src={searchImg}
                        alt={searchImg}
                      />
                    </Button>
                  </Link>
                </Form>

              </Nav>


              <Navbar.Text> </Navbar.Text>
              {/* <Navbar.Brand> */}

            </Navbar.Collapse>
            <Link
              to="/"
              className="link"
              onClick={() => {
                setUser("");
                localStorage.clear();
              }}
            >
              <img src={logoutImg} alt={logoutImg} className="logoutImg" />
            </Link>
          </>
        )}

        {/* </Navbar.Brand> */}
      </Container>
    </Navbar >
  );
}
