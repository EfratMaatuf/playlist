import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
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
  const { user } = useContext(UserContext);
  console.log(user);

  const [search, setSearch] = useState("");
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/SearchPage/?search=${search}`)

  }



  return (
    <Navbar bg="light" expand="lg"  >
      <Container>
        <Navbar.Brand >
          <Link to="/" className="link">🎧 My Playlist</Link>
        </Navbar.Brand>
        <Navbar.Text className="_search"></Navbar.Text>
        {user && (
          <Navbar.Text >
            <Link to="/Login" className="link">
              <img
                src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                alt=""
                width="30"
                height="30"
              />{" "}
              {user.email}</Link>
          </Navbar.Text>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          {user && (
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
                <Button variant="outline-dark">Search</Button>
              </Link>
            </Form>
          )}
          <Navbar.Text>  </Navbar.Text>
        </Navbar.Collapse>

      </Container>
    </Navbar>


  );
}
