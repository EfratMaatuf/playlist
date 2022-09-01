import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useParams, useNavigate } from "react-router-dom";

function DropList({ playlists }) {
    const { idPlaylist } = useParams();
    let navigate = useNavigate();


    return (
        <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic" className='toggle'>
                My Playlist
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {playlists.map((playlist) => (
                    <>
                        <div id={playlist.id}>
                            <Dropdown.Item
                                onClick={() => navigate(`/Playlist/${playlist._id}/${playlist.songs[0]?.songId}`)}

                                className={
                                    idPlaylist === playlist._id ? "thisPlaylist" : "playlistName"
                                }
                            >
                                {playlist.name}
                            </Dropdown.Item>
                        </div>
                    </>
                ))}

            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropList;