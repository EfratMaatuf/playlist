import React from "react";
import ReactPlayer from "react-player";
import Loading from "../Loading/Loading";
import "./SongWithDetails.css";

const SongWithDetails = ({ song, nextSong }) => {
  if (song?.length === 0) return <Loading />;
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
      <p>
        {(song?.views / 1000).toFixed()}k views • {song?.uploadedAt}
      </p>
      <p>{song?.duration_formatted}</p>
    </div>
  );
};

export default SongWithDetails;
