import "./PlaylistPage.css";
import React, { useContext, useEffect, useState } from "react";
import dataClient from "../../data/data";
import PlaylistList from "../../components/PlaylistList/PlaylistList";
import SongsInPlaylist from "../../components/SongsInPlaylist/SongsInPlaylist";
import { useNavigate, useParams } from "react-router-dom";
import SongWithDetails from "../../components/SongWithDetails/SongWithDetails";
import UserContext from "../../context/UserContext";

const PlaylistPage = () => {
  const { user } = useContext(UserContext);
  const [playlists, setPlaylists] = useState();
  const [change, setChange] = useState([]);
  const [song, setSong] = useState([]);

  const { idPlaylist, idSong } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
        },
      };
      const res = await fetch(
        `${process.env.REACT_APP_BASE_PATH}/api/users/${user.id}`,
        requestOptions
      );
      const data = await res.json();
      setPlaylists(data);
    };
    fetchData();
  }, [change]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ca14220a3cmsh07cc4af9be28ef9p1f0706jsn77a3f8201075",
        "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
      },
    };

    fetch(
      `https://simple-youtube-search.p.rapidapi.com/video?search=https://youtu.be/${idSong}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSong(response.result))
      .catch((err) => console.error(err));
  }, [idSong]);

  const nextSong = () => {
    const playlist = playlists.filter((playlist) => {
      return playlist._id === idPlaylist;
    });
    const songs = playlist[0].songs;
    let flag = false;
    let nextIdSong;
    for (let i of songs) {
      if (flag) {
        nextIdSong = i.songId;
      } else {
        if (i.songId === idSong) {
          flag = true;
        }
      }
    }

    if (nextIdSong) {
      navigate(`/Playlist/${idPlaylist}/${nextIdSong}`);
    }
  };

  return (
    <div id="playlistPage">
      <PlaylistList playlists={playlists} setChange={setChange} />
      <div id="playlistPageFlex">
        <SongWithDetails song={song} nextSong={nextSong} />
        <SongsInPlaylist playlists={playlists} idSong={idSong} />
      </div>
    </div>
  );
};

export default PlaylistPage;
