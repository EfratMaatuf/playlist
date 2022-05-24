import './Header.css';
import { Link } from 'react-router-dom';
import React from 'react';


export default function Header() {

    return (
        <header>

            <h1>My Playlist 🎧</h1>
            <nav>
                <Link to="/">Search | </Link>
                <Link to="/Login">Login | </Link>
                <Link to="/SongList">SongList</Link>
            </nav>


        </header>
    )

}