import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./Popup.css";
import SnackbarContext from "../../context/SnackbarContext";

export const Popup = ({ song }) => {
  const { user } = useContext(UserContext);
  const { snackbarFunc } = useContext(SnackbarContext);

  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [playlistsName, setPlaylistsName] = useState([]);
  const [choosePlaylistsName, setChoosePlaylistsName] = useState({
    name: "Choose playlist...",
  });
  const [newPlaylist, setNewPlaylist] = useState();
  const [viewMessage, setViewMessage] = useState(false);
  const [message, setMessage] = useState("");

  const [viewMessagePl, setViewMessagePl] = useState(false);
  const [messagePl, setMessagePl] = useState("");

  const addSongToPlaylist = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        playlistId: choosePlaylistsName.id,
        songId: id,
        songTitle: song?.title,
        img: song?.thumbnail.url,
      }),
    };
    const res = await fetch(
      `/api/playlists/addSong`,
      // `http://localhost:3030/api/playlists/addSong`,
      requestOptions
    );
    const data = await res.json();
    if (data.name) {
      handleClose();
      snackbarFunc("Song added");
      setChoosePlaylistsName({ name: "Choose playlist..." });
      setViewMessage(false);
      setViewMessagePl(false);
    } else {
      setMessage(data.message);
      setViewMessage(true);
    }
  };
  const addPlaylist = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newPlaylist,
        userId: user.id,
        songs: id,
        songTitle: song?.title,
        img: song?.thumbnail.url,
      }),
    };
    const res = await fetch(
      `/api/playlists/addPlaylist`,
      // `http://localhost:3030/api/playlists/addPlaylist`,
      requestOptions
    );
    const data = await res.json();
    console.log(data);
    if (data.name) {
      handleClose();
      snackbarFunc("Song added");
      setChoosePlaylistsName({ name: "Choose playlist..." });
      setViewMessagePl(false);
      setViewMessage(false);
    } else {
      setMessagePl(data.message);
      setViewMessagePl(true);
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const res = await fetch(
        `/api/users/${user.id}`,
        // `http://localhost:3030/api/users/${user.id}`,
        requestOptions
      );
      const data = await res.json();
      setPlaylistsName(
        data.map((e) => {
          return { id: e._id, name: e.name };
        })
      );
    };
    fetchData();
  }, []);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add to playlist
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to your playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              {choosePlaylistsName.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {playlistsName.map((e) => {
                return (
                  <Dropdown.Item
                    onClick={() =>
                      setChoosePlaylistsName({ name: e.name, id: e.id })
                    }
                  >
                    {e.name}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
            <Button
              className="button_add"
              variant="secondary"
              onClick={addSongToPlaylist}
            >
              add to playlist
            </Button>
          </Dropdown>
          <br />
          {viewMessage && <div className="text-info">{message}</div>}
          <br />
          or Create Playlist:
          <form onSubmit={addPlaylist}>
            <input
              className="button_add"
              placeholder="New Playlist..."
              value={newPlaylist}
              onChange={(e) => setNewPlaylist(e.target.value)}
            ></input>
            <Button
              className="button_add"
              variant="secondary"
              // onClick={addPlaylist}
              type="submit"
            >
              Create & Add
            </Button>
          </form>
          {viewMessagePl && (
            <>
              <br />
              <div className="text-info">{messagePl}</div>
            </>
          )}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
        {/* <Button variant="dark" onClick={addPlaylist}>
            Create playlist and add song
          </Button> */}
        {/* </Modal.Footer> */}
      </Modal>
    </>
  );
};
