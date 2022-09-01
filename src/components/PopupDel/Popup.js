import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import deleteImg from "../../images/delete.png";
import "./Popup.css";
import SnackbarContext from "../../context/SnackbarContext";

const PopupDel = ({ playlistName, idPlaylist, setChange }) => {
  const { user } = useContext(UserContext);
  const { snackbarFunc } = useContext(SnackbarContext);
  const [show, setShow] = useState(false);

  const delPlaylist = async () => {
    const requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(
      `${process.env.REACT_APP_BASE_PATH}/api/playlists/deletePlaylist/${idPlaylist}`,
      // `http://localhost:3030/api/playlists/deletePlaylist/${idPlaylist}`,
      requestOptions
    );
    const data = await res.json();
    if (data._id) {
      setChange(data._id);
      snackbarFunc("Playlist deleted");
    }
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="del" onClick={handleShow}>
        <img src={deleteImg} alt={deleteImg} className="deleteImg" />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want delete the playlist {playlistName} ?
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="button_add"
            variant="secondary"
            onClick={delPlaylist}
          >
            yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopupDel;
