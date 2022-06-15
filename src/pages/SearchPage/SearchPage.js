import "./SearchPage.css";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const SearchPage = () => {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
        "X-RapidAPI-Key": "c5e0560972msh97d0a44666bb963p14034bjsn3777706422e8",
      },
    };

    fetch(
      `https://simple-youtube-search.p.rapidapi.com/search?query=${search}&safesearch=false`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setSongs(response.results);
      })
      .catch((err) => console.error(err));
  }, [search]);

  if (!songs) return <div>Not found</div>;
  if (songs.length === 0) return <Loading />;
  return (
    <div>
      <div>
        <ul className="songList">
          {songs.map((song) => (
            <>
              <Link to={`/song/${song.id}`}>
                <li className="song">
                  <div className="des">
                    <h4>{song.title}</h4>
                    <p>{song.description}</p>
                    <p>
                      {(song.views / 1000).toFixed()}k views • {song.uploadedAt}
                    </p>
                    <p>{song.duration_formatted}</p>

                    <button className="btn btn-outline-dark">
                      add to playlist
                    </button>
                  </div>
                  <img
                    src={song.thumbnail.url}
                    width="500px"
                    height="300px"
                    alt={song.title}
                    className="img"
                  />
                </li>
              </Link>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
