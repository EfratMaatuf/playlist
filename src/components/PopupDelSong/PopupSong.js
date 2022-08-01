import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
// import './Popup.css'


const PopupDelSong = ({ idSong, title, setChange }) => {
  const { user } = useContext(UserContext)

  const { idPlaylist } = useParams();



  const [show, setShow] = useState(false);

  const [viewMessage, setViewMessage] = useState(false);
  const [message, setMessage] = useState("");

  const [viewMessagePl, setViewMessagePl] = useState(false);
  const [messagePl, setMessagePl] = useState("");


  const delSong = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idPlaylist,
        idSong
      }),
    };
    const res = await fetch(
      `http://localhost:3030/api/playlists/delSong`,
      requestOptions
    );
    const data = await res.json();
    console.log(data);
    setChange(idSong)
    handleClose()
  };




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
          <Modal.Title>delete song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
          Do you want delete the playlist {title} ?


        </Modal.Body>
        <Modal.Footer>
          <Button className="button_add" variant="secondary" onClick={delSong}>
            yes            </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopupDelSong