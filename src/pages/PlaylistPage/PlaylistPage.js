import "./PlaylistPage.css";
import React, { useEffect, useState } from "react";
import data from "../../data/data";
import PlaylistList from "../../components/PlaylistList/PlaylistList";
import SongsInPlaylist from "../../components/SongsInPlaylist/SongsInPlaylist";
import { useNavigate, useParams } from "react-router-dom";
import SongWithDetails from "../../components/SongWithDetails/SongWithDetails";

const PlaylistPage = () => {
  const [playlists, setPlaylists] = useState();
  const [song, setSong] = useState([]);
  const { idPlaylist, idSong } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    //fetch to DB
    setPlaylists(data);
  }, []);
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
      return playlist.id === idPlaylist;
    });
    const songs = playlist[0].songs;
    let index = songs.indexOf(idSong);
    index++;
    if (songs.length !== index) {
      navigate(`/Playlist/${idPlaylist}/${songs[index]}`);
    }
  };
  return (
    <div id="playlistPage">
      <PlaylistList playlists={playlists} />
      <SongWithDetails song={song} nextSong={nextSong} />
      <SongsInPlaylist playlists={playlists} />
    </div>
  );
};

export default PlaylistPage;