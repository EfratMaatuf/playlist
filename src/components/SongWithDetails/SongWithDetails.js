import React from "react";
import ReactPlayer from "react-player";

const SongWithDetails = ({ song, nextSong }) => {
  return (
    <div id="SongWithDetails">
      <div className="video">
        <ReactPlayer
          url={song.url}
          onEnded={nextSong}
          playing={true}
          controls={true}
        />
      </div>
      <h5>{song.title}</h5>
      <p>
        {(song.views / 1000).toFixed()}k views • {song.uploadedAt}
      </p>
      <p>{song.duration_formatted}</p>
    </div>
  );
};

export default SongWithDetails;
