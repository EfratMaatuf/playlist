import "./SongPage.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Spinner from "react-bootstrap/Spinner";
import SongWithDetails from "../../components/SongWithDetails/SongWithDetails";
import { Popup } from "../../components/Popup/Popup";
import Loading from "../../components/Loading/Loading";

const SongPage = () => {
  const { id } = useParams();
  const [song, setSong] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ca14220a3cmsh07cc4af9be28ef9p1f0706jsn77a3f8201075",
        "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
      },
    };

    fetch(
      `https://simple-youtube-search.p.rapidapi.com/video?search=https://youtu.be/${id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSong(response.result))
      .catch((err) => console.error(err));
  }, []);
  console.log(song);

  if (song?.length === 0) return <Loading />;

  return (
    <>
      <div className="songPage0">
        <div className="songPage">
          <SongWithDetails song={song} />
          <Popup song={song} />
        </div>
      </div>
    </>
  );
};

export default SongPage;
