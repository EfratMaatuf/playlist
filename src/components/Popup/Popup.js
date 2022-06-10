import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";

export const Popup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              choose playlist...
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>playlist 1</Dropdown.Item>
              <Dropdown.Item>playlist 2</Dropdown.Item>
              <Dropdown.Item>playlist 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <br></br>
          or Create Playlist: <input placeholder="New Playlist..."></input>
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
