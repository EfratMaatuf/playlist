import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import './Popup.css'


const PopupDel = ({ setChange }) => {
  const { user } = useContext(UserContext)

  const { idPlaylist } = useParams();
  const [show, setShow] = useState(false);
  const [playlist, setPlaylist] = useState();

  const [viewMessage, setViewMessage] = useState(false);
  const [message, setMessage] = useState("");

  const [viewMessagePl, setViewMessagePl] = useState(false);
  const [messagePl, setMessagePl] = useState("");


  const delPlaylist = async () => {
    const requestOptions = {
      method: "PUT"
    };
    const res = await fetch(
      `http://localhost:3030/api/playlists/deletePlaylist/${idPlaylist}`,
      requestOptions
    );
    const data = await res.json();
    console.log(data)
    setChange(idPlaylist)
      ;
    handleClose()
  };
  useEffect(() => {

    const playlistName = async () => {

      const res = await fetch(
        `http://localhost:3030/api/playlists/${idPlaylist}`,

      );
      const data = await res.json();
      setPlaylist(data)
      console.log(playlist);
    };
    playlistName()
  }, [idPlaylist])



  const handleClose = async () => {

    setShow(false);
  };
  const handleShow = () => setShow(true);


  return (
    <>
      <Button className="x" variant="dark" onClick={handleShow}>
        x      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>delete playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
          Do you want delete the playlist {playlist?.name} ?


        </Modal.Body>
        <Modal.Footer>
          <Button className="button_add" variant="secondary" onClick={delPlaylist}>
            yes            </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopupDel