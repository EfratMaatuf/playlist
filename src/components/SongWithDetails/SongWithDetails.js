import React from "react";
import ReactPlayer from "react-player";
import Loading from "../Loading/Loading";
import "./SongWithDetails.css";

const SongWithDetails = ({ song, nextSong }) => {
  if (song?.length === 0) return <Loading />;

  if (song) {
    return (
      <div id="SongWithDetails">
        <div className="video">
          <ReactPlayer
            url={song?.url}
            onEnded={nextSong}
            playing={true}
            controls={true}
            height={315}
            width={540}
          />
        </div>
        <h5>{song?.title}</h5>
        {song &&
          <p>
            {(song?.views / 1000).toFixed()}k views • {song?.uploadedAt}
          </p>}
        <p>{song?.duration_formatted}</p>
        {/* <p>{song?.description}</p> */}
      </div>
    );
  }
};

export default SongWithDetails;
