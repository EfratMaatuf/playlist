import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const Popup = () => {
  const [show, setShow] = useState(false);
  const { id } = useParams();

  const handleClose = async () => {
    // const requestOptions = {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     playlistId: choosPlaylistsName.id,
    //     songId: id
    //   })
    // };
    // const res = await fetch('http://localhost:3030/api/playlists/addSong', requestOptions)
    // const data = await res.json()
    // console.log(data);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newPlaylist,
        userId: "62ab833e45c0a2451b9ae716",
        songs: id
      })
    };
    const res = await fetch('http://localhost:3030/api/playlists/addPlaylist', requestOptions)
    const data = await res.json()
    console.log(data);

    setShow(false)
  }
  const handleShow = () => setShow(true);

  const [playlistsName, setPlaylistsName] = useState([])
  const [choosPlaylistsName, setchoosPlaylistsName] = useState({ name: "choose..." })
  const [newPlaylist, setNewPlaylist] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({ email: userEmailRegister, password: userPassRegister, name: userNameRegister })
      };
      const res = await fetch('http://localhost:3030/api/users/62ab833e45c0a2451b9ae716', requestOptions)
      const data = await res.json()
      console.log(data.map(e => {
        return (
          { id: e._id, name: e.name })
      }))
      setPlaylistsName(data.map(e => {
        return (
          { id: e._id, name: e.name })
      }))
    }
    fetchData()
  }, [])


  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        add to playlist
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to your playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              {choosPlaylistsName.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {playlistsName.map(e => {
                return (
                  <Dropdown.Item onClick={() => setchoosPlaylistsName({ name: e.name, id: e.id })}>{e.name}</Dropdown.Item>)
              })}

            </Dropdown.Menu>
          </Dropdown>
          <br></br>
          or Create Playlist: <input placeholder="New Playlist..." value={newPlaylist} onChange={(e) => setNewPlaylist(e.target.value)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
