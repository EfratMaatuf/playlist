import "./SongPage.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Spinner from 'react-bootstrap/Spinner';





const SongPage = () => {

  const { id } = useParams()

  const [song, setSong] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ca14220a3cmsh07cc4af9be28ef9p1f0706jsn77a3f8201075',
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
      }
    };

    fetch(`https://simple-youtube-search.p.rapidapi.com/video?search=https://youtu.be/${id}`, options)
      .then(response => response.json())
      .then(response => setSong(response.result))
      .catch(err => console.error(err));

  }, [])
  console.log(song);

  function Popup() {
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
                <Dropdown.Item >playlist 1</Dropdown.Item>
                <Dropdown.Item >playlist 2</Dropdown.Item>
                <Dropdown.Item >playlist 3</Dropdown.Item>
              </Dropdown.Menu>


            </Dropdown>
            <br></br>
            or  Create Playlist: <input placeholder="New Playlist..."></input>

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
  }


  if (song.length === 0) return (<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>);


  return (
    <>

      <div>SongPage</div>
      <div className="songPage">
        {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} /> */}
        <div className="video"> <ReactPlayer url={song.url} /></div>
        <h5>{song.title}</h5>
        <p>{((song.views) / 1000).toFixed()}k views • {song.uploadedAt}</p>
        <p>{song.duration_formatted}</p>

        {/* <button className='btn btn-outline-dark' >add to playlist</button> */}


        <Popup />






      </div>




    </>)
};

export default SongPage;
